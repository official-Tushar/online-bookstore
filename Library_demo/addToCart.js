function addToCart(title, description, price, imageSrc) {
    const productCell = title;
    const descriptionCell = description;
    const priceCell = price;
    const imageCell = imageSrc;
    const data = { productCell, descriptionCell, priceCell, imageCell };
    let dataset = JSON.parse(localStorage.getItem('dataset')) || [];
    dataset.push(data);
    localStorage.setItem('dataset', JSON.stringify(dataset));
    alert("Added to Cart Successfully. Check your cart!");
}