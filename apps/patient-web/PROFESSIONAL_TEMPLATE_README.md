# Template de Páginas de Profissionais

Este documento explica como usar o template de páginas de profissionais para criar novas páginas de forma rápida e consistente.

## Estrutura do Template

### 1. Componente Base
- `ProfessionalPageTemplate.tsx`: Componente React que renderiza a página completa
- Usa os componentes modernos da landing page (LiquidGlassCard, LiquidGlassButton, etc.)
- Suporte a animações, particles background e design responsivo

### 2. Dados Estruturados
- Arquivos em `src/data/professionals/` contêm os dados de cada profissional
- Estrutura TypeScript tipada para consistência
- Fácil manutenção e atualização

### 3. Páginas Individuais
- Cada profissional tem sua própria rota em `src/app/[profissional]/`
- Apenas importa o template e passa os dados
- Código mínimo e reutilizável

## Como Criar uma Nova Página de Profissional

### Passo 1: Criar os Dados
Crie um novo arquivo em `src/data/professionals/nome-do-profissional.ts`:

```typescript
export const nomeProfissionalData = {
  id: "nome-profissional",
  name: "Nome Completo do Profissional",
  title: "Título Profissional",
  crp: "CRP XX/XXXXXX",
  experience: "X anos de experiência",
  description: "Descrição curta para cards/carrossel",
  about: "Texto completo sobre o profissional",

  education: [
    {
      degree: "Nome da Formação",
      institution: "Nome da Instituição"
    }
    // Adicione quantas formações quiser
  ],

  specializations: [
    {
      title: "Especialidade",
      description: "Descrição da especialidade"
    }
    // Adicione quantas especialidades quiser
  ],

  approaches: [
    {
      title: "Abordagem Terapêutica",
      description: "Descrição da abordagem"
    }
    // Adicione quantas abordagens quiser
  ],

  differentials: [
    {
      title: "Diferencial",
      description: "Descrição do diferencial"
    }
    // Adicione quantos diferenciais quiser
  ],

  contact: {
    whatsapp: "(XX) XXXXX-XXXX",
    phone: "(XX) XXXXX-XXXX",
    email: "profissional@acessapsi.com",
    address: "Endereço completo"
  },

  pricing: {
    individual: "R$ XXX,XX",
    couple: "R$ XXX,XX",
    family: "R$ XXX,XX"
  },

  testimonials: [
    {
      id: 1,
      name: "Nome do Paciente",
      content: "Depoimento do paciente",
      rating: 5,
      treatment: "Tipo de tratamento"
    }
    // Adicione quantos depoimentos quiser
  ]
};
```

### Passo 2: Criar a Página
1. Crie uma nova pasta em `src/app/nome-do-profissional/`
2. Crie o arquivo `page.tsx` com o conteúdo:

```typescript
"use client";

import React from 'react';
import ProfessionalPage from '../../components/ProfessionalPageTemplate';
import { nomeProfissionalData } from '../../data/professionals/nomeProfissional';

export default function NomeProfissionalPage() {
  return <ProfessionalPage professional={nomeProfissionalData} />;
}
```

### Passo 3: Atualizar a Navegação (opcional)
Se quiser adicionar o profissional à navegação principal:
1. Atualize o componente `ProfessionalsSection` em `src/components/ProfessionalsSection.tsx`
2. Adicione o novo profissional ao array de profissionais

## Campos Opcionais

### Avatar
- Campo `avatar` é opcional
- Se não fornecido, mostra iniciais do nome
- Caminho relativo à pasta `public/`

### Depoimentos
- Array `testimonials` pode estar vazio
- Se vazio, a seção de depoimentos não é renderizada
- Suporte a navegação automática e manual

### Seções Dinâmicas
- `education`: Lista de formações acadêmicas
- `specializations`: Áreas de atuação
- `approaches`: Abordagens terapêuticas
- `differentials`: Diferenciais do profissional

## Vantagens do Template

### 1. Consistência Visual
- Todas as páginas seguem o mesmo design
- Uso dos componentes modernos da landing page
- Animações e efeitos consistentes

### 2. Manutenibilidade
- Código centralizado no template
- Dados separados facilitam atualizações
- Mudanças no design afetam todas as páginas

### 3. Escalabilidade
- Fácil criação de novas páginas
- Suporte a diferentes tipos de profissionais
- Estrutura preparada para crescimento

### 4. Performance
- Componentes otimizados
- Lazy loading automático
- Bundle splitting por página

## Exemplo Completo

Veja os arquivos:
- `src/data/professionals/alexBassan.ts` - Dados do Alex Bassan
- `src/app/alexbassan/page.tsx` - Página do Alex Bassan
- `src/data/professionals/mariaSilva.ts` - Exemplo para Maria Silva
- `src/app/mariasilva/page.tsx` - Página exemplo

## Personalização

O template é flexível e pode ser personalizado:
- Cores podem ser ajustadas por profissional
- Seções podem ser adicionadas/removidas
- Layout pode ser modificado mantendo a estrutura base

Para personalizações específicas, crie uma variante do template ou passe props adicionais.
