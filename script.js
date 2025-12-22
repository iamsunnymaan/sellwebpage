const products = [
    { id: 1, name: "Abstract Torso", price: 1200, img: "https://images.unsplash.com/photo-1544413647-ad3479f61b35?auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Marble Equilibrium", price: 850, img: "https://images.unsplash.com/photo-1518998053574-53ee75db7441?auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Granite Monolith", price: 2100, img: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

// Render Products
const container = document.getElementById('product-container');
products.forEach(product => {
    container.innerHTML += `
        <div class="card">
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Collection</button>
        </div>
    `;
});

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const itemsDiv = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total');
    
    itemsDiv.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
    totalSpan.innerText = cart.reduce((sum, item) => sum + item.price, 0);
}

// Modal Logic
const modal = document.getElementById("cart-modal");
const btn = document.getElementById("cart-btn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; }