# Serviços Web

## Objetivos da aula

 1. O que são Serviços Web
 2. As vantagens de se utilizar Serviços Web
 3. Tecnologias mais utilizadas para desenvolvimento de Serviços Web

## Serviços Web

 - Serviços Web ou Web Services são soluções para aplicações se comunicarem independente de linguagem, softwares e hardwares utilizados.

 - Inicialmente, Serviços Web foram criados para troca de mensagens utilizando a linguagem XML (Extensible Markup Language) sobre o protocolo HTTP sendo identificado por URI(Uniform Resource Identifier).

 - Podemos dizer que Serviços Web são API's que se comunicam por meio de redes sobre o protocolo HTTP.

## Exemplos XML e JSON

### XML
```
<endereco>
	<cep>9999-99</cep>
	<bairro>Jardim Paulista</bairro>
	<logradouro>Av. Paulista</logradouro>
	<cidade>São Paulo</cidade>
	<numero>99</numero>
</endereco>
```

### JSON
```
{
	"endereco": {
		"cep": "99999-99",
		"logradouro": "Av. Paulista",
		"bairro": "Jardim Paulista",
		"cidade": "São Paulo",
		"numero": 99
	}
}
```

## Vantagens

 - Linguagem comum
 - Integração
 - Reutilização de implementação
 - Segurança
 - Custos

## Principais Tecnologias

 - SOAP (muito atrelado ao XML)
 - REST (muito atrelado ao JSON)
 - XML
 - JSON
