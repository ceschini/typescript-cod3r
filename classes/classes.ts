class Data {
  // Público por padrão
  dia: number
  public mes: number 
  ano: number // public se omitido

  constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
    this.dia = dia,
    this.mes = mes,
    this.ano = ano
  }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia);
console.log(aniversario);

const casamento = new Data // posso omitir os "()"
casamento.ano = 2017
console.log(casamento);

// #######################

// mesma coisa que a classe acima
class DataEsperta {
  constructor(public dia: number = 1, public mes: number = 1, public ano: number = 1970) {}
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversarioEsperto.dia = 4
console.log(aniversarioEsperto.dia);
console.log(aniversarioEsperto);

const casamentoEsperto = new DataEsperta
casamentoEsperto.ano = 2017
console.log(casamentoEsperto);

// Desafio Classe Produto
// Atributos: nome, preco e desconto
// Criar o construtor
// Obs. 1: Desconto é opcional (valor padrão 0)
// Obs. 2: Criar dois produtos: passando dois e três params

class Produto {
  constructor(public nome: string, public preco: number, public desconto: number = 0) {}

  public resumo(): string {
    return `${this.nome} custa R$${this.precoComDesconto().toFixed(2)} (${this.desconto * 100}% off)`
  }

  precoComDesconto(): number { // tb eh public
      return this.preco * (1 - this.desconto)
  }
}

const produto1 = new Produto('Caneta Bic Preta', 5.0)
console.log(produto1);
const produto2 = new Produto('Maleta de Lápis FaberCastell', 150.00, 0.80)
console.log(produto2);

console.log(produto1.resumo());
console.log(produto2.resumo());

class Carro {
  private velocidadeAtual: number = 0 

  constructor(public marca: string, public modelo: string, private velocidadeMaxima: number = 200) {}

  // diferente do private, protected eh transmitido por heranca, mas n eh publico
  protected alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta
    const velocidadeValida = novaVelocidade >= 0
      && novaVelocidade <= this.velocidadeMaxima
    
    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
    }

    return this.velocidadeAtual
  }

  public acelerar(): number {
    return this.alterarVelocidade(5)
  }

  public frear(): number {
    return this.alterarVelocidade(-5)
  }
}

const carro1 = new Carro('Ford', 'Ka', 185)

// tecnica para chamar a funcao 15 vezes ;)
Array(15).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar());

console.log(carro1.frear());
console.log(carro1.frear());
console.log(carro1.frear());
console.log(carro1.frear());

// JS nao tem modificadores de acesso
// O compilador reclama, mas dependendo da conf do tsconfig,
//  ele vai compilar (e funcionar) igual

// code runner vai dar erro, mas no navegador não
/*
carro1.velocidadeAtual = 300
console.log('atual -> ' + carro1.velocidadeAtual);

carro1.velocidadeMaxima = 500
console.log('máxima -> ' + carro1.velocidadeMaxima);

carro1.alterarVelocidade(150)
console.log('atual -> ' + carro1.velocidadeAtual);
*/

// * Heranca

class Ferrari extends Carro {
  constructor(modelo: string, velocidadeMaxima: number) {
    super('Ferrari', modelo, velocidadeMaxima)
  }
  public acelerar(): number {
    return this.alterarVelocidade(20)
  }

  public frear(): number {
    return this.alterarVelocidade(-15)
  }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`);
console.log(f40.acelerar());
console.log(f40.frear());

// * Getters and Setters
class Pessoa {
  private _idade: number = 0

  get idade(): number {
    return this._idade
  }

  set idade(novaIdade: number) {
    if (novaIdade >= 0 && novaIdade <= 120) {
      this._idade = novaIdade
    }
  }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log('acessando idade da pessoa pelo get: ' + pessoa1.idade);

pessoa1.idade = -3
console.log('idade validada pelo set:' + pessoa1.idade);

// * Atributos e metodos estaticos
class Matematica {
  static PI: number = 3.1416

  static areaCirc(raio: number): number {
    return this.PI * raio * raio
  }
}

console.log(Matematica.areaCirc(4));