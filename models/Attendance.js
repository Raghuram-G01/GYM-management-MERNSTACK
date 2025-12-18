import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  checkIn: {
    type: Date,
    default: Date.now
  },
  checkOut: {
    type: Date
  },
  status: {
    type: String,
    enum: ['present', 'absent'],
    default: 'present'
  }
}, {
  timestamps: true
});

attendanceSchema.index({ user: 1, date: 1 }, { unique: true });

export default mongoose.model('Attendance', attendanceSchema);
