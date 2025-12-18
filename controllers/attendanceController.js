import Attendance from '../models/Attendance.js';
import User from '../models/User.js';

// @desc    Mark attendance
// @route   POST /api/attendance
// @access  Private
export const markAttendance = async (req, res) => {
  try {
    const userId = req.user.id;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingAttendance = await Attendance.findOne({
      user: userId,
      date: { $gte: today }
    });

    if (existingAttendance) {
      return res.status(400).json({ success: false, message: 'Attendance already marked for today' });
    }

    const attendance = await Attendance.create({
      user: userId,
      date: today,
      status: 'present'
    });

    res.status(201).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Mark attendance for member (by trainer)
// @route   POST /api/attendance/mark-member
// @access  Private/Trainer
export const markMemberAttendance = async (req, res) => {
  try {
    const { memberId, date, status } = req.body;
    const attendanceDate = date ? new Date(date) : new Date();
    attendanceDate.setHours(0, 0, 0, 0);

    const member = await User.findById(memberId);
    if (!member || member.role !== 'member') {
      return res.status(404).json({ success: false, message: 'Member not found' });
    }

    if (req.user.role === 'trainer' && member.assignedTrainer?.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized to mark attendance for this member' });
    }

    const existingAttendance = await Attendance.findOne({
      user: memberId,
      date: attendanceDate
    });

    if (existingAttendance) {
      existingAttendance.status = status || 'present';
      await existingAttendance.save();
      return res.status(200).json({ success: true, data: existingAttendance });
    }

    const attendance = await Attendance.create({
      user: memberId,
      date: attendanceDate,
      status: status || 'present'
    });

    res.status(201).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get user attendance
// @route   GET /api/attendance/user/:userId
// @access  Private
export const getUserAttendance = async (req, res) => {
  try {
    const userId = req.params.userId || req.user.id;
    const attendance = await Attendance.find({ user: userId }).sort({ date: -1 });
    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get member attendance (for trainers)
// @route   GET /api/attendance/member/:memberId
// @access  Private/Trainer
export const getMemberAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find({ user: req.params.memberId })
      .populate('user', 'name email')
      .sort({ date: -1 });
    res.status(200).json({ success: true, data: attendance });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all members with progress (for trainers)
// @route   GET /api/attendance/trainer/members
// @access  Private/Trainer
export const getTrainerMembers = async (req, res) => {
  try {
    const trainerId = req.user.id;
    const members = await User.find({ assignedTrainer: trainerId, role: 'member' })
      .select('-password');

    const membersWithProgress = await Promise.all(
      members.map(async (member) => {
        const attendanceRecords = await Attendance.find({ user: member._id }).sort({ date: -1 });
        const attendanceCount = await Attendance.countDocuments({
          user: member._id,
          status: 'present'
        });
        
        const totalDays = attendanceRecords.length;
        const attendanceRate = totalDays > 0 ? Math.round((attendanceCount / totalDays) * 100) : 0;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const markedToday = await Attendance.findOne({
          user: member._id,
          date: { $gte: today }
        });

        return {
          ...member.toObject(),
          attendanceRate,
          totalAttendance: attendanceCount,
          markedToday: !!markedToday
        };
      })
    );

    res.status(200).json({ success: true, data: membersWithProgress });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get trainer's members attendance overview
// @route   GET /api/attendance/trainer/overview
// @access  Private/Trainer
export const getTrainerAttendanceOverview = async (req, res) => {
  try {
    const trainerId = req.user.id;
    const members = await User.find({ assignedTrainer: trainerId, role: 'member' })
      .select('name email');

    const attendanceOverview = await Promise.all(
      members.map(async (member) => {
        const attendanceRecords = await Attendance.find({ user: member._id })
          .sort({ date: -1 })
          .limit(30);
        
        return {
          memberId: member._id,
          memberName: member.name,
          memberEmail: member.email,
          recentAttendance: attendanceRecords
        };
      })
    );

    res.status(200).json({ success: true, data: attendanceOverview });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
