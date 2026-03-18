document.addEventListener('DOMContentLoaded', () => {
    // === DOM Elements ===
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const appContainer = document.getElementById('app');
    const navLinks = document.querySelectorAll('.nav-link');

    // === Sidebar Logic ===
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
        document.body.style.overflow = ''; // Restore background scrolling
    }

    // Event Listeners for Sidebar
    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Close sidebar when a navigation link is clicked (especially for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', closeSidebar);
    });

    // === Routing Logic ===
    const routes = {
        '/': renderHome,
        '/hakkinda': renderAbout,
        '/destek': renderSupport,
        '/iletisim': renderContact,
        '/subeler': renderLocations,
        '/menu': renderMenu,
        '/fiyatlar': renderPrices
    };

    function router() {
        // Get the hash part of the URL, remove the '#' symbol. Default to '/'
        let hash = window.location.hash.slice(1) || '/';

        // Find the matching route function or default to Home
        const renderFunction = routes[hash] || routes['/'];

        // Execute the render function and inject its returned HTML
        appContainer.innerHTML = renderFunction();

        // Update active navigation link
        navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + hash || (hash === '/' && link.getAttribute('href') === '#/')) {
                link.classList.add('bg-coffee-accent', 'font-bold');
            } else {
                link.classList.remove('bg-coffee-accent', 'font-bold');
            }
        });

        // Scroll to top on route change
        window.scrollTo(0, 0);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', router);

    // Initial render
    router();
});

// === Render Functions ===

// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺' },
    { name: 'Cappuccino', price: '55₺' },
    { name: 'Latte', price: '60₺' },
    { name: 'Türk Kahvesi', price: '40₺' },
    { name: 'Çay', price: '25₺' },
    { name: 'Cheesecake', price: '70₺' },
    { name: 'Kruvasan', price: '50₺' },
    { name: 'Sandviç', price: '80₺' },
    { name: 'Soğuk Kahve', price: '65₺' },
    { name: 'Limonata', price: '35₺' }
];

function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center text-center mt-10 space-y-8 animate-fade-in">
            <div class="w-32 h-32 rounded-full bg-coffee-dark text-coffee-cream flex items-center justify-center shadow-lg mb-4">
                <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2,21V19H20V21H2M20,8V5H18V8H20M20,3A2,2 0 0,1 22,5V8A2,2 0 0,1 20,10H18V13A4,4 0 0,1 14,17H8A4,4 0 0,1 4,13V3H20M16,5H6V13A2,2 0 0,0 8,15H14A2,2 0 0,0 16,13V5Z"/>
                </svg>
            </div>
            <h2 class="text-4xl md:text-5xl font-heading font-bold text-coffee-dark">Kahve Dükkanı'na Hoş Geldiniz!</h2>
            <p class="text-lg text-coffee-light max-w-2xl font-body">
                Günün her saatinde taze kavrulmuş çekirdeklerimizden hazırlanan enfes kahvelerimiz ve günlük atıştırmalıklarımızla size en iyi deneyimi sunmak için buradayız.
            </p>
            <div class="w-full max-w-3xl mt-8 rounded-xl overflow-hidden shadow-2xl border-4 border-coffee-cream">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Taze Kahve ve Ortam" class="w-full h-64 md:h-96 object-cover" />
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">Hakkımızda</h2>
            <div class="bg-white/50 p-6 rounded-lg shadow-sm text-lg text-coffee-dark font-body space-y-4">
                <p>Kahve Dükkanı, iyi kahvenin herkesin hakkı olduğu inancıyla 2023 yılında kuruldu.</p>
                <p>Amacımız, özenle seçilmiş dünyanın en iyi kahve çekirdeklerini, ustalıkla kavurarak fincanınıza taşımak ve yoğun hayat temposunda size huzurlu bir mola sunmaktır.</p>
                <p>Güler yüzlü ekibimiz, rahat atmosferimiz ve eşsiz lezzetlerimizle sadece bir kafe değil, aynı zamanda buluşma noktanız olmayı hedefliyoruz.</p>
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="max-w-3xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">Destek & SSS</h2>
            <div class="space-y-4">
                <details class="bg-white/60 p-4 rounded-lg shadow-sm cursor-pointer group">
                    <summary class="font-bold text-lg text-coffee-dark outline-none">Çalışma saatleriniz nedir?</summary>
                    <p class="mt-2 text-coffee-light pl-4">Haftanın her günü 08:00 - 22:00 saatleri arasında hizmet vermekteyiz.</p>
                </details>
                <details class="bg-white/60 p-4 rounded-lg shadow-sm cursor-pointer group">
                    <summary class="font-bold text-lg text-coffee-dark outline-none">Paket servisiniz var mı?</summary>
                    <p class="mt-2 text-coffee-light pl-4">Evet, anlaşmalı kurye platformları üzerinden sipariş verebilirsiniz.</p>
                </details>
                <details class="bg-white/60 p-4 rounded-lg shadow-sm cursor-pointer group">
                    <summary class="font-bold text-lg text-coffee-dark outline-none">Toplu sipariş veya etkinlik rezervasyonu alıyor musunuz?</summary>
                    <p class="mt-2 text-coffee-light pl-4">Özel etkinlikler ve toplantılar için rezervasyon kabul ediyoruz. Lütfen iletişim sayfamızdan bizimle irtibata geçin.</p>
                </details>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="max-w-3xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white/50 p-6 rounded-lg shadow-sm">
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-3 font-body">
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            info@kahvedukkani.com
                        </li>
                        <li class="flex items-center gap-2">
                            <svg class="w-5 h-5 text-coffee-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            0 (212) 555 12 34
                        </li>
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-coffee-dark mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Kahve Sok. No:42, Kadıköy / İstanbul
                        </li>
                    </ul>
                </div>
                <form class="space-y-4 bg-white/50 p-6 rounded-lg shadow-sm" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-bold text-coffee-dark mb-1">Adınız</label>
                        <input type="text" class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-white" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-coffee-dark mb-1">E-posta</label>
                        <input type="email" class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-white" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold text-coffee-dark mb-1">Mesajınız</label>
                        <textarea class="w-full p-2 border border-coffee-accent rounded focus:outline-none focus:ring-2 focus:ring-coffee-dark bg-white h-24" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee-dark text-coffee-cream py-2 rounded font-bold hover:bg-coffee-light transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="max-w-4xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-white/60 p-5 rounded-lg border-l-4 border-coffee-dark shadow-sm">
                    <h3 class="text-xl font-bold font-heading mb-2">Kadıköy Merkez Şube</h3>
                    <p class="text-coffee-light mb-2">Moda Caddesi, Kahve Sok. No:42<br>Kadıköy / İstanbul</p>
                    <p class="text-sm font-bold">Çalışma: 08:00 - 22:00</p>
                </div>
                <div class="bg-white/60 p-5 rounded-lg border-l-4 border-coffee-dark shadow-sm">
                    <h3 class="text-xl font-bold font-heading mb-2">Beşiktaş Çarşı Şube</h3>
                    <p class="text-coffee-light mb-2">Barbaros Bulvarı, Kartal Sk. No:15<br>Beşiktaş / İstanbul</p>
                    <p class="text-sm font-bold">Çalışma: 07:30 - 23:00</p>
                </div>
                <div class="bg-white/60 p-5 rounded-lg border-l-4 border-coffee-dark shadow-sm">
                    <h3 class="text-xl font-bold font-heading mb-2">Alsancak Şube</h3>
                    <p class="text-coffee-light mb-2">Kordon Boyu, Deniz Sk. No:8<br>Konak / İzmir</p>
                    <p class="text-sm font-bold">Çalışma: 08:00 - 23:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white/60 p-4 rounded-lg shadow-sm border border-coffee-accent/50 hover:border-coffee-dark transition-colors duration-300">
            <h3 class="text-xl font-bold font-heading text-coffee-dark">${item.name}</h3>
            <p class="text-sm text-coffee-light mt-1">Özenle hazırlanmış, taze ${item.name.toLowerCase()}.</p>
        </div>
    `).join('');

    return `
        <div class="max-w-4xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">Menü İçerikleri</h2>
            <p class="mb-6 text-lg">Sizler için özenle hazırladığımız yiyecek ve içeceklerimiz:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    let priceListHtml = menuItems.map(item => `
        <li class="flex justify-between items-center py-3 border-b border-coffee-accent/40 last:border-0 hover:bg-white/40 px-2 rounded transition-colors">
            <span class="text-lg font-body">${item.name}</span>
            <span class="text-xl font-bold font-heading text-coffee-dark">${item.price}</span>
        </li>
    `).join('');

    return `
        <div class="max-w-2xl mx-auto mt-8 animate-fade-in">
            <h2 class="text-3xl font-heading font-bold text-coffee-dark mb-6 border-b-2 border-coffee-accent pb-2">Fiyat Listesi</h2>
            <div class="bg-white/50 p-6 rounded-xl shadow-md">
                <ul class="flex flex-col">
                    ${priceListHtml}
                </ul>
            </div>
            <p class="text-sm text-center mt-6 text-coffee-light italic">* Fiyatlarımıza KDV dahildir.</p>
        </div>
    `;
}
