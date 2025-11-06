#  CEPFácil

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Emotion](https://img.shields.io/badge/Emotion-DB7093?style=for-the-badge&logo=emotion&logoColor=white)](https://emotion.sh/docs/introduction)
[![API ViaCEP](https://img.shields.io/badge/API-ViaCEP-blue?style=for-the-badge)](https://viacep.com.br/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

> Uma aplicação moderna e intuitiva para buscar informações de endereço a partir do CEP.

🌐 **Acesse o projeto:** [https://cep-facil-murex.vercel.app/](https://cep-facil-murex.vercel.app/)

---

## Visão Geral  
O **CEPFácil** é uma aplicação web desenvolvida com **React** e **Vite**, que permite consultar CEPs de forma simples, rápida e eficiente.  
A interface foi projetada com foco em **usabilidade, velocidade e experiência do usuário**, utilizando **Emotion** para estilização e **armazenamento local** para histórico de buscas.

---

## 🧩 Funcionalidades  
-  **Busca rápida** de CEPs brasileiros.  
-  **Retorno instantâneo** dos dados de endereço (logradouro, bairro, cidade, estado, etc).  
-  **Validação automática** do formato do CEP.  
-  **Histórico de buscas recentes**, armazenado localmente.  
-  **Feedback visual** para erros ou CEPs inválidos.  
-  **Design responsivo** e adaptável a diferentes dispositivos.  

---

## 🛠️ Tecnologias utilizadas  
-  **React** — biblioteca JavaScript para construção da interface.  
-  **Vite** — ferramenta de build moderna e otimizada.  
-  **Emotion** — biblioteca CSS-in-JS para estilização.  
-  **API ViaCEP** — fornecedora dos dados de endereço.  
-  **Vercel** — plataforma de deploy e hospedagem.  

---

## 💻 Como usar  

### 1. Clonar o repositório  
git clone https://github.com/seu-usuario/cep-facil.git
### 2. Acessar o diretório do projeto
cd cep-facil
### 3. Instalar as dependências
npm install
### 4. Rodar o projeto localmente
npm run dev
### 5. Acessar no navegador
O Vite exibirá a URL local, geralmente:
http://localhost:5173

📂 Estrutura do Projeto
```bash
cep-facil/
│
├── public/                 
├── src/
│   ├── assets/             
│   ├── components/         
│   ├── pages/              
│   ├── styles/            
│   ├── index.html/                
│   ├── App.jsx             
│   └── main.jsx            
│
├── package.json            
├── vite.config.js          
├── .gitignore              
└── README.md              
