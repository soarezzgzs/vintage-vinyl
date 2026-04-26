// ==========================================
// SHARED CART MODULE - Vintage Vinyl
// ==========================================

let cart = [];

// Load cart from localStorage on init
function initCart() {
    const stored = localStorage.getItem("cart");
    if (stored) {
        try {
            cart = JSON.parse(stored);
        } catch (e) {
            cart = [];
        }
    }
    updateCartUI();
}

function addToCart(productName, productPrice, event) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }

    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCartUI();
    saveCart();

    // Show cart on desktop
    const cartElement = document.querySelector('.cart');
    if (cartElement && window.innerWidth > 768) {
        cartElement.style.display = 'block';
    }

    // Show cart on mobile
    const mobileCart = document.querySelector('.mobile-cart');
    if (mobileCart && window.innerWidth <= 768) {
        mobileCart.classList.add('active');
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCart();
}

function updateCartUI() {
    const cartItems = document.getElementById("cart-items");
    const mobileCartItems = document.getElementById("mobile-cart-items");

    let total = 0;
    let html = "";

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        html += `
      <li>${item.name} - R$${item.price.toFixed(2)} - (${item.quantity}x)
        <button style="margin-top: 10px;" class="remove-from-cart" onclick="removeFromCart(${index})">Remover</button>
      </li>`;
    });

    if (cartItems) cartItems.innerHTML = html;
    if (mobileCartItems) mobileCartItems.innerHTML = html;

    const cartTotal = document.getElementById("cart-total");
    const mobileCartTotal = document.getElementById("mobile-cart-total");

    if (cartTotal) cartTotal.textContent = total.toFixed(2);
    if (mobileCartTotal) mobileCartTotal.textContent = total.toFixed(2);

    // Update cart count badge
    const cartCount = document.getElementById("cart-count");
    const mobileCartCount = document.getElementById("mobile-cart-count");
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCount) cartCount.textContent = totalItems;
    if (mobileCartCount) mobileCartCount.textContent = totalItems;
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function toggleCart() {
    const cartElement = document.querySelector('.cart');
    if (cartElement) {
        cartElement.style.display = cartElement.style.display === 'block' ? 'none' : 'block';
    }
}

function toggleMobileCart() {
    const mobileCart = document.querySelector('.mobile-cart');
    if (mobileCart) {
        mobileCart.classList.toggle('active');
    }

    // Close mobile menu if open
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        const menuIcon = document.getElementById('mobile-menu-icon');
        if (menuIcon) {
            const icon = menuIcon.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    }
}

function closeMobileCart() {
    const mobileCart = document.querySelector('.mobile-cart');
    if (mobileCart) {
        mobileCart.classList.remove('active');
    }
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    alert('Compra efetuada com sucesso!');
    cart = [];
    updateCartUI();
    saveCart();
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.addEventListener('DOMContentLoaded', function () {
    initCart();

    // Desktop cart icon toggle
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleCart();
        });
    }

    // Mobile cart icon toggle
    const mobileCartIcon = document.getElementById('mobile-cart-icon');
    if (mobileCartIcon) {
        mobileCartIcon.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMobileCart();
        });
    }

    // Mobile cart close button
    const mobileCartClose = document.getElementById('mobile-cart-close');
    if (mobileCartClose) {
        mobileCartClose.addEventListener('click', closeMobileCart);
    }

    // Close mobile cart when clicking overlay
    const mobileCart = document.querySelector('.mobile-cart');
    if (mobileCart) {
        mobileCart.addEventListener('click', function (e) {
            if (e.target === mobileCart) {
                closeMobileCart();
            }
        });
    }

    // Checkout buttons
    const checkoutBtn = document.querySelector('.checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', checkout);
    }

    const mobileCheckoutBtn = document.querySelector('.mobile-checkout');
    if (mobileCheckoutBtn) {
        mobileCheckoutBtn.addEventListener('click', checkout);
    }

    // Close desktop cart when clicking outside
    document.addEventListener('click', function (e) {
        const cartElement = document.querySelector('.cart');
        const cartIcon = document.getElementById('cart-icon');
        if (cartElement && cartIcon && !cartElement.contains(e.target) && !cartIcon.contains(e.target)) {
            cartElement.style.display = 'none';
        }
    });
});

