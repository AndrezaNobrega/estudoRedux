# Diretório de estudo inicial do Redux: Gerenciamento de estados no React

```
Para rodar o projeto: npm start

```

Num projeto, possuímos uma árvore de componentes. Sem o uso do Redux, os estados são acessados por meio da comunicação direta/indireta. Com o Redux, tem-se a possibilidade desses estados serem acessados diretamente. 
Não temos um estado dentro do componente, mas sim externamente.
O componente pode modificar esse estado e os componentes que utilizam podem acessar.

> Faz sentido usar o estado de maneira isolada, no entando, caso ele só dependa daquele componente.

Nós temos o seguinte fluxo com o Redux:

**Minha Ação --> Action Creator --> Action[type, payload] --> Dispatch[lista de reducers]**

Temos então que:

- **Action creator:**
    - é uma função;
    - retorna uma action;
    - é síncrona - não podemos retornar uma promise;
>No caso desse exemplo, temos que a action creator está no arquivo numeros.js, onde temos as duas funções de alterar valor mínimo e o máximo.

- **action:**
    - Contem as informações do objeto disparado;
    - é um objeto;
    -  possui um atrib type (é obrigatório)
    - também pode ter dados;

- **reducers:**
    - são funções puras - geramos novas versoes. por exemplo: recebemos um objeto, ele não será alterado, mas geramos um clone ‘atualizado’. Cada um tem o seu arquivo na pasta 'reducers'

    - estado: é um objeto chave-valor, podemos ter diversos atributos

    - como o estado é gerado: a partir dos reducers 

- **Provider:** 
-   É um compoente que faz com que o Redux esteja disponível para ser acessado em toda a App. Por exemplo:

```
import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
``



