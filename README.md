# Diretório de estudo inicial do Redux: 
##### Gerenciamento de estados no React

```
Para rodar o projeto: npm start

```

Num projeto, possuímos uma árvore de componentes. Sem o uso do Redux, os estados são acessados por meio da comunicação direta/indireta. Com o Redux, tem-se a possibilidade desses estados serem acessados diretamente. 
Não temos um estado dentro do componente, mas sim externamente.
O componente pode modificar esse estado e os componentes que utilizam podem acessar.

> Faz sentido usar o estado de maneira isolada, no entando, caso ele só dependa daquele componente.

Nós temos o seguinte fluxo com o Redux:

Minha Ação --> Action Creator --> Action [type, payload] --> Dispatch[lista de reducers]

Temos então que:

Action creator: é uma função;
retorna uma action;
é síncrona - não podemos retornar uma promise;

action: é um objeto;
possui um atrib type (é obrigatório)
também pode ter dados;

reducers:
são funções puras - geramos novas versoes. por exemplo: recebemos um objeto, ele não será alterado, mas geramos um clone ‘atualizado’

estado: é um objeto chave-valor, podemos ter diversos atributos

como o estado é gerado: a partir dos reducers 



