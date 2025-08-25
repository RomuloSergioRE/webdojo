# 🧪 Testes Automatizados – WebDojo (Cypress)

Este repositório contém a aplicação **WebDojo** e sua suíte de **testes automatizados end-to-end (E2E)** desenvolvida com **[Cypress](https://www.cypress.io/)**.  

O objetivo é garantir a qualidade da aplicação por meio de cenários automatizados que validam funcionalidades críticas em diferentes resoluções de tela (desktop e mobile).

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório  
```bash
git clone <url-do-repositorio>
cd webdojo
```

### 2. Instalar dependências  
```bash
npm install
```

### 3. Subir a aplicação  
A aplicação **WebDojo** está no mesmo repositório. Para executá-la:  
```bash
npm run dev
```
A aplicação será disponibilizada em: **http://localhost:3000**

### 4. Executar os testes  
- Rodar todos os testes:
  ```bash
  npm test
  ```

- Rodar apenas os testes de login (desktop):  
  ```bash
  npm run test:login
  ```

- Rodar apenas os testes de login em **modo mobile**:  
  ```bash
  npm run test:login:mobile
  ```

---

## 📂 Estrutura do Projeto

Abaixo está a estrutura principal de pastas do Cypress no projeto:

```
cypress/
│── e2e/                  # Casos de teste (arquivos .cy.js)
│── fixtures/             # Massa de dados e arquivos para testes
│   ├── CEP.json
│   ├── consultancy.json
│   └── document.pdf
│── support/              # Suporte e configurações globais
│   ├── actions/          # Ações reutilizáveis
│   │   └── consultancy.js
│   ├── commands.js       # Comandos customizados do Cypress
│   ├── e2e.js            # Configuração global para e2e
│   └── utils.js          # Funções utilitárias
```

---

## 🛠️ Scripts Disponíveis

```json
"scripts": {
  "dev": "serve -s dist -p 3000",
  "test": "npx cypress run --config viewportWidth=1440, viewportHeight=900",
  "test:login": "npx cypress run --spec cypress/e2e/login.cy.js",
  "test:login:mobile": "npx cypress run --spec cypress/e2e/login.cy.js --config viewportWidth=414, viewportHeight=896"
}
```

- **`npm run dev`** → inicia a aplicação WebDojo.  
- **`npm test`** → executa todos os testes em resolução **desktop** (1440x900).  
- **`npm run test:login`** → executa apenas o fluxo de login (desktop).  
- **`npm run test:login:mobile`** → executa o fluxo de login em **modo mobile** (414x896).  

---

## 📑 Convenções de Testes

- Os arquivos de teste seguem o padrão: `*.cy.js` dentro de `cypress/e2e/`.  
- Arquivos de **massa de dados** ficam em `cypress/fixtures/`.  
- **Ações reutilizáveis** estão em `cypress/support/actions/`.  
- **Comandos customizados** do Cypress estão centralizados em `cypress/support/commands.js`.  
- **Funções utilitárias** estão em `cypress/support/utils.js`.  

---

## 📈 Boas Práticas

- Manter os testes independentes (sem dependência de execução de outro).  
- Usar **fixtures** para massa de dados.  
- Centralizar comandos repetitivos em `support/commands.js`.  
- Separar responsabilidades entre **testes**, **ações** e **utils** para melhor organização e manutenção.  
