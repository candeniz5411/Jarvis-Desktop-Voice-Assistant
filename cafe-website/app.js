// DOM Elements
const menuToggle = document.getElementById('menu-toggle');
const menuClose = document.getElementById('menu-close');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const appContent = document.getElementById('app-content');
const yearSpan = document.getElementById('year');
const navLinks = document.querySelectorAll('.nav-link');

// Set current year
yearSpan.textContent = new Date().getFullYear();

// --- Sidebar Logic ---

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

menuToggle.addEventListener('click', openSidebar);
menuClose.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a navigation link is clicked (especially useful on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});

// --- Data ---

const menuItems = [
    { name: 'Espresso', price: '45₺', category: 'Sıcak İçecekler', desc: 'Yoğun ve güçlü aromalı İtalyan klasiği.' },
    { name: 'Cappuccino', price: '55₺', category: 'Sıcak İçecekler', desc: 'Espresso, sıcak süt ve bol süt köpüğü.' },
    { name: 'Latte', price: '60₺', category: 'Sıcak İçecekler', desc: 'Bol sütlü yumuşak içimli espresso.' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Sıcak İçecekler', desc: 'Geleneksel yöntemlerle hazırlanan kahvemiz.' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler', desc: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler', desc: 'Buzlu, ferahlatıcı espresso bazlı kahve.' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler', desc: 'Ev yapımı taze naneli limonata.' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlılar', desc: 'Orman meyveli nefis peynir tatlısı.' },
    { name: 'Kruvasan', price: '50₺', category: 'Yiyecekler', desc: 'Tereyağlı taze Fransız çöreği.' },
    { name: 'Sandviç', price: '80₺', category: 'Yiyecekler', desc: 'Özel ekmeğinde taze malzemeli sandviç.' }
];

// --- Routing System ---

const routes = {
    'home': renderHome,
    'hakkinda': renderHakkinda,
    'destek': renderDestek,
    'iletisim': renderIletisim,
    'subeler': renderSubeler,
    'menu': renderMenu,
    'fiyatlar': renderFiyatlar
};

function router() {
    // Get the hash from the URL, removing the '#' symbol. Default to 'home'
    let hash = window.location.hash.slice(1) || 'home';

    // Execute the corresponding render function or default to home if not found
    const renderFunction = routes[hash] || routes['home'];

    // Smooth fade transition
    appContent.classList.add('opacity-0');

    setTimeout(() => {
        appContent.innerHTML = renderFunction();
        // Trigger reflow to ensure animation works
        void appContent.offsetWidth;
        appContent.classList.remove('opacity-0');
        appContent.classList.add('transition-opacity', 'duration-300');
    }, 150);
}

// Listen for hash changes
window.addEventListener('hashchange', router);
// Run router on initial load
window.addEventListener('load', router);

// --- View Renderers ---

function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center space-y-8 animate-fade-in-up">
            <div class="text-center space-y-4">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-brand-dark leading-tight">Kahve Dükkanı'na<br/><span class="text-brand-accent">Hoş Geldiniz</span></h1>
                <p class="text-lg md:text-xl text-brand-dark/80 max-w-2xl mx-auto font-body">En taze çekirdeklerle hazırlanan benzersiz kahve deneyimi için doğru yerdesiniz.</p>
            </div>

            <div class="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative group">
                <!-- Using verified external unsplash image -->
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Taze çekilmiş kahve" class="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105">
                <div class="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent flex items-end">
                    <div class="p-6 md:p-8 w-full text-brand-light">
                        <p class="text-xl md:text-2xl font-heading font-semibold">Günün Her Saati Taze Kahve</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap gap-4 justify-center mt-8">
                <a href="#menu" class="bg-brand-dark text-white px-8 py-3 rounded-full font-bold hover:bg-brand-accent transition-colors shadow-lg">Menüyü İncele</a>
                <a href="#subeler" class="bg-white text-brand-dark border-2 border-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-light transition-colors shadow-lg">Şubelerimiz</a>
            </div>
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-accent/10">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4 inline-block">Hakkımızda</h2>
            <div class="space-y-6 text-brand-dark/80 leading-relaxed text-lg">
                <p>Kahve Dükkanı, kahve tutkusunu en saf haliyle misafirlerine sunmak amacıyla kuruldu. Dünyanın farklı bölgelerinden özenle seçilmiş kahve çekirdeklerini, ustalıkla kavuruyor ve demliyoruz.</p>
                <p>Amacımız sadece bir içecek sunmak değil, aynı zamanda modern, minimalist ve sıcak atmosferimizde misafirlerimize huzurlu bir mola imkanı yaratmaktır.</p>
                <p class="font-semibold text-brand-dark">Her fincanda kalite, her yudumda mutluluk.</p>
            </div>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 text-center">Destek Merkezi</h2>

            <div class="space-y-4">
                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-dark">
                    <h3 class="font-heading font-bold text-xl mb-2">Nasıl sipariş verebilirim?</h3>
                    <p class="text-brand-dark/70">Şu an için online sipariş sistemimiz yapım aşamasındadır. Siparişlerinizi doğrudan şubelerimizden verebilirsiniz.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-dark">
                    <h3 class="font-heading font-bold text-xl mb-2">Toplu sipariş alıyor musunuz?</h3>
                    <p class="text-brand-dark/70">Evet, özel etkinlikler ve toplantılar için toplu sipariş kabul ediyoruz. Lütfen İletişim sayfasından bizimle irtibata geçin.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-dark">
                    <h3 class="font-heading font-bold text-xl mb-2">Alerjen uyarısı nerede bulabilirim?</h3>
                    <p class="text-brand-dark/70">Menümüzdeki yiyecek ve içeceklerin alerjen bilgileri için şubelerimizdeki baristalarımıza danışabilirsiniz. Süt alternatiflerimiz (badem, yulaf, soya) mevcuttur.</p>
                </div>
            </div>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div class="md:w-1/2 bg-brand-dark text-brand-light p-8 md:p-12 flex flex-col justify-center">
                <h2 class="text-3xl font-heading font-bold mb-6">Bize Ulaşın</h2>
                <p class="mb-8 opacity-80">Görüş, öneri ve talepleriniz için bize ulaşmaktan çekinmeyin. Size yardımcı olmaktan mutluluk duyarız.</p>

                <div class="space-y-4 font-body">
                    <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <span>info@kahvedukkani.com</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                        <span>0 (850) 123 45 67</span>
                    </div>
                </div>
            </div>

            <div class="md:w-1/2 p-8 md:p-12 bg-white">
                <form class="space-y-6" onsubmit="event.preventDefault(); alert('Mesajınız başarıyla gönderildi!');">
                    <div>
                        <label class="block text-sm font-medium text-brand-dark mb-1">Adınız Soyadınız</label>
                        <input type="text" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-shadow" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-brand-dark mb-1">E-posta Adresiniz</label>
                        <input type="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-shadow" required>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-brand-dark mb-1">Mesajınız</label>
                        <textarea rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-dark focus:border-brand-dark outline-none transition-shadow" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brand-dark text-white font-bold py-3 rounded-lg hover:bg-brand-accent transition-colors shadow-md">Mesaj Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderSubeler() {
    const subeler = [
        { ad: 'Merkez Şube', adres: 'Kahveciler Sk. No:1, Kadıköy/İstanbul', saat: '08:00 - 23:00' },
        { ad: 'Moda Şubesi', adres: 'Moda Cd. No:45, Kadıköy/İstanbul', saat: '09:00 - 00:00' },
        { ad: 'Beşiktaş Şubesi', adres: 'Çarşı İçi No:12, Beşiktaş/İstanbul', saat: '08:00 - 23:00' }
    ];

    let html = `<div class="max-w-5xl mx-auto"><h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 text-center">Şube Konumları</h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">`;

    subeler.forEach(sube => {
        html += `
            <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow">
                <div class="h-32 bg-brand-dark/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-brand-dark opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <div class="p-6">
                    <h3 class="font-heading font-bold text-xl text-brand-dark mb-2">${sube.ad}</h3>
                    <p class="text-gray-600 text-sm mb-4 h-10">${sube.adres}</p>
                    <div class="flex items-center text-sm font-semibold text-brand-accent bg-brand-light/50 p-2 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        ${sube.saat}
                    </div>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function renderMenu() {
    let html = `<div class="max-w-4xl mx-auto"><h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 text-center">Menü İçerikleri</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6">`;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-brand-dark/10 hover:border-brand-accent transition-colors flex flex-col justify-between">
                <div>
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="font-heading font-bold text-xl text-brand-dark">${item.name}</h3>
                        <span class="text-xs font-bold px-2 py-1 bg-brand-light text-brand-dark rounded-full">${item.category}</span>
                    </div>
                    <p class="text-gray-600 text-sm italic">${item.desc}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-dashed border-gray-200 text-right">
                    <a href="#fiyatlar" class="text-brand-accent hover:text-brand-dark text-sm font-bold flex items-center justify-end">
                        Fiyatı Gör
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    return html;
}

function renderFiyatlar() {
    let html = `<div class="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-xl">
        <h2 class="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-8 text-center border-b border-brand-dark/10 pb-6">Fiyat Listesi</h2>
        <ul class="space-y-4">`;

    menuItems.forEach(item => {
        html += `
            <li class="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 hover:bg-brand-light/30 px-4 rounded transition-colors group">
                <span class="font-heading font-semibold text-lg text-brand-dark group-hover:text-brand-accent transition-colors">${item.name}</span>
                <span class="font-bold text-xl text-brand-dark border-b-2 border-brand-accent/30">${item.price}</span>
            </li>
        `;
    });

    html += `</ul></div>`;
    return html;
}