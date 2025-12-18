import User from '../models/User.js';
import Trainer from '../models/Trainer.js';
import Payment from '../models/Payment.js';

// @desc    Assign trainer to member
// @route   PUT /api/admin/assign-trainer
// @access  Private/Admin
export const assignTrainerToMember = async (req, res) => {
  try {
    const { memberId, trainerId } = req.body;

    // Verify member exists
    const member = await User.findById(memberId);
    if (!member || member.role !== 'member') {
      return res.status(404).json({
        success: false,
        message: 'Member not found'
      });
    }

    // Verify trainer exists
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: 'Trainer not found'
      });
    }

    // Assign trainer to member
    member.assignedTrainer = trainerId;
    await member.save();

    await member.populate('assignedTrainer', 'name specialization');

    res.status(200).json({
      success: true,
      message: 'Trainer assigned successfully',
      data: member
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error assigning trainer',
      error: error.message
    });
  }
};

// @desc    Get all members with their assigned trainers
// @route   GET /api/admin/members-trainers
// @access  Private/Admin
export const getMembersWithTrainers = async (req, res) => {
  try {
    const members = await User.find({ role: 'member' })
      .populate('assignedTrainer', 'name specialization')
      .select('-password');

    res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching members',
      error: error.message
    });
  }
};

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password').populate('assignedTrainer', 'name');
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update user
// @route   PUT /api/admin/users/:id
// @access  Private/Admin
export const updateUser = async (req, res) => {
  try {
    const { name, email, role, membershipStatus } = req.body;
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    user.membershipStatus = membershipStatus || user.membershipStatus;

    const updatedUser = await user.save();
    res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all payments
// @route   GET /api/admin/payments
// @access  Private/Admin
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find()
      .populate('user', 'name email')
      .sort({ paymentDate: -1 });
    res.status(200).json({ success: true, data: payments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create payment
// @route   POST /api/admin/payments
// @access  Private/Admin
export const createPayment = async (req, res) => {
  try {
    const payment = await Payment.create(req.body);
    const populatedPayment = await Payment.findById(payment._id).populate('user', 'name email');
    res.status(201).json({ success: true, data: populatedPayment });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};