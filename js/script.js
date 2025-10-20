        // Data menu PISCOK KAWAII
        const menuItems = [
            {
                id: 1,
                name: "PISCOK + SAUS COKLAT",
                category: "piscok",
                price: "Rp 10.000",
                description: "Pisang coklat dengan saus coklat lezat. 7 pcs per porsi.",
                image: "https://i.ibb.co.com/qZkzDRK/Whats-App-Image-2025-10-20-at-18-49-46-0d99fb53.jpg"
            },
            {
                id: 2,
                name: "PISCOK + SAUS MATCHA",
                category: "piscok",
                price: "Rp 10.000",
                description: "Pisang coklat dengan saus matcha yang segar. 7 pcs per porsi.",
                image: "https://i.ibb.co.com/pr9X8jxw/Whats-App-Image-2025-10-20-at-18-49-46-5280ca5c.jpg"
            },
            {
                id: 3,
                name: "PISCOK + SAUS TARO",
                category: "piscok",
                price: "Rp 10.000",
                description: "Pisang coklat dengan saus taro ungu yang unik. 7 pcs per porsi.",
                image: "https://i.ibb.co.com/zhqqchc7/Whats-App-Image-2025-10-20-at-18-49-47-d5dc874d.jpg"
            },
            {
                id: 4,
                name: "PISCOK + SAUS RED VELVET",
                category: "piscok",
                price: "Rp 10.000",
                description: "Pisang coklat dengan saus red velvet yang menarik. 7 pcs per porsi.",
                image: "https://i.ibb.co.com/xqkt5JTR/Whats-App-Image-2025-10-20-at-18-49-47-52786329.jpg"
            },
            {
                id: 5,
                name: "Topping Oreo",
                category: "topping",
                price: "Rp 2.000",
                description: "Tambahan topping oreo yang renyah dan lezat.",
                image: "https://tse3.mm.bing.net/th/id/OIP.7ju7Gl780l386tTIM4fYhgHaHa?cb=12ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
            },
            {
                id: 6,
                name: "Topping Sprinkle",
                category: "topping",
                price: "Rp 2.000",
                description: "Tambahan topping sprinkle warna-warni yang cantik.",
                image: "https://www.daysoftheyear.com/wp-content/uploads/sprinkle-day.jpg"
            },
            {
                id: 7,
                name: "Topping Meses",
                category: "topping",
                price: "Rp 2.000",
                description: "Tambahan topping meses coklat yang manis.",
                image: "https://cdn.idntimes.com/content-images/post/20200918/6c70afe923f0e0e9b2948e0586d99199-14dfda7ed4aa41b8c44304fc1775317c_600x400.jpg"
            },
            {
                id: 8,
                name: "Topping Keju",
                category: "topping",
                price: "Rp 2.000",
                description: "Tambahan topping keju parut yang gurih.",
                image: "https://tse4.mm.bing.net/th/id/OIP.n8xN0W6JPyxKry_N9-wCAgHaFY?cb=12ucfimg=1&w=1995&h=1452&rs=1&pid=ImgDetMain&o=7&rm=3"
            }
        ];

        // DOM Elements
        const menuContainer = document.getElementById('menu-items-container');
        const categoryButtons = document.querySelectorAll('.category-btn');
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const fadeElements = document.querySelectorAll('.fade-in');
        const contactForm = document.getElementById('contactForm');

        // Render menu items
        function renderMenuItems(category = 'all') {
            menuContainer.innerHTML = '';
            
            const filteredItems = category === 'all' 
                ? menuItems 
                : menuItems.filter(item => item.category === category);
            
            filteredItems.forEach(item => {
                const menuItemElement = document.createElement('div');
                menuItemElement.className = 'menu-item fade-in';
                
                // Check if it's a topping item
                const isTopping = item.category === 'topping';
                
                menuItemElement.innerHTML = `
                    <div class="menu-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.name}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                        ${isTopping ? '' : `
                        <div class="toppings">
                            <h4>Tambahkan Topping (+Rp 2.000)</h4>
                            <div class="toppings-list">
                                <span class="topping-tag">Oreo</span>
                                <span class="topping-tag">Sprinkle</span>
                                <span class="topping-tag">Meses</span>
                                <span class="topping-tag">Keju</span>
                            </div>
                        </div>
                        `}
                    </div>
                `;
                menuContainer.appendChild(menuItemElement);
            });
            
            // Trigger fade-in animation for new items
            setTimeout(() => {
                const newFadeElements = document.querySelectorAll('.menu-item.fade-in');
                newFadeElements.forEach(el => {
                    el.classList.add('visible');
                });
            }, 100);
        }

        // Category filter
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');
                // Render menu items for selected category
                const category = button.getAttribute('data-category');
                renderMenuItems(category);
            });
        });

        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Scroll effect for navbar
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.background = 'var(--glass-bg)';
                header.style.boxShadow = 'var(--shadow)';
            }
        });

        // Fade in animation on scroll
        function checkFade() {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('visible');
                }
            });
        }

        // Form submission
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesanan Anda telah berhasil dikirim. Kami akan menghubungi Anda via WhatsApp untuk konfirmasi.');
            contactForm.reset();
        });

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            renderMenuItems();
            checkFade();
            
            // Check fade on scroll
            window.addEventListener('scroll', checkFade);
        });