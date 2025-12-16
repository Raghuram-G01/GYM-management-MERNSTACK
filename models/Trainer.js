import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide trainer name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide trainer email'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number']
  },
  specialization: {
    type: String,
    required: [true, 'Please provide specialization'],
    enum: ['Strength Training', 'Cardio', 'Yoga', 'HIIT', 'CrossFit', 'Pilates', 'Boxing', 'General Fitness']
  },
  experience: {
    type: Number,
    required: [true, 'Please provide years of experience'],
    min: [0, 'Experience cannot be negative']
  },
  certification: {
    type: String,
    required: [true, 'Please provide certification details']
  },
  salary: {
    type: Number,
    required: [true, 'Please provide salary'],
    min: [0, 'Salary cannot be negative']
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  },
  joinDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Hash password before saving
trainerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare password
trainerSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Trainer = mongoose.model('Trainer', trainerSchema);

export default Trainer;