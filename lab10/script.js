let allProducts;  // all products from the API
let categories = new Map(); // map of all categories

axios.get('https://fakestoreapi.com/products') // get all products from the API
    .then(response => {
        allProducts = response.data; // store all products in a global variable
        loadFilterOptions(); // load the filter options
        loadProducts(allProducts); // load all products
    })
    .catch(error => console.error('Error fetching data:', error)); // handle errors

function loadProducts(products) {
    const productList = document.getElementById('product-list'); // get the product list
    productList.innerHTML = '';
    products.forEach(product => {
        addProduct(product);
    });
}

function addProduct(product) {
    const productList = document.getElementById('product-list');
    const card = document.createElement('div'); // create a new card
    card.classList.add('col-md-4', 'mb-4', 'card'); // add classes to the card
    card.innerHTML = ` 
        <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.title}"> 
            <div class="card-body">
                <h5 class="card-title">${product.title}</h5> 
                <p class="card-text">${product.description}</p>
                <p class="card-text">$${product.price.toFixed(2)}</p>
            </div>
        </div>
    `;
    productList.appendChild(card);
}

function loadFilterOptions() {
    const categoryFilter = document.getElementById('category_filter'); // get the category filter
    categories = new Map(); // reset the categories map
    allProducts.forEach(product => {
        categories.set(product.category, true);
    });
    categories.forEach((value, category) => {
        categoryFilter.innerHTML += `<option value="${category}">${category}</option>`;
    });
}

function filterProducts() {
    const selectedCategory = document.getElementById('category_filter').value;
    let filteredProducts;
    if (selectedCategory) {
        filteredProducts = allProducts.filter(product => product.category === selectedCategory);
    } else {
        filteredProducts = allProducts;
    }
    loadProducts(filteredProducts);
}

function searchProducts() {
    const searchInput = document.getElementById('searchText').value.toLowerCase();
    let filteredProducts;
    if (searchInput) {
        filteredProducts = allProducts.filter(product =>
            product.title.toLowerCase().includes(searchInput) ||
            product.description.toLowerCase().includes(searchInput)
        );
    } else {
        filteredProducts = allProducts;
    }
    loadProducts(filteredProducts);
}

function sortProducts() {
    const selectedSortOption = document.getElementById('sort_order').value;
    let sortedProducts;

    switch (selectedSortOption) {
        case 'price_lohi':
            sortedProducts = allProducts.slice().sort((a, b) => a.price - b.price);
            break;
        case 'price_hilo':
            sortedProducts = allProducts.slice().sort((a, b) => b.price - a.price);
            break;
        case 'title_az':
            sortedProducts = allProducts.slice().sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'title_za':
            sortedProducts = allProducts.slice().sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            sortedProducts = allProducts.slice(); // Default ordering
    }

    loadProducts(sortedProducts); // load the sorted products
}

