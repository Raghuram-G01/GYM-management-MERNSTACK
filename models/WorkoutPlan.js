import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sets: { type: Number, required: true },
  reps: { type: String, required: true },
  weight: { type: String },
  duration: { type: String },
  restTime: { type: String }
});

const workoutPlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  exercises: [exerciseSchema],
  difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], default: 'Beginner' },
  duration: { type: Number, required: true }, // in weeks
  status: { type: String, enum: ['active', 'completed', 'paused'], default: 'active' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date }
}, {
  timestamps: true
});

export default mongoose.model('WorkoutPlan', workoutPlanSchema);