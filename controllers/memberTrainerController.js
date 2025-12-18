import User from '../models/User.js';
import WorkoutPlan from '../models/WorkoutPlan.js';
import Progress from '../models/Progress.js';

// @desc    Get trainer's assigned members
// @route   GET /api/trainer/members
// @access  Private/Trainer
export const getAssignedMembers = async (req, res) => {
  try {
    const members = await User.find({ 
      assignedTrainer: req.user.id,
      role: 'member' 
    }).select('-password');
    
    res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching assigned members',
      error: error.message
    });
  }
};

// @desc    Get all registered members
// @route   GET /api/trainer/all-members
// @access  Private/Trainer
export const getAllMembers = async (req, res) => {
  try {
    const members = await User.find({ 
      role: 'member' 
    }).select('-password').populate('assignedTrainer', 'name');
    
    res.status(200).json({
      success: true,
      count: members.length,
      data: members
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching all members',
      error: error.message
    });
  }
};

// @desc    Assign workout plan to member
// @route   POST /api/trainer/workout-plan
// @access  Private/Trainer
export const assignWorkoutPlan = async (req, res) => {
  try {
    const { memberId, title, description, exercises, difficulty, duration } = req.body;
    
    // Verify member is assigned to this trainer
    const member = await User.findOne({ 
      _id: memberId, 
      assignedTrainer: req.user.id 
    });
    
    if (!member) {
      return res.status(403).json({
        success: false,
        message: 'Member not assigned to you'
      });
    }

    const workoutPlan = await WorkoutPlan.create({
      title,
      description,
      trainerId: req.user.id,
      memberId,
      exercises,
      difficulty,
      duration,
      endDate: new Date(Date.now() + duration * 7 * 24 * 60 * 60 * 1000)
    });

    await workoutPlan.populate('memberId', 'name email');
    
    res.status(201).json({
      success: true,
      message: 'Workout plan assigned successfully',
      data: workoutPlan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error assigning workout plan',
      error: error.message
    });
  }
};

// @desc    Get member's workout plans
// @route   GET /api/trainer/workout-plans/:memberId
// @access  Private/Trainer
export const getMemberWorkoutPlans = async (req, res) => {
  try {
    const { memberId } = req.params;
    
    const workoutPlans = await WorkoutPlan.find({
      memberId,
      trainerId: req.user.id
    }).populate('memberId', 'name email');
    
    res.status(200).json({
      success: true,
      count: workoutPlans.length,
      data: workoutPlans
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching workout plans',
      error: error.message
    });
  }
};

// @desc    View member progress
// @route   GET /api/trainer/progress/:memberId
// @access  Private/Trainer
export const getMemberProgress = async (req, res) => {
  try {
    const { memberId } = req.params;
    
    const progress = await Progress.find({
      memberId,
      trainerId: req.user.id
    }).populate('workoutPlanId', 'title').sort({ date: -1 });
    
    res.status(200).json({
      success: true,
      count: progress.length,
      data: progress
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching member progress',
      error: error.message
    });
  }
};

// @desc    Add progress entry for member
// @route   POST /api/trainer/progress
// @access  Private/Trainer
export const addProgressEntry = async (req, res) => {
  try {
    const { memberId, weight, bodyFat, muscle, notes, measurements } = req.body;
    
    const progress = await Progress.create({
      memberId,
      trainerId: req.user.id,
      weight,
      bodyFat,
      muscle,
      notes,
      measurements
    });

    await progress.populate('memberId', 'name email');
    
    res.status(201).json({
      success: true,
      message: 'Progress entry added successfully',
      data: progress
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding progress entry',
      error: error.message
    });
  }
};

// @desc    Update workout plan
// @route   PUT /api/trainer/workout-plan/:id
// @access  Private/Trainer
export const updateWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findOne({
      _id: req.params.id,
      trainerId: req.user.id
    });

    if (!workoutPlan) {
      return res.status(404).json({
        success: false,
        message: 'Workout plan not found'
      });
    }

    const updatedPlan = await WorkoutPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate('memberId', 'name email');

    res.status(200).json({
      success: true,
      message: 'Workout plan updated successfully',
      data: updatedPlan
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating workout plan',
      error: error.message
    });
  }
};

// @desc    Delete workout plan
// @route   DELETE /api/trainer/workout-plan/:id
// @access  Private/Trainer
export const deleteWorkoutPlan = async (req, res) => {
  try {
    const workoutPlan = await WorkoutPlan.findOne({
      _id: req.params.id,
      trainerId: req.user.id
    });

    if (!workoutPlan) {
      return res.status(404).json({
        success: false,
        message: 'Workout plan not found'
      });
    }

    await WorkoutPlan.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Workout plan deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting workout plan',
      error: error.message
    });
  }
};