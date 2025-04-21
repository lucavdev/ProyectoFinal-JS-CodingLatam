const API_URL = "https://api.escuelajs.co/api/v1";
const productsContainer = document.querySelector(".products-container");


async function getProducts() {
  const response = await fetch(`${API_URL}/products?offset=0&limit=10`);
  const products = await response.json();

  products.map((product) => {
    createProduct(product.images[0], product.title, product.price);
  });

  console.log(products);
}


getProducts();


const createProduct = (imageSrc, productName, productPrice) => {
  // Creamos cada elemento
  const elementArticle = document.createElement("article");
  elementArticle.classList.add("product");


  const elementImage = document.createElement("div");
  elementImage.classList.add("product-image");


  const elementImg = document.createElement("img");
  elementImg.src = imageSrc ;


  const elementInfo = document.createElement("div");
  elementInfo.classList.add("product-info");


  const elementName = document.createElement("h3");
  elementName.classList.add("product-name");
  elementName.textContent = productName;


  const elementPrice = document.createElement("p");
  elementPrice.classList.add("product-price");
  elementPrice.textContent = `$${productPrice}`;


  // Estructura de los elementos
  productsContainer.append(elementArticle);
  elementArticle.append(elementImage, elementInfo);
  elementImage.append(elementImg);
  elementInfo.append(elementName, elementPrice);
};
