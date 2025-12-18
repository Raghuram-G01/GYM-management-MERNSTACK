import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import Trainer from '../models/Trainer.js';
import Plan from '../models/Plan.js';
import Membership from '../models/Membership.js';
import dotenv from 'dotenv';

dotenv.config();

const createDemoMember = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gym';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    // Create demo trainer first
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('demo123', salt);

    let trainer = await Trainer.findOne({ email: 'trainer@demo.com' });
    if (!trainer) {
      trainer = await Trainer.create({
        name: 'Alex Johnson',
        email: 'trainer@demo.com',
        password: hashedPassword,
        phone: '+91 98765 43210',
        specialization: 'Strength Training',
        experience: 5,
        certification: 'Certified Personal Trainer',
        salary: 50000
      });
    }

    // Delete existing demo member and create fresh
    await User.deleteOne({ email: 'kumar@demo.com' });
    await Membership.deleteMany({ user: { $exists: true } });
    
    const member = await User.create({
      name: 'Kumar Singh',
      email: 'kumar@demo.com',
      password: 'demo123', // Let the model hash it
      role: 'member',
      membershipStatus: 'active',
      assignedTrainer: trainer._id
    });

    // Get Pro plan
    let proPlan = await Plan.findOne({ name: 'Pro' });
    if (!proPlan) {
      proPlan = await Plan.create({
        name: 'Pro',
        price: 1999,
        duration: 3,
        features: ['Everything in Basic', 'All classes included', 'Sauna & spa access'],
        isActive: true
      });
    }

    // Create active membership
    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 3);

    const membership = await Membership.create({
      user: member._id,
      plan: proPlan._id,
      status: 'active',
      paymentAmount: 1999,
      paymentDate: new Date(),
      approvedBy: member._id, // Self-approved for demo
      approvedAt: new Date(),
      startDate: startDate,
      endDate: endDate,
      paymentMethod: 'cash',
      transactionId: 'DEMO_001'
    });

    // Update member with current membership
    await User.findByIdAndUpdate(member._id, {
      currentMembership: membership._id
    });

    console.log('Demo member created successfully!');
    console.log('Member ID:', member._id);
    console.log('Member email:', member.email);
    console.log('Member role:', member.role);
    console.log('Login credentials:');
    console.log('Email: kumar@demo.com');
    console.log('Password: demo123');
    console.log('Role: member');
    console.log('');
    console.log('Trainer login:');
    console.log('Email: trainer@demo.com');
    console.log('Password: demo123');
    console.log('Role: trainer');
    
    // Test password hash
    const testMatch = await member.matchPassword('demo123');
    console.log('Password test:', testMatch);

    process.exit(0);
  } catch (error) {
    console.error('Error creating demo member:', error);
    process.exit(1);
  }
};

createDemoMember();