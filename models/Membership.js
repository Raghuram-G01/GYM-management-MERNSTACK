import mongoose from 'mongoose';

const membershipSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan',
    required: true
  },
  status: {
    type: String,
    enum: ['pending_payment', 'payment_completed', 'approved', 'active', 'expired', 'cancelled'],
    default: 'pending_payment'
  },
  paymentAmount: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date
  },
  approvedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  approvedAt: {
    type: Date
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'upi', 'bank_transfer']
  },
  transactionId: {
    type: String
  }
}, {
  timestamps: true
});

export default mongoose.model('Membership', membershipSchema);