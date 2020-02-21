const nome = 'Silvana';
const sexo = 'F';
const idade = 48;
const contribuicao = 23;

if (sexo === 'F') {
  if (contribuicao >= 30 && idade + contribuicao >= 85) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}

if (sexo === 'M') {
  if (contribuicao >= 35 && idade + contribuicao >= 95) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}
