function scrollDown() {
    document.getElementById("below").scrollIntoView({ behavior: 'smooth' });
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
        popup.classList.add('hide');
    }, 3000);
    
});