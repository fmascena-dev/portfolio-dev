# 🚀 Portfólio Pessoal

*Este repositório contém o código-fonte do meu portfólio pessoal. O objetivo deste projeto é exibir minhas habilidades, projetos e informações de contato de forma profissional e visualmente atraente.*

---

## 🔧 Tecnologias Utilizadas

### Front-end
- **React.js**: *Biblioteca JavaScript para criação de interfaces de usuário.*
- **SCSS**: *Extensão de CSS com recursos adicionais para modularização e reutilização de código.*
- **AOS (Animate On Scroll)**: *Biblioteca para animações baseadas em scroll.*

### Outras Tecnologias
- **CSS Custom Properties (Variáveis)**: *Para consistência de estilo.*
- **React Icons**: *Biblioteca de ícones para melhorar a interface do usuário.*
- **Email Links e WhatsApp API**: *Para conexão rápida com o visitante.*

---

## 🎨 Estrutura do Projeto

### **Const.jsx**
**Arquivo responsável por armazenar links importantes:**
- *Link do WhatsApp;*
- *Link do LinkedIn;*
- *Link do GitHub;*
- *Link de e-mail;*

### **GlobalReset.scss**
**Arquivo para normalizar estilos e aplicar configurações globais como:**
- *Reset de margin e padding;*
- *Configuração de comportamento de scroll;*
- *Definição de cores, espaçamentos e gradientes utilizando variáveis CSS.*

### **App.jsx**
**Componente raiz do projeto que:**
- *Importa e aplica o estilo global (GlobalReset.scss);*
- *Inicializa a biblioteca de animação AOS;*
- *Renderiza os componentes principais na ordem:*
    - **Header;**
    - **Home;**
    - **Technologies;**
    - **Projects;**
    - **Contact;**
    - **About;**
    - **Footer.**
- *Renderiza elementos decorativos (áreas de gradiente e padrões)*

### Componentes Individuais

#### Header.jsx
- *Exibe a navegação principal do site com design responsivo;*
- *Inclui animações e transições suaves.*

#### Home.jsx
- *Área inicial do site com boas-vindas e introdução;*
- *Inclui animações personalizadas com a biblioteca AOS.*

#### Technologies.jsx
- *Exibe as tecnologias que domino (HTML, CSS, SCSS, Styled-Components, JavaScript, React, Vue.js);*
- *Usa cartões animados para uma apresentação interativa.*

#### Projects.jsx
- *Lista de projetos com links para o GitHub e páginas associadas;*
- *Inclui animações e efeitos visuais ao passar o mouse.*

#### Contact.jsx
- *Formulário de contato com campos para nome, e-mail, telefone e mensagem;*
- *Conexão direta com o WhatsApp, LinkedIn e e-mail.*

#### About.jsx
- *Sessão para apresentar informações pessoais e destacar experiências ou formação acadêmica.*

#### Footer.jsx
- *Rodapé do site com links para redes sociais e uma animação de texto;*
- *Contém ícones do WhatsApp, LinkedIn, GitHub e e-mail.*

---

## 🚀 Instalação e Uso

### Requisitos
- *Node.js e npm instalados na máquina.*

### Passos para Rodar o Projeto
1. **Clone o repositório:**
   ```
   git clone https://github.com/fmascena-dev/portfolio-dev.git
   ```

2. **Acesse o diretório do projeto:**
   ```
   cd portfolio-dev
   ```

3. **Instale as dependências:**
   ```
   npm install
   ```

4. **Inicie o projeto:**
   ```
   npm run dev
   ```

5. **Acesse no navegador:**
   ```
    http://localhost:3000
   ```

---

## 📊 Estrutura de Pastas
```
portfolio/
├── public/
├── src/
│   ├── Components/
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   ├── AboutStyles.scss
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   ├── ContactStyles.scss
│   │   ├── Footer/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.module.scss
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   ├── Header.module.scss
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   ├── HomeStyles.scss
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   ├── ProjectsStyles.scss
│   │   ├── Technologies/
│   │   │   ├── Technologies.jsx
│   │   │   ├── TechnologiesStyles.scss
│   ├── App.jsx
│   ├── Const.jsx
│   ├── GlobalReset.scss
│   ├── index.js
├── package.json
└── README.md
```

---

## 📢 Contato
- **WhatsApp**: [Clique aqui](https://wa.me/5521979298951?text=Ol%C3%A1%2C+vi+seu+portf%C3%B3lio+)
- **LinkedIn**: [linkedin.com/in/felipe-mascena](https://www.linkedin.com/in/felipe-mascena/)
- **GitHub**: [github.com/fmascena-dev](https://github.com/fmascena-dev)
- **E-mail**: [felipe.mascena.dev@gmail.com](mailto:felipe.mascena.dev@gmail.com)

---

## 🌟 Melhorias Futuras
- *Adicionar suporte para múltiplos idiomas;*
- *Criação do Backend para envio de mensagens para o meu email a partir da Seção Contato;*
- *Criar uma API para gerenciar projetos dinamicamente.*

---

Espero que este portfólio inspire outros desenvolvedores e ofereça uma experiência rica para os visitantes! E se quiser contribuir com o repositório, pode ficar a vontade, ficarei imensamente feliz em receber feedbacks para melhorias e/ou futuras melhorias.

