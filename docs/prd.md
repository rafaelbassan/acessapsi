# AcessaPsi - Product Requirements Document (PRD)

## 1. Visão do Produto

### 1.1 Declaração da Visão
**"Digitalizar e modernizar a gestão de clínicas de psicologia, oferecendo uma experiência superior tanto para profissionais quanto para pacientes, através de uma plataforma integrada, intuitiva e acessível."**

### 1.2 Missão do Produto
Criar uma solução tecnológica que elimine as barreiras entre clínicas de psicologia e seus pacientes, facilitando o agendamento, melhorando a gestão operacional e promovendo uma experiência de cuidado mais humanizada e eficiente.

### 1.3 Valores Fundamentais
- **Acessibilidade**: Facilitar o acesso aos cuidados de saúde mental
- **Privacidade**: Proteção rigorosa dos dados sensíveis (LGPD)
- **Simplicidade**: Interfaces intuitivas para todos os perfis de usuário
- **Eficiência**: Otimização dos processos administrativos
- **Humanização**: Tecnologia a serviço do cuidado humano

## 2. Análise de Mercado e Oportunidade

### 2.1 Problema Identificado

**Para Clínicas:**
- Processos manuais para agendamento e gestão
- Dificuldade em organizar prontuários digitais
- Falta de ferramentas para análise de performance
- Perda de tempo com tarefas administrativas
- Dificuldade em manter comunicação eficiente com pacientes

**Para Pacientes:**
- Barreiras para agendamento de consultas
- Falta de transparência sobre profissionais disponíveis
- Dificuldade em acessar histórico médico
- Comunicação limitada com a clínica
- Experiência fragmentada de cuidado

### 2.2 Oportunidade de Mercado

**Tamanho do Mercado:**
- 400.000+ psicólogos registrados no CFP (Brasil)
- 15.000+ clínicas de psicologia estimadas
- Crescimento de 20% ao ano em telemedicina/telessaúde
- Tendência crescente de digitalização na saúde

**Diferenciação do PsiClin:**
- ✅ Especialização exclusiva em psicologia
- ✅ Agendamento via WhatsApp (familiar aos brasileiros)
- ✅ Anamnese digital completa
- ✅ Portal web PWA + App mobile
- ✅ Interface otimizada para o workflow psicológico
- ✅ Preço acessível para clínicas pequenas/médias

## 3. Personas e Casos de Uso

### 3.1 Persona Primária: Administrador de Clínica
**Nome:** Ana Silva, 42 anos
**Cargo:** Proprietária/Administradora de clínica
**Background:** Psicóloga há 15 anos, possui clínica com 5 profissionais

**Necessidades:**
- Centralizar agendamentos de todos os profissionais
- Ter visibilidade financeira da clínica
- Reduzir tempo gasto com administração
- Melhorar comunicação com pacientes
- Manter conformidade com regulamentações

**Objetivos com o Produto:**
- Aumentar eficiência operacional em 40%
- Reduzir no-shows em 30%
- Ter dashboard executivo em tempo real
- Automatizar confirmações e lembretes

### 3.2 Persona Secundária: Psicólogo/Profissional
**Nome:** Dr. João Santos, 35 anos
**Cargo:** Psicólogo Clínico
**Background:** 8 anos de experiência, atende em 2 clínicas

**Necessidades:**
- Gerenciar sua agenda pessoal
- Acessar prontuários digitais rapidamente
- Ter anamneses estruturadas
- Comunicar-se facilmente com pacientes
- Acompanhar evolução dos tratamentos

**Objetivos com o Produto:**
- Digitalizar completamente o prontuário
- Ter anamnese estruturada e completa
- Reduzir tempo administrativo
- Melhorar qualidade do atendimento

### 3.3 Persona Terciária: Paciente
**Nome:** Maria Oliveira, 28 anos
**Perfil:** Jovem profissional, primeira vez em terapia
**Background:** Procura psicólogo por ansiedade relacionada ao trabalho

**Necessidades:**
- Encontrar psicólogo adequado facilmente
- Agendar consultas de forma simples
- Ter acesso ao histórico de consultas
- Receber lembretes de consultas
- Preencher anamnese digitalmente

**Objetivos com o Produto:**
- Agendar consulta em menos de 5 minutos
- Conhecer o profissional antes da consulta
- Ter acesso digital ao histórico
- Receber lembretes automáticos

## 4. Funcionalidades e Requisitos

### 4.1 MVP (Minimum Viable Product) - Fase 1

#### Portal do Paciente (Mobile + Web PWA)
**Funcionalidades Essenciais:**
- [P0] Cadastro e login de pacientes
- [P0] Visualização de profissionais e especialidades
- [P0] Agendamento via WhatsApp
- [P0] Dashboard pessoal com próximas consultas
- [P0] Histórico de consultas
- [P1] Anamnese digital
- [P1] Notificações de lembrete
- [P1] Perfil e configurações

**Critérios de Aceite:**
- Cadastro completo em menos de 3 minutos
- Agendamento via WhatsApp em menos de 5 cliques
- Carregamento de páginas em menos de 3 segundos
- Interface responsiva para mobile e desktop
- Funcionalidade offline básica

#### Painel Administrativo
**Funcionalidades Essenciais:**
- [P0] Dashboard executivo com métricas
- [P0] Gestão de profissionais
- [P0] Gestão de pacientes
- [P0] Agenda centralizada
- [P0] Confirmação de agendamentos
- [P1] Relatórios básicos (financeiro, operacional)
- [P1] Configurações da clínica
- [P1] Gestão de usuários

**Critérios de Aceite:**
- Login administrativo em menos de 30 segundos
- Dashboard carregado em menos de 5 segundos
- Criação de profissional em menos de 2 minutos
- Agenda centralizada com filtros funcionais
- Exportação de relatórios em PDF

### 4.2 Features Diferenciadas

#### Agendamento via WhatsApp
**Fluxo:**
1. Paciente seleciona profissional e horário no app/web
2. Sistema gera mensagem pré-formatada
3. Redirecionamento automático para WhatsApp
4. Paciente envia mensagem
5. Clínica confirma e sistema registra automaticamente

**Valor:** Reduz fricção no agendamento, usando ferramenta que 95% dos brasileiros já usam.

#### Anamnese Digital Estruturada
**Componentes:**
- Dados pessoais e familiares
- Motivo da consulta
- História médica e psicológica
- Hábitos e estilo de vida
- Avaliação de estado mental
- Plano de tratamento

**Valor:** Padroniza coleta de informações, melhora qualidade do atendimento, facilita análises.

#### Portal Web PWA
**Características:**
- Instalável no dispositivo
- Funciona offline
- Push notifications
- Performance de app nativo
- Acesso universal via browser

**Valor:** Maior alcance, melhor experiência, sem necessidade de download de app.

## 5. Métricas de Sucesso

### 5.1 Métricas de Produto (KPIs)

#### Adoção e Engajamento
- **MAU (Monthly Active Users):** Pacientes ativos por mês
- **Taxa de Retenção:** % usuários que retornam após 30 dias
- **Time to First Appointment:** Tempo do cadastro ao primeiro agendamento
- **Session Duration:** Tempo médio de uso da plataforma

#### Eficiência Operacional
- **Tempo de Agendamento:** Média de tempo para completar agendamento
- **Taxa de No-Show:** % consultas agendadas vs realizadas
- **Tempo de Confirmação:** Tempo entre agendamento e confirmação
- **Utilização da Agenda:** % ocupação dos horários disponíveis

#### Satisfação do Cliente
- **NPS (Net Promoter Score):** Score geral da plataforma
- **CSAT (Customer Satisfaction):** Satisfação por funcionalidade
- **Support Tickets:** Número de solicitações de suporte
- **Feature Adoption Rate:** % usuários usando cada funcionalidade

### 5.2 Metas para os Primeiros 6 Meses

**Mês 1-2 (Beta/Soft Launch):**
- 5 clínicas piloto
- 25 profissionais cadastrados
- 200 pacientes registrados
- 500 agendamentos realizados

**Mês 3-4 (Launch Público):**
- 20 clínicas ativas
- 100 profissionais cadastrados
- 1.000 pacientes registrados
- 2.500 agendamentos/mês

**Mês 5-6 (Crescimento):**
- 50 clínicas ativas
- 250 profissionais cadastrados
- 5.000 pacientes registrados
- 10.000 agendamentos/mês

## 6. Go-to-Market Strategy

### 6.1 Estratégia de Lançamento

#### Fase 1: Beta Privado (Mês 1-2)
- **Público:** 5 clínicas parceiras
- **Objetivo:** Validar produto e corrigir bugs
- **Atividades:** Feedback intensivo, ajustes de UX

#### Fase 2: Soft Launch (Mês 3-4)
- **Público:** Clínicas indicadas e early adopters
- **Objetivo:** Refinar produto e processos
- **Atividades:** Marketing boca-a-boca, caso de sucesso

#### Fase 3: Launch Público (Mês 5-6)
- **Público:** Mercado geral
- **Objetivo:** Crescimento acelerado
- **Atividades:** Marketing digital, parcerias

### 6.2 Modelo de Precificação

#### Freemium Model
**Plano Gratuito:**
- 1 profissional
- 50 agendamentos/mês
- Funcionalidades básicas
- Suporte por email

**Plano Básico - R$ 89/mês:**
- Até 3 profissionais
- Agendamentos ilimitados
- Anamnese digital
- Relatórios básicos
- Suporte prioritário

**Plano Professional - R$ 179/mês:**
- Até 10 profissionais
- Todas as funcionalidades
- Relatórios avançados
- Integração WhatsApp
- Suporte telefônico

**Plano Enterprise - R$ 299/mês:**
- Profissionais ilimitados
- Customizações
- API access
- Account manager
- SLA garantido

## 7. Roadmap do Produto

### 7.1 Trimestre 1 (Q1) - Fundação
**Objetivos:** Lançar MVP e validar product-market fit

**Entregas:**
- ✅ Portal paciente (mobile + web PWA)
- ✅ Painel administrativo básico
- ✅ Agendamento via WhatsApp
- ✅ Anamnese digital
- ✅ Sistema de autenticação

**Métricas de Sucesso:**
- 5 clínicas piloto ativas
- NPS > 8.0
- < 5% churn rate

### 7.2 Trimestre 2 (Q2) - Crescimento
**Objetivos:** Escalar para 50 clínicas e aprimorar produto

**Entregas:**
- 🔄 Integração WhatsApp Business API
- 🔄 Relatórios avançados
- 🔄 Sistema de notificações completo
- 🔄 Prontuário digital completo
- 🔄 App mobile nas lojas

**Métricas de Sucesso:**
- 50 clínicas ativas
- 10.000 agendamentos/mês
- NPS > 8.5

### 7.3 Trimestre 3 (Q3) - Monetização
**Objetivos:** Implementar modelo de receita e expandir funcionalidades

**Entregas:**
- 🔄 Sistema de cobrança automatizada
- 🔄 Planos de assinatura
- 🔄 Dashboard financeiro avançado
- 🔄 Sistema de avaliações
- 🔄 API para integrações

**Métricas de Sucesso:**
- 100 clínicas pagantes
- MRR de R$ 15.000
- < 3% churn rate mensal

### 7.4 Trimestre 4 (Q4) - Expansão
**Objetivos:** Expandir mercado e preparar funcionalidades avançadas

**Entregas:**
- 🔄 Multi-clínica (franquias)
- 🔄 Telemedicina básica
- 🔄 Integração com pagamentos
- 🔄 Mobile app otimizado
- 🔄 Sistema de franquias

**Métricas de Sucesso:**
- 200 clínicas ativas
- MRR de R$ 50.000
- Expansão para 5 estados

## 8. Riscos e Mitigações

### 8.1 Riscos de Produto

#### Risco: Baixa adoção inicial
**Probabilidade:** Média | **Impacto:** Alto
**Mitigação:**
- Beta estendido com clínicas parceiras
- Programa de incentivos para early adopters
- Onboarding assistido personalizado

#### Risco: Concorrência de players grandes
**Probabilidade:** Alta | **Impacto:** Médio
**Mitigação:**
- Foco na especialização em psicologia
- Diferenciação via WhatsApp e anamnese
- Relacionamento próximo com clientes

### 8.2 Riscos Técnicos

#### Risco: Problemas de performance/escalabilidade
**Probabilidade:** Média | **Impacto:** Alto
**Mitigação:**
- Arquitetura escalável com Firebase
- Testes de carga desde o início
- Monitoramento proativo

#### Risco: Segurança e compliance LGPD
**Probabilidade:** Baixa | **Impacto:** Muito Alto
**Mitigação:**
- Auditoria de segurança externa
- Consultoria jurídica especializada
- Criptografia end-to-end

## 9. Recursos e Investimento

### 9.1 Equipe Necessária

#### Ano 1
- **Product Manager:** 1 FTE
- **Tech Lead/Backend:** 1 FTE
- **Frontend/Mobile Developer:** 1 FTE
- **UI/UX Designer:** 0.5 FTE
- **QA Engineer:** 0.5 FTE

### 9.2 Estimativa de Investimento

#### Desenvolvimento (Ano 1)
- **Pessoal:** R$ 600.000
- **Infraestrutura:** R$ 36.000
- **Ferramentas/Software:** R$ 24.000
- **Marketing:** R$ 120.000
- **Legal/Compliance:** R$ 20.000
- **Total Ano 1:** R$ 800.000

#### Projeção Financeira (3 Anos)
- **Ano 1:** -R$ 800.000 (investimento)
- **Ano 2:** -R$ 200.000 (break-even)
- **Ano 3:** +R$ 1.200.000 (lucro)

## 10. Critérios de Sucesso e Próximos Passos

### 10.1 Definição de Sucesso

#### Sucesso do MVP (6 meses)
- ✅ 20+ clínicas ativas usando regularmente
- ✅ NPS > 8.0 de clínicas e pacientes
- ✅ 5.000+ agendamentos realizados
- ✅ < 5% churn rate mensal
- ✅ Product-market fit validado

#### Sucesso Comercial (12 meses)
- ✅ 100+ clínicas pagantes
- ✅ MRR de R$ 30.000+
- ✅ CAC < 3x LTV
- ✅ Presença consolidada em 3 estados

### 10.2 Próximos Passos Imediatos

#### Semana 1-2: Validação Final
- [ ] Validar PRD com stakeholders
- [ ] Finalizar pesquisa de mercado
- [ ] Confirmar modelo de negócio
- [ ] Definir equipe inicial

#### Semana 3-4: Setup do Projeto
- [ ] Montar equipe de desenvolvimento
- [ ] Setup técnico inicial (Firebase, repositório)
- [ ] Criar identidade visual e branding
- [ ] Estabelecer processos de trabalho

#### Mês 2-3: Desenvolvimento MVP
- [ ] Iniciar desenvolvimento conforme roadmap técnico
- [ ] Recrutar clínicas piloto
- [ ] Preparar materiais de marketing
- [ ] Setup de métricas e analytics

---

Este PRD estabelece uma base sólida para o desenvolvimento e lançamento do PsiClin, com foco claro no valor para o cliente e métricas de sucesso bem definidas. 