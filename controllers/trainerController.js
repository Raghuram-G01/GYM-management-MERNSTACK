import jwt from 'jsonwebtoken';
import Trainer from '../models/Trainer.js';

const signToken = (trainer) => {
  const payload = { id: trainer._id, role: 'trainer' };
  const secret = process.env.JWT_SECRET || 'devsecret';
  const expiresIn = '7d';
  return jwt.sign(payload, secret, { expiresIn });
};

// @desc    Create a new trainer (Admin only)
// @route   POST /api/trainers
// @access  Private/Admin
export const createTrainer = async (req, res) => {
  try {
    const { name, email, password, phone, specialization, experience, certification, salary } = req.body;

    // Check if trainer already exists
    const trainerExists = await Trainer.findOne({ email });
    if (trainerExists) {
      return res.status(400).json({
        success: false,
        message: 'Trainer already exists with this email'
      });
    }

    // Create trainer
    const trainer = await Trainer.create({
      name,
      email,
      password,
      phone,
      specialization,
      experience,
      certification,
      salary
    });

    res.status(201).json({
      success: true,
      message: 'Trainer created successfully',
      data: {
        id: trainer._id,
        name: trainer.name,
        email: trainer.email,
        phone: trainer.phone,
        specialization: trainer.specialization,
        experience: trainer.experience,
        certification: trainer.certification,
        salary: trainer.salary,
        status: trainer.status,
        joinDate: trainer.joinDate
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating trainer',
      error: error.message
    });
  }
};

// @desc    Get all trainers
// @route   GET /api/trainers
// @access  Private/Admin
export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find().select('-password');
    
    res.status(200).json({
      success: true,
      count: trainers.length,
      data: trainers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching trainers',
      error: error.message
    });
  }
};

// @desc    Get single trainer
// @route   GET /api/trainers/:id
// @access  Private
export const getTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id).select('-password');
    
    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: 'Trainer not found'
      });
    }

    res.status(200).json({
      success: true,
      data: trainer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching trainer',
      error: error.message
    });
  }
};

// @desc    Update trainer
// @route   PUT /api/trainers/:id
// @access  Private/Admin
export const updateTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: 'Trainer not found'
      });
    }

    const updatedTrainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({
      success: true,
      message: 'Trainer updated successfully',
      data: updatedTrainer
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating trainer',
      error: error.message
    });
  }
};

// @desc    Delete trainer
// @route   DELETE /api/trainers/:id
// @access  Private/Admin
export const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (!trainer) {
      return res.status(404).json({
        success: false,
        message: 'Trainer not found'
      });
    }

    await Trainer.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Trainer deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting trainer',
      error: error.message
    });
  }
};

// @desc    Login trainer
// @route   POST /api/trainers/login
// @access  Public
export const loginTrainer = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    const trainer = await Trainer.findOne({ email });
    if (!trainer) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const isMatch = await trainer.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password'
      });
    }

    const token = signToken(trainer);

    res.status(200).json({
      success: true,
      message: 'Login successful',
      data: {
        id: trainer._id,
        name: trainer.name,
        email: trainer.email,
        role: 'trainer',
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error logging in',
      error: error.message
    });
  }
};