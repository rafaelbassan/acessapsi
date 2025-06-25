// User roles
export type UserRole = 'admin' | 'professional' | 'patient';

// User base type
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

// Clinic types
export interface Clinic {
  id: string;
  name: string;
  description?: string;
  address: string;
  phone: string;
  email: string;
  logo?: string;
  businessHours: BusinessHours;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface BusinessHours {
  monday: DayHours;
  tuesday: DayHours;
  wednesday: DayHours;
  thursday: DayHours;
  friday: DayHours;
  saturday: DayHours;
  sunday: DayHours;
}

export interface DayHours {
  isOpen: boolean;
  openTime?: string; // Format: "HH:mm"
  closeTime?: string; // Format: "HH:mm"
}

// Professional types
export interface Professional {
  id: string;
  userId: string;
  clinicId: string;
  crp: string; // CRP number
  specialties: string[];
  bio?: string;
  profileImage?: string;
  isActive: boolean;
  user: User;
  clinic: Clinic;
  availability: ProfessionalAvailability[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface ProfessionalAvailability {
  id: string;
  professionalId: string;
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  startTime: string; // Format: "HH:mm"
  endTime: string; // Format: "HH:mm"
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Patient types
export interface Patient {
  id: string;
  userId: string;
  clinicId: string;
  phone?: string;
  dateOfBirth?: Date;
  emergencyContact?: EmergencyContact;
  user: User;
  clinic: Clinic;
  appointments: Appointment[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface EmergencyContact {
  name: string;
  phone: string;
  relationship: string;
}

// Appointment types
export type AppointmentStatus = 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';

export interface Appointment {
  id: string;
  patientId: string;
  professionalId: string;
  clinicId: string;
  scheduledAt: Date;
  duration: number; // Duration in minutes
  status: AppointmentStatus;
  notes?: string;
  patient: Patient;
  professional: Professional;
  clinic: Clinic;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Authentication types
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
}

// Notification types
export type NotificationType = 'appointment_reminder' | 'appointment_confirmation' | 'appointment_cancellation' | 'general';

export interface NotificationPayload {
  type: NotificationType;
  title: string;
  body: string;
  data?: Record<string, any>;
} 