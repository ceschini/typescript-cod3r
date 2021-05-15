// ? noEmitOnError foi ativado, se tiver erro o compilador nao vai gerar o JS
let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log('canal ' + canal);

// * noImplicitAny - default: true
// nao permite any implicito, pq o typescript n sabe o que vai ser passado
// pra funcao
function soma(a: any, b: any) {
  return a + b
}

// nesse caso pode any implicito pq o typescript sabe o valor das variaveis
let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

// * strictNullChecks - default: true
// nao permite utilizar variaveis possivelmente nulas

// * noUnusedParameters - default: false
// nao permite que tenha params  nao utilizados
function saudar(isManha: boolean, /*horas: number*/): string {
  // * noUnusedLocals - default: false
  // nao permite vars locais nao utilizadas
  // let a = 1
  let saudacao: string
  if (isManha) {
    saudacao = 'Bom Dia!'
  } else {
    saudacao = 'Tenha uma boa vida!'
  }
  return saudacao
}

console.log(saudar(true));