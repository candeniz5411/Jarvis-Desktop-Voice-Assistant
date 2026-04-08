// State and Elements
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const appContent = document.getElementById('app-content');

// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', category: 'Sıcak İçecekler' },
    { name: 'Cappuccino', price: '55₺', category: 'Sıcak İçecekler' },
    { name: 'Latte', price: '60₺', category: 'Sıcak İçecekler' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Sıcak İçecekler' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlılar' },
    { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalıklar' },
    { name: 'Sandviç', price: '80₺', category: 'Atıştırmalıklar' }
];

// Sidebar Toggle Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar on link click (mobile friendly)
document.querySelectorAll('.menu-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing
const routes = {
    '': renderHome,
    '#hakkinda': renderHakkinda,
    '#destek': renderDestek,
    '#iletisim': renderIletisim,
    '#sube-konumlari': renderSubeKonumlari,
    '#menu-icerikleri': renderMenuIcerikleri,
    '#fiyatlar': renderFiyatlar
};

function router() {
    let hash = window.location.hash;
    // Route matching
    let renderFunc = routes[hash];

    if (renderFunc) {
        appContent.innerHTML = renderFunc();
    } else {
        // Fallback to home if route not found
        appContent.innerHTML = renderHome();
    }
}

// Render Functions

function renderHome() {
    return `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl mb-4">Kahve Dükkanına Hoş Geldiniz</h2>
            <p class="text-lg mb-8 text-gray-700">En taze kahve çekirdekleri ve enfes tatlılar ile hizmetinizdeyiz.
               Kahve molanız için mükemmel bir yer.</p>
            <div class="mb-8">
                <!-- Using a placeholder coffee image -->
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                     alt="Kahve Dükkanı"
                     class="w-full max-w-3xl mx-auto rounded-lg shadow-lg object-cover h-64 md:h-96">
            </div>
            <a href="#menu-icerikleri" class="btn-primary inline-block">Menümüzü İnceleyin</a>
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">Hakkımızda</h2>
            <p class="mb-4 text-gray-700 leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri sizlere en kaliteli kahve deneyimini sunmak için çalışıyoruz. Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini, ustalıkla kavurarak fincanınıza taşıyoruz.</p>
            <p class="text-gray-700 leading-relaxed">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde hissedebilecekleri sıcak ve samimi bir ortam yaratmaktır. Günün yorgunluğunu atabileceğiniz, dostlarınızla keyifli vakit geçirebileceğiniz mekanlarımızda sizi ağırlamaktan mutluluk duyuyoruz.</p>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">Destek ve Sıkça Sorulan Sorular</h2>
            <div class="space-y-4">
                <div>
                    <h3 class="text-xl font-bold mb-2">Çalışma Saatleriniz Nelerdir?</h3>
                    <p class="text-gray-700">Hafta içi: 07:30 - 22:00<br>Hafta sonu: 08:30 - 23:00</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-2">Vegan seçenekleriniz var mı?</h3>
                    <p class="text-gray-700">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan tatlılarımız mevcuttur.</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-2">Paket servisiniz var mı?</h3>
                    <p class="text-gray-700">Şu anda paket servisimiz bulunmamaktadır, ancak gel-al servisimiz mevcuttur.</p>
                </div>
                <div class="mt-8 p-4 bg-gray-50 rounded">
                    <p class="text-sm text-gray-600">Başka sorularınız için lütfen İletişim sayfasından bize ulaşın.</p>
                </div>
            </div>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong class="text-coffee">Adres:</strong> Kahve Caddesi, No: 123, Kadıköy / İstanbul</p>
                    <p class="mb-2"><strong class="text-coffee">Telefon:</strong> +90 (216) 123 45 67</p>
                    <p class="mb-2"><strong class="text-coffee">E-posta:</strong> merhaba@kahvedukkani.com</p>
                </div>
                <div>
                    <h3 class="text-xl font-bold mb-4">Mesaj Gönderin</h3>
                    <form onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');" class="flex flex-col gap-4">
                        <input type="text" placeholder="Adınız Soyadınız" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee" required>
                        <input type="email" placeholder="E-posta Adresiniz" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee" required>
                        <textarea placeholder="Mesajınız" rows="4" class="p-2 border rounded focus:outline-none focus:ring-2 focus:ring-coffee" required></textarea>
                        <button type="submit" class="btn-primary self-start">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderSubeKonumlari() {
    return `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="border rounded p-4 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold mb-2">Kadıköy Şubesi (Merkez)</h3>
                    <p class="text-gray-600 mb-2">Moda Caddesi, No: 12</p>
                    <p class="text-sm text-gray-500">08:00 - 23:00</p>
                </div>
                <div class="border rounded p-4 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mb-2">Barbaros Bulvarı, No: 45</p>
                    <p class="text-sm text-gray-500">07:30 - 22:30</p>
                </div>
                <div class="border rounded p-4 shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold mb-2">Nişantaşı Şubesi</h3>
                    <p class="text-gray-600 mb-2">Teşvikiye Caddesi, No: 8</p>
                    <p class="text-sm text-gray-500">08:00 - 22:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenuIcerikleri() {
    // Group by category
    const categories = {};
    menuItems.forEach(item => {
        if (!categories[item.category]) categories[item.category] = [];
        categories[item.category].push(item);
    });

    let html = `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">Menü İçerikleri</h2>
            <div class="space-y-8">
    `;

    for (const [category, items] of Object.entries(categories)) {
        html += `
            <div>
                <h3 class="text-2xl font-bold mb-4 text-[#5C4033]">${category}</h3>
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
        `;
        items.forEach(item => {
            html += `<li class="flex items-center gap-2 text-lg"><span class="w-2 h-2 rounded-full bg-coffee inline-block"></span> ${item.name}</li>`;
        });
        html += `
                </ul>
            </div>
        `;
    }

    html += `
            </div>
            <div class="mt-8 text-center">
                <a href="#fiyatlar" class="btn-primary inline-block">Fiyatları Gör</a>
            </div>
        </div>
    `;
    return html;
}

function renderFiyatlar() {
    let html = `
        <div class="bg-white rounded-lg shadow p-6 border border-coffee/10">
            <h2 class="text-3xl mb-6 border-b pb-2">Fiyatlar</h2>
            <div class="max-w-2xl mx-auto">
                <ul class="divide-y divide-gray-200">
    `;

    menuItems.forEach(item => {
        html += `
                    <li class="py-4 flex justify-between items-center">
                        <span class="text-lg font-medium">${item.name}</span>
                        <span class="text-lg font-bold text-coffee">${item.price}</span>
                    </li>
        `;
    });

    html += `
                </ul>
            </div>
        </div>
    `;
    return html;
}

// Initialization
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
