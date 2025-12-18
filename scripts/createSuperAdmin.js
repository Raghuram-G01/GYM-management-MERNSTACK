import mongoose from 'mongoose';
import User from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const createSuperAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-app');
    console.log('Connected to MongoDB');

    const existingAdmin = await User.findOne({ email: 'admin@gym.com' });
    if (existingAdmin) {
      console.log('Super admin already exists!');
      console.log('Email: admin@gym.com');
      console.log('Password: admin123');
      process.exit(0);
    }

    const superAdmin = await User.create({
      name: 'Super Admin',
      email: 'admin@gym.com',
      password: 'admin123',
      role: 'admin'
    });

    console.log('✅ Super Admin created successfully!');
    console.log('📧 Email: admin@gym.com');
    console.log('🔑 Password: admin123');
    console.log('👤 Role: admin');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating super admin:', error.message);
    process.exit(1);
  }
};

createSuperAdmin();