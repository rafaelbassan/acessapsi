# Diretrizes de Design - Site da Clínica de Psicologia

## 📋 Visão Geral

Este documento estabelece as diretrizes visuais e de UX para transformar o site atual de um design genérico para algo específico e apropriado para uma clínica de psicologia. O objetivo é criar uma identidade visual que transmita confiança, profissionalismo, acolhimento e bem-estar.

## 🎨 Paleta de Cores Específica para Psicologia

### Cores Primárias
```css
/* Verde Terapêutico - Calma e crescimento */
--psychology-green: #059669;      /* Verde médio */
--psychology-green-light: #10b981; /* Verde claro */
--psychology-green-dark: #047857;  /* Verde escuro */

/* Azul Confiança - Serenidade e profissionalismo */
--psychology-blue: #0284c7;       /* Azul médio */
--psychology-blue-light: #0ea5e9; /* Azul claro */
--psychology-blue-dark: #0369a1;  /* Azul escuro */

/* Roxo Sabedoria - Introspecção e transformação */
--psychology-purple: #7c3aed;     /* Roxo médio */
--psychology-purple-light: #8b5cf6; /* Roxo claro */
--psychology-purple-dark: #5b21b6; /* Roxo escuro */
```

### Cores Secundárias
```css
/* Tons de Terra - Estabilidade e acolhimento */
--warm-beige: #f5f5dc;
--soft-brown: #8b7355;
--warm-gray: #6b7280;

/* Tons de Saúde Mental */
--mindful-teal: #14b8a6;
--therapeutic-lavender: #a78bfa;
--wellness-sage: #84cc16;
```

### Cores Neutras Especializadas
```css
/* Base para conteúdo terapêutico */
--therapy-white: #fefefe;
--calm-gray-50: #f8fafc;
--calm-gray-100: #f1f5f9;
--calm-gray-200: #e2e8f0;
--professional-gray: #475569;
--trust-dark: #1e293b;
```

## 🖼️ Elementos Visuais Específicos

### 1. Ícones e Símbolos Apropriados
- **Mente e Cérebro**: Brain, Users, Heart
- **Crescimento**: Sprout, TrendingUp, Target
- **Proteção/Segurança**: Shield, Lock, CheckCircle
- **Conexão Humana**: Users, MessageCircle, Handshake
- **Bem-estar**: Heart, Smile, Sun
- **Equilíbrio**: Scale, Yin-Yang (discreto)

### 2. Imagens e Fotografias
- **Evitar**: Imagens genéricas de negócios, apertos de mão corporativos
- **Preferir**: 
  - Imagens de natureza (plantas, jardins, água)
  - Pessoas em momentos de reflexão ou calma
  - Ambientes acolhedores e iluminados
  - Texturas suaves e orgânicas

## 🎯 Componentes Específicos para Psicologia

### Hero Section - Reformulação
```tsx
// Estrutura sugerida para a Hero Section
const psychologyHeroElements = {
  headline: "Cuidando da sua mente, transformando sua vida",
  subheadline: "Psicoterapia humanizada com profissionais especializados",
  visualElements: [
    "Imagem de ambiente terapêutico acolhedor",
    "Ícones sutis de bem-estar mental",
    "Cores calmas e reconfortantes"
  ],
  ctaButtons: [
    "Agende sua consulta",
    "Conheça nossa abordagem"
  ]
}
```

### Seções Específicas para Adicionar/Modificar

#### 1. Seção "Nossa Abordagem Terapêutica"
```css
.therapeutic-approach {
  background: linear-gradient(135deg, var(--psychology-green-light), var(--psychology-blue-light));
  color: white;
  padding: 4rem 0;
}
```

#### 2. Seção "Especialidades Clínicas"
- Ansiedade e Transtornos de Humor
- Terapia de Casal e Família
- Psicologia Infantil e Adolescente
- Transtornos Alimentares
- Luto e Perda
- Desenvolvimento Pessoal

#### 3. Seção "Ambiente Terapêutico"
- Fotos do consultório
- Descrição do ambiente acolhedor
- Políticas de privacidade e sigilo

## 🔤 Tipografia Terapêutica

### Fonte Principal
```css
/* Fonte mais humanizada e menos corporativa */
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

:root {
  --font-primary: 'Source Sans Pro', system-ui, sans-serif;
  --font-heading: 'Source Sans Pro', system-ui, sans-serif;
}
```

### Hierarquia de Texto
```css
.therapy-heading {
  font-weight: 600;
  line-height: 1.2;
  color: var(--psychology-blue-dark);
}

.therapy-body {
  font-weight: 400;
  line-height: 1.6;
  color: var(--professional-gray);
}

.therapy-subtitle {
  font-weight: 300;
  color: var(--warm-gray);
}
```

## 🎨 Estilo de Cards e Componentes

### Cards de Profissionais
```css
.therapist-card {
  background: linear-gradient(145deg, #ffffff, #f8fafc);
  border: 1px solid var(--psychology-green-light);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(5, 150, 105, 0.1);
  transition: all 0.3s ease;
}

.therapist-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(5, 150, 105, 0.15);
}
```

### Botões Terapêuticos
```css
.therapy-btn-primary {
  background: linear-gradient(135deg, var(--psychology-green), var(--psychology-blue));
  color: white;
  border-radius: 12px;
  padding: 12px 24px;
  transition: all 0.3s ease;
}

.therapy-btn-secondary {
  background: transparent;
  border: 2px solid var(--psychology-green);
  color: var(--psychology-green);
  border-radius: 12px;
}
```

## 🏥 Elementos de Confiança Médica

### Certificações e Credenciais
```tsx
const trustElements = {
  crpNumber: "CRP 06/123456",
  certifications: [
    "Especialista em Terapia Cognitivo-Comportamental",
    "Formação em Psicologia Sistêmica",
    "Pós-graduação em Psicologia Clínica"
  ],
  associations: [
    "Conselho Regional de Psicologia",
    "Associação Brasileira de Psicoterapia"
  ]
}
```

### Indicadores de Segurança
- Selo de privacidade
- Política de sigilo profissional
- Certificados de formação visíveis
- Depoimentos reais (com autorização)

## 🌱 Elementos de Bem-estar e Crescimento

### Metáforas Visuais
- **Plantas e Crescimento**: Símbolos de desenvolvimento pessoal
- **Ondas e Fluidez**: Representando o fluxo emocional
- **Círculos e Formas Orgânicas**: Continuidade e ciclos de vida
- **Luz e Claridade**: Insights e compreensão

### Micro-interações
```css
.growth-animation {
  animation: gentle-float 3s ease-in-out infinite;
}

@keyframes gentle-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

## 📱 Responsividade Especializada

### Mobile-First para Terapia
- Botões de contato emergencial facilmente acessíveis
- Informações de crise claramente visíveis
- Interface simplificada para momentos de vulnerabilidade

## 🎭 Tom e Voz do Conteúdo

### Linguagem Terapêutica
- **Evitar**: Jargões médicos excessivos, linguagem fria
- **Usar**: Linguagem acolhedora, empática e profissional
- **Foco**: Bem-estar, crescimento, transformação, acolhimento

### Exemplos de Textos Reformulados

#### Antes (genérico)
"Oferecemos soluções inovadoras para seus problemas"

#### Depois (específico para psicologia)
"Acompanhamos você na jornada de autoconhecimento e bem-estar emocional"

## 🔧 Implementação Técnica

### Variáveis CSS a Adicionar
```css
:root {
  /* Cores específicas para psicologia */
  --psychology-primary: #059669;
  --psychology-secondary: #0284c7;
  --psychology-accent: #7c3aed;
  
  /* Efeitos terapêuticos */
  --therapy-shadow: 0 4px 20px rgba(5, 150, 105, 0.1);
  --therapy-border-radius: 16px;
  --therapy-transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Classes Utilitárias Específicas
```css
.therapy-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.therapy-section {
  padding: 4rem 0;
  background: var(--calm-gray-50);
}

.therapy-gradient {
  background: linear-gradient(135deg, var(--psychology-green-light), var(--psychology-blue-light));
}
```

## 📊 Métricas de Sucesso

### Indicadores de UX Terapêutica
- Taxa de conversão para agendamentos
- Tempo de permanência nas páginas
- Interação com conteúdo educativo
- Feedback qualitativo dos usuários

## 🎯 Próximos Passos

### Fase 1: Reformulação de Cores e Tipografia
1. Implementar nova paleta de cores
2. Alterar tipografia para Source Sans Pro
3. Ajustar componentes principais

### Fase 2: Conteúdo Especializado
1. Reescrever textos com foco terapêutico
2. Adicionar seções específicas de psicologia
3. Incluir elementos de confiança médica

### Fase 3: Micro-interações e Detalhes
1. Implementar animações suaves
2. Adicionar elementos visuais terapêuticos
3. Otimizar para dispositivos móveis

### Fase 4: Testes e Validação
1. Testes com usuários reais
2. Validação com profissionais da área
3. Ajustes baseados em feedback

## ✅ Implementações Realizadas (Setembro 2025)

### 🎨 Mudanças de Design Implementadas

#### 1. Nova Paleta de Cores Terapêuticas
- **Verde Terapêutico (therapy)**: `#059669` - Calma e crescimento
- **Azul Confiança (trust)**: `#0284c7` - Serenidade e profissionalismo  
- **Roxo Sabedoria (wisdom)**: `#7c3aed` - Introspecção e transformação
- Removidas cores muito "tech" como neons e gradientes agressivos

#### 2. Layout Simplificado e Humanizado
- **HeroSection**: Texto mais direto e acolhedor, sem elementos muito decorativos
- **Navigation**: Design mais limpo, foco na funcionalidade
- **Componentes**: Menos efeitos visuais, mais legibilidade

#### 3. Conteúdo Específico para Psicologia
- **Linguagem terapêutica**: Textos mais empáticos e menos corporativos
- **Seções especializadas**: Criadas seções específicas como "Como funciona a psicoterapia"
- **FAQ contextualizado**: Perguntas reais sobre processo terapêutico

#### 4. Componentes Criados/Atualizados
- ✅ `SimpleHeroSection.tsx` - Hero mais limpo e direto
- ✅ `SimpleAboutSection.tsx` - Sobre mais humanizado  
- ✅ `SpecialtiesSection.tsx` - Especialidades clínicas
- ✅ `HowTherapyWorksSection.tsx` - Como funciona a terapia
- ✅ `SimpleBenefitsSection.tsx` - Benefícios simplificados
- ✅ `SimpleProfessionalsSection.tsx` - Apresentação do profissional
- ✅ `SimpleFAQSection.tsx` - FAQ contextualizado
- ✅ `SimpleContactSection.tsx` - Contato direto e simples
- ✅ `SimpleNavigation.tsx` - Navegação clean

#### 5. Estilo Visual Baseado em Referência
- Inspirado no site edilsonguarnieri.com
- Layout mais limpo e menos "dashboard"
- Tipografia mais leve (font-light)
- Menos gradientes e efeitos
- Mais espaço em branco
- Cards mais simples

### 🎯 Melhorias de UX Específicas

#### Linguagem Terapêutica
- **Antes**: "Soluções inovadoras para seus problemas"
- **Depois**: "Cuidando da sua mente, transformando sua vida"

#### Elementos de Confiança
- CRP em destaque
- Sigilo profissional garantido
- Primeira conversa sem compromisso
- Linguagem acolhedora

#### Navegação Simplificada
- Menu com itens essenciais
- CTA direto para WhatsApp
- Scrolling suave entre seções

### � Responsividade Melhorada
- Design mobile-first
- Botões de contato acessíveis
- Layout adaptável para todos os dispositivos

---

## ✅ Checklist de Implementação Atualizado

- [x] Implementar nova paleta de cores
- [x] Alterar tipografia principal  
- [x] Reformular Hero Section
- [x] Adicionar seção de especialidades
- [x] Incluir elementos de confiança
- [x] Otimizar cards de profissionais
- [x] Simplificar componentes complexos
- [x] Remover elementos muito "tech"
- [x] Testar responsividade
- [ ] Validar com profissionais
- [ ] Coletar feedback de usuários

### 🚀 Próximos Passos
1. Adicionar testimonials reais (com autorização)
2. Incluir mais fotos do ambiente terapêutico
3. Criar página de agendamento online
4. Adicionar blog com conteúdo psicoeducativo
5. Implementar chat online para primeira conversa

---

*Última atualização: Setembro 2, 2025*

### Sites de Psicologia Bem-Sucedidos
- BetterHelp (simplicidade e acolhimento)
- Psychology Today (profissionalismo)
- Headspace (bem-estar visual)

### Pesquisas sobre Cores em Ambientes Terapêuticos
- Verde: Reduz ansiedade e promove calma
- Azul: Transmite confiança e estabilidade
- Tons neutros: Criam ambiente seguro

---

*Documento criado em: Setembro 2025*
*Última atualização: [Data da implementação]*

## ✅ Checklist de Implementação

- [ ] Implementar nova paleta de cores
- [ ] Alterar tipografia principal
- [ ] Reformular Hero Section
- [ ] Adicionar seção de especialidades
- [ ] Incluir elementos de confiança
- [ ] Otimizar cards de profissionais
- [ ] Implementar micro-interações
- [ ] Testar responsividade
- [ ] Validar com profissionais
- [ ] Coletar feedback de usuários
