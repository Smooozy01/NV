function scrollDown(destination) {
    document.getElementById(destination).scrollIntoView({ behavior: 'smooth' });
}

const apiUrl = 'https://vykup.onrender.com/request';

document.getElementById('requestForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, name, phone })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const newClient = await response.json();
        console.log(newClient);
    } catch (error) {
        console.error('Error submitting the form:', error);
    }
    
    document.getElementById('email').value = '';
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
    
});

// Add an event listener to the submit button
document.getElementById('knopka') .addEventListener('click', () => {
    
    // Display a success message
    const popup = document.getElementById('popup');
    popup.classList.add('show');
    
    // Hide the popup after 3 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
    
});

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
    productDiv.classList.add('cars');

    productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="details">
                    <h1 class="subText desc" style="padding: 15px;"> ${product.name} </h1>
                    <p class="subText desc" style="padding: 15px"> Год: ${product.year} <br> Коробка: ${product.gearbox} </p>
                    <p style="display: none"> ${product.cost}</p>
                </div>
    `;
    
    if (product.name === 'Ravon Nexia R4') {
        productDiv.classList.add('selectedCar');
    }
    carsContainer.appendChild(productDiv);
});    

document.querySelectorAll('.cars').forEach(car => {
    car.addEventListener('click', () => {
        // Remove 'selected' class from all elements
        document.querySelectorAll('.cars').forEach(el => el.classList.remove('selectedCar'));

        // Add 'selected' class to the clicked element
        car.classList.add('selectedCar');
    });
});

window.cars = products;
