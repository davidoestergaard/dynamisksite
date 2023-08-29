const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
    .then(res => res.json())
    .then(showProduct)

function showProduct(product){
console.log(product);

    document.querySelector(".productboks h3").textContent = product.productdisplayname;
    document.querySelector(".productboks h4").textContent = product.brandname;
    document.querySelector(".productboks .price").textContent = product.price;
    document.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
    
}