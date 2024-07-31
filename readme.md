## Baixar Choco
Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

## Baixar node
choco install nodejs

## instalar npm
npm install

## instalar vue 
npm install -g @vue/cli
______________________________________________
## criar projeto vue  com diretorio 
vue create meu-projeto-vue

## entre no projeto
cd nome-do-seu-projeto
____________________________________________
## se o diretorio ja existe execute somente 
vue create .

## confirme quando perguntar se  você quer criar um projeto no dir atual

## nao esqueça a selecionar o router "com space"

## selecter yes para history router

## dedicade config files

## nao salvar como pre set para furturos projetos

## Compiles and hot-reloads for development
npm run serve

## Compiles and minifies for production
npm run build

## Lints and fixes files
npm run lint

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

____________________________________________________Baixar Libs________________________________________

## npm install bootstrap bootstrap-vue
Para usar o Bootstrap no Vue

## 1 - npm install json-server
Funciona como um db em um arquivo json vide db/db.json              
e possivel acessar o conteudo do db(api) pelos end-points
## 2 - npm run backend
http://localhost:8080/ingredientes
http://localhost:3000/status
http://localhost:3000/burgers



