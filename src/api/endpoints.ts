import axiosInstance from './axiosInstance'
import type { UserProfile, DashboardData, CallStats, CallHistoryResponse } from '../types'

export const fetchProfile = async (): Promise<UserProfile> => {
  const { data } = await axiosInstance.get('/api/auth/profile')
  return data
}

export const fetchDashboard = async (): Promise<DashboardData> => {
  const { data } = await axiosInstance.get('/api/auth/dashboard')
  return data
}

export const fetchCallStats = async (): Promise<CallStats> => {
  const { data } = await axiosInstance.get('/api/call-sessions/stats')
  return data
}

export const fetchCallHistory = async (limit = 10): Promise<CallHistoryResponse> => {
  const { data } = await axiosInstance.get(`/api/call-sessions?limit=${limit}`)
  return data
}