let produtos = [
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

const tblProdutos = document.getElementById("tbl-produtos");
const formProduto = document.getElementById("form-produto");

const atualizaLista = () => {
    tblProdutos.innerHTML = "";
    produtos.forEach(({nome, quantidade},index) => {
        let row = tblProdutos.insertRow(-1);
        row.insertCell().innerHTML = index + 1;
        row.insertCell().innerHTML = nome;
        row.insertCell().innerHTML = quantidade;
    });
};

const adicionaItem = (nome, quantidade) => {
    if(nome && quantidade){
        produtos.push({
            nome: nome,
            quantidade: quantidade
        });
        formProduto.reset();
        atualizaLista();
    }
};

atualizaLista();
