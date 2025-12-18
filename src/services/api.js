import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const stored = localStorage.getItem('user');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.token) {
        config.headers.Authorization = `Bearer ${parsed.token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// API methods
export const registerUser = async (userData) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

// Trainer API methods
export const loginTrainer = async (trainerData) => {
  const response = await api.post('/trainers/login', trainerData);
  return response.data;
};

// Admin API methods
export const assignTrainerToMember = async (assignmentData) => {
  const response = await api.put('/admin/assign-trainer', assignmentData);
  return response.data;
};

export const getAllUsers = async () => {
  const response = await api.get('/admin/users');
  return response.data;
};

export const updateUser = async (userId, userData) => {
  const response = await api.put(`/admin/users/${userId}`, userData);
  return response.data;
};

export const deleteUser = async (userId) => {
  const response = await api.delete(`/admin/users/${userId}`);
  return response.data;
};

export const getAllPayments = async () => {
  const response = await api.get('/admin/payments');
  return response.data;
};

export const createPayment = async (paymentData) => {
  const response = await api.post('/admin/payments', paymentData);
  return response.data;
};

// Attendance API methods
export const markAttendance = async () => {
  const response = await api.post('/attendance');
  return response.data;
};

export const getUserAttendance = async (userId) => {
  const response = await api.get(`/attendance/user/${userId}`);
  return response.data;
};

export const getMemberAttendance = async (memberId) => {
  const response = await api.get(`/attendance/member/${memberId}`);
  return response.data;
};

export const getTrainerMembers = async () => {
  const response = await api.get('/attendance/trainer/members');
  return response.data;
};

export const markMemberAttendance = async (memberId, date, status) => {
  const response = await api.post('/attendance/mark-member', { memberId, date, status });
  return response.data;
};

export const getTrainerAttendanceOverview = async () => {
  const response = await api.get('/attendance/trainer/overview');
  return response.data;
};

// Membership API methods
export const getPlans = async () => {
  const response = await api.get('/membership/plans');
  return response.data;
};

export const purchasePlan = async (planData) => {
  const response = await api.post('/membership/purchase', planData);
  return response.data;
};

export const getCurrentMembership = async () => {
  const response = await api.get('/membership/current');
  return response.data;
};

export const getPendingApprovals = async () => {
  const response = await api.get('/membership/pending');
  return response.data;
};

export const approveMembership = async (membershipId) => {
  const response = await api.put(`/membership/approve/${membershipId}`);
  return response.data;
};

export const rejectMembership = async (membershipId, reason) => {
  const response = await api.put(`/membership/reject/${membershipId}`, { reason });
  return response.data;
};

export default api;

