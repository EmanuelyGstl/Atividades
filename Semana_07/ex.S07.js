/*  

[M1S07] Ex 1

class Produto{

    nome;
    preço;
    quantidade;
    }

[M1S07] Ex 2

      class Produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }
}

[M1S07] Ex 3

class Produto {
    construtor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
        } else {
            console.log('Estoque insuficiente');
        }
    }
}

let produto1 = new Produto('Short', 40, 70);
produto1.Vender(10); 
produto1.Vender(50); 


[M1S07] Ex 4 

class Produto {
    construtor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
        } else {
            console.log('Estoque insuficiente');
        }
    }

    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
    }
}

let produto1 = new Produto('Camiseta', 10, 40);
produto1.Vender(10); 
produto1.Repor(20); 

[M1S07] Ex 5

class Produto {
    constructor(nome, preço, quantidade) {
        this.nome = nome;
        this.preço = preço;
        this.quantidade = quantidade;
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
        } else {
            console.log('Estoque insuficiente');
        }
    }

    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
    }

    MostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis.`);
    }
}

let produto1 = new Produto('Caneta Bic Azul', 2.50, 5);
produto1.MostrarEstoque();

[M1S07] Ex 6

class Produto {
    constructor(nome, preco, quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    Vender(quantidadeVendida) {
        if (quantidadeVendida <= this.quantidade) {
            this.quantidade -= quantidadeVendida;
            console.log(`Venda realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
        } else {
            console.log('Estoque insuficiente');
        }
    }

    Repor(quantidadeReposta) {
        this.quantidade += quantidadeReposta;
        console.log(`Reposição realizada com sucesso. Nova quantidade em estoque: ${this.quantidade}`);
    }

    MostrarEstoque() {
        console.log(`O produto ${this.nome.toUpperCase()} possui ${this.quantidade} unidades disponíveis.`);
    }

    AtualizarPreco(novoPreco) {
        this.preco = novoPreco;
        console.log(`Preço atualizado para: R$ ${this.preco.toFixed(2)}`);
    }
}

let produto1 = new Produto('Caneta Bic Azul', 3, 5);
produto1.AtualizarPreco(3.00); 

[M1S07] Ex 7

class Pessoa {
    construtor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

let pessoa1 = new Pessoa('Manu', 30, 'Geográfa');
console.log(pessoa1);

[M1S07] Ex 8 

class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }
}

class Cliente extends Pessoa {
    construtor(nome, idade, profissao, telefone, email, clienteDesde) {
        super(nome, idade, profissao);
        this.telefone = telefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}

let cliente1 = new Cliente('Maria', 20, 'Bióloga', '555123456', 'maria@exemplo.com', '2023-05-05');
console.log(cliente1);
*/