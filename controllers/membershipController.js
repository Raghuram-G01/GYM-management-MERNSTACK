import Membership from '../models/Membership.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';

// @desc    Get all available plans
// @route   GET /api/membership/plans
// @access  Private
export const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find({ isActive: true });
    res.status(200).json({ success: true, data: plans });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Purchase a plan (member)
// @route   POST /api/membership/purchase
// @access  Private/Member
export const purchasePlan = async (req, res) => {
  try {
    const { planId, paymentMethod, transactionId } = req.body;
    const userId = req.user.id;

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({ success: false, message: 'Plan not found' });
    }

    // Check if user has pending membership
    const existingMembership = await Membership.findOne({
      user: userId,
      status: { $in: ['pending_payment', 'payment_completed'] }
    });

    if (existingMembership) {
      return res.status(400).json({ success: false, message: 'You already have a pending membership request' });
    }

    const membership = await Membership.create({
      user: userId,
      plan: planId,
      status: 'payment_completed',
      paymentAmount: plan.price,
      paymentDate: new Date(),
      paymentMethod,
      transactionId
    });

    // Update user status
    await User.findByIdAndUpdate(userId, {
      membershipStatus: 'payment_completed',
      currentMembership: membership._id
    });

    const populatedMembership = await Membership.findById(membership._id)
      .populate('plan', 'name price duration')
      .populate('user', 'name email');

    res.status(201).json({ success: true, data: populatedMembership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get pending approvals (admin)
// @route   GET /api/membership/pending
// @access  Private/Admin
export const getPendingApprovals = async (req, res) => {
  try {
    const pendingMemberships = await Membership.find({ status: 'payment_completed' })
      .populate('user', 'name email')
      .populate('plan', 'name price duration')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, data: pendingMemberships });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Approve membership (admin)
// @route   PUT /api/membership/approve/:id
// @access  Private/Admin
export const approveMembership = async (req, res) => {
  try {
    const membershipId = req.params.id;
    const adminId = req.user.id;

    const membership = await Membership.findById(membershipId).populate('plan');
    if (!membership) {
      return res.status(404).json({ success: false, message: 'Membership not found' });
    }

    if (membership.status !== 'payment_completed') {
      return res.status(400).json({ success: false, message: 'Membership is not pending approval' });
    }

    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + membership.plan.duration);

    // Update membership
    membership.status = 'active';
    membership.approvedBy = adminId;
    membership.approvedAt = new Date();
    membership.startDate = startDate;
    membership.endDate = endDate;
    await membership.save();

    // Update user status
    await User.findByIdAndUpdate(membership.user, {
      membershipStatus: 'active'
    });

    const updatedMembership = await Membership.findById(membershipId)
      .populate('user', 'name email')
      .populate('plan', 'name price duration')
      .populate('approvedBy', 'name');

    res.status(200).json({ success: true, data: updatedMembership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Reject membership (admin)
// @route   PUT /api/membership/reject/:id
// @access  Private/Admin
export const rejectMembership = async (req, res) => {
  try {
    const membershipId = req.params.id;
    const { reason } = req.body;

    const membership = await Membership.findById(membershipId);
    if (!membership) {
      return res.status(404).json({ success: false, message: 'Membership not found' });
    }

    membership.status = 'cancelled';
    await membership.save();

    // Update user status
    await User.findByIdAndUpdate(membership.user, {
      membershipStatus: 'pending_payment',
      currentMembership: null
    });

    res.status(200).json({ success: true, message: 'Membership rejected', reason });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get user's current membership
// @route   GET /api/membership/current
// @access  Private
export const getCurrentMembership = async (req, res) => {
  try {
    const userId = req.user.id;
    const membership = await Membership.findOne({
      user: userId,
      status: { $in: ['payment_completed', 'active'] }
    }).populate('plan', 'name price duration features');

    res.status(200).json({ success: true, data: membership });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};