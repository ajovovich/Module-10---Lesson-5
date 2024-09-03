//Task 1

let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

//Task 2

function displayProducts() {
    const container = document.getElementById('product-container');
    container.innerHTML = ''; // Clear any existing content

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        const name = document.createElement('h2');
        name.textContent = product.name;

        const price = document.createElement('p');
        price.textContent = `Price: $${product.price}`;

        const description = document.createElement('p');
        description.textContent = product.description;

        productDiv.appendChild(name);
        productDiv.appendChild(price);
        productDiv.appendChild(description);

        container.appendChild(productDiv);
    });
}

//Task 3

window.addEventListener('load', displayProducts);


