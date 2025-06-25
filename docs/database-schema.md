# PsiClin - Schema do Banco de Dados (Firebase)

## 1. Visão Geral do Modelo de Dados

O banco de dados do PsiClin utiliza Firebase Firestore para oferecer uma solução NoSQL escalável e em tempo real. O sistema é projetado para suportar múltiplas clínicas com isolamento completo de dados.

### 1.1 Principais Coleções
- **clinics**: Clínicas de psicologia
- **users**: Usuários do sistema (autenticação Firebase Auth)
- **professionals**: Profissionais da área de psicologia
- **patients**: Pacientes da clínica
- **appointments**: Consultas agendadas
- **anamnesis**: Fichas de anamnese dos pacientes
- **specialties**: Especialidades oferecidas
- **documents**: Documentos anexados (Firebase Storage)
- **notifications**: Sistema de notificações

## 2. Diagrama de Relacionamentos

```
┌─────────────┐       ┌─────────────┐       ┌─────────────┐
│   Clinic    │───────│Professional│───────│ Appointment │
│             │       │             │       │             │
│ - id        │       │ - id        │       │ - id        │
│ - name      │       │ - userId    │       │ - profId    │
│ - cnpj      │       │ - clinicId  │       │ - patientId │
│ - settings  │       │ - crp       │       │ - dateTime  │
└─────────────┘       │ - photo     │       │ - status    │
       │               │ - biography │       │ - value     │
       │               └─────────────┘       └─────────────┘
       │                       │                     │
       │                       │                     │
       │               ┌─────────────┐               │
       │               │ Specialty   │               │
       │               │             │               │
       │               │ - id        │               │
       │               │ - name      │               │
       │               │ - clinicId  │               │
       │               │ - color     │               │
       │               └─────────────┘               │
       │                       │                     │
       │                       │                     │
┌─────────────┐       ┌─────────────┐               │
│    User     │       │   Patient   │───────────────┘
│             │       │             │
│ - id        │───────│ - userId    │
│ - email     │       │ - cpf       │
│ - password  │       │ - phone     │
│ - role      │       │ - birthDate │
└─────────────┘       │ - address   │
                      └─────────────┘
                              │
                              │
                      ┌─────────────┐
                      │  Document   │
                      │             │
                      │ - id        │
                      │ - patientId │
                      │ - fileUrl   │
                      │ - type      │
                      └─────────────┘
```

## 3. Estrutura das Coleções Firebase

### 3.1 Collection: clinics
```typescript
// Estrutura do documento
interface Clinic {
  id: string;                    // Document ID
  name: string;
  cnpj: string;
  email: string;
  phone: string;
  address: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  businessHours: {
    monday: { open: boolean; start?: string; end?: string; };
    tuesday: { open: boolean; start?: string; end?: string; };
    wednesday: { open: boolean; start?: string; end?: string; };
    thursday: { open: boolean; start?: string; end?: string; };
    friday: { open: boolean; start?: string; end?: string; };
    saturday: { open: boolean; start?: string; end?: string; };
    sunday: { open: boolean; start?: string; end?: string; };
  };
  settings?: {
    defaultConsultationDuration: number;
    defaultConsultationValue: number;
    allowOnlineBooking: boolean;
    requireInsuranceInfo: boolean;
  };
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Exemplo de documento
{
  "name": "Clínica Mente Sã",
  "cnpj": "12345678000190",
  "email": "contato@mentesa.com.br",
  "phone": "(11) 3456-7890",
  "address": {
    "street": "Rua Augusta",
    "number": "123",
    "complement": "Sala 45",
    "neighborhood": "Consolação",
    "city": "São Paulo",
    "state": "SP",
    "zipCode": "01234-567"
  },
  "businessHours": {
    "monday": { "open": true, "start": "08:00", "end": "18:00" },
    "tuesday": { "open": true, "start": "08:00", "end": "18:00" },
    "wednesday": { "open": true, "start": "08:00", "end": "18:00" },
    "thursday": { "open": true, "start": "08:00", "end": "18:00" },
    "friday": { "open": true, "start": "08:00", "end": "17:00" },
    "saturday": { "open": false },
    "sunday": { "open": false }
  },
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

### 3.2 Users
```sql
CREATE TABLE users (
  id         VARCHAR(30) PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  password   VARCHAR(255) NOT NULL,
  role       user_role DEFAULT 'PATIENT',
  active     BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TYPE user_role AS ENUM ('ADMIN', 'PROFESSIONAL', 'PATIENT');
```

### 3.3 Professionals
```sql
CREATE TABLE professionals (
  id                 VARCHAR(30) PRIMARY KEY,
  user_id            VARCHAR(30) UNIQUE NOT NULL REFERENCES users(id),
  clinic_id          VARCHAR(30) NOT NULL REFERENCES clinics(id),
  name               VARCHAR(255) NOT NULL,
  cpf                VARCHAR(11) UNIQUE NOT NULL,
  crp                VARCHAR(20) UNIQUE NOT NULL,
  phone              VARCHAR(20) NOT NULL,
  photo              TEXT,
  biography          TEXT,
  consultation_value DECIMAL(10,2) NOT NULL,
  commission_rate    DECIMAL(5,2) DEFAULT 0,
  availability       JSONB NOT NULL,
  active             BOOLEAN DEFAULT true,
  average_rating     DECIMAL(3,2) DEFAULT 0,
  total_ratings      INTEGER DEFAULT 0,
  created_at         TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at         TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Exemplo de availability JSON:
[
  {
    "dayOfWeek": 1, // Segunda-feira (0=domingo, 1=segunda...)
    "startTime": "08:00",
    "endTime": "12:00"
  },
  {
    "dayOfWeek": 1,
    "startTime": "14:00",
    "endTime": "18:00"
  },
  {
    "dayOfWeek": 2,
    "startTime": "08:00",
    "endTime": "17:00",
    "breakStart": "12:00",
    "breakEnd": "13:00"
  }
]
```

### 3.4 Collection: patients
```typescript
interface Patient {
  id: string;
  userId: string;              // Reference to Firebase Auth user
  clinicId: string;           // Reference to clinic
  name: string;
  cpf: string;
  phone: string;
  birthDate: Timestamp;
  address?: {
    street: string;
    number: string;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  healthInsurance?: string;
  emergencyContact?: {
    name: string;
    relationship: string;
    phone: string;
    email?: string;
  };
  medicalHistory?: string;
  notes?: string;
  termsAccepted: boolean;
  termsAcceptedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 3.5 Collection: anamnesis
```typescript
interface Anamnesis {
  id: string;
  patientId: string;          // Reference to patient
  professionalId: string;     // Professional who created
  clinicId: string;          // Reference to clinic
  
  // Dados pessoais e familiares
  personalData: {
    maritalStatus: 'single' | 'married' | 'divorced' | 'widowed' | 'other';
    education: string;
    profession: string;
    familyComposition: string;
    familyHistory: string;
  };
  
  // Motivo da consulta
  chiefComplaint: {
    mainConcern: string;
    duration: string;
    previousTreatments: string;
    expectations: string;
  };
  
  // História médica
  medicalHistory: {
    currentMedications: string[];
    allergies: string[];
    chronicConditions: string[];
    previousSurgeries: string[];
    hospitalizations: string[];
  };
  
  // História psicológica/psiquiátrica
  psychologicalHistory: {
    previousTherapy: boolean;
    previousTherapyDetails?: string;
    previousPsychiatricTreatment: boolean;
    psychiatricMedications: string[];
    significantLifeEvents: string[];
  };
  
  // Hábitos e estilo de vida
  lifestyle: {
    sleepPattern: string;
    appetite: string;
    physicalActivity: string;
    substanceUse: {
      alcohol: 'none' | 'occasional' | 'moderate' | 'heavy';
      tobacco: 'none' | 'former' | 'current';
      drugs: 'none' | 'former' | 'current';
      details?: string;
    };
  };
  
  // Avaliação do estado mental
  mentalStatus: {
    mood: string;
    anxiety: string;
    cognition: string;
    behavior: string;
    riskAssessment: {
      suicidalIdeation: boolean;
      selfHarm: boolean;
      homicidalIdeation: boolean;
      details?: string;
    };
  };
  
  // Observações do profissional
  professionalNotes: string;
  
  // Plano de tratamento inicial
  treatmentPlan: {
    goals: string[];
    approach: string;
    frequency: string;
    duration: string;
  };
  
  status: 'draft' | 'completed' | 'reviewed';
  completedAt?: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}
```

### 3.5 Specialties
```sql
CREATE TABLE specialties (
  id          VARCHAR(30) PRIMARY KEY,
  clinic_id   VARCHAR(30) NOT NULL REFERENCES clinics(id),
  name        VARCHAR(255) NOT NULL,
  description TEXT,
  active      BOOLEAN DEFAULT true,
  color       VARCHAR(7) DEFAULT '#3B82F6',
  created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3.6 Professional_Specialties (Tabela de Relacionamento)
```sql
CREATE TABLE professional_specialties (
  professional_id VARCHAR(30) NOT NULL REFERENCES professionals(id),
  specialty_id    VARCHAR(30) NOT NULL REFERENCES specialties(id),
  PRIMARY KEY (professional_id, specialty_id)
);
```

### 3.7 Appointments
```sql
CREATE TABLE appointments (
  id              VARCHAR(30) PRIMARY KEY,
  professional_id VARCHAR(30) NOT NULL REFERENCES professionals(id),
  patient_id      VARCHAR(30) NOT NULL REFERENCES patients(id),
  specialty_id    VARCHAR(30) REFERENCES specialties(id),
  date_time       TIMESTAMP WITH TIME ZONE NOT NULL,
  duration        INTEGER DEFAULT 50, -- minutos
  status          appointment_status DEFAULT 'PENDING',
  value           DECIMAL(10,2) NOT NULL,
  notes           TEXT,
  cancel_reason   TEXT,
  created_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at      TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TYPE appointment_status AS ENUM (
  'PENDING',
  'CONFIRMED', 
  'IN_PROGRESS',
  'COMPLETED',
  'CANCELLED',
  'NO_SHOW'
);

-- Índices para performance
CREATE INDEX idx_appointments_professional_date ON appointments(professional_id, date_time);
CREATE INDEX idx_appointments_patient_date ON appointments(patient_id, date_time);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_appointments_date_range ON appointments(date_time);
```

### 3.8 Documents
```sql
CREATE TABLE documents (
  id             VARCHAR(30) PRIMARY KEY,
  appointment_id VARCHAR(30) REFERENCES appointments(id),
  patient_id     VARCHAR(30) NOT NULL REFERENCES patients(id),
  name           VARCHAR(255) NOT NULL,
  type           document_type NOT NULL,
  file_url       TEXT NOT NULL,
  mime_type      VARCHAR(255) NOT NULL,
  size           INTEGER NOT NULL,
  uploaded_by    VARCHAR(30) NOT NULL REFERENCES users(id),
  created_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TYPE document_type AS ENUM (
  'PRESCRIPTION',
  'REPORT',
  'INVOICE',
  'OTHER'
);
```

### 3.9 Notifications
```sql
CREATE TABLE notifications (
  id             VARCHAR(30) PRIMARY KEY,
  appointment_id VARCHAR(30) REFERENCES appointments(id),
  type           notification_type NOT NULL,
  title          VARCHAR(255) NOT NULL,
  message        TEXT NOT NULL,
  recipient      VARCHAR(255) NOT NULL, -- email ou telefone
  status         notification_status DEFAULT 'PENDING',
  scheduled_for  TIMESTAMP WITH TIME ZONE,
  sent_at        TIMESTAMP WITH TIME ZONE,
  created_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at     TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TYPE notification_type AS ENUM (
  'APPOINTMENT_REMINDER',
  'APPOINTMENT_CONFIRMATION',
  'APPOINTMENT_CANCELLATION',
  'GENERAL'
);

CREATE TYPE notification_status AS ENUM (
  'PENDING',
  'SENT',
  'DELIVERED',
  'FAILED'
);
```

## 4. Views para Relatórios

### 4.1 Dashboard Metrics View
```sql
CREATE VIEW dashboard_metrics AS
SELECT 
  c.id as clinic_id,
  c.name as clinic_name,
  
  -- Consultas hoje
  COUNT(CASE 
    WHEN a.date_time::date = CURRENT_DATE 
    THEN 1 
  END) as appointments_today,
  
  -- Consultas esta semana
  COUNT(CASE 
    WHEN a.date_time >= date_trunc('week', CURRENT_DATE) 
    AND a.date_time < date_trunc('week', CURRENT_DATE) + interval '7 days'
    THEN 1 
  END) as appointments_this_week,
  
  -- Consultas este mês
  COUNT(CASE 
    WHEN a.date_time >= date_trunc('month', CURRENT_DATE) 
    AND a.date_time < date_trunc('month', CURRENT_DATE) + interval '1 month'
    THEN 1 
  END) as appointments_this_month,
  
  -- Receita do mês
  SUM(CASE 
    WHEN a.date_time >= date_trunc('month', CURRENT_DATE) 
    AND a.date_time < date_trunc('month', CURRENT_DATE) + interval '1 month'
    AND a.status = 'COMPLETED'
    THEN a.value 
    ELSE 0 
  END) as revenue_this_month,
  
  -- Pacientes ativos (com consulta nos últimos 6 meses)
  COUNT(DISTINCT CASE 
    WHEN a.date_time >= CURRENT_DATE - interval '6 months'
    THEN a.patient_id 
  END) as active_patients,
  
  -- Novos pacientes este mês
  COUNT(DISTINCT CASE 
    WHEN pat.created_at >= date_trunc('month', CURRENT_DATE)
    THEN pat.id 
  END) as new_patients_this_month

FROM clinics c
LEFT JOIN professionals pro ON pro.clinic_id = c.id
LEFT JOIN appointments a ON a.professional_id = pro.id
LEFT JOIN patients pat ON pat.id = a.patient_id
GROUP BY c.id, c.name;
```

### 4.2 Professional Performance View
```sql
CREATE VIEW professional_performance AS
SELECT 
  pro.id,
  pro.name,
  pro.clinic_id,
  
  -- Consultas realizadas no mês
  COUNT(CASE 
    WHEN a.date_time >= date_trunc('month', CURRENT_DATE) 
    AND a.date_time < date_trunc('month', CURRENT_DATE) + interval '1 month'
    AND a.status = 'COMPLETED'
    THEN 1 
  END) as completed_appointments_month,
  
  -- Taxa de ocupação (consultas / horários disponíveis)
  ROUND(
    COUNT(CASE WHEN a.status IN ('CONFIRMED', 'COMPLETED') THEN 1 END) * 100.0 / 
    NULLIF(COUNT(*), 0), 2
  ) as occupation_rate,
  
  -- Receita gerada no mês
  SUM(CASE 
    WHEN a.date_time >= date_trunc('month', CURRENT_DATE) 
    AND a.date_time < date_trunc('month', CURRENT_DATE) + interval '1 month'
    AND a.status = 'COMPLETED'
    THEN a.value 
    ELSE 0 
  END) as revenue_month,
  
  -- Taxa de cancelamento
  ROUND(
    COUNT(CASE WHEN a.status = 'CANCELLED' THEN 1 END) * 100.0 / 
    NULLIF(COUNT(*), 0), 2
  ) as cancellation_rate,
  
  -- Avaliação média
  pro.average_rating,
  pro.total_ratings

FROM professionals pro
LEFT JOIN appointments a ON a.professional_id = pro.id
WHERE pro.active = true
GROUP BY pro.id, pro.name, pro.clinic_id, pro.average_rating, pro.total_ratings;
```

## 5. Stored Procedures e Functions

### 5.1 Function para Verificar Disponibilidade
```sql
CREATE OR REPLACE FUNCTION check_professional_availability(
  p_professional_id VARCHAR(30),
  p_date_time TIMESTAMP WITH TIME ZONE,
  p_duration INTEGER DEFAULT 50
) RETURNS BOOLEAN AS $$
DECLARE
  appointment_end TIMESTAMP WITH TIME ZONE;
  conflict_count INTEGER;
BEGIN
  appointment_end := p_date_time + (p_duration || ' minutes')::INTERVAL;
  
  -- Verificar conflitos com consultas existentes
  SELECT COUNT(*)
  INTO conflict_count
  FROM appointments
  WHERE professional_id = p_professional_id
    AND status IN ('CONFIRMED', 'IN_PROGRESS')
    AND (
      (date_time <= p_date_time AND date_time + (duration || ' minutes')::INTERVAL > p_date_time)
      OR
      (date_time < appointment_end AND date_time >= p_date_time)
    );
  
  RETURN conflict_count = 0;
END;
$$ LANGUAGE plpgsql;
```

### 5.2 Function para Calcular Horários Disponíveis
```sql
CREATE OR REPLACE FUNCTION get_available_slots(
  p_professional_id VARCHAR(30),
  p_date DATE,
  p_slot_duration INTEGER DEFAULT 50
) RETURNS TABLE(
  slot_time TIMESTAMP WITH TIME ZONE,
  available BOOLEAN
) AS $$
DECLARE
  prof_availability JSONB;
  day_of_week INTEGER;
  time_slot TIME;
  current_slot TIMESTAMP WITH TIME ZONE;
BEGIN
  -- Obter dia da semana (0=domingo, 1=segunda...)
  day_of_week := EXTRACT(DOW FROM p_date);
  
  -- Obter disponibilidade do profissional
  SELECT availability INTO prof_availability
  FROM professionals
  WHERE id = p_professional_id;
  
  -- Iterar pelos horários do dia
  FOR time_slot IN
    SELECT generate_series(
      '08:00'::TIME,
      '18:00'::TIME,
      (p_slot_duration || ' minutes')::INTERVAL
    )
  LOOP
    current_slot := p_date + time_slot;
    
    RETURN QUERY
    SELECT 
      current_slot,
      check_professional_availability(p_professional_id, current_slot, p_slot_duration);
  END LOOP;
  
  RETURN;
END;
$$ LANGUAGE plpgsql;
```

## 6. Triggers e Constraints

### 6.1 Trigger para Atualizar Average Rating
```sql
CREATE OR REPLACE FUNCTION update_professional_rating()
RETURNS TRIGGER AS $$
BEGIN
  -- Atualizar rating médio do profissional
  -- (Implementar quando adicionar sistema de avaliações)
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 6.2 Constraints de Negócio
```sql
-- Não permitir consultas no passado
ALTER TABLE appointments ADD CONSTRAINT check_future_appointment
CHECK (date_time > NOW());

-- Duração mínima de consulta
ALTER TABLE appointments ADD CONSTRAINT check_minimum_duration
CHECK (duration >= 30);

-- Valor mínimo de consulta
ALTER TABLE appointments ADD CONSTRAINT check_minimum_value
CHECK (value > 0);

-- CPF válido (11 dígitos)
ALTER TABLE professionals ADD CONSTRAINT check_cpf_format
CHECK (cpf ~ '^[0-9]{11}$');

ALTER TABLE patients ADD CONSTRAINT check_patient_cpf_format
CHECK (cpf ~ '^[0-9]{11}$');

-- CNPJ válido (14 dígitos)
ALTER TABLE clinics ADD CONSTRAINT check_cnpj_format
CHECK (cnpj ~ '^[0-9]{14}$');

-- Email válido
ALTER TABLE users ADD CONSTRAINT check_email_format
CHECK (email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$');
```

## 7. Índices de Performance

```sql
-- Índices para consultas frequentes
CREATE INDEX idx_professionals_clinic_active ON professionals(clinic_id, active);
CREATE INDEX idx_patients_clinic ON patients(user_id);
CREATE INDEX idx_appointments_date_professional ON appointments(date_time, professional_id);
CREATE INDEX idx_appointments_date_patient ON appointments(date_time, patient_id);
CREATE INDEX idx_appointments_status_date ON appointments(status, date_time);
CREATE INDEX idx_documents_patient ON documents(patient_id);
CREATE INDEX idx_notifications_status_scheduled ON notifications(status, scheduled_for);

-- Índices compostos para relatórios
CREATE INDEX idx_appointments_clinic_date ON appointments(professional_id, date_time) 
INCLUDE (status, value);

-- Índices para busca de texto
CREATE INDEX idx_professionals_name_gin ON professionals USING gin(to_tsvector('portuguese', name));
CREATE INDEX idx_patients_name_gin ON patients USING gin(to_tsvector('portuguese', name));
```

## 8. Data Seeding

### 8.1 Dados Iniciais para Desenvolvimento
```sql
-- Inserir clínica de exemplo
INSERT INTO clinics (id, name, cnpj, email, phone, address, business_hours) VALUES
('clinic_001', 'Clínica Mente Sã', '12345678000190', 'contato@mentesa.com.br', '(11) 3456-7890',
'{"street": "Rua Augusta", "number": "123", "neighborhood": "Consolação", "city": "São Paulo", "state": "SP", "zipCode": "01234-567"}',
'{"monday": {"open": true, "start": "08:00", "end": "18:00"}, "tuesday": {"open": true, "start": "08:00", "end": "18:00"}, "wednesday": {"open": true, "start": "08:00", "end": "18:00"}, "thursday": {"open": true, "start": "08:00", "end": "18:00"}, "friday": {"open": true, "start": "08:00", "end": "17:00"}, "saturday": {"open": false}, "sunday": {"open": false}}');

-- Inserir especialidades
INSERT INTO specialties (id, clinic_id, name, description, color) VALUES
('spec_001', 'clinic_001', 'Psicologia Clínica', 'Atendimento individual para adultos', '#3B82F6'),
('spec_002', 'clinic_001', 'Psicologia Infantil', 'Atendimento especializado para crianças', '#10B981'),
('spec_003', 'clinic_001', 'Terapia de Casal', 'Terapia para relacionamentos', '#F59E0B'),
('spec_004', 'clinic_001', 'Neuropsicologia', 'Avaliação e reabilitação neuropsicológica', '#8B5CF6');

-- Inserir usuário admin
INSERT INTO users (id, email, password, role) VALUES
('user_admin', 'admin@mentesa.com.br', '$2b$10$hashedpassword', 'ADMIN');
```

## 9. Backup e Recovery

### 9.1 Estratégia de Backup
```bash
#!/bin/bash
# scripts/backup-db.sh

# Backup completo diário
pg_dump -h $DB_HOST -U $DB_USER -d $DB_NAME > backups/daily/psiclin_$(date +%Y%m%d).sql

# Backup incremental (WAL)
pg_receivewal -h $DB_HOST -U $DB_USER -D backups/wal/

# Backup para S3
aws s3 cp backups/daily/psiclin_$(date +%Y%m%d).sql s3://psiclin-backups/daily/

# Retenção: manter últimos 30 dias
find backups/daily/ -name "*.sql" -mtime +30 -delete
```

### 9.2 Procedimento de Recovery
```bash
#!/bin/bash
# scripts/restore-db.sh

BACKUP_FILE=$1

if [ -z "$BACKUP_FILE" ]; then
  echo "Uso: ./restore-db.sh backup_file.sql"
  exit 1
fi

# Parar aplicação
docker-compose stop backend

# Restaurar banco
psql -h $DB_HOST -U $DB_USER -d $DB_NAME < $BACKUP_FILE

# Recriar índices se necessário
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -c "REINDEX DATABASE $DB_NAME;"

# Reiniciar aplicação
docker-compose start backend
```

Esta documentação do schema fornece uma base sólida para implementar o banco de dados do PsiClin, com todas as estruturas necessárias para suportar as funcionalidades do sistema de gestão da clínica. 