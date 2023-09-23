//André Luiz Nascimento Martinho 22/09/2023

function calcularPrecoComDesconto(vlProduto, quantidade, Desconto) {
  const precoTotal = vlProduto * quantidade;
  const precoComDesconto = Desconto(precoTotal);
  return precoComDesconto;
}

function aplicarDescontoDezPorcento(precoTotal) {
  const desconto = precoTotal * 0.1;
  const precoComDesconto = precoTotal - desconto;
  return precoComDesconto;
}

const vlProduto = 50; 
const quantidade = 3;   
const precoFinal = calcularPrecoComDesconto(vlProduto, quantidade, aplicarDescontoDezPorcento);

console.log(`Preço final com desconto: R$${precoFinal.toFixed(2)}`);

  

  