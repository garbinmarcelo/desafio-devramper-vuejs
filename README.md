#### INSTRUÇÕES DO DESAFIO
---

1. Transformar a lista em tabela;
2. Adicionar uma coluna para que a quantidade do produto seja exibida também;
3. Limpar a tabela  ao adicionar um novo produto, fazendo que a tabela não repita linhas;
4. Adicionar dois inputs de texto para que seja possível personalizar o nome e quantidade do novo produto;
5. Refatorar as partes do código onde seja possível aplicar features do ES6 (let, const, map, arrow function);


###### HTML
```html
<ul id="lista-nao-ordenada"></ul>

<button onclick="adicionaItem('Laranja', 5)">Adicionar produto</button>
```

###### JAVASCRIPT
```javascript
var produtos = [
  {
    nome: "Maçã",
    quantidade: 25
  },
  {
    nome: "Banana",
    quantidade: 12
  },
  {
    nome: "Cenoura",
    quantidade: 13
  }
];

var lista = document.getElementById("lista-nao-ordenada");

function atualizaLista() {
  for (var i=0; i < produtos.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = produtos[i].nome;
    lista.append(li);
  }
}

function adicionaItem(nome_do_produto, quantidade) {
  // Essa é uma feature do ES6 que usa o operador Spread e a técnica de Desestruturação, quais outras poderiam ser aplicadas no código inteiro?
  produtos = [
    ...produtos,
    { 
      nome: nome_do_produto
    }
  ];
  atualizaLista();
}

atualizaLista();
```
