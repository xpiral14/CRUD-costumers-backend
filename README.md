# BACKEND DO TESTE 3LM
## Sobre o desenvolvimento
### Bibliotecas usadas
- Express
- MariaDB
- Sequelize-Typescript
- cors
- dotenv
  
  1. Clone o repositório para o seu sistema operacional

    ```bash
    git clone httpsgithub.comxpiral14teste-3lm-backend
    ```

2. Entre no diretório recém clonado e instale as dependências do projeto com seu gerenciador de pacotes e espere terminar

    ```bash
    cd teste-3lm-backend & yarn
    ```
    ou 
     ```bash
    cd teste-3lm-backend & npm install
    ```
3. Após o término, renomeie o arquivo na pasta raíz `.example.env` para `.env`

4. Entre nesse arquivo e configure as variáveis de conexão do banco de dados de acordo com o seu sistema.
    ```markdown
    #NODE_ENV CONFIG

    # Ambiente em que o node está rodando.
    NODE_ENV=development                


    #APP CONFIG

    # Porta de execução da aplicação
    APP_PORT=2004

    # url do sistema (coloque a porta de acordo com a variável de ambiente APP_PORT)
    APP_URL=httplocalhost1234       


    #DATABASE CONFIG

    # Porta em que seu banco MariaDB está rodando
    DB_PORT= 

    # Nome de usuário do seu banco de dados
    DB_USER=                        

    # Senha de usuário do seu banco de dados
    DB_PASS=                   

    # Onde seu banco de dados está hospedado
    DB_HOST=            

    # Nome da database dentro do seu banco de dados
    DB_NAME=                                  
    ```
5. Agora execute o comando 

    ```bash
        yarn dev
    ```
    ou
    ```bash
        npm run dev
    ```
6. caso esteja tudo certo, será imprimido as seguintes mensagens em seu console
    ```bash
    Banco de dados conectado com sucesso
    Servidor iniciou na porta SUA_PORTA
    ```

### End Points
- Cargos
    ``` bash
    VERBO HTTP      URL            Descrição
    GET             cargos        - Obtém cargos
    GET             cargosid    - Obtém cargo pelo id
    POST            cargos        - Cadastra novo cargo
    PUT             cargosid    - Atualiza cargo
    DELETE          cargosid    - Deleta cargo
    ```
- Funcionários
    ``` bash
    VERBO HTTP  URL                Descrição
    GET         funcionarios      - Obtém funcionarios
    GET         funcionariosid  - Obtém funcionario 
    POST        funcionarios      - Cadastra funcionario
    PUT         funcionariosid  - Atualiza funcionario
    DELETE      funcionariosid  - Deleta funcionario
'   ```