## auditar falhas e vunerabilidades
npm audit

## corrigir falha 
npm audit fix

## corrigir falha mesmo que entre em conflito com seu codigo atual
npm audit fix --force
_________________________________________________________________________________
## 1 - Verifique as dependências desatualizadas: 
Use o comando npm outdated para listar as dependências que estão desatualizadas1.

## 2 - Atualize as dependências:
Use o comando npm update para atualizar as dependências para a versão mais recente1.

## 3 - atualizar um pacote individualmente
npm update nome-pacote

## 4 - atualizar um pacote individualmente com um verão especifica
npm update nome-pacote@3.1

## 5 - atualizar o pacote para ultima versão
npm install nome-pacote@latest1

______________________________Bootstrap Install___________________________________
npm install bootstrap bootstrap-vue

## insira o conteúdo em src\main.js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';