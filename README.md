# PsiClin - Sistema de Gestão para Clínicas de Psicologia

## Visão Geral

PsiClin é uma solução completa para gestão de clínicas de psicologia, oferecendo uma plataforma integrada para pacientes, profissionais e administradores.

## Arquitetura do Sistema

### Monorepo Structure
```
PsiClin/
├── apps/
│   ├── mobile/          # React Native - App para pacientes
│   ├── patient-web/     # Next.js - Versão web para pacientes
│   ├── admin-web/       # React.js - Painel administrativo
│   └── backend/         # Node.js/Express - API REST
├── packages/
│   ├── shared-types/    # TypeScript types compartilhados
│   ├── ui-components/   # Componentes UI reutilizáveis
│   └── utils/          # Utilitários compartilhados
├── docs/               # Documentação
└── scripts/           # Scripts de build e deploy
```

## Funcionalidades Principais

### 📱 App Mobile + Web (Pacientes)
- Página de apresentação da clínica
- Catálogo do corpo clínico
- Agendamento via WhatsApp
- Notificações de consultas
- Histórico de consultas
- Avaliações e feedback
- Anamnese digital
- Versão PWA para acesso web

### 🖥️ Painel Administrativo (Web)
- Dashboard executivo
- Gestão de profissionais
- Gestão de pacientes
- Agenda completa
- Relatórios financeiros
- Configurações da clínica

### 🔧 Backend (API)
- Autenticação e autorização
- Gerenciamento de dados
- Integrações externas
- Notificações push
- Relatórios e analytics

## Tecnologias

- **Mobile**: React Native, Expo
- **Patient Web**: Next.js, TypeScript, Tailwind CSS (PWA)
- **Admin Web**: React.js, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: Firebase (Firestore + Authentication + Storage)
- **Monorepo**: Turborepo
- **Deploy**: Google Cloud Platform (VPS)

## Próximos Passos

1. Configurar estrutura do monorepo
2. Implementar backend básico
3. Desenvolver app mobile
4. Criar painel administrativo
5. Integrar componentes
6. Deploy e testes

## Documentação

Veja a pasta `docs/` para especificações detalhadas de cada módulo. 