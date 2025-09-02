# CSS Architecture - Acessa Psi

## Estrutura Organizada de CSS

Este projeto utiliza uma arquitetura CSS modular e organizada, separada em múltiplos arquivos para facilitar a manutenção e escalabilidade.

### 📁 Estrutura dos Arquivos CSS

```
src/app/styles/
├── base.css          # Variáveis CSS, resets e configurações fundamentais
├── typography.css    # Estilos de texto, headings e tipografia
├── animations.css    # Todas as animações e keyframes
├── glass.css         # Efeitos de vidro (glassmorphism)
├── utilities.css     # Classes utilitárias e helpers
└── layout.css        # Estilos de layout específicos
```

### 🎨 Arquitetura

#### 1. **base.css**
- Variáveis CSS customizadas (CSS Custom Properties)
- Configurações fundamentais (html, body)
- Tema único: Light Mode
- Scrollbar customizado
- Estados de foco

#### 2. **typography.css**
- Sistema de tipografia escalável
- Headings (h1-h6) com estilos consistentes
- Classes de texto responsivas
- Gradientes de texto

#### 3. **animations.css**
- Todas as animações CSS (keyframes)
- Classes de animação utilitárias
- Transições suaves
- Efeitos de movimento

#### 4. **glass.css**
- Efeitos de glassmorphism
- Botões com efeito vidro
- Cards com blur
- Interações hover/touch

#### 5. **utilities.css**
- Classes utilitárias para botões
- Cards e componentes básicos
- Efeitos de hover
- Utilitários responsivos

#### 6. **layout.css**
- Estilos específicos de layout
- Navegação
- Componentes estruturais
- Backgrounds especiais

### 🎯 Benefícios da Arquitetura

- **Manutenibilidade**: Cada arquivo tem responsabilidade única
- **Escalabilidade**: Fácil adicionar novos estilos
- **Performance**: Imports organizados evitam CSS duplicado
- **Consistência**: Variáveis centralizadas garantem uniformidade
- **Tema Único**: Foco no Light Mode, sem complexidade de dark mode

### 🚀 Como Usar

Os estilos são automaticamente importados no `globals.css`:

```css
@import './styles/base.css';
@import './styles/typography.css';
@import './styles/animations.css';
@import './styles/glass.css';
@import './styles/utilities.css';
@import './styles/layout.css';
```

### 📝 Convenções

- **Variáveis CSS**: Usar `--nome-variavel` para propriedades customizáveis
- **Classes**: Prefiro classes semânticas e descritivas
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: Estados de foco sempre incluídos

### 🔧 Desenvolvimento

Para adicionar novos estilos:

1. Identifique qual arquivo é mais apropriado
2. Mantenha consistência com o padrão existente
3. Use variáveis CSS quando possível
4. Teste em diferentes dispositivos

### 🎨 Paleta de Cores (Light Mode Only)

```css
--bg-primary: 248, 250, 252    /* slate-50 */
--bg-secondary: 241, 245, 249  /* slate-100 */
--bg-accent: 226, 232, 240     /* slate-200 */
--foreground-rgb: 15, 23, 42   /* slate-900 */
--accent-primary: 59, 130, 246 /* blue-500 */
```

Esta arquitetura garante que o projeto seja fácil de manter, escalar e modificar, com foco na experiência do usuário em tema claro.
