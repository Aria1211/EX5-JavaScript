document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.getElementById('carousel');
  const slides = document.getElementById('slides');
  const slideItems = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev');
  const nextBtn = document.getElementById('next');
  
  let currentIndex = 0;
  const totalSlides = slideItems.length;
  
  window.showSlide = function(index) {
    slideItems.forEach(slide => slide.classList.remove('active'));
    slideItems[index].classList.add('active');
  };
  updateCarousel();
  
  window.nextSlide = function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    window.showSlide(currentIndex);
    updateCarousel();
  }

  window.prevSlide = function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    window.showSlide(currentIndex);
    updateCarousel();
  }

  nextBtn.addEventListener('click', nextSlide);
  
  prevBtn.addEventListener('click', prevSlide);
  
  let autoSlideInterval;

  window.startAutoSlide = function() {
    stopAutoSlide();
    autoSlideInterval = setInterval(() => {
      nextSlide();
    }, 5000);
  }

  window.stopAutoSlide = function() {
    clearInterval(autoSlideInterval);
  }

  carousel.addEventListener('mouseenter', stopAutoSlide);
  carousel.addEventListener('mouseleave', startAutoSlide);

  startAutoSlide();

  function updateCarousel() {
    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }
  
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle("show");
  });
  
  const form = document.getElementById('registrationform');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;
    
    const visitDate = document.getElementById("date-of-visit");
    const visitDateError = document.getElementById("visitDateError");
    if (!visitDate.value) {
      visitDateError.textContent = 'Select your visit date';
      isValid = false;
    } else {
      visitDateError.textContent = '';
    }
    
    const visitors = document.getElementById("no-of-visitors");
    const visitorsError = document.getElementById("visitorsError");
    if (!visitors.value) {
      visitorsError.textContent = 'Select the number of visitors';
      isValid = false;
    } else {
      visitorsError.textContent = '';
    }
    
    const name = document.getElementById("name");
    const nameError = document.getElementById("nameError");
    if (!name.value.trim()) {
      nameError.textContent = 'Name is required';
      isValid = false;
    } else {
      nameError.textContent = '';
    }
    
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value) {
      emailError.textContent = 'Enter a valid email';
      isValid = false;
    } else if (!emailRegex.test(email.value)) {
      emailError.textContent = 'Enter a valid email format';
      isValid = false;
    } else {
      emailError.textContent = '';
    }
    
    const dob = document.getElementById("dob");
    const dobError = document.getElementById("dobError");
    if (!dob.value) {
      dobError.textContent = 'Select your birth date';
      isValid = false;
    } else {
      dobError.textContent = '';
    }
    
    const gender = document.querySelector('input[name="gender"]:checked');
    const genderError = document.getElementById("genderError");
    if (!gender) {
      genderError.textContent = 'Please select your gender';
      isValid = false;
    } else {
      genderError.textContent = '';
    }
    
    const ticket = document.getElementById("ticket");
    const ticketError = document.getElementById("ticketError");
    if (!ticket.value) {
      ticketError.textContent = 'Choose a ticket type';
      isValid = false;
    } else {
      ticketError.textContent = '';
    }
    
    // If form is valid, submit it
    if (isValid) {
      alert('Form submitted successfully!');
      form.reset();
    }
  });

  const merchandiseData = [
    {
    "id": "001",
    "name": "Totoro Plush",
    "price": 15,
    "description": "Totoro Plush - A charming Ghibli-themed collectible.",
    "image": "assets/001.jpg"
    },
    {
    "id": "002",
    "name": "Catbus Pillow",
    "price": 20,
    "description": "Catbus Pillow - A charming Ghibli-themed collectible.",
    "image": "assets/002.jpg"
    },
    {
    "id": "003",
    "name": "No-Face Lamp",
    "price": 25,
    "description": "No-Face Lamp - A charming Ghibli-themed collectible.",
    "image": "assets/003.jpg"
    },
    {
    "id": "004",
    "name": "Howl's Ring",
    "price": 30,
    "description": "Howl's Ring - A charming Ghibli-themed collectible.",
    "image": "assets/004.jpg"
    },
    {
    "id": "005",
    "name": "Calcifer Mug",
    "price": 35,
    "description": "Calcifer Mug - A charming Ghibli-themed collectible.",
    "image": "assets/005.jpg"
    },
    {
    "id": "006",
    "name": "Soot Sprite Stickers",
    "price": 40,
    "description": "Soot Sprite Stickers - A charming Ghibli-themed collectible.",
    "image": "assets/006.jpg"
    },
    {
    "id": "007",
    "name": "Ghibli Notebook",
    "price": 45,
    "description": "Ghibli Notebook - A charming Ghibli-themed collectible.",
    "image": "assets/007.jpg"
    },
    {
    "id": "008",
    "name": "Jiji Keychain",
    "price": 50,
    "description": "Jiji Keychain - A charming Ghibli-themed collectible."
    },
    {
    "id": "009",
    "name": "Forest Spirit Poster",
    "price": 55,
    "description": "Forest Spirit Poster - A charming Ghibli-themed collectible."
    },
    {
    "id": "010",
    "name": "Kiki's Delivery Bag",
    "price": 60,
    "description": "Kiki's Delivery Bag - A charming Ghibli-themed collectible."
    },
    {
    "id": "011",
    "name": "Ponyo Water Bottle",
    "price": 65,
    "description": "Ponyo Water Bottle - A charming Ghibli-themed collectible.",
    "image": "assets/011.jpg"
    },
    {
    "id": "012",
    "name": "Mononoke Mask",
    "price": 70,
    "description": "Mononoke Mask - A charming Ghibli-themed collectible."
    },
    {
    "id": "013",
    "name": "Spirited Away Puzzle",
    "price": 75,
    "description": "Spirited Away Puzzle - A charming Ghibli-themed collectible."
    },
    {
    "id": "014",
    "name": "Laputa Robot Figure",
    "price": 80,
    "description": "Laputa Robot Figure - A charming Ghibli-themed collectible."
    },
    {
    "id": "015",
    "name": "Nausica\u00e4 Brooch",
    "price": 85,
    "description": "Nausica\u00e4 Brooch - A charming Ghibli-themed collectible."
    },
    {
    "id": "016",
    "name": "Ghibli Wall Calendar",
    "price": 90,
    "description": "Ghibli Wall Calendar - A charming Ghibli-themed collectible."
    },
    {
    "id": "017",
    "name": "Totoro Umbrella",
    "price": 95,
    "description": "Totoro Umbrella - A charming Ghibli-themed collectible.",
    "image": "assets/017.jpg"
    },
    {
    "id": "018",
    "name": "Haku Dragon Plush",
    "price": 100,
    "description": "Haku Dragon Plush - A charming Ghibli-themed collectible."
    },
    {
    "id": "019",
    "name": "Ghibli Art Book",
    "price": 105,
    "description": "Ghibli Art Book - A charming Ghibli-themed collectible."
    },
    {
    "id": "020",
    "name": "Kodama Desk Plant",
    "price": 10,
    "description": "Kodama Desk Plant - A charming Ghibli-themed collectible."
    },
    {
    "id": "021",
    "name": "Turnip Head Pen Stand",
    "price": 15,
    "description": "Turnip Head Pen Stand - A charming Ghibli-themed collectible."
    },
    {
    "id": "022",
    "name": "Catbus Backpack",
    "price": 20,
    "description": "Catbus Backpack - A charming Ghibli-themed collectible."
    },
    {
    "id": "023",
    "name": "Totoro Phone Case",
    "price": 25,
    "description": "Totoro Phone Case - A charming Ghibli-themed collectible.",
    "image": "assets/023.jpg"
    },
    {
    "id": "024",
    "name": "Kiki Apron",
    "price": 30,
    "description": "Kiki Apron - A charming Ghibli-themed collectible."
    },
    {
    "id": "025",
    "name": "Yubaba Magnet",
    "price": 35,
    "description": "Yubaba Magnet - A charming Ghibli-themed collectible."
    },
    {
    "id": "026",
    "name": "Howl's Castle Model",
    "price": 40,
    "description": "Howl's Castle Model - A charming Ghibli-themed collectible."
    },
    {
    "id": "027",
    "name": "Studio Ghibli Enamel Pin",
    "price": 45,
    "description": "Studio Ghibli Enamel Pin - A charming Ghibli-themed collectible."
    },
    {
    "id": "028",
    "name": "Bo Mousepad",
    "price": 50,
    "description": "Bo Mousepad - A charming Ghibli-themed collectible."
    },
    {
   "id": "029",
   "name": "Ghibli Socks Set",
    "price": 55,
    "description": "Ghibli Socks Set - A charming Ghibli-themed collectible."
    },
    {
    "id": "030",
    "name": "Totoro Bento Box",
    "price": 60,
    "description": "Totoro Bento Box - A charming Ghibli-themed collectible.",
    "image": "assets/030.jpg"
    },
    {
    "id": "031",
    "name": "Ghibli Wall Clock",
    "price": 65,
    "description": "Ghibli Wall Clock - A charming Ghibli-themed collectible."
    },
    {
    "id": "032",
    "name": "Ponyo Night Light",
    "price": 70,
    "description": "Ponyo Night Light - A charming Ghibli-themed collectible.",
    "image": "assets/032.jpg"
    },
    {
    "id": "033",
    "name": "No-Face Coin Bank",
    "price": 75,
    "description": "No-Face Coin Bank - A charming Ghibli-themed collectible."
    },
    {
    "id": "034",
    "name": "Calcifer Oven Mitts",
    "price": 80,
    "description": "Calcifer Oven Mitts - A charming Ghibli-themed collectible."
    },
    {
    "id": "035",
    "name": "Soot Sprite Earrings",
    "price": 85,
    "description": "Soot Sprite Earrings - A charming Ghibli-themed collectible."
    },
    {
    "id": "036",
    "name": "Totoro Mug Warmer",
    "price": 90,
    "description": "Totoro Mug Warmer - A charming Ghibli-themed collectible.",
    "image": "assets/036.jpg"
    },
    {
    "id": "037",
    "name": "Kiki Hair Ribbon",
    "price": 95,
    "description": "Kiki Hair Ribbon - A charming Ghibli-themed collectible."
    },
    {
    "id": "038",
    "name": "Spirited Away Tote",
    "price": 100,
    "description": "Spirited Away Tote - A charming Ghibli-themed collectible."
    },
    {
    "id": "039",
    "name": "Mononoke Forest Journal",
    "price": 105,
    "description": "Mononoke Forest Journal - A charming Ghibli-themed collectible."
    },
    {
    "id": "040",
    "name": "Kodama Night Lamp",
    "price": 10,
    "description": "Kodama Night Lamp - A charming Ghibli-themed collectible."
    },
    {
    "id": "041",
    "name": "Jiji Plushie",
    "price": 15,
    "description": "Jiji Plushie - A charming Ghibli-themed collectible."
    },
    {
    "id": "042",
    "name": "Ghibli Playing Cards",
    "price": 20,
    "description": "Ghibli Playing Cards - A charming Ghibli-themed collectible."
    },
    {
    "id": "043",
    "name": "Howl Cloak Replica",
    "price": 25,
    "description": "Howl Cloak Replica - A charming Ghibli-themed collectible."
    },
    {
    "id": "044",
    "name": "Laputa Pendant",
    "price": 30,
    "description": "Laputa Pendant - A charming Ghibli-themed collectible."
    },
    {
    "id": "045",
    "name": "Totoro Notebook Set",
    "price": 35,
    "description": "Totoro Notebook Set - A charming Ghibli-themed collectible.",
    "image": "assets/045.jpg"
    },
    {
    "id": "046",
    "name": "No-Face Sticker Pack",
    "price": 40,
    "description": "No-Face Sticker Pack - A charming Ghibli-themed collectible."
    },
    {
    "id": "047",
    "name": "Soot Sprite Blanket",
    "price": 45,
    "description": "Soot Sprite Blanket - A charming Ghibli-themed collectible."
    },
    {
    "id": "048",
    "name": "Spirited Away Phone Charm",
    "price": 50,
   "description": "Spirited Away Phone Charm - A charming Ghibli-themed collectible."
    },
    {
    "id": "049",
    "name": "Catbus Rug",
    "price": 55,
    "description": "Catbus Rug - A charming Ghibli-themed collectible."
    },
    {
    "id": "050",
    "name": "Haku Notebook",
    "price": 60,
    "description": "Haku Notebook - A charming Ghibli-themed collectible."
    }
    ];

  let cartItems = [];

  function updateCartIndicator() {
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartButton').textContent = `Cart (${totalItems})`;
  }

  function addToCart(productId) {
    const product = merchandiseData.find(item => item.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartItems.push({
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1
      });
    }

    updateCartIndicator();
  }

  function renderProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      
      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-image">
        <div class="product-name">${product.name}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">$${product.price}</div>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      
      productsGrid.appendChild(productCard);
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
      button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        addToCart(productId);
      });
    });
  }

  function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = merchandiseData.filter(product => 
      product.name.toLowerCase().includes(searchTerm) || 
      product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
  }

  renderProducts(merchandiseData);

  document.getElementById('searchButton').addEventListener('click', searchProducts);
  document.getElementById('searchInput').addEventListener('keyup', function(e) {
    if (e.key === 'Enter') {
      searchProducts();
    }
  });

  updateCartIndicator();

  const cartModal = document.getElementById('cartModal');
  const cartItemsList = document.getElementById('cartItemsList');
  const totalPrice = document.getElementById('totalPrice');
  const cartButton = document.getElementById('cartButton');
  const proceedToBuy = document.getElementById('proceedToBuy');

  function showCartModal() {
    const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    if (cartItemsCount === 0) {
      alert('Your cart is empty!');
      return;
    }
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.quantity} x ${item.name} - $${item.price}`;
      cartItemsList.appendChild(li);
      total += item.price * item.quantity;
    });
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
    cartModal.style.display = 'block';
  }

  function closeCartModal() {
    cartModal.style.display = 'none';
  }

  proceedToBuy.addEventListener('click', function() {
    showConfirmationModal();
    closeCartModal();
  });

  function showConfirmationModal() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('address').value = '';
    document.getElementById('paymentMethod').value = '';
    document.getElementById('cardNumber').value = '';
    document.getElementById('expiry').value = '';
    document.getElementById('cvv').value = '';
    document.getElementById('confirmationModal').style.display = 'block';
  }

  function closeConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'none';
  }

  function showSuccessModal(user, items, amount, address) {
    document.getElementById('userName').textContent = user;
    document.getElementById('itemCount').textContent = items;
    document.getElementById('totalAmount').textContent = amount;
    document.getElementById('deliveryAddress').textContent = address;
    document.getElementById('successModal').style.display = 'block';
  }

  document.getElementById('backToShopping').addEventListener('click', function() {
    closeSuccessModal();
    window.location.reload();
  });

  function closeSuccessModal() {
    document.getElementById('successModal').style.display = 'none';
  }

  window.addEventListener('click', function(event) {
    if (event.target === cartModal) {
      closeCartModal();
    } else if (event.target === document.getElementById('confirmationModal')) {
      closeConfirmationModal();
    } else if (event.target === document.getElementById('successModal')) {
      closeSuccessModal();
    }
  });

  const confirmationForm = document.getElementById('confirmationForm');

  confirmationForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;

    if (name && email && address && paymentMethod && cardNumber && expiry && cvv) {
      showSuccessModal(name, cartItems.length, totalPrice.textContent.split('$')[1], address);
      closeConfirmationModal();
    } else {
      alert('Please fill in all the required fields.');
    }
  });

  cartButton.addEventListener('click', showCartModal);
});