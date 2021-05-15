"use strict";
// ? Tipos em TypeScript
// ? Tipos Primitivos
// * string
let nome = 'João';
console.log(nome);
// nome = 28 // os tipos sao inferidos
// * numbers
let idade = 27;
// idade = 'ana'
idade = 27.5;
console.log(idade);
// * boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// ? Tipos Explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
// * array
let hobbies = ["Cozinhar", "Praticar Esportes"]; // array de qualquer tipo
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100
console.log(hobbies);
// * tuplas
// arrays ordenados, com tipos definidos para cada posicao
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco C"];
console.log(endereco);
// * enums
// estrutura com valores pre-definidos
// bom para dias da semana, por exemplo
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; // pode ter mesmo valor
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// * any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: '2019' };
console.log(carro);
// * funcoes
function retornaMeuNome() {
    // return minhaIdade // erro, retorno deve ser string
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    // return 'oi' // erro, nao deve ter retorno
    console.log('Oi');
}
digaOi();
// parametros devem ter um tipo tbm
function multiplicar(numA, numB) {
    return numA * numB;
}
// console.log(multiplicar(2, 'Null'));
console.log(multiplicar(4, 9.5));
// * tipo funcao
let calculo;
calculo = multiplicar;
console.log(calculo(5, 6));
// calculo = digaOi // erro, as assinaturas nao fecham
// calculo()
// Type 'number' is not assignable to type '(x: number, y: number) => number'.
// calculo = 1
// * objetos
let usuario; // explicitando tipo de obj e atribs
let user = {
    nome: 'João',
    idade: 27
}; // inferiu tipo objeto e os tipos das props
console.log(user);
// Type '{}' is missing the following properties from type '{ nome: string; idade: number; }'
// usuario = {}
// usuario = {
//   name: 'Maria',
//   age: 31
// }
usuario = {
    idade: 31,
    nome: 'Maria'
};
console.log(usuario);
// ! Desafio Objeto
let funcionario;
funcionario = {
    supervisores: ['Ana', 'Bruna', 'Carlos', 'Diego'],
    baterPonto: (hora) => {
        if (hora <= 8) {
            return 'Ponto normal';
        }
        else if (hora > 8) {
            return 'Fora do horário';
        }
        return 'Hora inválida';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));
let atendente;
atendente = {
    supervisores: ['Jonas', 'Bianca'],
    baterPonto: (hora) => {
        if (hora <= 6) {
            return 'Ponto normal';
        }
        else if (hora > 6) {
            return 'Fora do horário';
        }
        return 'Hora inválida';
    }
};
console.log(atendente.supervisores);
console.log(atendente.baterPonto(5));
// ? Union Types
let nota; // pode ser do tipo number ou string
nota = 10;
console.log(`minha nota é ${nota}!`);
nota = 'alta';
console.log(`minha nota é ${nota}!`);
// checando tipos
let valor = true;
if (typeof valor === "number") {
    console.log('é um valor number');
}
else {
    console.log(typeof valor);
}
// * never - quando nao tem um final ou endpoint reachable (error ou while(true))
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'sabao',
    preco: 1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('preco invalido');
        }
    }
};
produto.validarProduto();
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
console.log(alturaOpcional);
const contato1 = {
    nome: 'Fulano',
    tel1: '98736437',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let podeSerNulo = null; // eh do tipo any por padrão
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map