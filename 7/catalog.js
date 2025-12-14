// ==================== МАССИВ ТОВАРОВ/УСЛУГ ====================
const architecturalServices = [
    {
        id: 1,
        name: "Modern Villa Design",
        category: "Residential",
        description: "Complete architectural design for modern villas with sustainable materials and smart home integration.",
        price: 50000,
        rating: 4.8,
        duration: "3-6 months",
        popularity: 95,
        imageUrl: "/WEB_LAB/img/catalogcard1.jpg",
        features: ["3D Visualization", "Sustainable Materials", "Smart Home Integration"]
    },
    {
        id: 2,
        name: "Commercial Complex Planning",
        category: "Commercial",
        description: "Architectural planning and design for commercial complexes including offices and retail spaces.",
        price: 120000,
        rating: 4.6,
        duration: "6-12 months",
        popularity: 88,
           imageUrl: "/WEB_LAB/img/catalogcard2.jpg",
        features: ["Space Optimization", "Commercial Compliance", "Accessibility Design"]
    },
    {
        id: 3,
        name: "Interior Design Package",
        category: "Interior",
        description: "Comprehensive interior design services including furniture selection and lighting design.",
        price: 25000,
        rating: 4.9,
        duration: "1-3 months",
        popularity: 92,
         imageUrl: "/WEB_LAB/img/catalogcard3.jpg",
        features: ["Furniture Selection", "Lighting Design", "Color Schemes"]
    },
    {
        id: 4,
        name: "Urban Development Plan",
        category: "Urban",
        description: "Strategic urban planning and development solutions for sustainable city growth.",
        price: 200000,
        rating: 4.7,
        duration: "12-24 months",
        popularity: 85,
           imageUrl: "/WEB_LAB/img/catalogcard4.jpg",
        features: ["Sustainability Focus", "Community Integration", "Infrastructure Planning"]
    },
    {
        id: 5,
        name: "Green Building Design",
        category: "Sustainable",
        description: "Eco-friendly architectural design focusing on energy efficiency and environmental impact.",
        price: 75000,
        rating: 4.9,
        duration: "4-8 months",
        popularity: 96,
          imageUrl: "/WEB_LAB/img/catalogcard5.jpg",
        features: ["LEED Certification", "Solar Integration", "Water Recycling"]
    },
    {
        id: 6,
        name: "Architectural Consultation",
        category: "Consultation",
        description: "Expert architectural consultation for project planning and design review.",
        price: 15000,
        rating: 4.5,
        duration: "1-2 weeks",
        popularity: 90,
           imageUrl: "/WEB_LAB/img/catalogcard6.jpg",
        features: ["Design Review", "Cost Estimation", "Regulatory Guidance"]
    },
    {
        id: 7,
        name: "Luxury Apartment Design",
        category: "Residential",
        description: "Premium architectural design for luxury apartments with high-end finishes.",
        price: 85000,
        rating: 4.8,
        duration: "4-7 months",
        popularity: 91,
          imageUrl: "/WEB_LAB/img/catalogcard7.jpg",
        features: ["Premium Materials", "Custom Layouts", "Luxury Amenities"]
    },
    {
        id: 8,
        name: "Hospitality Design",
        category: "Commercial",
        description: "Specialized design services for hotels, restaurants, and hospitality venues.",
        price: 150000,
        rating: 4.7,
        duration: "8-15 months",
        popularity: 87,
          imageUrl: "/WEB_LAB/img/catalogcard8.jpg",
        features: ["Brand Integration", "Guest Experience", "Operational Efficiency"]
    },
    {
        id: 9,
        name: "Office Space Design",
        category: "Interior",
        description: "Modern office space design focusing on productivity and employee well-being.",
        price: 45000,
        rating: 4.6,
        duration: "2-4 months",
        popularity: 89,
          imageUrl: "/WEB_LAB/img/catalogcard9.jpg",
        features: ["Ergonomic Design", "Collaborative Spaces", "Acoustic Solutions"]
    },
    {
        id: 10,
        name: "Public Space Design",
        category: "Urban",
        description: "Design of public spaces including parks, plazas, and community centers.",
        price: 95000,
        rating: 4.8,
        duration: "5-9 months",
        popularity: 84,
          imageUrl: "/WEB_LAB/img/catalogcard10.jpg",
        features: ["Community Focus", "Accessibility", "Landscape Integration"]
    },
    {
        id: 11,
        name: "Passive House Design",
        category: "Sustainable",
        description: "Design of passive houses with minimal energy consumption and maximum comfort.",
        price: 80000,
        rating: 4.9,
        duration: "5-8 months",
        popularity: 94,
          imageUrl: "/WEB_LAB/img/catalogcard11.jpg",
        features: ["Energy Efficiency", "Air Quality", "Thermal Comfort"]
    },
    {
        id: 12,
        name: "Feasibility Study",
        category: "Consultation",
        description: "Comprehensive feasibility study for architectural projects including cost analysis.",
        price: 20000,
        rating: 4.4,
        duration: "3-4 weeks",
        popularity: 86,
           imageUrl: "/WEB_LAB/img/catalogcard12.jpg",
        features: ["Market Analysis", "Cost Estimation", "Risk Assessment"]
    },
    {
        id: 13,
        name: "Townhouse Development",
        category: "Residential",
        description: "Design and planning for modern townhouse developments.",
        price: 60000,
        rating: 4.7,
        duration: "3-5 months",
        popularity: 88,
        imageUrl: "/WEB_LAB/img/catalogcard13.jpg",
        features: ["Space Efficiency", "Community Layout", "Modern Aesthetics"]
    },
    {
        id: 14,
        name: "Retail Space Design",
        category: "Commercial",
        description: "Innovative design solutions for retail spaces to enhance customer experience.",
        price: 55000,
        rating: 4.6,
        duration: "3-6 months",
        popularity: 87,
         imageUrl: "/WEB_LAB/img/catalogcard14.jpg",
        features: ["Customer Flow", "Visual Merchandising", "Brand Identity"]
    },
    {
        id: 15,
        name: "Kitchen & Bath Design",
        category: "Interior",
        description: "Specialized design services for kitchens and bathrooms with custom solutions.",
        price: 18000,
        rating: 4.8,
        duration: "1-2 months",
        popularity: 93,
         imageUrl: "/WEB_LAB/img/catalogcard15.jpg",
        features: ["Custom Cabinetry", "Lighting Design", "Material Selection"]
    }
];

// ==================== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ====================
let currentServices = [...architecturalServices];
let activeFilter = 'all';
let activeSort = 'default';
let searchQuery = '';

// ==================== ФУНКЦИЯ ОТОБРАЖЕНИЯ КАРТОЧЕК ====================
function renderServices(servicesArray) {
    const container = document.getElementById('catalogContainer');
    const noResults = document.getElementById('noResults');
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    // Если массив пустой, показываем сообщение
    if (servicesArray.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    // Скрываем сообщение
    noResults.style.display = 'none';
    
    // Создаем карточки для каждого сервиса
    servicesArray.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-image">
                <img src="${service.imageUrl}" alt="${service.name}" onerror="this.src='/WEB_LAB/img/project1.jpg'">
                <span class="service-category">${service.category}</span>
            </div>
            <div class="service-content">
                <div class="service-header">
                    <h3>${service.name}</h3>
                    <div class="service-rating">
                        ${generateStars(service.rating)}
                        <span>${service.rating.toFixed(1)}</span>
                    </div>
                </div>
                <p class="service-description">${service.description}</p>
                
                <div class="service-details">
                    <div class="detail">
                        <span class="detail-label">Price:</span>
                        <span class="detail-value">$${service.price.toLocaleString()}</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${service.duration}</span>
                    </div>
                    <div class="detail">
                        <span class="detail-label">Popularity:</span>
                        <span class="detail-value">${service.popularity}%</span>
                    </div>
                </div>
                
                <div class="service-features">
                    ${service.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Добавляем стили для карточки
        card.style.cssText = `
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        `;
        
        card.querySelector('.service-image').style.cssText = `
            position: relative;
            height: 200px;
            overflow: hidden;
        `;
        
        card.querySelector('.service-image img').style.cssText = `
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        `;
        
        card.querySelector('.service-category').style.cssText = `
            position: absolute;
            top: 15px;
            left: 15px;
            background: rgba(27, 26, 26, 0.9);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
        `;
        
        card.querySelector('.service-content').style.cssText = `
            padding: 25px;
        `;
        
        card.querySelector('.service-header').style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
        `;
        
        card.querySelector('.service-header h3').style.cssText = `
            font-size: 20px;
            font-weight: 600;
            color: #1b1a1a;
            margin: 0;
            flex: 1;
        `;
        
        card.querySelector('.service-rating').style.cssText = `
            display: flex;
            align-items: center;
            gap: 5px;
        `;
        
        card.querySelector('.service-description').style.cssText = `
            color: #666;
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 15px;
        `;
        
        card.querySelector('.service-details').style.cssText = `
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            margin-bottom: 20px;
            padding: 15px;
            background: #f9f9f9;
            border-radius: 8px;
        `;
        
        card.querySelectorAll('.detail').forEach(detail => {
            detail.style.cssText = `
                text-align: center;
            `;
        });
        
        card.querySelectorAll('.detail-label').forEach(label => {
            label.style.cssText = `
                display: block;
                font-size: 12px;
                color: #888;
                margin-bottom: 5px;
            `;
        });
        
        card.querySelectorAll('.detail-value').forEach(value => {
            value.style.cssText = `
                display: block;
                font-size: 16px;
                font-weight: 600;
                color: #1b1a1a;
            `;
        });
        
        card.querySelector('.service-features').style.cssText = `
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        `;
        
        card.querySelectorAll('.feature-tag').forEach(tag => {
            tag.style.cssText = `
                background: #ece7e4;
                color: #1b1a1a;
                padding: 5px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 500;
            `;
        });
        
        // Добавляем эффект при наведении
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            card.querySelector('.service-image img').style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(0,0,0,0.08)';
            card.querySelector('.service-image img').style.transform = 'scale(1)';
        });
        
        container.appendChild(card);
    });
}

// ==================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ====================
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (halfStar) {
        stars += '½';
    }
    
    return stars;
}

function updateServices() {
    let filteredServices = [...architecturalServices];
    
    // Применяем поиск
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredServices = filteredServices.filter(service => 
            service.name.toLowerCase().includes(query) ||
            service.description.toLowerCase().includes(query) ||
            service.category.toLowerCase().includes(query)
        );
    }
    
    // Применяем фильтр по категории
    if (activeFilter !== 'all') {
        filteredServices = filteredServices.filter(service => 
            service.category === activeFilter
        );
    }
    
    // Применяем сортировку
    switch (activeSort) {
        case 'price_asc':
            filteredServices.sort((a, b) => a.price - b.price);
            break;
        case 'price_desc':
            filteredServices.sort((a, b) => b.price - a.price);
            break;
        case 'name_asc':
            filteredServices.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'name_desc':
            filteredServices.sort((a, b) => b.name.localeCompare(a.name));
            break;
        case 'rating_desc':
            filteredServices.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // Оставляем исходный порядок
            break;
    }
    
    currentServices = filteredServices;
    renderServices(currentServices);
}

// ==================== ФУНКЦИИ МЕТОДОВ МАССИВА ====================
const arrayMethods = {
    // 1. Original array
    original: () => {
        renderServices([...architecturalServices]);
        return "Showing original array of " + architecturalServices.length + " services";
    },
    
    // 2. Map: Add 10% to price
    map: () => {
        const mapped = architecturalServices.map(service => ({
            ...service,
            price: Math.round(service.price * 1.1),
            name: service.name + " (+10% premium)"
        }));
        renderServices(mapped);
        return "Applied map: Added 10% premium to all prices";
    },
    
    // 3. Filter: Price above $50,000
    filter_above_50000: () => {
        const filtered = architecturalServices.filter(service => service.price > 50000);
        renderServices(filtered);
        return "Applied filter: Showing services priced above $50,000. Found " + filtered.length + " services";
    },
    
    // 4. Filter: Residential category
    filter_residential: () => {
        const filtered = architecturalServices.filter(service => service.category === "Residential");
        renderServices(filtered);
        return "Applied filter: Showing Residential services. Found " + filtered.length + " services";
    },
    
    // 5. Filter: Commercial category
    filter_commercial: () => {
        const filtered = architecturalServices.filter(service => service.category === "Commercial");
        renderServices(filtered);
        return "Applied filter: Showing Commercial services. Found " + filtered.length + " services";
    },
    
    // 6. Sort: Price ascending
    sort_price_asc: () => {
        const sorted = [...architecturalServices].sort((a, b) => a.price - b.price);
        renderServices(sorted);
        return "Applied sort: Price low to high";
    },
    
    // 7. Sort: Price descending
    sort_price_desc: () => {
        const sorted = [...architecturalServices].sort((a, b) => b.price - a.price);
        renderServices(sorted);
        return "Applied sort: Price high to low";
    },
    
    // 8. Sort: Rating descending
    sort_rating_desc: () => {
        const sorted = [...architecturalServices].sort((a, b) => b.rating - a.rating);
        renderServices(sorted);
        return "Applied sort: Rating high to low";
    },
    
    // 9. Reduce: Total price of all services
    reduce_total_price: () => {
        const total = architecturalServices.reduce((sum, service) => sum + service.price, 0);
        renderServices(architecturalServices);
        return "Applied reduce: Total price of all services = $" + total.toLocaleString();
    },
    
    // 10. Some: Check if any service above $100,000
    some_above_100000: () => {
        const hasExpensive = architecturalServices.some(service => service.price > 100000);
        renderServices(architecturalServices);
        return "Applied some: " + (hasExpensive ? "There are services priced above $100,000" : "No services priced above $100,000");
    },
    
    // 11. Every: Check if all services above $10,000
    every_above_10000: () => {
        const allAbove = architecturalServices.every(service => service.price > 10000);
        renderServices(architecturalServices);
        return "Applied every: " + (allAbove ? "All services are priced above $10,000" : "Not all services are priced above $10,000");
    },
    
    // 12. Find: First service with rating 5
    find_rating_5: () => {
        const found = architecturalServices.find(service => service.rating === 5);
        const result = found ? [found] : [];
        renderServices(result);
        return "Applied find: " + (found ? "Found a service with perfect rating (5.0)" : "No service with perfect rating found");
    },
    
    // 13. Slice: First 5 services
    slice_first_5: () => {
        const sliced = architecturalServices.slice(0, 5);
        renderServices(sliced);
        return "Applied slice: Showing first 5 services";
    },
    
    // 14. Concat: Combine residential and commercial
    concat_residential_commercial: () => {
        const residential = architecturalServices.filter(s => s.category === "Residential");
        const commercial = architecturalServices.filter(s => s.category === "Commercial");
        const combined = residential.concat(commercial);
        renderServices(combined);
        return "Applied concat: Combined Residential and Commercial services. Total: " + combined.length + " services";
    },
    
    // 15. Includes: Check if a specific service exists
    includes_check: () => {
        const serviceNames = architecturalServices.map(s => s.name);
        const hasVilla = serviceNames.includes("Modern Villa Design");
        renderServices(architecturalServices);
        return "Applied includes: " + (hasVilla ? "Modern Villa Design service exists in catalog" : "Modern Villa Design service not found");
    }
};

// ==================== ИНИЦИАЛИЗАЦИЯ ====================
document.addEventListener('DOMContentLoaded', function() {
    // 1. Первоначальная отрисовка
    renderServices(architecturalServices);
    
    // 2. Создание кнопок методов массива
    const methodButtonsContainer = document.getElementById('methodButtons');
    const methodButtons = [
        { text: "Original Array", method: "original" },
        { text: "Map: +10% Price", method: "map" },
        { text: "Filter: Price > $50K", method: "filter_above_50000" },
        { text: "Filter: Residential", method: "filter_residential" },
        { text: "Filter: Commercial", method: "filter_commercial" },
        { text: "Sort: Price ↑", method: "sort_price_asc" },
        { text: "Sort: Price ↓", method: "sort_price_desc" },
        { text: "Sort: Rating ↓", method: "sort_rating_desc" },
        { text: "Reduce: Total Price", method: "reduce_total_price" },
        { text: "Some: Price > $100K", method: "some_above_100000" },
        { text: "Every: Price > $10K", method: "every_above_10000" },
        { text: "Find: Rating 5.0", method: "find_rating_5" },
        { text: "Slice: First 5", method: "slice_first_5" },
        { text: "Concat: Res + Com", method: "concat_residential_commercial" },
        { text: "Includes: Check", method: "includes_check" }
    ];
    
    methodButtons.forEach(btn => {
        const button = document.createElement('button');
        button.className = 'method-btn';
        button.textContent = btn.text;
        button.dataset.method = btn.method;
        button.addEventListener('click', () => {
            const result = arrayMethods[btn.method]();
            document.getElementById('methodResult').textContent = result;
        });
        methodButtonsContainer.appendChild(button);
    });
    
    // 3. Настройка поиска
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchQuery = this.value.trim();
            updateServices();
        }, 300);
    });
    
    // 4. Настройка сортировки
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', function() {
        activeSort = this.value;
        updateServices();
    });
    
    // 5. Настройка фильтра по категориям
    const categoryFilter = document.getElementById('categoryFilter');
    categoryFilter.addEventListener('change', function() {
        activeFilter = this.value;
        updateServices();
    });
    
    // 6. Добавляем ссылку на каталог в главное меню (если нужно)
    // Это можно сделать, отредактировав файл index.html
    
    console.log('Catalog initialized with', architecturalServices.length, 'services');
});