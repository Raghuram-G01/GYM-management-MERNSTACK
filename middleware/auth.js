import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Membership from '../models/Membership.js';

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }
    const token = authHeader.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'devsecret';
    const decoded = jwt.verify(token, secret);
    req.user = { id: decoded.id, role: decoded.role };
    next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Not authorized' });
  }
};

export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }
    next();
  };
};

export const adminOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Admin access required' });
  }
  next();
};

export const trainerOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'trainer') {
    return res.status(403).json({ success: false, message: 'Trainer access required' });
  }
  next();
};

export const memberOnly = (req, res, next) => {
  if (!req.user || req.user.role !== 'member') {
    return res.status(403).json({ success: false, message: 'Member access required' });
  }
  next();
};

// Check if member has active membership
export const activeMemberOnly = async (req, res, next) => {
  try {
    if (req.user.role !== 'member') {
      return next();
    }

    const user = await User.findById(req.user.id);
    if (user.membershipStatus !== 'active') {
      return res.status(403).json({
        success: false,
        message: 'Access denied. Active membership required.',
        membershipStatus: user.membershipStatus
      });
    }

    // Check if membership is expired
    const membership = await Membership.findById(user.currentMembership);
    if (membership && membership.endDate < new Date()) {
      await User.findByIdAndUpdate(req.user.id, { membershipStatus: 'expired' });
      await Membership.findByIdAndUpdate(membership._id, { status: 'expired' });
      
      return res.status(403).json({
        success: false,
        message: 'Membership expired. Please renew.',
        membershipStatus: 'expired'
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


