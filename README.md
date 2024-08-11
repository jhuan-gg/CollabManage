# CollabManage

**CollabManage** is an application under development aimed at managing collaborative projects efficiently. The application offers an intuitive interface for creating, managing projects and tasks, as well as facilitating communication between team members. This README provides an overview of the project as well as instructions for installation, configuration, and use.

## Index

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation and Configuration](#installation-and-configuration)
  - [Backend Configuration](#backend-configuration)
  - [Frontend Configuration](#frontend-configuration)
- [Use](#use)
- [Contribution](#contribution)
- [License](#license)


## Description

**CollabManage** is a platform that aims to simplify the management of collaborative projects. Developed with React Native for the mobile interface, Node.js for the backend, and MySQL for the database, the application runs in Docker containers, which makes configuration and deployment easier. The goal is to provide a fluid and integrated experience for teams that need to coordinate projects and tasks.

## Features

- **Login Screen**: Interface for user authentication.
- **Registration Screen**: Allows new users to register on the platform.
- **Project Panel**: Overview of user projects, with options to view details.
- **Project Details Screen**: Displays detailed information about a specific project, including status, tasks and members.
- **Tasks Screen**: Manages tasks associated with projects, with the ability to add, edit and mark tasks as completed.
- **Chat Screen**: Facilitates communication between team members, with real-time messaging features.
- **Documents Screen**: Allows you to upload, view and manage documents related to projects.
- **User Settings Screen**: Personal user settings and preferences.
- **Project Creation Screen**: Interface for creating new projects and defining their properties.
- **Task Creation Screen**: Interface for adding new tasks to a project.
- **Forgot Your Password Screen**: Allows you to recover your password if you forget it.

## Technologies Used

- **Frontend**: React Native, Expo
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Containerization**: Docker
- **Dependency Management**: npm, Yarn
- **CRUD Method**: Create, Read, Update, Delete

## Installation and Configuration
### Backend Configuration

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/collabmanage.git
   cd collabmanage

2. Configure and start Docker for MySQL:
    ```bash
    docker-compose up -d
Docker will start a MySQL container with the settings provided in the docker-compose.yml file.

3. Install backend dependencies:
    ```bash
    backend cd
    npm install
4. Configure environment variables in the backend. Create a .env file in the backend folder with the following variables:
    ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=user
    DB_PASSWORD=password
    DB_NAME=collabmanage
5. Start the backend server:
    ```bash
    npm start
The backend will be available at the URL http://localhost:3000 by default.

### Frontend Configuration

1. Install frontend dependencies:
    ```bash
    cd Frontend
    npm install
2. Configure the API URL on the frontend. Open the src/api.js file and verify that the base URL is correct. The file must be:
    ```javascript
    import axios from 'axios';

    const api = axios.create({
        baseURL: 'http://localhost:3000', // Make sure this URL matches the backend
    });

    export default api;
3. Start the frontend development server:
    ```bash
    npm start
The frontend application will be available on the emulator or Android device.

4. To run on the Android emulator, run:
    ```bash
    expo start --android
Make sure the Android SDK is correctly installed and configured in your development environment.
# CollabManage

**CollabManage** é um aplicativo em desenvolvimento destinado a gerenciar projetos colaborativos de forma eficiente. A aplicação oferece uma interface intuitiva para criar, gerenciar projetos e tarefas, além de facilitar a comunicação entre membros da equipe. Este README fornece uma visão geral do projeto, bem como instruções para instalação, configuração e uso.

## Índice

- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Configuração](#instalação-e-configuração)
  - [Configuração do Backend](#configuração-do-backend)
  - [Configuração do Frontend](#configuração-do-frontend)
- [Uso](#uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Descrição

**CollabManage** é uma plataforma que visa simplificar a gestão de projetos colaborativos. Desenvolvido com React Native para a interface móvel, Node.js para o backend, e MySQL para o banco de dados, o aplicativo é executado em containers Docker, o que facilita a configuração e a implantação. O objetivo é proporcionar uma experiência fluida e integrada para equipes que precisam coordenar projetos e tarefas.

## Funcionalidades

- **Tela de Login**: Interface para autenticação de usuários.
- **Tela de Registro**: Permite o cadastro de novos usuários na plataforma.
- **Painel de Projetos**: Visão geral dos projetos do usuário, com opções para visualizar detalhes.
- **Tela de Detalhes do Projeto**: Exibe informações detalhadas sobre um projeto específico, incluindo status, tarefas e membros.
- **Tela de Tarefas**: Gerencia tarefas associadas aos projetos, com a capacidade de adicionar, editar e marcar tarefas como concluídas.
- **Tela de Chat**: Facilita a comunicação entre membros da equipe, com funcionalidades de mensagens em tempo real.
- **Tela de Documentos**: Permite o upload, visualização e gerenciamento de documentos relacionados aos projetos.
- **Tela de Configurações de Usuário**: Ajustes e preferências pessoais do usuário.
- **Tela de Criação de Projeto**: Interface para criar novos projetos e definir suas propriedades.
- **Tela de Criação de Tarefa**: Interface para adicionar novas tarefas a um projeto.
- **Tela de Esqueceu Sua Senha**: Permite a recuperação de senha em caso de esquecimento.

## Tecnologias Utilizadas

- **Frontend**: React Native, Expo
- **Backend**: Node.js, Express
- **Banco de Dados**: MySQL
- **Containerização**: Docker
- **Gerenciamento de Dependências**: npm, Yarn
- **Método CRUD**: Criar, Ler, Atualizar, Deletar

## Instalação e Configuração

### Configuração do Backend

1. Clone o repositório:
   ```bash
   git clone https://github.com/yourusername/collabmanage.git
   cd collabmanage

2. Configure e inicie o Docker para o MySQL:
    ```bash
    docker-compose up -d
O Docker irá iniciar um container MySQL com as configurações fornecidas no arquivo docker-compose.yml.

3. Instale as dependências do backend:
    ```bash
    cd backend
    npm install
4. Configure as variáveis de ambiente no backend. Crie um arquivo .env na pasta backend com as seguintes variáveis:
    ```bash
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=user
    DB_PASSWORD=password
    DB_NAME=collabmanage
5. Inicie o servidor backend:
    ```bash
    npm start
O backend estará disponível na URL http://localhost:3000 por padrão.

### Configuração do Frontend

1. Instale as dependências do frontend:
    ```bash
    cd Frontend
    npm install
2. Configure a URL da API no frontend. Abra o arquivo src/api.js e verifique se a URL da base está correta. O arquivo deve ser:
    ```javascript
    import axios from 'axios';

    const api = axios.create({
        baseURL: 'http://localhost:3000', // Certifique-se de que esta URL corresponde ao backend
    });

    export default api;
3. Inicie o servidor de desenvolvimento do frontend:
    ```bash
    npm start
A aplicação frontend estará disponível no emulador ou dispositivo Android.

4. Para rodar no emulador Android, execute:
    ```bash
    expo start --android
Certifique-se de que o Android SDK esteja corretamente instalado e configurado no seu ambiente de desenvolvimento.




