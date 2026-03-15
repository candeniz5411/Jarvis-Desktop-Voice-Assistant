// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', category: 'Sıcak Kahveler', description: 'Yoğun ve güçlü klasik İtalyan kahvesi.' },
    { name: 'Cappuccino', price: '55₺', category: 'Sıcak Kahveler', description: 'Espresso, sıcak süt ve bol süt köpüğü.' },
    { name: 'Latte', price: '60₺', category: 'Sıcak Kahveler', description: 'Espresso ve bol sıcak süt.' },
    { name: 'Türk Kahvesi', price: '40₺', category: 'Sıcak Kahveler', description: 'Geleneksel usulle pişirilmiş, bol köpüklü.' },
    { name: 'Çay', price: '25₺', category: 'Sıcak İçecekler', description: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: '65₺', category: 'Soğuk İçecekler', description: 'Buzlu ve ferahlatıcı kahve.' },
    { name: 'Limonata', price: '35₺', category: 'Soğuk İçecekler', description: 'Taze sıkılmış limon ve nane ile.' },
    { name: 'Cheesecake', price: '70₺', category: 'Tatlılar', description: 'Ev yapımı, frambuaz soslu cheesecake.' },
    { name: 'Kruvasan', price: '50₺', category: 'Atıştırmalıklar', description: 'Taze fırınlanmış tereyağlı kruvasan.' },
    { name: 'Sandviç', price: '80₺', category: 'Atıştırmalıklar', description: 'Taze ekmek arası peynir ve taze yeşillikler.' }
];

// Sidebar Toggle Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const navLinks = document.querySelectorAll('.nav-link');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a navigation link is clicked (especially on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing System
const appContainer = document.getElementById('app');

const routes = {
    '/': renderHome,
    '/hakkinda': renderHakkinda,
    '/destek': renderDestek,
    '/iletisim': renderIletisim,
    '/subeler': renderSubeler,
    '/menu': renderMenu,
    '/fiyatlar': renderFiyatlar
};

function router() {
    // Get the hash part of the URL, default to '/'
    let path = window.location.hash.slice(1) || '/';

    // Find the matching render function
    const renderFunction = routes[path] || renderNotFound;

    // Clear the container and render the new view
    appContainer.innerHTML = '';
    const content = renderFunction();
    appContainer.appendChild(content);

    // Add fade-in animation
    appContainer.classList.remove('fade-in');
    void appContainer.offsetWidth; // Trigger reflow
    appContainer.classList.add('fade-in');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Render Functions
function createWrapper() {
    const div = document.createElement('div');
    div.className = 'w-full max-w-4xl mx-auto flex-1 flex flex-col justify-center';
    return div;
}

function renderHome() {
    const wrapper = document.createElement('div');
    wrapper.className = 'w-full text-center flex-1 flex flex-col items-center justify-center space-y-8 my-12';

    wrapper.innerHTML = `
        <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-brand-brown mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v8l9-11h-7z" />
            </svg>
        </div>
        <h1 class="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-brand-brown">Kahve Dükkanı'na Hoş Geldiniz</h1>
        <p class="text-xl max-w-2xl text-gray-700 mx-auto">Taze çekilmiş çekirdekler ve ustalıkla hazırlanan kahvelerimizle gününüze lezzet katın.</p>

        <div class="mt-8 w-full max-w-3xl overflow-hidden rounded-xl shadow-2xl relative h-64 sm:h-80 md:h-96">
            <!-- Simulated coffee image with a placeholder since we don't have local assets -->
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Sıcak bir fincan kahve" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <a href="#/menu" class="bg-brand-brown text-brand-cream hover:bg-opacity-90 transition px-8 py-3 rounded-full font-bold text-lg shadow-lg">Menüyü İncele</a>
            </div>
        </div>
    `;
    return wrapper;
}

function renderHakkinda() {
    const wrapper = createWrapper();
    wrapper.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown border-b pb-4">Hakkımızda</h2>
            <div class="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Kahve Dükkanı, 2010 yılından bu yana kaliteli kahve çekirdeklerini en iyi kavurma teknikleriyle harmanlayarak misafirlerine sunmaktadır.</p>
                <p>Amacımız, sadece kahve içmek için değil, dostlarınızla keyifli vakit geçirebileceğiniz, çalışırken ilham alabileceğiniz sıcak ve samimi bir ortam yaratmaktır.</p>
                <p>Her bir fincan kahvemizde, çiftçilerin emeğinden baristalarımızın ustalığına kadar uzanan bir hikaye yatar. Sizi de bu hikayeye ortak olmaya davet ediyoruz.</p>
            </div>
        </div>
    `;
    return wrapper;
}

function renderDestek() {
    const wrapper = createWrapper();
    wrapper.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown border-b pb-4">Destek Merkezi</h2>
            <div class="space-y-6 text-gray-700 text-lg">
                <p>Müşteri memnuniyeti bizim için her şeyden önemlidir. Siparişleriniz, ürünlerimiz veya kafemiz hakkındaki geri bildirimleriniz için buradayız.</p>

                <div class="bg-brand-cream p-6 rounded-lg">
                    <h3 class="font-heading font-bold text-xl mb-3">Sıkça Sorulan Sorular</h3>
                    <ul class="space-y-3 list-disc pl-5">
                        <li><strong>Paket servisiniz var mı?</strong> - Şu anda sadece gel-al ve yerinde tüketim hizmetimiz bulunmaktadır.</li>
                        <li><strong>Vegan seçenekleriniz mevcut mu?</strong> - Evet, bitkisel süt seçeneklerimiz ve vegan atıştırmalıklarımız mevcuttur.</li>
                        <li><strong>Özel etkinlikler için rezervasyon yapabilir miyiz?</strong> - İletişim sayfasından bizimle irtibata geçerek detaylı bilgi alabilirsiniz.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    return wrapper;
}

function renderIletisim() {
    const wrapper = createWrapper();
    wrapper.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown border-b pb-4">İletişim</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-heading font-bold text-xl mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-4 text-gray-700">
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-brand-brown mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>info@kahvedukkani.com</span>
                        </li>
                        <li class="flex items-start">
                            <svg class="h-6 w-6 text-brand-brown mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>+90 (555) 123 45 67</span>
                        </li>
                    </ul>

                    <h3 class="font-heading font-bold text-xl mb-4 mt-8">Çalışma Saatleri</h3>
                    <ul class="space-y-2 text-gray-700">
                        <li>Pazartesi - Cuma: 07:30 - 22:00</li>
                        <li>Cumartesi - Pazar: 08:30 - 23:00</li>
                    </ul>
                </div>

                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız başarıyla gönderildi!'); this.reset();">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Adınız Soyadınız</label>
                        <input type="text" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-brown focus:border-brand-brown">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">E-posta Adresiniz</label>
                        <input type="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-brown focus:border-brand-brown">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                        <textarea required rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-brand-brown focus:border-brand-brown"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brand-brown text-brand-cream py-2 px-4 rounded-md hover:bg-opacity-90 transition font-bold">Gönder</button>
                </form>
            </div>
        </div>
    `;
    return wrapper;
}

function renderSubeler() {
    const wrapper = createWrapper();
    wrapper.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown border-b pb-4">Şube Konumları</h2>

            <div class="space-y-6">
                <div class="p-4 border border-brand-tan rounded-lg hover:shadow-md transition">
                    <h3 class="font-heading font-bold text-xl text-brand-brown">Merkez Şube (Kadıköy)</h3>
                    <p class="text-gray-600 mt-2">Caferağa Mah. Moda Cad. No:123 Kadıköy/İstanbul</p>
                    <p class="text-sm text-gray-500 mt-1">Her gün 07:30 - 23:00</p>
                </div>

                <div class="p-4 border border-brand-tan rounded-lg hover:shadow-md transition">
                    <h3 class="font-heading font-bold text-xl text-brand-brown">Beşiktaş Şube</h3>
                    <p class="text-gray-600 mt-2">Sinanpaşa Mah. Şair Nedim Cad. No:45 Beşiktaş/İstanbul</p>
                    <p class="text-sm text-gray-500 mt-1">Her gün 08:00 - 22:30</p>
                </div>

                <div class="p-4 border border-brand-tan rounded-lg hover:shadow-md transition">
                    <h3 class="font-heading font-bold text-xl text-brand-brown">Karaköy Şube</h3>
                    <p class="text-gray-600 mt-2">Kemankeş Karamustafa Paşa Mah. Mumhane Cad. No:89 Beyoğlu/İstanbul</p>
                    <p class="text-sm text-gray-500 mt-1">Her gün 08:30 - 23:00</p>
                </div>
            </div>
        </div>
    `;
    return wrapper;
}

function renderMenu() {
    const wrapper = document.createElement('div');
    wrapper.className = 'w-full max-w-5xl mx-auto flex-1 flex flex-col';

    let menuHtml = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown mb-8">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown text-center border-b pb-4">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
    `;

    // Group items by category
    const categories = [...new Set(menuItems.map(item => item.category))];

    categories.forEach(category => {
        menuHtml += `<div class="mb-6"><h3 class="font-heading font-bold text-2xl mb-4 text-brand-brown border-b border-brand-tan pb-2">${category}</h3><ul class="space-y-4">`;

        const itemsInCategory = menuItems.filter(item => item.category === category);
        itemsInCategory.forEach(item => {
            menuHtml += `
                <li class="flex justify-between items-start">
                    <div>
                        <h4 class="font-bold text-lg text-gray-800">${item.name}</h4>
                        <p class="text-sm text-gray-600">${item.description}</p>
                    </div>
                </li>
            `;
        });

        menuHtml += `</ul></div>`;
    });

    menuHtml += `
            </div>
            <div class="text-center mt-8 pt-6 border-t border-brand-tan">
                <a href="#/fiyatlar" class="inline-block bg-brand-brown text-brand-cream py-3 px-8 rounded-full hover:bg-opacity-90 transition font-bold shadow-md">Fiyat Listesini Gör</a>
            </div>
        </div>
    `;

    wrapper.innerHTML = menuHtml;
    return wrapper;
}

function renderFiyatlar() {
    const wrapper = createWrapper();

    let fiyatHtml = `
        <div class="bg-white p-8 rounded-xl shadow-md border-t-4 border-brand-brown">
            <h2 class="font-heading font-bold text-3xl mb-6 text-brand-brown text-center border-b pb-4">Fiyat Listesi</h2>

            <div class="overflow-x-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brand-cream text-brand-brown">
                            <th class="py-3 px-4 font-heading font-bold border-b border-brand-tan rounded-tl-lg">Ürün</th>
                            <th class="py-3 px-4 font-heading font-bold border-b border-brand-tan text-right rounded-tr-lg">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    menuItems.forEach((item, index) => {
        const bgClass = index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
        fiyatHtml += `
            <tr class="${bgClass} hover:bg-brand-cream hover:bg-opacity-30 transition">
                <td class="py-3 px-4 border-b border-gray-100 font-medium">${item.name}</td>
                <td class="py-3 px-4 border-b border-gray-100 text-right font-bold text-brand-brown">${item.price}</td>
            </tr>
        `;
    });

    fiyatHtml += `
                    </tbody>
                </table>
            </div>
            <div class="mt-6 text-sm text-gray-500 text-center">
                * Fiyatlarımıza KDV dâhildir.
            </div>
        </div>
    `;

    wrapper.innerHTML = fiyatHtml;
    return wrapper;
}

function renderNotFound() {
    const wrapper = createWrapper();
    wrapper.innerHTML = `
        <div class="text-center">
            <h2 class="font-heading font-bold text-4xl text-brand-brown mb-4">404</h2>
            <p class="text-xl text-gray-600 mb-8">Aradığınız sayfa bulunamadı.</p>
            <a href="#/" class="bg-brand-brown text-brand-cream py-2 px-6 rounded-md hover:bg-opacity-90 transition">Ana Sayfaya Dön</a>
        </div>
    `;
    return wrapper;
}

// Initialize Router
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
