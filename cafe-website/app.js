// Menu Data Structure
const menuItems = [
    { name: "Espresso", price: 45, type: "drink" },
    { name: "Cappuccino", price: 55, type: "drink" },
    { name: "Latte", price: 60, type: "drink" },
    { name: "Türk Kahvesi", price: 40, type: "drink" },
    { name: "Çay", price: 25, type: "drink" },
    { name: "Cheesecake", price: 70, type: "food" },
    { name: "Kruvasan", price: 50, type: "food" },
    { name: "Sandviç", price: 80, type: "food" },
    { name: "Soğuk Kahve", price: 65, type: "drink" },
    { name: "Limonata", price: 35, type: "drink" },
];

// Sidebar DOM Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const appContainer = document.getElementById('app');
const sidebarLinks = sidebar.querySelectorAll('a');

// State
let isSidebarOpen = false;

// Event Listeners for Sidebar
function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    if (isSidebarOpen) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
        overlay.classList.add('block');
        // Prevent body scroll when menu open
        document.body.style.overflow = 'hidden';
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.remove('block');
        overlay.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isSidebarOpen) toggleSidebar();
    });
});

// Routing
const routes = {
    '/': renderHome,
    '/hakkinda': renderAbout,
    '/destek': renderSupport,
    '/iletisim': renderContact,
    '/sube-konumlari': renderLocations,
    '/menu-icerikleri': renderMenuContent,
    '/fiyatlar': renderPrices,
};

function router() {
    // Get the current path without the hash character, fallback to '/'
    let path = window.location.hash.slice(1) || '/';

    // Find matching route or default to home
    const routeFn = routes[path] || routes['/'];

    // Render content
    appContainer.innerHTML = routeFn();
}

// Initial route loading and hash change listener
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions

function renderHome() {
    return `
        <div class="flex flex-col items-center justify-center animate-fade-in text-center h-full">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-6">Kahve Dükkanı'na Hoş Geldiniz</h1>
            <p class="text-xl mb-8 max-w-2xl text-coffee/80">Sıcacık kahvelerimiz ve taze atıştırmalıklarımızla gününüze keyif katıyoruz. Modern, minimalist ve rahat atmosferimizde sizi ağırlamaktan mutluluk duyarız.</p>

            <div class="w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden mb-8 ring-4 ring-coffee/10">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                     alt="Taze çekilmiş espresso kahve ve kahve çekirdekleri"
                     class="w-full h-64 md:h-96 object-cover transform transition hover:scale-105 duration-700">
            </div>

            <a href="#/menu-icerikleri" class="bg-coffee text-cream px-8 py-3 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">Menümüzü İnceleyin</a>
        </div>
    `;
}

function renderAbout() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4">Hakkımızda</h1>
            <div class="bg-white p-8 rounded-2xl shadow-md border border-coffee/10">
                <p class="text-lg leading-relaxed text-gray-700 mb-6">
                    Kahve Dükkanı, özenle seçilmiş kahve çekirdeklerini modern ve minimalist bir yaklaşımla sunmak üzere kuruldu. Amacımız, şehrin karmaşasından uzaklaşıp kendinize vakit ayırabileceğiniz sıcak ve samimi bir ortam yaratmaktır.
                </p>
                <p class="text-lg leading-relaxed text-gray-700">
                    Her bir kahve fincanında kaliteyi, tutkuyu ve ustalığı hissetmeniz için çalışıyoruz. Sadece kahve değil, aynı zamanda günlük olarak hazırlanan taze kruvasan, sandviç ve tatlılarımızla da damak zevkinize hitap ediyoruz.
                </p>
            </div>
        </div>
    `;
}

function renderSupport() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4">Destek</h1>
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee">
                    <h3 class="text-xl font-bold mb-2 font-heading">Sıkça Sorulan Sorular</h3>
                    <p class="text-gray-700 mb-4">Siparişleriniz, ürün içeriklerimiz veya alerjen uyarıları hakkında bilgi almak için sıkça sorulan sorular bölümümüze göz atabilirsiniz.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee">
                    <h3 class="text-xl font-bold mb-2 font-heading">Özel Etkinlikler & Toplu Siparişler</h3>
                    <p class="text-gray-700 mb-4">Özel etkinlikleriniz, toplantılarınız veya toplu organizasyonlarınız için özel catering ve içecek hizmetimiz mevcuttur.</p>
                </div>

                <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-coffee">
                    <h3 class="text-xl font-bold mb-2 font-heading">Şikayet ve Önerileriniz</h3>
                    <p class="text-gray-700 mb-4">Sizlere daha iyi hizmet verebilmek için görüşleriniz bizim için çok değerlidir. İletişim sayfası üzerinden bize ulaşabilirsiniz.</p>
                </div>
            </div>
        </div>
    `;
}

function renderContact() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4">İletişim</h1>
            <div class="bg-white p-8 rounded-2xl shadow-md border border-coffee/10">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 class="text-xl font-bold mb-4 font-heading text-coffee flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Adres
                        </h3>
                        <p class="text-gray-700">Kahve Caddesi No:123<br>Merkez / İstanbul<br>Türkiye</p>
                    </div>
                    <div>
                        <h3 class="text-xl font-bold mb-4 font-heading text-coffee flex items-center gap-2">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            İletişim Bilgileri
                        </h3>
                        <p class="text-gray-700">Telefon: +90 555 123 45 67<br>E-posta: info@kahvedukkani.com</p>
                    </div>
                </div>

                <form class="space-y-4 border-t border-gray-100 pt-8" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">Adınız Soyadınız</label>
                        <input type="text" id="name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee p-2 border" required>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">E-posta Adresiniz</label>
                        <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee p-2 border" required>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700">Mesajınız</label>
                        <textarea id="message" rows="4" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee p-2 border" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee text-cream py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors font-bold">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    return `
        <div class="max-w-3xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4">Şube Konumları</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Branch 1 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-coffee/10 transition-transform hover:-translate-y-1">
                    <div class="bg-coffee p-4 text-cream">
                        <h3 class="text-xl font-bold font-heading">Merkez Şube (Kadıköy)</h3>
                    </div>
                    <div class="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <p class="text-gray-600 mb-4 flex items-start gap-2">
                                <svg class="w-5 h-5 mt-0.5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Moda Cad. No:42, Kadıköy / İstanbul
                            </p>
                            <p class="text-gray-600 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Çalışma Saatleri: 07:00 - 23:00
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Branch 2 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-coffee/10 transition-transform hover:-translate-y-1">
                    <div class="bg-coffee p-4 text-cream">
                        <h3 class="text-xl font-bold font-heading">Beşiktaş Şubesi</h3>
                    </div>
                    <div class="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <p class="text-gray-600 mb-4 flex items-start gap-2">
                                <svg class="w-5 h-5 mt-0.5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Barbaros Bulvarı No:15, Beşiktaş / İstanbul
                            </p>
                            <p class="text-gray-600 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Çalışma Saatleri: 08:00 - 22:00
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Branch 3 -->
                <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-coffee/10 transition-transform hover:-translate-y-1">
                    <div class="bg-coffee p-4 text-cream">
                        <h3 class="text-xl font-bold font-heading">Nişantaşı Şubesi</h3>
                    </div>
                    <div class="p-6 flex-grow flex flex-col justify-between">
                        <div>
                            <p class="text-gray-600 mb-4 flex items-start gap-2">
                                <svg class="w-5 h-5 mt-0.5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                Teşvikiye Mah. No:8, Şişli / İstanbul
                            </p>
                            <p class="text-gray-600 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-coffee shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                Çalışma Saatleri: 08:30 - 21:00
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderMenuContent() {
    let drinksHtml = '';
    let foodsHtml = '';

    menuItems.forEach(item => {
        const icon = item.type === 'drink'
            ? `<svg class="w-5 h-5 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>`
            : `<svg class="w-5 h-5 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path></svg>`;

        const html = `
            <div class="bg-white p-4 rounded-lg shadow-sm border border-coffee/10 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div class="bg-cream p-3 rounded-full">
                    ${icon}
                </div>
                <div class="flex-grow">
                    <h4 class="text-lg font-bold font-heading text-coffee">${item.name}</h4>
                </div>
            </div>
        `;

        if (item.type === 'drink') drinksHtml += html;
        else foodsHtml += html;
    });

    return `
        <div class="max-w-4xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4 text-center">Menü İçerikleri</h1>
            <p class="text-center text-gray-600 mb-10 max-w-2xl mx-auto">Taze çekirdeklerimizden özenle hazırlanan içeceklerimiz ve günlük pişirilen leziz atıştırmalıklarımızla tanışın.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h2 class="text-2xl font-heading font-bold mb-6 flex items-center gap-2 border-b border-coffee/10 pb-2">
                        İçecekler
                    </h2>
                    <div class="space-y-4">
                        ${drinksHtml}
                    </div>
                </div>

                <div>
                    <h2 class="text-2xl font-heading font-bold mb-6 flex items-center gap-2 border-b border-coffee/10 pb-2">
                        Yiyecekler
                    </h2>
                    <div class="space-y-4">
                        ${foodsHtml}
                    </div>
                </div>
            </div>

            <div class="mt-12 text-center">
                 <a href="#/fiyatlar" class="inline-block bg-coffee text-cream px-6 py-2 rounded-full font-bold hover:bg-opacity-90 transition-colors shadow">Fiyat Listesini Gör</a>
            </div>
        </div>
    `;
}

function renderPrices() {
    let itemsHtml = '';

    menuItems.forEach(item => {
        itemsHtml += `
            <div class="flex items-center justify-between p-4 border-b border-gray-200 hover:bg-white/50 transition-colors">
                <span class="text-lg font-medium text-coffee">${item.name}</span>
                <span class="text-lg font-bold bg-white px-3 py-1 rounded-full shadow-sm border border-coffee/10">${item.price}₺</span>
            </div>
        `;
    });

    return `
        <div class="max-w-2xl mx-auto py-8">
            <h1 class="text-3xl md:text-4xl font-heading font-bold mb-6 border-b-2 border-coffee/20 pb-4 text-center">Fiyat Listesi</h1>

            <div class="bg-cream/50 rounded-2xl shadow-lg border border-coffee/10 overflow-hidden">
                <div class="bg-coffee text-cream p-4 flex justify-between items-center">
                    <span class="font-bold text-lg uppercase tracking-wider">Ürün</span>
                    <span class="font-bold text-lg uppercase tracking-wider">Fiyat</span>
                </div>
                <div class="p-2">
                    ${itemsHtml}
                </div>
            </div>

            <p class="text-center text-sm text-gray-500 mt-6">* Tüm fiyatlarımıza KDV dahildir.</p>
        </div>
    `;
}