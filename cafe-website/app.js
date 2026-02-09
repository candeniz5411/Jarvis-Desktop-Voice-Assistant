const menuItems = [
    { name: 'Espresso', price: 45, category: 'Sıcak İçecekler' },
    { name: 'Cappuccino', price: 55, category: 'Sıcak İçecekler' },
    { name: 'Latte', price: 60, category: 'Sıcak İçecekler' },
    { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecekler' },
    { name: 'Çay', price: 25, category: 'Sıcak İçecekler' },
    { name: 'Cheesecake', price: 70, category: 'Tatlılar' },
    { name: 'Kruvasan', price: 50, category: 'Atıştırmalıklar' },
    { name: 'Sandviç', price: 80, category: 'Atıştırmalıklar' },
    { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecekler' },
    { name: 'Limonata', price: 35, category: 'Soğuk İçecekler' }
];

const app = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn'); // This should trigger open
const closeBtn = document.getElementById('close-btn');

// --- Navigation & Routing ---

function navigate() {
    const hash = window.location.hash || '#home';
    const page = hash.substring(1);

    // Close sidebar on navigation (mobile friendly)
    closeSidebar();

    switch (page) {
        case 'home':
            renderHome();
            break;
        case 'about':
            renderAbout();
            break;
        case 'menu':
            renderMenu();
            break;
        case 'prices':
            renderPrices();
            break;
        case 'locations':
            renderLocations();
            break;
        case 'support':
            renderSupport();
            break;
        case 'contact':
            renderContact();
            break;
        default:
            renderHome();
    }
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', navigate);
window.addEventListener('load', navigate);

// --- Sidebar Logic ---

// Note: In index.html, I forgot to add the actual hamburger button inside the header.
// I only added the script. Let me fix that logic here by creating the button dynamically if it doesn't exist,
// or I can assume I'll fix the HTML later. Wait, I wrote the HTML step and included:
// <button id="menu-btn" ...> inside <header>. So it exists.

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small timeout to allow display:block to apply before opacity transition
    setTimeout(() => {
        sidebarOverlay.classList.remove('opacity-0');
    }, 10);
    document.body.classList.add('overflow-hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('opacity-0');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300);
    document.body.classList.remove('overflow-hidden');
}

if (menuBtn) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        openSidebar();
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeSidebar);
}

if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', closeSidebar);
}

// --- Render Functions ---

function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center space-y-8 animate-fade-in py-10">
            <div class="mb-4 text-coffee-dark">
                 <svg class="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 001-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                 <h2 class="text-2xl font-serif font-bold mt-2">Kahve Dükkanı</h2>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold text-coffee-dark mb-4">Hoş Geldiniz</h1>
            <p class="text-xl md:text-2xl text-coffee-light max-w-2xl">
                En taze kahve çekirdekleri ve sıcak bir atmosfer ile sizi bekliyoruz.
            </p>
            <div class="w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl mt-8 transform transition hover:scale-[1.01] duration-500">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                     alt="Taze Kahve ve Kruvasan"
                     class="w-full h-[400px] md:h-[600px] object-cover">
            </div>
            <a href="#menu" class="mt-8 px-8 py-3 bg-coffee-dark text-coffee-cream rounded-full text-lg font-semibold hover:bg-coffee-light transition duration-300 shadow-lg">
                Menümüzü Keşfedin
            </a>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light/20 pb-2">Hakkımızda</h2>
            <p class="text-lg leading-relaxed text-coffee-dark/80 mb-4">
                Kahve Dükkanı olarak 2010 yılından beri şehrin en özel köşesinde, tutkuyla kahve demliyoruz.
                Amacımız sadece bir içecek sunmak değil, bir deneyim yaşatmak.
            </p>
            <p class="text-lg leading-relaxed text-coffee-dark/80">
                Sürdürülebilir tarım ile elde edilen %100 Arabica çekirdeklerini kullanıyor, her fincanda aynı kaliteyi sunuyoruz.
                Sakin müziğimiz, rahat koltuklarımız ve güler yüzlü ekibimizle, şehrin karmaşasından kaçmak isteyenler için buradayız.
            </p>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light/20 pb-2">Destek</h2>
            <p class="text-lg mb-6">Herhangi bir sorun mu yaşadınız? Bize ulaşın, size yardımcı olmaktan mutluluk duyarız.</p>

            <div class="bg-white p-6 rounded-lg shadow-md">
                <h3 class="text-xl font-bold mb-4">Sıkça Sorulan Sorular</h3>
                <ul class="space-y-4">
                    <li class="border-b pb-2">
                        <strong class="block text-coffee-dark">Wifi şifresi nedir?</strong>
                        <span class="text-gray-600">Müşterilerimiz için ücretsiz wifi şifremiz: 'kahvekeyfi2023'</span>
                    </li>
                    <li class="border-b pb-2">
                        <strong class="block text-coffee-dark">Rezervasyon yapıyor musunuz?</strong>
                        <span class="text-gray-600">Hafta sonları yoğunluk nedeniyle rezervasyon öneriyoruz.</span>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light/20 pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div>
                        <h3 class="font-bold text-xl mb-1">Adres</h3>
                        <p class="text-gray-700">Kahve Caddesi No: 42<br>Kadıköy, İstanbul</p>
                    </div>
                    <div>
                        <h3 class="font-bold text-xl mb-1">Telefon</h3>
                        <p class="text-gray-700">+90 212 123 45 67</p>
                    </div>
                    <div>
                        <h3 class="font-bold text-xl mb-1">E-posta</h3>
                        <p class="text-gray-700">info@kahvedukkani.com</p>
                    </div>
                </div>
                <form class="space-y-4 bg-white p-6 rounded-lg shadow-md" onsubmit="event.preventDefault(); alert('Mesajınız alındı!');">
                    <div>
                        <label class="block text-sm font-bold mb-1">Adınız</label>
                        <input type="text" class="w-full border p-2 rounded focus:outline-none focus:border-coffee-dark" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Mesajınız</label>
                        <textarea class="w-full border p-2 rounded h-32 focus:outline-none focus:border-coffee-dark" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee-dark text-white py-2 rounded hover:bg-coffee-light transition">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light/20 pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Location 1 -->
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2">Kadıköy Merkez</h3>
                    <p class="text-gray-600 text-sm mb-4">Kahve Caddesi No: 42</p>
                    <div class="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Harita Görünümü</div>
                </div>
                <!-- Location 2 -->
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2">Beşiktaş Sahil</h3>
                    <p class="text-gray-600 text-sm mb-4">Dolmabahçe Cad. No: 10</p>
                    <div class="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Harita Görünümü</div>
                </div>
                <!-- Location 3 -->
                <div class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2">Karaköy</h3>
                    <p class="text-gray-600 text-sm mb-4">Kemankeş Cad. No: 5</p>
                    <div class="w-full h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">Harita Görünümü</div>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    const categories = [...new Set(menuItems.map(item => item.category))];

    let menuHTML = `
        <div class="max-w-4xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-8 text-coffee-dark text-center">Menü İçerikleri</h2>
    `;

    categories.forEach(category => {
        menuHTML += `
            <div class="mb-10">
                <h3 class="text-2xl font-serif font-bold text-coffee-light mb-4 border-l-4 border-coffee-dark pl-3">${category}</h3>
                <div class="grid md:grid-cols-2 gap-6">
        `;

        const items = menuItems.filter(item => item.category === category);
        items.forEach(item => {
            menuHTML += `
                <div class="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-coffee-cream">
                    <div>
                        <h4 class="font-bold text-lg text-coffee-dark">${item.name}</h4>
                        <p class="text-sm text-gray-500">Özel tarifimizle...</p>
                    </div>
                    <span class="font-bold text-xl text-coffee-light">${item.price}₺</span>
                </div>
            `;
        });

        menuHTML += `
                </div>
            </div>
        `;
    });

    menuHTML += `</div>`;
    app.innerHTML = menuHTML;
}

function renderPrices() {
    let priceHTML = `
        <div class="max-w-2xl mx-auto py-10">
            <h2 class="text-3xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light/20 pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-xl shadow-lg overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-coffee-dark text-coffee-cream">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Ürün</th>
                            <th scope="col" class="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
    `;

    menuItems.forEach(item => {
        priceHTML += `
            <tr class="hover:bg-coffee-cream/20 transition">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${item.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-500 font-bold">${item.price}₺</td>
            </tr>
        `;
    });

    priceHTML += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    app.innerHTML = priceHTML;
}
