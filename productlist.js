fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res => res.json())
    .then(showProducts)


function showProducts(products){
    //looper og kalder showProduct
    products.forEach(showProduct)
}

function showProduct(product){

    // console.log(product);
    //fang template

    const template = document.querySelector("#smallProductTemplate").content;

    //lav kopi
    const copy = template.cloneNode(true);
    // œndr indhold
    copy.querySelector("h3").textContent = product.productdisplayname;
    copy.querySelector(".subtle").textContent = product.articletype;
    copy.querySelector(".price").textContent = product.price;
    copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/1000/${product.id}.webp`;


    if(product.soldout){
        //produktet er udsolgt
        copy.querySelector("article").classList.add("soldout");
    }

    if(product.discount){
        //produktet er udsolgt
        copy.querySelector("article").classList.add("discount");
    }
    //appende

    document.querySelector("main").appendChild(copy); 
}

// {
//     "id": 1163,
//     "gender": "Men",
//     "category": "Apparel",
//     "subcategory": "Topwear",
//     "articletype": "Tshirts",
//     "season": "Summer",
//     "productionyear": 2011,
//     "usagetype": "Sports",
//     "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
//     "price": 895,
//     "discount": null,
//     "brandname": "Nike",
//     "soldout": 0
// }