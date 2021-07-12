## Enunciado do Desafio

Nesse desafio você trabalhará com backend e frontend juntos.


### Para isso:

- Crie um docker-compose.yaml que levante uma aplicação Nest.js e React juntos

- A aplicação Nest.js precisa rodar na porta 3000

- Aplicação React.js precisa rodar na porta 3001.

- Ao acessar http://localhost:3001 a aplicação React precisa consumir e listar "rotas" do endpoint do Nest.js: http://localhost:3000/routes.

- O endpoint http://localhost:3000/routes precisa retornar 5 rotas com os seguintes dados: 
    *  **title:** título da rota
    *  **startPosition:** contendo os atributos latitude e longitude
    *  **endPosition:** contendo os atributos latitude e longitude


## Configurar /etc/hosts

A comunicação entre as aplicações se dá de forma direta através da rede da máquina.
Para isto é necessário configurar um endereços que todos os containers Docker consigam acessar.

Acrescente no seu /etc/hosts (para Windows o caminho é C:\Windows\system32\drivers\etc\hosts):
```
127.0.0.1 host.docker.internal
```
Em todos os sistemas operacionais é necessário abrir o programa para editar o *hosts* como Administrator da máquina ou root.


## Como Executar ?

#### 1 - Execute o comando a seguir para subir todos os containers:

```
docker-compose up
```
Lista de containers que serão criados:


* app-frontend
* app-backend
* db
* pgadmin



#### 2 - Executar Migration

- Aguarde até que todos os containers estejam **UP** e você receba o seguinte erro **Unable to connect to the database.**
- Acesse o container ``app-backend`` com ``docker-compose exec app-backend bash``
- Execute o seguinte comando: ``npm run typeorm migration:run`` no termina do container
- Note: Isso necessário executar apenas uma vez desde que o volume do banco de dados  do container não seja removido


## Rotas do Backend

**Payload**
```json
{

        "title": string,
        "startPosition": {
            "latitude": number,
            "longitude": number
        },
        "endPosition": {
            "latitude": number,
            "longitude": number
        }
    }
```

**Host:** http://localhost:3000

| Método | Route | Parâmetros |
|--- |--- |--- |
| POST | ```/routes``` | Payload |
| GET | ```/routes/:[route_uuid]``` | ```uuid da rota```|
| PATCH | ```/routes/:[route_uuid]``` | ```uuid da rota``` + Payload |
| DELETE | ```/routes/:[route_uuid]``` | ```uuid da rota``` |


#### Portas Utilizadas

- 3000 - Backend
- 3001 - Frontend
- 5432 - PostgreSQL
- 9000 - PgAdmin

### Acesse ao PgAdmin

- Você pode acessar o PGAdmin no seu navegador através do seguinte endereço: http://localhost:9000 verifique os dados de acesso em docker-compose.yml
