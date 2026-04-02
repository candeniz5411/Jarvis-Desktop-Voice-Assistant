// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45' },
    { name: 'Cappuccino', price: '55' },
    { name: 'Latte', price: '60' },
    { name: 'Türk Kahvesi', price: '40' },
    { name: 'Çay', price: '25' },
    { name: 'Cheesecake', price: '70' },
    { name: 'Kruvasan', price: '50' },
    { name: 'Sandviç', price: '80' },
    { name: 'Soğuk Kahve', price: '65' },
    { name: 'Limonata', price: '35' }
];

// DOM Elements
const contentDiv = document.getElementById('content');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Sidebar Toggle Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when sidebar is open
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a navigation link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
function renderHome() {
    return `
        <div class="text-center animate-fade-in">
            <h1 class="page-title text-5xl mb-4">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-xl mb-8 text-brand-dark/80 max-w-2xl mx-auto">En taze kahve çekirdekleri ve enfes tatlılarımızla size eşsiz bir deneyim sunuyoruz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop" alt="Taze Kahve" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="page-title">Hakkımızda</h2>
            <div class="bg-white p-8 rounded-lg shadow-md space-y-4 text-lg leading-relaxed">
                <p>Kahve Dükkanı olarak, 2010 yılından beri kahve tutkunlarına en kaliteli hizmeti sunmayı amaçlıyoruz.</p>
                <p>Dünyanın dört bir yanından özenle seçtiğimiz kahve çekirdeklerini, ustalıkla kavurarak fincanınıza taşıyoruz. Misyonumuz, sadece bir kahve içmek değil, aynı zamanda dostlukların pekiştiği, huzurlu anların yaşandığı bir mekan sunmaktır.</p>
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="page-title">Destek</h2>
            <div class="bg-white p-8 rounded-lg shadow-md space-y-4">
                <p class="text-lg">Sıkça sorulan sorular veya yardıma ihtiyacınız olan konular için buradayız.</p>
                <ul class="list-disc list-inside space-y-2 mt-4 text-brand-dark/80">
                    <li>Sipariş takibi nasıl yapılır?</li>
                    <li>İade ve iptal koşulları nelerdir?</li>
                    <li>Sadakat programı nasıl çalışır?</li>
                </ul>
                <p class="mt-6 font-bold">Yardım merkezimize 7/24 ulaşabilirsiniz.</p>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="page-title">İletişim</h2>
            <div class="bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold font-heading mb-4 text-brand-accent">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:1, Kadıköy / İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> +90 216 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                </div>
                <div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <input type="text" placeholder="Adınız" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-brand-accent" required>
                        <input type="email" placeholder="E-posta Adresiniz" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-brand-accent" required>
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-brand-accent" required></textarea>
                        <button type="submit" class="bg-brand-dark text-white px-6 py-2 rounded hover:bg-brand-accent transition-colors w-full font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="animate-fade-in max-w-4xl mx-auto">
            <h2 class="page-title">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-accent">
                    <h3 class="font-bold text-xl mb-2 font-heading">Kadıköy Merkez</h3>
                    <p class="text-sm text-gray-600 mb-4">Caferağa Mah. Moda Cad. No: 1</p>
                    <p class="text-sm">Hafta içi: 07:00 - 23:00</p>
                    <p class="text-sm">Hafta sonu: 08:00 - 00:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-accent">
                    <h3 class="font-bold text-xl mb-2 font-heading">Beşiktaş Şube</h3>
                    <p class="text-sm text-gray-600 mb-4">Sinanpaşa Mah. Şair Nedim Cad. No: 15</p>
                    <p class="text-sm">Hafta içi: 07:00 - 22:00</p>
                    <p class="text-sm">Hafta sonu: 08:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-brand-accent">
                    <h3 class="font-bold text-xl mb-2 font-heading">Karaköy Şube</h3>
                    <p class="text-sm text-gray-600 mb-4">Kemankeş Karamustafa Paşa Mah. No: 42</p>
                    <p class="text-sm">Hafta içi: 08:00 - 23:00</p>
                    <p class="text-sm">Hafta sonu: 09:00 - 00:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenuContent() {
    let itemsHtml = menuItems.map(item => `
        <div class="bg-white p-4 rounded shadow hover:shadow-md transition-shadow border-l-4 border-brand-accent flex items-center justify-between">
            <span class="font-bold text-lg">${item.name}</span>
            <span class="text-gray-500 text-sm italic">Kahve Dükkanı Klasikleri</span>
        </div>
    `).join('');

    return `
        <div class="animate-fade-in max-w-4xl mx-auto">
            <h2 class="page-title">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderPrices() {
    let itemsHtml = menuItems.map(item => `
        <div class="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 hover:bg-gray-50 px-2 rounded transition-colors">
            <span class="font-bold">${item.name}</span>
            <span class="text-brand-accent font-bold text-lg">${item.price}₺</span>
        </div>
    `).join('');

    return `
        <div class="animate-fade-in max-w-2xl mx-auto">
            <h2 class="page-title">Fiyatlar</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                ${itemsHtml}
            </div>
        </div>
    `;
}

// Router
function handleRoute() {
    const hash = window.location.hash;

    // Simple fade animation logic
    contentDiv.style.opacity = '0';

    setTimeout(() => {
        switch(hash) {
            case '#/hakkinda':
                contentDiv.innerHTML = renderAbout();
                break;
            case '#/destek':
                contentDiv.innerHTML = renderSupport();
                break;
            case '#/iletisim':
                contentDiv.innerHTML = renderContact();
                break;
            case '#/subeler':
                contentDiv.innerHTML = renderLocations();
                break;
            case '#/menu':
                contentDiv.innerHTML = renderMenuContent();
                break;
            case '#/fiyatlar':
                contentDiv.innerHTML = renderPrices();
                break;
            case '#/':
            case '':
            default:
                contentDiv.innerHTML = renderHome();
                break;
        }

        // Add minimal inline style for fade-in effect defined in JS (if not using tailwind plugin)
        contentDiv.style.transition = 'opacity 0.3s ease-in-out';
        contentDiv.style.opacity = '1';

        // Scroll to top on route change
        window.scrollTo(0, 0);
    }, 150); // Small delay to allow fade out
}

// Event Listeners for Routing
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
