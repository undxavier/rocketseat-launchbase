const nome = 'Carlos';
const peso = 88;
const altura = 1.9;

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log('Carlos, você está acima do peso.');
} else {
  console.log('Carlos, você não está acima do peso.');
}
