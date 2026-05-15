export interface UserProfile {
  id: string
  email: string
  firstName: string
  lastName: string
  login_method: string
  status: string
  is_hintro_admin: boolean
  createdAt: string
  updatedAt: string
}

export interface DashboardData {
  user: UserProfile
  subscription: {
    plan: string
    billing_cycle: string
    status: string
  } | null
  usage: {
    kb_files: { used: number; limit: number; percentage: number }
    vocab_terms: number
    notes: number
  }
}

export interface CallStats {
  totalSessions: number
  averageDuration: number
  totalAIInteractions: number
  lastSession: string[]
}

export interface Participant {
  name: string
  isUser: boolean
}

export interface CallSession {
  _id: string
  user_id: string
  status: string
  client: string
  description: string
  started_at: string
  ended_at: string
  total_duration_seconds: number
  language: string[]
  ai_interactions: number
  participants: Participant[]
  createdAt: string
  updatedAt: string
}

export interface CallHistoryResponse {
  callSessions: CallSession[]
  pagination: {
    page: number
    limit: number
    totalCount: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}

export interface FeedbackEntry {
  id: string
  rating: number
  title: string
  comment: string
  submittedAt: string
}