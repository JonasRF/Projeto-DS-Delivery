# Projeto-DS Delivery
### Projeto fullstack onde foi utilizado tecnologias como ecosistema Spring fazendo uso do framework Spring Boot, a linguagem de programação utilizada foi o Java no lado do servidor(Backend) e no lado do cliente foi utilizado a bibliotecas React, o Visual Studio foi a IDE utilizada para codar o frontend, entre outras tecnologias como TypeScript, HTML, CSS e BootStrap. A aplicação foi deployada utilizando-se da arquitetura devops; como Docker, Heroku e AWS. ###

## Modelo conceitual
![Image](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/modelo-conceitual.png "Modelo conceitual")

## Padrão camadas adotado

![Image](https://raw.githubusercontent.com/devsuperior/sds2/master/assets/camadas.png "Padrão camadas")

## front end web
#### Telas do sistema
https://www.figma.com/file/9KM3LJbfPU5OH4kEWbPqnC/SDS2-DevSuperior

### Criando projeto:

 Versão atual utilizando node 16 eo vite para auxiliar nas tarefas de configuração 
 yarn create vite frontend --template react-ts

### URL de busca de endereços do MapBox:

https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}

### Conteúdo do arquivo _redirects:
/*  /index.html  200
