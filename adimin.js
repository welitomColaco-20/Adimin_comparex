const form = document.getElementById("productForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const product = {
    title: title.value,
    price: price.value,
    image: image.value,
    affiliate_link: affiliate_link.value,
    platform: "AliExpress"
  };

  const res = await fetch(
    "https://back-end-comparex.onrender.com/products",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    }
  );

  if (res.ok) {
    msg.innerText = "Produto cadastrado com sucesso!";
    form.reset();
  } else {
    msg.innerText = "Erro ao cadastrar produto";
  }
});
