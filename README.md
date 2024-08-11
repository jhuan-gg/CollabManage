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





