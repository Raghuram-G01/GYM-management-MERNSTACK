import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  paymentDate: {
    type: Date,
    default: Date.now
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'upi', 'bank_transfer'],
    default: 'cash'
  },
  status: {
    type: String,
    enum: ['paid', 'pending', 'failed'],
    default: 'paid'
  },
  membershipPeriod: {
    type: String,
    enum: ['monthly', 'quarterly', 'yearly'],
    required: true
  }
}, {
  timestamps: true
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
