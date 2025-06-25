# PsiClin - Requisitos do Projeto

## 1. Visão Geral do Negócio

### 1.1 Problema
Clínicas de psicologia enfrentam desafios na gestão operacional, agendamento de consultas, e relacionamento com pacientes. A falta de um sistema integrado resulta em processos manuais, perda de eficiência e experiência do paciente comprometida.

### 1.2 Solução
Sistema integrado com três interfaces principais:
- **App Mobile**: Portal do paciente para agendamento e informações
- **Painel Web**: Sistema de gestão completo para administradores
- **API Backend**: Gerenciamento centralizado de dados e integração

### 1.3 Objetivos
- Digitalizar processos da clínica
- Melhorar experiência do paciente
- Aumentar eficiência operacional
- Gerar insights através de relatórios
- Facilitar comunicação clínica-paciente

## 2. Requisitos Funcionais

### 2.1 App Mobile (Pacientes)

#### 2.1.1 Funcionalidades Principais
- **Home/Apresentação**
  - Informações sobre a clínica
  - Missão, visão, valores
  - Localização e contato
  - Horários de funcionamento

- **Corpo Clínico**
  - Lista de profissionais
  - Perfil detalhado (foto, especialidades, experiência)
  - Avaliações e comentários
  - Disponibilidade para agendamento

- **Agendamento**
  - Seleção de profissional
  - Escolha de data/horário disponível
  - Redirecionamento para WhatsApp com mensagem pré-formatada
  - Confirmação via notificação

- **Área do Paciente** (Login)
  - Histórico de consultas
  - Próximas consultas
  - Documentos (receitas, relatórios)
  - Notificações
  - Perfil pessoal

#### 2.1.2 Fluxos de Usuário
1. **Primeiro Acesso**: Navegação livre → Interesse → Agendamento via WhatsApp
2. **Paciente Cadastrado**: Login → Dashboard → Agendamento/Consulta histórico
3. **Agendamento**: Selecionar profissional → Data/hora → WhatsApp → Confirmação

### 2.2 Painel Administrativo (Web)

#### 2.2.1 Dashboard Executivo
- **Métricas Principais**
  - Consultas do dia/semana/mês
  - Receita gerada
  - Taxa de ocupação
  - Novos pacientes
  - Pacientes ativos

- **Gráficos e Relatórios**
  - Faturamento mensal
  - Performance por profissional
  - Horários mais demandados
  - Especialidades mais procuradas

#### 2.2.2 Gestão de Profissionais
- **Cadastro Completo**
  - Dados pessoais
  - Especialidades e certificações
  - Disponibilidade de horários
  - Valores por consulta
  - Foto e biografia

- **Agenda Individual**
  - Visualização por profissional
  - Bloqueio de horários
  - Histórico de consultas
  - Performance individual

#### 2.2.3 Gestão de Pacientes
- **Cadastro e Perfil**
  - Dados pessoais e contato
  - Histórico médico
  - Plano de saúde
  - Documentos anexados
  - Notas e observações

- **Prontuário Digital**
  - Histórico de consultas
  - Evolução do tratamento
  - Documentos gerados
  - Comunicações

#### 2.2.4 Agenda Centralizada
- **Visualização Múltipla**
  - Por dia/semana/mês
  - Por profissional
  - Por especialidade
  - Por status (confirmado, pendente, cancelado)

- **Gerenciamento**
  - Criar/editar/cancelar consultas
  - Reagendamentos
  - Lista de espera
  - Lembretes automáticos

#### 2.2.5 Relatórios e Analytics
- **Financeiro**
  - Receita por período
  - Receita por profissional
  - Comissões e repasses
  - Inadimplência
  - Projeções

- **Operacional**
  - Ocupação da agenda
  - Performance de profissionais
  - Satisfação do cliente
  - Tempo médio de consulta

#### 2.2.6 Configurações
- **Clínica**
  - Dados da empresa
  - Horários de funcionamento
  - Especialidades oferecidas
  - Valores padrão

- **Sistema**
  - Usuários e permissões
  - Integrações (WhatsApp, email)
  - Notificações automáticas
  - Backup e segurança

### 2.3 Backend (API)

#### 2.3.1 Autenticação e Autorização
- JWT tokens para sessões
- Roles: Admin, Profissional, Paciente
- Permissões granulares
- Logout automático por inatividade

#### 2.3.2 Gestão de Dados
- **Entidades Principais**
  - Clínicas
  - Profissionais
  - Pacientes
  - Consultas
  - Especialidades
  - Documentos

- **Operações CRUD**
  - Validação de dados
  - Soft delete
  - Auditoria de alterações
  - Backup automático

#### 2.3.3 Integrações Externas
- **WhatsApp Business API**
  - Envio de mensagens
  - Templates pré-aprovados
  - Status de entrega

- **Notificações Push**
  - Firebase/Expo notifications
  - Lembretes de consulta
  - Atualizações de status

- **Email**
  - SMTP para confirmações
  - Templates responsivos
  - Tracking de abertura

#### 2.3.4 Relatórios e Analytics
- Processamento de dados em background
- Cache de relatórios complexos
- Export para PDF/Excel
- Agendamento de relatórios

## 3. Requisitos Não Funcionais

### 3.1 Performance
- Tempo de resposta da API < 200ms
- Carregamento do app mobile < 3s
- Suporte a 100 usuários simultâneos
- Disponibilidade 99.5%

### 3.2 Segurança
- Criptografia de dados sensíveis (LGPD)
- HTTPS obrigatório
- Backup diário automatizado
- Logs de auditoria

### 3.3 Usabilidade
- Interface responsiva e intuitiva
- Suporte a dispositivos iOS/Android
- Offline-first para consultas básicas
- Acessibilidade (WCAG 2.1)

### 3.4 Escalabilidade
- Arquitetura modular
- Database scaling horizontal
- Cache distribuído
- Load balancing

## 4. Regras de Negócio

### 4.1 Agendamentos
- Horários disponíveis em slots de 30 minutos
- Máximo 2 reagendamentos por consulta
- Cancelamento até 24h antes sem taxa
- Confirmação obrigatória até 2h antes

### 4.2 Profissionais
- Cada profissional define sua disponibilidade
- Valores podem variar por especialidade
- Mínimo 15 minutos entre consultas
- Máximo 10 consultas por dia

### 4.3 Pacientes
- Cadastro obrigatório para agendamento
- Histórico mantido por 5 anos
- Consentimento LGPD obrigatório
- Acesso apenas aos próprios dados

### 4.4 Financeiro
- Pagamento no local (registro para controle)
- Comissão automática para profissionais
- Relatórios mensais obrigatórios
- Controle de inadimplência

## 5. Casos de Uso Detalhados

### 5.1 UC001 - Agendamento via WhatsApp
**Ator**: Paciente
**Fluxo Principal**:
1. Paciente navega pelo app
2. Seleciona profissional desejado
3. Escolhe data/horário disponível
4. Sistema gera mensagem no WhatsApp
5. Paciente envia mensagem
6. Recepcionista confirma agendamento
7. Sistema registra consulta
8. Paciente recebe confirmação

### 5.2 UC002 - Gestão de Agenda
**Ator**: Administrador
**Fluxo Principal**:
1. Admin acessa painel web
2. Visualiza agenda centralizada
3. Identifica consultas pendentes
4. Confirma/reagenda/cancela consultas
5. Sistema atualiza status
6. Notificações são enviadas
7. Relatórios são atualizados

### 5.3 UC003 - Consulta Prontuário
**Ator**: Profissional
**Fluxo Principal**:
1. Profissional faz login
2. Acessa agenda pessoal
3. Seleciona paciente
4. Visualiza prontuário completo
5. Adiciona novas informações
6. Salva alterações
7. Sistema registra auditoria

## 6. Modelo de Dados

### 6.1 Entidades Principais

#### Clínica
- id, nome, cnpj, endereco, telefone, email
- horario_funcionamento, especialidades
- configuracoes (valores, politicas)

#### Profissional
- id, nome, cpf, crp, email, telefone
- especialidades[], disponibilidade[]
- valor_consulta, comissao_percentual
- foto, biografia, avaliacao_media

#### Paciente
- id, nome, cpf, email, telefone, data_nascimento
- endereco, plano_saude, contato_emergencia
- termos_aceitos, data_cadastro

#### Consulta
- id, profissional_id, paciente_id
- data_hora, duracao, status
- valor, observacoes, documentos[]
- created_at, updated_at

#### Especialidade
- id, nome, descricao, ativa
- valor_sugerido, cor_tema

### 6.2 Relacionamentos
- Profissional N:M Especialidade
- Consulta N:1 Profissional
- Consulta N:1 Paciente
- Clínica 1:N Profissional

## 7. Arquitetura Técnica

### 7.1 Padrões e Práticas
- Clean Architecture
- Repository Pattern
- Dependency Injection
- Event-Driven Architecture
- SOLID Principles

### 7.2 Tecnologias Detalhadas

#### Mobile (React Native)
- Expo SDK 49+
- React Navigation 6
- React Hook Form
- Async Storage
- Expo Notifications

#### Web (React.js)
- React 18+ com TypeScript
- Next.js 13+ (App Router)
- Tailwind CSS + Headless UI
- React Query/TanStack
- Chart.js para relatórios

#### Backend (Node.js)
- Express.js com TypeScript
- Prisma ORM
- PostgreSQL 14+
- Redis para cache
- Bull para jobs

### 7.3 Infraestrutura
- **Desenvolvimento**: Docker Compose
- **Produção**: AWS/Digital Ocean
- **Database**: PostgreSQL (RDS)
- **Cache**: Redis (ElastiCache)
- **Storage**: S3 para arquivos
- **Monitoramento**: Sentry + New Relic

## 8. Cronograma de Desenvolvimento

### Fase 1 - Fundação (2-3 semanas)
- Setup do monorepo
- Configuração do backend básico
- Autenticação e autorização
- Modelos de dados principais

### Fase 2 - Backend Core (3-4 semanas)
- APIs principais (CRUD)
- Lógica de negócio
- Validações e regras
- Testes unitários

### Fase 3 - App Mobile (4-5 semanas)
- Estrutura e navegação
- Telas principais
- Integração com API
- Notificações push

### Fase 4 - Painel Admin (4-5 semanas)
- Dashboard e relatórios
- Gestão de profissionais/pacientes
- Agenda centralizada
- Configurações

### Fase 5 - Integrações (2-3 semanas)
- WhatsApp Business API
- Email automático
- Notificações completas
- Relatórios avançados

### Fase 6 - Testes e Deploy (2-3 semanas)
- Testes de integração
- Testes de performance
- Deploy em produção
- Documentação final

## 9. Riscos e Mitigações

### 9.1 Técnicos
- **Integração WhatsApp**: Ter plano B com deep links
- **Performance**: Implementar cache desde o início
- **Escalabilidade**: Arquitetura modular

### 9.2 Negócio
- **Adoção**: Interface intuitiva e treinamento
- **Regulamentação**: Compliance LGPD desde o início
- **Concorrência**: Funcionalidades diferenciadas

### 9.3 Projeto
- **Prazo**: Desenvolvimento iterativo com MVPs
- **Qualidade**: Testes automatizados
- **Comunicação**: Demos semanais com stakeholders 