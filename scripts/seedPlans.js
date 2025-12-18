import mongoose from 'mongoose';
import Plan from '../models/Plan.js';
import dotenv from 'dotenv';

dotenv.config();

const plans = [
  {
    name: 'Basic',
    price: 999,
    duration: 1,
    features: ['Gym floor access', 'Locker room', 'Free Wi-Fi'],
    isActive: true
  },
  {
    name: 'Pro',
    price: 1999,
    duration: 3,
    features: ['Everything in Basic', 'All classes included', 'Sauna & spa access', 'Nutrition consultation'],
    isActive: true
  },
  {
    name: 'Elite',
    price: 3999,
    duration: 6,
    features: ['Everything in Pro', 'Personal trainer 2x/week', 'Priority support', 'Advanced analytics', 'Diet planning'],
    isActive: true
  }
];

const seedPlans = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gym';
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');

    await Plan.deleteMany({});
    await Plan.insertMany(plans);
    
    console.log('Plans seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding plans:', error);
    process.exit(1);
  }
};

seedPlans();