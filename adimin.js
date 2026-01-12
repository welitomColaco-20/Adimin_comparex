let produtos = [];

fetch("products.json")
  .then(res => res.json())
  .then(data => produtos = data);

function buscarProdutos() {
  const termo = search.value.toLowerCase();

  const filtrados = produtos.filter(p =>
    p.title.toLowerCase().includes(termo)
  );

  renderProducts(filtrados);
}
