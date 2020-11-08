# Objetivos da aula

 1. O que é SOAP
 2. As vantagens de se utilizar SOAP
 3. O que é XML
 4. Entender a estrutura de uma mensagem SOAP

## SOAP
 - SOAP - Simple Object Access Protocol (tradução: 
Protocolo de acesso a objetos simples )
 - É um protocolo baseado em XML para acessar serviços web principalmente por HTTP.
 - Pode-se dizer que SOAP é uma definição de como serviços web se comunicam
 - Foi desenvolvido para facilitar  integrações entre aplicações.


## Vantagens
 - Permite integrações entre aplicações, independente de linguagem, pois usa como linguagem comum o XML.
 - É independente de plataforma e software.
 - Meio de transporte genérico, ou seja, pode ser usado por outros protocolos além do HTTP.

## XML

 - XML - Extensible Markup Language
 - É uma linguagem de marcação criada na década de 90 pela W3C
 - Facilita a separação de conteúdo
 - Não tem limitação de criação de tags
 - Linguagem comum para integrações entre aplicações

 >Com SOAP sempre será utilizado o XML.

## Estrutura SOAP
 - O "SOAP Message" possui uma estrutura única que deve sempre ser seguida.

 ![estrutura SOAP](https://github.com/glauberfernandes/bootcamp-everis-fullstack/blob/master/Fundamentos_Arquitetura_de_Sistemas/estruturaSOAP.jpg)

 - **SOAP Envelope** é o primeiro elemento do documento e é usado para encapsular toda a mensagem SOAP.
 - **SOAP Header** é o elemento onde possui informações de atributos e metadados da requisição.
 >Por exemplo: IP de origem, DNS, credenciais de autenticação, token...
 - **SOAP Body** é o elemento que contém os detalhes da mensagem.
 >Onde fica o conteúdo da mensagem.

## Mensagem SOAP
```
<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
    <soap:Header>
    </soap:Header>
    <soap:Body>
        <m:MetodoEndereco xmlns:m="http://www.example.org/endereco">
            <m:Cidade>Rio de Janeiro</m:Cidade>
            <m:CEP>99999-99</m:CEP>
            <m:Logradouro>Avenida Atlântida</m:Logradouro>
            <m:Numero>99</m:Numero>
        </m:Endereco>
    </soap:Body>
</soap:Envelope>
```