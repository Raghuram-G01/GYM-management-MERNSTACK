import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer' },
  workoutPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPlan' },
  date: { type: Date, default: Date.now },
  weight: { type: Number },
  bodyFat: { type: Number },
  muscle: { type: Number },
  notes: { type: String },
  measurements: {
    chest: { type: Number },
    waist: { type: Number },
    hips: { type: Number },
    arms: { type: Number },
    thighs: { type: Number }
  },
  workoutCompleted: { type: Boolean, default: false },
  exercisesCompleted: [{
    exerciseName: String,
    setsCompleted: Number,
    repsCompleted: String,
    weightUsed: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Progress', progressSchema);