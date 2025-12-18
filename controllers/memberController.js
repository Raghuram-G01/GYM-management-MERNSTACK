import WorkoutPlan from '../models/WorkoutPlan.js';
import Progress from '../models/Progress.js';

// @desc    Get member's assigned workout plans
// @route   GET /api/member/workout-plans
// @access  Private/Member
export const getMyWorkoutPlans = async (req, res) => {
  try {
    const workoutPlans = await WorkoutPlan.find({
      memberId: req.user.id
    }).populate('trainerId', 'name specialization');
    
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

// @desc    Log workout completion
// @route   POST /api/member/log-workout
// @access  Private/Member
export const logWorkout = async (req, res) => {
  try {
    const { workoutPlanId, exercisesCompleted, notes } = req.body;
    
    const progress = await Progress.create({
      memberId: req.user.id,
      workoutPlanId,
      workoutCompleted: true,
      exercisesCompleted,
      notes
    });

    await progress.populate('workoutPlanId', 'title');
    
    res.status(201).json({
      success: true,
      message: 'Workout logged successfully',
      data: progress
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging workout',
      error: error.message
    });
  }
};

// @desc    Get member's progress history
// @route   GET /api/member/progress
// @access  Private/Member
export const getMyProgress = async (req, res) => {
  try {
    const progress = await Progress.find({
      memberId: req.user.id
    }).populate('workoutPlanId', 'title').sort({ date: -1 });
    
    res.status(200).json({
      success: true,
      count: progress.length,
      data: progress
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching progress',
      error: error.message
    });
  }
};