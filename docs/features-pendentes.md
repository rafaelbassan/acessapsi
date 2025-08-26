# Features Pendentes - AcessaPsi

## Visão Geral
Este documento lista as principais funcionalidades que precisam ser implementadas para o sistema PsiClin, focando nos cadastros fundamentais e suas integrações.

## 1. Cadastro de Profissional

### 1.1 Informações Básicas
- **Nome completo**
- **CPF**
- **RG**
- **Data de nascimento**
- **Gênero**
- **Estado civil**

### 1.2 Informações Profissionais
- **CRP (Conselho Regional de Psicologia)**
- **Especialidades** (múltipla seleção)
  - Psicologia Clínica
  - Psicologia Infantil
  - Terapia de Casal
  - Neuropsicologia
  - Transtornos de Ansiedade
  - Depressão
  - Psicologia Organizacional
  - Terapia Familiar
- **Formação acadêmica**
- **Cursos e certificações**
- **Experiência profissional**
- **Valor da consulta**
- **Duração da sessão**

### 1.3 Informações de Contato
- **Telefone principal**
- **WhatsApp**
- **Email**
- **Endereço residencial**

### 1.4 Informações da Clínica
- **Horários de atendimento**
- **Dias da semana disponíveis**
- **Foto profissional**
- **Biografia/apresentação**
- **Abordagem terapêutica**

### 1.5 Configurações do Sistema
- **Status** (ativo/inativo)
- **Permissões de acesso**
- **Configurações de notificação**

---

## 2. Cadastro de Atendidos (Pacientes)

### 2.1 Informações Pessoais
- **Nome completo**
- **CPF**
- **RG**
- **Data de nascimento**
- **Gênero**
- **Estado civil**
- **Profissão**

### 2.2 Informações de Contato
- **Telefone principal**
- **WhatsApp**
- **Email**
- **Endereço completo**
- **Contato de emergência**
  - Nome
  - Telefone
  - Grau de parentesco

### 2.3 Informações de Saúde
- **Plano de saúde** (se aplicável)
- **Número da carteirinha**
- **Medicamentos em uso**
- **Histórico de tratamentos psicológicos**
- **Condições médicas relevantes**
- **Alergias**

### 2.4 Relacionamento com Profissional
- **Profissional responsável** (seleção obrigatória)
  - Lista dropdown com todos os profissionais ativos
  - Busca por nome ou especialidade
- **Profissional que indicou** (opcional)
  - Lista dropdown com todos os profissionais
  - Campo de texto livre para indicação externa
- **Data do primeiro atendimento**
- **Status do tratamento**
  - Ativo
  - Pausado
  - Finalizado
  - Aguardando primeira consulta

### 2.5 Informações Administrativas
- **Forma de pagamento preferida**
- **Observações especiais**
- **Autorização para contato**
- **Termos de consentimento**
- **LGPD - Autorização uso de dados**

---

## 3. Funcionalidades de Integração

### 3.1 Vinculação Profissional-Paciente
- **Atribuição automática**: Ao cadastrar paciente, obrigatoriamente selecionar profissional responsável
- **Transferência de paciente**: Possibilidade de transferir paciente entre profissionais
- **Histórico de profissionais**: Manter registro de todos os profissionais que já atenderam o paciente

### 3.2 Sistema de Indicações
- **Rastreamento de indicações**: Registrar quando um profissional indica outro
- **Relatório de indicações**: Dashboard com métricas de indicações por profissional
- **Incentivos**: Sistema de bonificação por indicações (futuro)

### 3.3 Busca e Filtros
- **Busca de profissionais** por:
  - Nome
  - Especialidade
  - Disponibilidade
  - Avaliação
- **Busca de pacientes** por:
  - Nome
  - CPF
  - Telefone
  - Profissional responsável

---

## 4. Validações e Regras de Negócio

### 4.1 Validações de Cadastro
- **CPF válido e único** no sistema
- **CRP válido** para profissionais
- **Email único** por usuário
- **Telefone único** por usuário
- **Campos obrigatórios** claramente marcados

### 4.2 Regras de Negócio
- **Profissional inativo** não pode ser selecionado para novos pacientes
- **Paciente deve ter profissional responsável** definido
- **Histórico de alterações** deve ser mantido
- **Exclusão lógica**: registros não devem ser deletados fisicamente

---

## 5. Interface e Experiência do Usuário

### 5.1 Formulários
- **Progressão por etapas** para cadastros longos
- **Salvamento automático** de rascunhos
- **Validação em tempo real**
- **Campos com autocomplete** quando aplicável

### 5.2 Usabilidade
- **Busca inteligente** com sugestões
- **Filtros avançados** com múltiplos critérios
- **Visualização em cards** para melhor organização
- **Responsividade** para dispositivos móveis

---

## 6. Próximos Passos

### 6.1 Priorização
1. **Cadastro de Profissional** - Base do sistema
2. **Cadastro de Atendidos** - Funcionalidade principal
3. **Sistema de vinculação** - Integração entre cadastros
4. **Busca e filtros** - Facilitar gestão
5. **Relatórios básicos** - Acompanhamento

### 6.2 Considerações Técnicas
- **Banco de dados**: Estruturar relacionamentos entre entidades
- **API REST**: Endpoints para CRUD de profissionais e pacientes
- **Autenticação**: Controle de acesso baseado em perfis
- **Auditoria**: Log de todas as operações
- **Backup**: Estratégia de backup dos dados cadastrais

### 6.3 Cronograma Sugerido
- **Semana 1-2**: Cadastro de Profissional
- **Semana 3-4**: Cadastro de Atendidos
- **Semana 5**: Sistema de vinculação e indicações
- **Semana 6**: Busca, filtros e refinamentos
- **Semana 7**: Testes e ajustes finais

---

## 7. Observações Importantes

- **LGPD**: Todos os cadastros devem estar em conformidade com a Lei Geral de Proteção de Dados
- **Segurança**: Dados sensíveis devem ser criptografados
- **Auditoria**: Manter log de todas as alterações nos cadastros
- **Integrações futuras**: Preparar estrutura para integração com sistemas de agendamento
- **Escalabilidade**: Considerar crescimento do número de profissionais e pacientes 