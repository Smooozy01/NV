const carsContainer = document.getElementById('cars');

const products = [
    {
        name: 'Ravon Nexia R3',
        year: 2019,
        gearbox: 'Автомат',
        image: "/styles/images/IMG_5717.jpg",
        cost: 5000000
    },
    {
        name: 'Chevrolet Cobalt',
        year: 2021,
        gearbox: 'Автомат',
        image: "/styles/images/cobalt.jpg",
        cost : 5500000
    },
    {
        name: 'Hyundai Accent',
        year: 2018,
        gearbox: 'Автомат',
        image: "/styles/images/accent.jpg",
        cost: 6000000
    }
];

products.forEach(product => {
    
    const productDiv = document.createElement('div');
    productDiv.classList.add('card');

    productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="details">
                    <h3 class="subText desc" style="padding: 15px;"> ${product.name} </h3>
                    <p class="subText desc" style="padding: 15px;"> Год: ${product.year} <br> Коробка: ${product.gearbox} </p>
                </div>
    `;
    
    carsContainer.appendChild(productDiv);
    
});