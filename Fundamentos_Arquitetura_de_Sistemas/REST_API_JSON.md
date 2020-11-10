## Objetivos da aula

 1. O que é REST
 2. Vantagens em se utilizar REST
 3. O que é API
 4. Entendendo os métodos utilizados pelo REST
 5. Estrutura de um REST
 6. Estrutura de um JSON

## REST

 - REST - Representational State Transfer.
 >Tradução: Transferência Representacional de Estado.
 - É um estilo de arquitetura de software que define a implementação de um serviço web.
 - Podem trabalhar com os formatos XML, JSON ou outros.

## Vantagens do REST

 - Permite integrações entre aplicações e também entre cliente e servidor em páginas web e aplicações.
 - Utiliza dos métodos HTTP para definir a operação que está sendo efetuada.
 - Arquitetura de fácil compreensão.

## Estrutura do REST
>**Cliente** é quem está consumindo o serviço

>**Servidor** é quem está disponibilizando o serviço

>O cliente faz uma requisição HTTP (GET, POST, PUT, DELETE) para o servidor

>O servidor retorna um _código de operação_ e também retonar uma _mensagem_ (Texto, JSON, XML, HTML...)

>Quando uma aplicação web disponibiliza um conjunto de rotinas e padrões através de serviços web podemos chamar esse conjunto de API.

## API
 - API - Application Programming Interface
 - São conjuntos de rotinas documentados e disponibilizados por uma aplicação para que outras aplicações possam consumir suas funcionalidades.
 - Ficou popular com o aumento dos serviços web.
 - As maiores plataformas de tecnologia disponibilizam APIs para acessos de suas funcionalidades, algumas delas são: Facebook, Twitter, Telegram, Whatsapp, GitHub...

## Principais métodos HTTP

 - **GET** - Solicita a representação de um recurso.
 - **POST** - Solicita a criação de um recurso.
 - **DELETE** - Solicita a exclusão de um recurso.
 - **PUT** - Solicita a atualização de um recurso.

>Para um Serviço Web ser considerado REST ele deve seguir os princípios acima (Seguir a arquitetura)

## JSON

 - **JSON** - **J**ava**S**cript **O**bject **N**otation
 - Formatação leve utilizada para troca de mensagens entre sistemas.
 - Usa-se de uma estrutura de chave e valor e também de listas ordenadas.
 - Um dos formatos mais populares e mais utilizados para troca de mensagens entre sistemas.

![Estrutura JSON](https://github.com/glauberfernandes/bootcamp-everis-fullstack/blob/master/Fundamentos_Arquitetura_de_Sistemas/exampleJSON.png)