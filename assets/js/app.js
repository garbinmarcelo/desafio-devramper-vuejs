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
    produtos.forEach(({nome, quantidade}, index) => {
        let row = tblProdutos.insertRow(-1);
        row.insertCell().innerHTML = index + 1;
        row.insertCell().innerHTML = nome;
        row.insertCell().innerHTML = quantidade;
    });
};

const adicionaItem = (inputNome, InputQuantidade) => {
    if(inputNome && InputQuantidade){
        // Se o produto já existir, atualiza apenas a quantidade
        let update = produtos.filter((produto) => {
            if(produto.nome.toLowerCase() === inputNome.toLowerCase()){
                produto.nome = inputNome;
                produto.quantidade += Number(InputQuantidade);

                return produto;
            }
        });

        // Caso o produto não existir é adicionado
        if(update.length === 0){
            produtos.push({
                nome: inputNome,
                quantidade: Number(InputQuantidade)
            });
        }

        formProduto.reset();
        atualizaLista();
    }
};

atualizaLista();
