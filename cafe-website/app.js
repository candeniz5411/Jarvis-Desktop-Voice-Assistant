// Data
const menuItems = [
    { name: "Espresso", price: 45, type: "coffee" },
    { name: "Cappuccino", price: 55, type: "coffee" },
    { name: "Latte", price: 60, type: "coffee" },
    { name: "Türk Kahvesi", price: 40, type: "coffee" },
    { name: "Çay", price: 25, type: "tea" },
    { name: "Cheesecake", price: 70, type: "dessert" },
    { name: "Kruvasan", price: 50, type: "food" },
    { name: "Sandviç", price: 80, type: "food" },
    { name: "Soğuk Kahve", price: 65, type: "coffee" },
    { name: "Limonata", price: 35, type: "cold-drink" }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const content = document.getElementById('content');
const navLinks = document.querySelectorAll('.nav-link');

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small delay to allow display:block to apply before opacity transition
    setTimeout(() => {
        sidebarOverlay.classList.remove('opacity-0');
    }, 10);
    document.body.classList.add('sidebar-open');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('opacity-0');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300);
    document.body.classList.remove('sidebar-open');
}

menuBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 1024) { // Close on mobile/tablet
            closeSidebar();
        }
    });
});

// Routing Logic
const routes = {
    home: renderHome,
    about: renderAbout,
    support: renderSupport,
    contact: renderContact,
    locations: renderLocations,
    menu: renderMenu,
    prices: renderPrices
};

function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    const renderer = routes[hash] || renderHome;

    // Fade out effect could be added here, but for simplicity we just replace content
    content.innerHTML = `<div class="fade-in">${renderer()}</div>`;

    // Update active state in sidebar (optional)
    navLinks.forEach(link => {
        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('bg-[#FFFDD0]', 'text-[#3E2723]');
            link.classList.remove('hover:bg-[#FFFDD0]/20');
        } else {
            link.classList.remove('bg-[#FFFDD0]', 'text-[#3E2723]');
            link.classList.add('hover:bg-[#FFFDD0]/20');
        }
    });
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);

// Page Renderers
function renderHome() {
    return `
        <div class="flex flex-col items-center text-center space-y-8 mt-8">
            <h1 class="text-4xl md:text-6xl font-serif font-bold text-[#3E2723]">Hoş Geldiniz</h1>
            <p class="text-xl md:text-2xl text-[#3E2723]/80 italic max-w-2xl">
                "Bir fincan kahve, bin yıllık hatır..."
            </p>
            <div class="w-full max-w-4xl overflow-hidden rounded-xl shadow-2xl border-4 border-[#3E2723]/20">
                <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Kahve Keyfi"
                    class="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                >
            </div>
            <div class="mt-8">
                <a href="#menu" class="inline-block bg-[#3E2723] text-[#FFFDD0] px-8 py-3 rounded-full text-lg font-bold hover:bg-[#5D4037] transition shadow-lg transform hover:-translate-y-1">
                    Menüyü İncele
                </a>
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto bg-white/50 p-8 rounded-xl shadow-sm border border-[#3E2723]/10">
            <h2 class="text-3xl font-serif font-bold mb-6 text-[#3E2723] border-b pb-2">Hakkımızda</h2>
            <p class="mb-4 text-lg leading-relaxed">
                Kafe Keyfi, şehrin gürültüsünden uzaklaşıp huzur bulabileceğiniz, en kaliteli kahve çekirdeklerinin özenle işlendiği bir mekandır.
            </p>
            <p class="mb-4 text-lg leading-relaxed">
                2010 yılından beri, geleneksel tatları modern sunumlarla birleştirerek misafirlerimize unutulmaz deneyimler yaşatmayı hedefliyoruz.
            </p>
            <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" class="w-full h-64 object-cover rounded-lg mt-6 shadow-md">
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-3xl font-serif font-bold mb-6">Destek</h2>
            <div class="bg-white/60 p-8 rounded-xl shadow-lg">
                <p class="text-lg mb-6">Herhangi bir sorunuz, şikayetiniz veya öneriniz mi var? Müşteri hizmetleri ekibimiz size yardımcı olmaktan mutluluk duyar.</p>
                <div class="space-y-4">
                    <button class="w-full bg-[#3E2723] text-white py-3 rounded hover:bg-[#5D4037] transition">Canlı Destek Başlat</button>
                    <button class="w-full border-2 border-[#3E2723] text-[#3E2723] py-3 rounded hover:bg-[#3E2723] hover:text-white transition">Sıkça Sorulan Sorular</button>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white/50 p-6 rounded-xl shadow-sm">
                <h2 class="text-2xl font-bold mb-4">Bize Ulaşın</h2>
                <ul class="space-y-4 text-lg">
                    <li class="flex items-center"><span class="font-bold w-24">Telefon:</span> +90 212 555 12 34</li>
                    <li class="flex items-center"><span class="font-bold w-24">E-posta:</span> info@kafekeyfi.com</li>
                    <li class="flex items-center"><span class="font-bold w-24">Adres:</span> Kahve Sokak No:1, İstanbul</li>
                </ul>
            </div>
            <div class="bg-white/50 p-6 rounded-xl shadow-sm">
                <h2 class="text-2xl font-bold mb-4">Çalışma Saatleri</h2>
                <ul class="space-y-2 text-lg">
                    <li class="flex justify-between border-b border-gray-300 pb-2"><span>Hafta İçi:</span> <span>07:00 - 23:00</span></li>
                    <li class="flex justify-between border-b border-gray-300 pb-2"><span>Cumartesi:</span> <span>08:00 - 00:00</span></li>
                    <li class="flex justify-between"><span>Pazar:</span> <span>09:00 - 22:00</span></li>
                </ul>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-8 text-center">Şubelerimiz</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition card-hover">
                    <h3 class="text-xl font-bold mb-2 text-[#3E2723]">Kadıköy</h3>
                    <p class="text-gray-600 mb-4">Moda Caddesi No:42</p>
                    <a href="#" class="text-[#3E2723] font-bold underline">Haritada Gör</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition card-hover">
                    <h3 class="text-xl font-bold mb-2 text-[#3E2723]">Beşiktaş</h3>
                    <p class="text-gray-600 mb-4">Çarşı İçi No:10</p>
                    <a href="#" class="text-[#3E2723] font-bold underline">Haritada Gör</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition card-hover">
                    <h3 class="text-xl font-bold mb-2 text-[#3E2723]">Beyoğlu</h3>
                    <p class="text-gray-600 mb-4">İstiklal Caddesi No:100</p>
                    <a href="#" class="text-[#3E2723] font-bold underline">Haritada Gör</a>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    // Group by simple logic or just list all with descriptions
    // Since user separated "Menu Content" and "Prices", maybe I show Images/Details here
    // But since I don't have descriptions, I'll show a nice grid of items without explicit prices (or with them small)

    return `
        <div class="max-w-5xl mx-auto">
            <h2 class="text-3xl font-serif font-bold mb-8 text-center text-[#3E2723]">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white rounded-xl overflow-hidden shadow-lg transform transition hover:scale-105 border border-[#3E2723]/5">
                        <div class="h-40 bg-[#3E2723]/10 flex items-center justify-center text-[#3E2723]/30">
                            <!-- Placeholder for food image -->
                            <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold text-[#3E2723] mb-2">${item.name}</h3>
                            <p class="text-gray-600 text-sm">Özenle seçilmiş malzemelerle hazırlanmış lezzet.</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderPrices() {
    // A clean table list for prices
    return `
        <div class="max-w-2xl mx-auto bg-white/80 p-8 rounded-xl shadow-xl backdrop-blur-sm border border-[#3E2723]/20">
            <h2 class="text-3xl font-serif font-bold mb-8 text-center text-[#3E2723] border-b-2 border-[#3E2723] pb-4 inline-block w-full">Fiyat Listesi</h2>
            <ul class="space-y-4">
                ${menuItems.map(item => `
                    <li class="flex justify-between items-center text-lg md:text-xl border-b border-dashed border-[#3E2723]/30 pb-2 hover:pl-2 transition-all cursor-default">
                        <span class="font-medium text-[#3E2723]">${item.name}</span>
                        <span class="font-bold text-[#3E2723] bg-[#3E2723]/10 px-3 py-1 rounded-full">${item.price}₺</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}
