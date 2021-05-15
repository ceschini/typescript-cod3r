// ? Tipos em TypeScript

// ? Tipos Primitivos
// * string
let nome: string = 'João'
console.log(nome);
// nome = 28 // os tipos sao inferidos

// * numbers
let idade: number = 27
// idade = 'ana'
idade = 27.5
console.log(idade);

// * boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies);

// ? Tipos Explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'

// * array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"] // array de qualquer tipo
console.log(hobbies[0])
console.log(typeof hobbies);

hobbies = [100]
// hobbies = 100
console.log(hobbies);

// * tuplas
// arrays ordenados, com tipos definidos para cada posicao
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco);

endereco = ["Rua Importante", 1260, "Bloco C"]
console.log(endereco);

// * enums
// estrutura com valores pre-definidos
// bom para dias da semana, por exemplo
enum Cor {
  Cinza, // 0
  Verde = 100, // 100
  Azul = 10, // 2
  Laranja,
  Amarelo,
  Vermelho = 100 // pode ter mesmo valor
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);

// * any
let carro: any = 'BMW'
console.log(carro);
carro = { marca: 'BMW', ano: '2019' }
console.log(carro);

// * funcoes
function retornaMeuNome(): string { // explicitando o retorno da funcao
  // return minhaIdade // erro, retorno deve ser string
  return nome
}

console.log(retornaMeuNome());

function digaOi(): void { 
  // return 'oi' // erro, nao deve ter retorno
  console.log('Oi');
}

digaOi()

// parametros devem ter um tipo tbm
function multiplicar(numA : number, numB : number) : number {
  return numA * numB
}

// console.log(multiplicar(2, 'Null'));
console.log(multiplicar(4, 9.5));

// * tipo funcao
let calculo: (x: number, y: number) => number
calculo = multiplicar
console.log(calculo(5, 6));

// calculo = digaOi // erro, as assinaturas nao fecham
// calculo()

// Type 'number' is not assignable to type '(x: number, y: number) => number'.
// calculo = 1

// * objetos
let usuario: { nome: string, idade: number } // explicitando tipo de obj e atribs

let user = {
  nome: 'João',
  idade: 27
} // inferiu tipo objeto e os tipos das props

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
}

console.log(usuario);

// ! Desafio Objeto
let funcionario: {
  supervisores: string[],
  baterPonto: (hora: number) => string
}

funcionario = {
  supervisores: ['Ana', 'Bruna', 'Carlos', 'Diego'],
  baterPonto: (hora) => {
    if (hora <= 8) {
      return 'Ponto normal'
    } else if (hora > 8){
      return 'Fora do horário'
    }
    return 'Hora inválida'
  }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(7));
console.log(funcionario.baterPonto(9));

// ? Definindo Tipos Personalizados (Alias)
type Funcionario = {
  supervisores: string[],
  baterPonto: (hora: number) => string
}

let atendente: Funcionario
atendente = {
  supervisores: ['Jonas', 'Bianca'],
  baterPonto: (hora) => {
    if (hora <= 6) {
      return 'Ponto normal'
    } else if (hora > 6) {
      return 'Fora do horário'
    }
    return 'Hora inválida'
  }
}

console.log(atendente.supervisores);
console.log(atendente.baterPonto(5));

// ? Union Types
let nota: number | string // pode ser do tipo number ou string
nota = 10
console.log(`minha nota é ${nota}!`);
nota = 'alta'
console.log(`minha nota é ${nota}!`);

// checando tipos
let valor = true

if (typeof valor === "number") {
  console.log('é um valor number');
} else {
  console.log(typeof valor)
}

// * never - quando nao tem um final ou endpoint reachable (error ou while(true))
function falha(msg: string): never {
  throw new Error(msg)
}

const produto = {
  nome: 'sabao',
  preco: 1,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha('precisa ter um nome')
    }
    if(this.preco <= 0) {
      falha('preco invalido')
    }
  }
}

produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null
console.log(alturaOpcional);

type Contato = {
  nome: string,
  tel1: string,
  tel2: string | null // opcional
}

const contato1: Contato = {
  nome: 'Fulano',
  tel1: '98736437',
  tel2: null
}

console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);

let podeSerNulo = null // eh do tipo any por padrão
// podeSerNulo = 12
// podeSerNulo = 'abc'

// ! Desafio JS -> TS
// codigo JS
// let contaBancaria = {
//   saldo: 3456,
//   depositar(valor) {
//     this.saldo += valor
//   }
// }

// let correntista = {
//   nome: 'Ana Silva',
//   contaBancaria: contaBancaria,
//   contatos: ['34567890', '98765432']
// }

// correntista.contaBancaria.depositar(3000)
// console.log(correntista)

// codigo TS
type ContaBancaria = {
  saldo: number,
  depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar(valor: number) {
    this.saldo += valor
  }
}

type Correntista = {
  nome: string,
  contaBancaria: ContaBancaria,
  contatos: string[]
}

let correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria: contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)