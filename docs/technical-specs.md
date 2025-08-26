# AcessaPsi - Especificações Técnicas

## 1. Estrutura do Monorepo

### 1.1 Configuração Inicial
```bash
# Estrutura de diretórios
PsiClin/
├── .github/workflows/           # CI/CD pipelines
├── apps/
│   ├── mobile/                  # React Native app
│   │   ├── src/
│   │   │   ├── components/      # Componentes específicos
│   │   │   ├── screens/         # Telas principais
│   │   │   ├── navigation/      # Configuração de navegação
│   │   │   ├── services/        # API calls e integações
│   │   │   ├── hooks/           # Custom hooks
│   │   │   ├── utils/           # Utilitários específicos
│   │   │   └── assets/          # Imagens, fontes, etc
│   │   ├── app.json
│   │   ├── package.json
│   │   └── expo-env.d.ts
│   ├── patient-web/             # Next.js patient portal (PWA)
│   │   ├── src/
│   │   │   ├── app/             # App Router (Next.js 13+)
│   │   │   ├── components/      # React components (shared with mobile)
│   │   │   ├── lib/             # Firebase config e utilitários
│   │   │   ├── hooks/           # Custom hooks
│   │   │   └── types/           # TypeScript types
│   │   ├── public/
│   │   ├── tailwind.config.js
│   │   ├── next.config.js
│   │   └── manifest.json        # PWA manifest
│   ├── admin-web/               # Next.js admin panel
│   │   ├── src/
│   │   │   ├── app/             # App Router (Next.js 13+)
│   │   │   ├── components/      # React components
│   │   │   ├── lib/             # Configurações e utilitários
│   │   │   ├── hooks/           # Custom hooks
│   │   │   └── types/           # TypeScript types
│   │   ├── public/
│   │   ├── tailwind.config.js
│   │   └── next.config.js
│   └── backend/                 # Node.js API
│       ├── src/
│       │   ├── controllers/     # Route handlers
│       │   ├── services/        # Business logic
│       │   ├── repositories/    # Data access layer
│       │   ├── models/          # Prisma models
│       │   ├── middleware/      # Express middleware
│       │   ├── routes/          # API routes
│       │   ├── jobs/            # Background jobs
│       │   ├── utils/           # Helper functions
│       │   └── types/           # TypeScript definitions
│       ├── prisma/
│       │   ├── schema.prisma
│       │   ├── migrations/
│       │   └── seeds/
│       ├── tests/
│       └── Dockerfile
├── packages/
│   ├── shared-types/            # Types compartilhados
│   │   ├── src/
│   │   │   ├── api/             # API response types
│   │   │   ├── entities/        # Domain entities
│   │   │   └── index.ts
│   │   └── package.json
│   ├── ui-components/           # Componentes reutilizáveis
│   │   ├── src/
│   │   │   ├── Button/
│   │   │   ├── Input/
│   │   │   ├── Modal/
│   │   │   └── index.ts
│   │   └── package.json
│   └── utils/                   # Utilitários compartilhados
│       ├── src/
│       │   ├── dates/
│       │   ├── validation/
│       │   ├── formatting/
│       │   └── constants/
│       └── package.json
├── docs/                        # Documentação
├── scripts/                     # Scripts de automação
│   ├── build.sh
│   ├── deploy.sh
│   └── setup.sh
├── docker-compose.yml           # Desenvolvimento local
├── package.json                 # Root package.json
├── turbo.json                   # Turborepo config
└── .env.example
```

### 1.2 Configuração do Workspace
```json
// package.json (root)
{
  "name": "psiclin-monorepo",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "type-check": "turbo run type-check"
  },
  "devDependencies": {
    "turbo": "^1.10.0",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "eslint": "^8.45.0",
    "prettier": "^3.0.0",
    "typescript": "^5.1.0"
  }
}
```

## 2. Backend - API Specification

### 2.1 Tecnologias e Dependências
```json
// apps/backend/package.json
{
  "name": "@psiclin/backend",
  "dependencies": {
    "express": "^4.18.2",
    "prisma": "^5.2.0",
    "@prisma/client": "^5.2.0",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "joi": "^17.9.2",
    "cors": "^2.8.5",
    "helmet": "^7.0.0",
    "express-rate-limit": "^6.8.1",
    "multer": "^1.4.5-lts.1",
    "nodemailer": "^6.9.4",
    "bull": "^4.11.3",
    "redis": "^4.6.7",
    "axios": "^1.4.0",
    "date-fns": "^2.30.0",
    "winston": "^3.10.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.17",
    "@types/jsonwebtoken": "^9.0.2",
    "@types/bcryptjs": "^2.4.2",
    "@types/joi": "^17.2.3",
    "@types/cors": "^2.8.13",
    "@types/multer": "^1.4.7",
    "@types/nodemailer": "^6.4.8",
    "jest": "^29.6.2",
    "supertest": "^6.3.3",
    "ts-node": "^10.9.1",
    "nodemon": "^3.0.1"
  }
}
```

### 2.2 Prisma Schema
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Clinic {
  id                String   @id @default(cuid())
  name              String
  cnpj              String   @unique
  email             String
  phone             String
  address           Json
  businessHours     Json
  settings          Json?
  professionals     Professional[]
  specialties       Specialty[]
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  @@map("clinics")
}

model User {
  id          String   @id @default(cuid())
  email       String   @unique
  password    String
  role        Role     @default(PATIENT)
  active      Boolean  @default(true)
  patient     Patient?
  professional Professional?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@map("users")
}

model Professional {
  id                String   @id @default(cuid())
  userId            String   @unique
  user              User     @relation(fields: [userId], references: [id])
  clinicId          String
  clinic            Clinic   @relation(fields: [clinicId], references: [id])
  name              String
  cpf               String   @unique
  crp               String   @unique
  phone             String
  photo             String?
  biography         String?
  consultationValue Decimal
  commissionRate    Decimal  @default(0)
  availability      Json     // Horários disponíveis
  active            Boolean  @default(true)
  averageRating     Decimal  @default(0)
  totalRatings      Int      @default(0)
  
  specialties       ProfessionalSpecialty[]
  appointments      Appointment[]
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt

  @@map("professionals")
}

model Patient {
  id              String   @id @default(cuid())
  userId          String   @unique
  user            User     @relation(fields: [userId], references: [id])
  name            String
  cpf             String   @unique
  phone           String
  birthDate       DateTime
  address         Json?
  healthInsurance String?
  emergencyContact Json?
  medicalHistory  String?
  notes           String?
  termsAccepted   Boolean  @default(false)
  termsAcceptedAt DateTime?
  
  appointments    Appointment[]
  documents       Document[]
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@map("patients")
}

model Specialty {
  id          String   @id @default(cuid())
  clinicId    String
  clinic      Clinic   @relation(fields: [clinicId], references: [id])
  name        String
  description String?
  active      Boolean  @default(true)
  color       String   @default("#3B82F6")
  
  professionals ProfessionalSpecialty[]
  appointments  Appointment[]
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@map("specialties")
}

model ProfessionalSpecialty {
  professionalId String
  professional   Professional @relation(fields: [professionalId], references: [id])
  specialtyId    String
  specialty      Specialty    @relation(fields: [specialtyId], references: [id])
  
  @@id([professionalId, specialtyId])
  @@map("professional_specialties")
}

model Appointment {
  id             String   @id @default(cuid())
  professionalId String
  professional   Professional @relation(fields: [professionalId], references: [id])
  patientId      String
  patient        Patient  @relation(fields: [patientId], references: [id])
  specialtyId    String?
  specialty      Specialty? @relation(fields: [specialtyId], references: [id])
  
  dateTime       DateTime
  duration       Int      @default(50) // minutos
  status         AppointmentStatus @default(PENDING)
  value          Decimal
  notes          String?
  cancelReason   String?
  
  documents      Document[]
  notifications  Notification[]
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt

  @@map("appointments")
}

model Document {
  id            String   @id @default(cuid())
  appointmentId String?
  appointment   Appointment? @relation(fields: [appointmentId], references: [id])
  patientId     String
  patient       Patient  @relation(fields: [patientId], references: [id])
  
  name          String
  type          DocumentType
  fileUrl       String
  mimeType      String
  size          Int
  uploadedBy    String   // userId
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@map("documents")
}

model Notification {
  id            String   @id @default(cuid())
  appointmentId String?
  appointment   Appointment? @relation(fields: [appointmentId], references: [id])
  
  type          NotificationType
  title         String
  message       String
  recipient     String   // email or phone
  status        NotificationStatus @default(PENDING)
  scheduledFor  DateTime?
  sentAt        DateTime?
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt

  @@map("notifications")
}

enum Role {
  ADMIN
  PROFESSIONAL
  PATIENT
}

enum AppointmentStatus {
  PENDING
  CONFIRMED
  IN_PROGRESS
  COMPLETED
  CANCELLED
  NO_SHOW
}

enum DocumentType {
  PRESCRIPTION
  REPORT
  INVOICE
  OTHER
}

enum NotificationType {
  APPOINTMENT_REMINDER
  APPOINTMENT_CONFIRMATION
  APPOINTMENT_CANCELLATION
  GENERAL
}

enum NotificationStatus {
  PENDING
  SENT
  DELIVERED
  FAILED
}
```

### 2.3 API Routes Structure
```typescript
// src/routes/index.ts
import express from 'express';
import authRoutes from './auth';
import professionalRoutes from './professionals';
import patientRoutes from './patients';
import appointmentRoutes from './appointments';
import clinicRoutes from './clinics';
import reportRoutes from './reports';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/professionals', professionalRoutes);
router.use('/patients', patientRoutes);
router.use('/appointments', appointmentRoutes);
router.use('/clinics', clinicRoutes);
router.use('/reports', reportRoutes);

export default router;
```

### 2.4 Key API Endpoints
```typescript
// Principais endpoints da API

// Authentication
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/refresh
POST   /api/auth/logout

// Professionals
GET    /api/professionals              // Lista profissionais
GET    /api/professionals/:id          // Detalhes do profissional
POST   /api/professionals              // Criar profissional (admin)
PUT    /api/professionals/:id          // Atualizar profissional
GET    /api/professionals/:id/availability // Horários disponíveis

// Patients
GET    /api/patients                   // Lista pacientes (admin)
GET    /api/patients/:id               // Detalhes do paciente
POST   /api/patients                   // Registrar paciente
PUT    /api/patients/:id               // Atualizar paciente
GET    /api/patients/:id/appointments  // Consultas do paciente

// Appointments
GET    /api/appointments               // Lista consultas
GET    /api/appointments/:id           // Detalhes da consulta
POST   /api/appointments               // Agendar consulta
PUT    /api/appointments/:id           // Atualizar consulta
DELETE /api/appointments/:id           // Cancelar consulta
GET    /api/appointments/availability  // Horários disponíveis

// Clinics
GET    /api/clinics/info              // Informações da clínica
PUT    /api/clinics/settings          // Configurações da clínica
GET    /api/clinics/specialties       // Especialidades oferecidas

// Reports
GET    /api/reports/dashboard         // Métricas do dashboard
GET    /api/reports/financial         // Relatório financeiro
GET    /api/reports/appointments      // Relatório de consultas
GET    /api/reports/professionals     // Performance profissionais
```

## 3. Mobile App - React Native

### 3.1 Tecnologias e Dependências
```json
// apps/mobile/package.json
{
  "name": "@psiclin/mobile",
  "dependencies": {
    "expo": "~49.0.0",
    "react": "18.2.0",
    "react-native": "0.72.4",
    "@react-navigation/native": "^6.1.7",
    "@react-navigation/stack": "^6.3.17",
    "@react-navigation/bottom-tabs": "^6.5.8",
    "react-hook-form": "^7.45.2",
    "@hookform/resolvers": "^3.1.1",
    "yup": "^1.2.0",
    "react-query": "^3.39.3",
    "axios": "^1.4.0",
    "expo-notifications": "~0.20.1",
    "expo-linking": "~5.0.2",
    "expo-image-picker": "~14.3.2",
    "expo-document-picker": "~11.5.4",
    "expo-secure-store": "~12.3.1",
    "react-native-calendars": "^1.1300.0",
    "date-fns": "^2.30.0",
    "lottie-react-native": "^6.0.1"
  }
}
```

### 3.2 Navigation Structure
```typescript
// src/navigation/AppNavigator.tsx
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Stacks principais
const MainStack = createStackNavigator();
const AuthStack = createStackNavigator();
const MainTabs = createBottomTabNavigator();

// Tab Navigator para usuários logados
function MainTabsNavigator() {
  return (
    <MainTabs.Navigator>
      <MainTabs.Screen name="Home" component={HomeScreen} />
      <MainTabs.Screen name="Professionals" component={ProfessionalsScreen} />
      <MainTabs.Screen name="Appointments" component={AppointmentsScreen} />
      <MainTabs.Screen name="Profile" component={ProfileScreen} />
    </MainTabs.Navigator>
  );
}

// Stack Navigator principal
export function AppNavigator() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          // Usuário logado
          <>
            <MainStack.Screen name="MainTabs" component={MainTabsNavigator} />
            <MainStack.Screen name="ProfessionalDetail" component={ProfessionalDetailScreen} />
            <MainStack.Screen name="BookAppointment" component={BookAppointmentScreen} />
            <MainStack.Screen name="AppointmentDetail" component={AppointmentDetailScreen} />
          </>
        ) : (
          // Usuário não logado
          <>
            <MainStack.Screen name="Welcome" component={WelcomeScreen} />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Register" component={RegisterScreen} />
            <MainStack.Screen name="ClinicInfo" component={ClinicInfoScreen} />
            <MainStack.Screen name="ProfessionalsGuest" component={ProfessionalsGuestScreen} />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
```

### 3.3 Key Screens Structure
```typescript
// src/screens/structure

// Telas públicas (sem login)
├── WelcomeScreen.tsx           // Página inicial da clínica
├── ClinicInfoScreen.tsx        // Sobre a clínica
├── ProfessionalsGuestScreen.tsx // Corpo clínico (público)
├── LoginScreen.tsx             // Login
└── RegisterScreen.tsx          // Cadastro

// Telas principais (com login)
├── HomeScreen.tsx              // Dashboard do paciente
├── ProfessionalsScreen.tsx     // Lista de profissionais
├── ProfessionalDetailScreen.tsx // Detalhes do profissional
├── BookAppointmentScreen.tsx   // Agendamento
├── AppointmentsScreen.tsx      // Lista de consultas
├── AppointmentDetailScreen.tsx // Detalhes da consulta
└── ProfileScreen.tsx           // Perfil do usuário
```

### 3.4 Services (API Integration)
```typescript
// src/services/api.ts
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const API_BASE_URL = __DEV__ 
  ? 'http://localhost:3000/api' 
  : 'https://api.psiclin.com.br/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Interceptor para adicionar token
api.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Services específicos
export const authService = {
  login: (email: string, password: string) =>
    api.post('/auth/login', { email, password }),
  
  register: (userData: RegisterData) =>
    api.post('/auth/register', userData),
    
  refreshToken: () =>
    api.post('/auth/refresh'),
};

export const professionalsService = {
  getAll: () => api.get('/professionals'),
  getById: (id: string) => api.get(`/professionals/${id}`),
  getAvailability: (id: string, date: string) =>
    api.get(`/professionals/${id}/availability?date=${date}`),
};

export const appointmentsService = {
  getByPatient: (patientId: string) =>
    api.get(`/patients/${patientId}/appointments`),
    
  create: (appointmentData: CreateAppointmentData) =>
    api.post('/appointments', appointmentData),
    
  update: (id: string, data: UpdateAppointmentData) =>
    api.put(`/appointments/${id}`, data),
    
  cancel: (id: string, reason: string) =>
    api.delete(`/appointments/${id}`, { data: { reason } }),
};
```

## 4. Admin Web - Next.js

### 4.1 Tecnologias e Dependências
```json
// apps/admin-web/package.json
{
  "name": "@psiclin/admin-web",
  "dependencies": {
    "next": "13.4.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.1.0",
    "@tanstack/react-query": "^4.29.0",
    "axios": "^1.4.0",
    "react-hook-form": "^7.45.0",
    "@hookform/resolvers": "^3.1.0",
    "yup": "^1.2.0",
    "tailwindcss": "^3.3.0",
    "@headlessui/react": "^1.7.15",
    "@heroicons/react": "^2.0.18",
    "chart.js": "^4.3.0",
    "react-chartjs-2": "^5.2.0",
    "date-fns": "^2.30.0",
    "react-calendar": "^4.3.0",
    "react-table": "^7.8.0",
    "jspdf": "^2.5.1",
    "xlsx": "^0.18.5"
  }
}
```

### 4.2 App Router Structure (Next.js 13+)
```typescript
// src/app/layout structure
src/app/
├── layout.tsx                  // Root layout
├── page.tsx                    // Dashboard principal
├── login/
│   └── page.tsx               // Login page
├── professionals/
│   ├── page.tsx               // Lista de profissionais
│   ├── [id]/
│   │   └── page.tsx           // Detalhes do profissional
│   └── new/
│       └── page.tsx           // Novo profissional
├── patients/
│   ├── page.tsx               // Lista de pacientes
│   ├── [id]/
│   │   └── page.tsx           // Perfil do paciente
│   └── [id]/
│       └── appointments/
│           └── page.tsx       // Consultas do paciente
├── appointments/
│   ├── page.tsx               // Agenda centralizada
│   ├── [id]/
│   │   └── page.tsx           // Detalhes da consulta
│   └── calendar/
│       └── page.tsx           // Visualização de calendário
├── reports/
│   ├── page.tsx               // Dashboard de relatórios
│   ├── financial/
│   │   └── page.tsx           // Relatórios financeiros
│   └── operational/
│       └── page.tsx           // Relatórios operacionais
└── settings/
    ├── page.tsx               // Configurações gerais
    ├── clinic/
    │   └── page.tsx           // Dados da clínica
    ├── users/
    │   └── page.tsx           // Gestão de usuários
    └── integrations/
        └── page.tsx           // Integrações (WhatsApp, etc)
```

### 4.3 Key Components
```typescript
// src/components/structure
components/
├── ui/                        // Componentes base
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Modal.tsx
│   ├── Table.tsx
│   ├── Card.tsx
│   └── LoadingSpinner.tsx
├── layout/                    // Layout components
│   ├── Sidebar.tsx
│   ├── Header.tsx
│   ├── Breadcrumb.tsx
│   └── Footer.tsx
├── dashboard/                 // Dashboard específicos
│   ├── MetricsCards.tsx
│   ├── RevenueChart.tsx
│   ├── AppointmentsChart.tsx
│   └── RecentActivity.tsx
├── appointments/              // Gestão de consultas
│   ├── AppointmentCalendar.tsx
│   ├── AppointmentForm.tsx
│   ├── AppointmentList.tsx
│   └── AppointmentDetail.tsx
├── professionals/             // Gestão de profissionais
│   ├── ProfessionalForm.tsx
│   ├── ProfessionalList.tsx
│   ├── ProfessionalCard.tsx
│   └── AvailabilitySettings.tsx
├── patients/                  // Gestão de pacientes
│   ├── PatientForm.tsx
│   ├── PatientList.tsx
│   ├── PatientProfile.tsx
│   └── MedicalHistory.tsx
└── reports/                   // Relatórios
    ├── FinancialReport.tsx
    ├── AppointmentReport.tsx
    ├── ProfessionalReport.tsx
    └── ExportButton.tsx
```

## 5. Shared Packages

### 5.1 Shared Types
```typescript
// packages/shared-types/src/entities/index.ts

export interface Clinic {
  id: string;
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  address: Address;
  businessHours: BusinessHours;
  settings?: ClinicSettings;
  createdAt: Date;
  updatedAt: Date;
}

export interface Professional {
  id: string;
  name: string;
  cpf: string;
  crp: string;
  email: string;
  phone: string;
  photo?: string;
  biography?: string;
  consultationValue: number;
  commissionRate: number;
  availability: Availability[];
  specialties: Specialty[];
  active: boolean;
  averageRating: number;
  totalRatings: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Patient {
  id: string;
  name: string;
  cpf: string;
  email: string;
  phone: string;
  birthDate: Date;
  address?: Address;
  healthInsurance?: string;
  emergencyContact?: EmergencyContact;
  medicalHistory?: string;
  notes?: string;
  termsAccepted: boolean;
  termsAcceptedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Appointment {
  id: string;
  professionalId: string;
  professional?: Professional;
  patientId: string;
  patient?: Patient;
  specialtyId?: string;
  specialty?: Specialty;
  dateTime: Date;
  duration: number;
  status: AppointmentStatus;
  value: number;
  notes?: string;
  cancelReason?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Enums
export enum AppointmentStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  NO_SHOW = 'NO_SHOW',
}

export enum Role {
  ADMIN = 'ADMIN',
  PROFESSIONAL = 'PROFESSIONAL',
  PATIENT = 'PATIENT',
}

// Supporting types
export interface Address {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface BusinessHours {
  monday: DaySchedule;
  tuesday: DaySchedule;
  wednesday: DaySchedule;
  thursday: DaySchedule;
  friday: DaySchedule;
  saturday: DaySchedule;
  sunday: DaySchedule;
}

export interface DaySchedule {
  open: boolean;
  start?: string; // "08:00"
  end?: string;   // "18:00"
  break?: {
    start: string;
    end: string;
  };
}

export interface Availability {
  dayOfWeek: number; // 0-6 (domingo-sábado)
  startTime: string; // "08:00"
  endTime: string;   // "18:00"
  breakStart?: string;
  breakEnd?: string;
}
```

### 5.2 UI Components Package
```typescript
// packages/ui-components/src/Button/Button.tsx
import React from 'react';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 disabled:bg-red-300',
    ghost: 'text-gray-600 hover:bg-gray-100 disabled:text-gray-300',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <LoadingSpinner className="mr-2" />}
      {children}
    </button>
  );
};
```

## 6. Development Setup

### 6.1 Environment Configuration
```bash
# .env.example
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/psiclin"
REDIS_URL="redis://localhost:6379"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_REFRESH_SECRET="your-refresh-secret-key"
JWT_EXPIRES_IN="15m"
JWT_REFRESH_EXPIRES_IN="7d"

# WhatsApp
WHATSAPP_API_URL="https://graph.facebook.com/v17.0"
WHATSAPP_ACCESS_TOKEN="your-whatsapp-token"
WHATSAPP_PHONE_NUMBER_ID="your-phone-number-id"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# File Upload
AWS_S3_BUCKET="psiclin-documents"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_REGION="us-east-1"

# Mobile App
EXPO_PUBLIC_API_URL="http://localhost:3000/api"
EXPO_PUBLIC_WEB_URL="http://localhost:3001"

# Web Admin
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

### 6.2 Docker Development Setup
```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: psiclin
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data

  backend:
    build: ./apps/backend
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://postgres:password@postgres:5432/psiclin
      REDIS_URL: redis://redis:6379
    depends_on:
      - postgres
      - redis
    volumes:
      - ./apps/backend:/app
      - /app/node_modules

  admin-web:
    build: ./apps/admin-web
    ports:
      - "3001:3000"
    environment:
      NEXT_PUBLIC_API_URL: http://localhost:3000/api
    volumes:
      - ./apps/admin-web:/app
      - /app/node_modules

volumes:
  postgres_data:
  redis_data:
```

### 6.3 Scripts de Automação
```bash
# scripts/setup.sh
#!/bin/bash

echo "🚀 Configurando PsiClin..."

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Setup do banco
echo "🗄️ Configurando banco de dados..."
cd apps/backend
npx prisma generate
npx prisma db push
npx prisma db seed
cd ../..

# Build dos packages
echo "🔨 Building packages..."
npm run build

echo "✅ Setup concluído!"
echo "Para iniciar o desenvolvimento: npm run dev"
```

## 7. Testing Strategy

### 7.1 Backend Testing
```typescript
// apps/backend/tests/integration/appointments.test.ts
import request from 'supertest';
import { app } from '../../src/app';
import { prisma } from '../../src/lib/prisma';

describe('Appointments API', () => {
  let authToken: string;
  let professionalId: string;
  let patientId: string;

  beforeAll(async () => {
    // Setup test data
    const authResponse = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    
    authToken = authResponse.body.token;
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe('POST /api/appointments', () => {
    it('should create a new appointment', async () => {
      const appointmentData = {
        professionalId,
        patientId,
        dateTime: '2024-01-15T10:00:00Z',
        duration: 50,
        value: 150.00
      };

      const response = await request(app)
        .post('/api/appointments')
        .set('Authorization', `Bearer ${authToken}`)
        .send(appointmentData);

      expect(response.status).toBe(201);
      expect(response.body.appointment).toMatchObject({
        professionalId,
        patientId,
        status: 'PENDING'
      });
    });
  });
});
```

### 7.2 Frontend Testing
```typescript
// apps/mobile/src/components/__tests__/Button.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Button } from '../Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button>Test Button</Button>
    );
    
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const mockOnPress = jest.fn();
    const { getByText } = render(
      <Button onPress={mockOnPress}>
        Press me
      </Button>
    );
    
    fireEvent.press(getByText('Press me'));
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
```

## 8. Deployment Strategy

### 8.1 CI/CD Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy PsiClin

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test
      - run: npm run lint

  deploy-backend:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to AWS
        run: |
          # Deploy backend to AWS ECS/Lambda
          echo "Deploying backend..."

  deploy-admin:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        run: |
          # Deploy admin web to Vercel
          echo "Deploying admin web..."

  build-mobile:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Build mobile app
        run: |
          # Build mobile app with EAS
          echo "Building mobile app..."
```

Esta estrutura técnica completa fornece uma base sólida para o desenvolvimento do PsiClin, com todas as especificações necessárias para implementar o sistema de gestão da clínica de psicologia. 