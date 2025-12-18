import WorkoutPlan from '../models/WorkoutPlan.js';
import Progress from '../models/Progress.js';
import User from '../models/User.js';

// @desc    Get member dashboard stats
// @route   GET /api/member/dashboard/stats
// @access  Private/Member
export const getMemberDashboardStats = async (req, res) => {
  try {
    const memberId = req.user.id;
    
    const activeWorkoutPlans = await WorkoutPlan.countDocuments({
      memberId,
      status: 'active'
    });
    
    const completedWorkouts = await Progress.countDocuments({
      memberId,
      workoutCompleted: true
    });
    
    const recentProgress = await Progress.find({ memberId })
      .populate('workoutPlanId', 'title')
      .sort({ date: -1 })
      .limit(5);
    
    const memberInfo = await User.findById(memberId)
      .populate('assignedTrainer', 'name specialization')
      .select('-password');
    
    res.status(200).json({
      success: true,
      data: {
        activeWorkoutPlans,
        completedWorkouts,
        recentProgress,
        memberInfo
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching member dashboard stats',
      error: error.message
    });
  }
};