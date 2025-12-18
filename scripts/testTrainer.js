import mongoose from 'mongoose';
import Trainer from '../models/Trainer.js';
import dotenv from 'dotenv';

dotenv.config();

const testTrainerCreation = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/gym-app');
    console.log('Connected to MongoDB');

    // Test trainer data
    const testTrainer = {
      name: 'Test Trainer',
      email: 'test@trainer.com',
      password: 'password123',
      phone: '+91 9876543210',
      specialization: 'Strength Training',
      experience: 5,
      certification: 'ACSM Certified Personal Trainer',
      salary: 50000
    };

    // Create trainer
    const trainer = await Trainer.create(testTrainer);
    console.log('✅ Test trainer created successfully!');
    console.log('Trainer ID:', trainer._id);
    console.log('Name:', trainer.name);
    console.log('Email:', trainer.email);

    // Clean up - delete the test trainer
    await Trainer.findByIdAndDelete(trainer._id);
    console.log('🧹 Test trainer cleaned up');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error testing trainer creation:', error.message);
    process.exit(1);
  }
};

testTrainerCreation();