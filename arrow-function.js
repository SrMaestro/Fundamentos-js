function apresentar(nome) {
  return `meu nome e ${nome}`
}

const apresentarArrow = nome => `meu nome e ${nome}`

const soma = (num1, num2) => num1 + num2

//arrow function com + de uma linha de instruçao

const SomaNumerosPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return 'somente numeros de 1 a 9'
  } else {
    return num1 + num2
  }
}

//hoisting : arrow function se comporta como expressao
