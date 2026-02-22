// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve", description: "Yoğun ve aromatik İtalyan kahvesi." },
    { name: "Cappuccino", price: 55, category: "Kahve", description: "Espresso ve sıcak süt köpüğü." },
    { name: "Latte", price: 60, category: "Kahve", description: "Bol sütlü yumuşak içimli kahve." },
    { name: "Türk Kahvesi", price: 40, category: "Kahve", description: "Geleneksel usulde pişirilmiş bol köpüklü kahve." },
    { name: "Çay", price: 25, category: "Sıcak İçecek", description: "Taze demlenmiş Rize çayı." },
    { name: "Cheesecake", price: 70, category: "Tatlı", description: "Limonlu veya frambuazlı seçenekleriyle." },
    { name: "Kruvasan", price: 50, category: "Hamur İşi", description: "Tereyağlı taze fırın kruvasan." },
    { name: "Sandviç", price: 80, category: "Atıştırmalık", description: "Peynirli, domatesli taze sandviç." },
    { name: "Soğuk Kahve", price: 65, category: "Soğuk İçecek", description: "Buzlu ve ferahlatıcı kahve keyfi." },
    { name: "Limonata", price: 35, category: "Soğuk İçecek", description: "Ev yapımı naneli limonata." }
];

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');
const sidebarLinks = document.querySelectorAll('#sidebar a');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    if (overlay.classList.contains('active')) {
        overlay.classList.remove('hidden');
    } else {
        setTimeout(() => {
            if (!overlay.classList.contains('active')) {
                overlay.classList.add('hidden');
            }
        }, 300); // Wait for transition
    }
}

function closeSidebar() {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
    setTimeout(() => {
        if (!overlay.classList.contains('active')) {
            overlay.classList.add('hidden');
        }
    }, 300);
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});


// Routing Logic
const app = document.getElementById('app');

const routes = {
    '': renderHome,
    '#home': renderHome,
    '#hakkinda': renderAbout,
    '#destek': renderSupport,
    '#iletisim': renderContact,
    '#subeler': renderLocations,
    '#menu': renderMenu,
    '#fiyatlar': renderPrices
};

function router() {
    const hash = window.location.hash || '#home';
    const renderFunction = routes[hash] || renderHome;
    renderFunction();
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);

// Render Functions

function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center mt-10">
            <h2 class="text-4xl md:text-6xl font-serif font-bold text-coffee-dark mb-6">Hoş Geldiniz</h2>
            <p class="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">En taze kahve çekirdekleri ve sıcak bir atmosfer ile sizleri bekliyoruz. Günün yorgunluğunu atmak için mükemmel bir durak.</p>
            <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Kahve Dükkanı Atmosferi" class="rounded-lg shadow-2xl w-full max-w-4xl object-cover h-64 md:h-96">
            <div class="mt-10">
                <a href="#menu" class="bg-coffee-dark text-cream px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg">Menüyü Keşfet</a>
            </div>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <p class="mb-4 text-lg">Kahve Dükkanı olarak 2010 yılından beri şehrin en lezzetli kahvelerini sunuyoruz. Tutkumuz, dünyanın dört bir yanından gelen en kaliteli çekirdekleri özenle kavurup fincanınıza getirmek.</p>
            <p class="mb-4 text-lg">Misyonumuz, sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz, çalışabileceğiniz veya kitabınızı okuyabileceğiniz sıcak bir yuva olmaktır.</p>
        </div>
    `;
}

function renderSupport() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="mb-4">Herhangi bir sorunuz, öneriniz veya şikayetiniz mi var? Müşteri memnuniyeti bizim için en önemli önceliktir.</p>
            <div class="bg-white p-6 rounded-lg shadow-md border border-coffee-light">
                <h3 class="text-xl font-bold mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Glutensiz ürünleriniz var mı? - Evet, menümüzde belirtilmiştir.</li>
                    <li>Rezervasyon alıyor musunuz? - Hafta sonları için evet.</li>
                    <li>Wi-Fi hizmetiniz var mı? - Tüm şubelerimizde ücretsiz yüksek hızlı Wi-Fi mevcuttur.</li>
                </ul>
            </div>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> (0212) 555 12 34</p>
                    <p class="mb-2"><strong>E-posta:</strong> info@kahvedukkani.com</p>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Caddesi No: 42, İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4">Mesaj Gönder</h3>
                    <form onsubmit="event.preventDefault(); alert('Mesajınız alındı!');" class="space-y-4">
                        <input type="text" placeholder="Adınız" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                        <input type="email" placeholder="E-posta" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark"></textarea>
                        <button type="submit" class="bg-coffee-dark text-cream px-6 py-2 rounded hover:bg-opacity-90 transition-colors w-full">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function renderLocations() {
    app.innerHTML = `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <!-- Branch 1 -->
                <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-coffee-dark">
                    <h3 class="text-xl font-bold mb-2">Kadıköy Merkez</h3>
                    <p class="text-sm text-gray-600 mb-2">Moda Caddesi, No: 10</p>
                    <p class="text-sm">08:00 - 23:00</p>
                </div>
                <!-- Branch 2 -->
                <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-coffee-dark">
                    <h3 class="text-xl font-bold mb-2">Beşiktaş Sahil</h3>
                    <p class="text-sm text-gray-600 mb-2">Çırağan Caddesi, No: 5</p>
                    <p class="text-sm">07:30 - 00:00</p>
                </div>
                <!-- Branch 3 -->
                <div class="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-coffee-dark">
                    <h3 class="text-xl font-bold mb-2">Karaköy</h3>
                    <p class="text-sm text-gray-600 mb-2">Kemankeş Caddesi, No: 22</p>
                    <p class="text-sm">09:00 - 22:00</p>
                </div>
            </div>
        </div>
    `;
}

function renderMenu() {
    let html = `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>
            <div class="grid md:grid-cols-2 gap-6">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white p-6 rounded-lg shadow-sm border border-coffee-light flex flex-col justify-between hover:bg-cream transition-colors">
                <div>
                    <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                    <p class="text-sm text-gray-500 mb-2 italic">${item.category}</p>
                    <p class="text-gray-700">${item.description}</p>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;
    app.innerHTML = html;
}

function renderPrices() {
    let html = `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="min-w-full">
                    <thead class="bg-coffee-dark text-cream">
                        <tr>
                            <th class="py-3 px-6 text-left">Ürün</th>
                            <th class="py-3 px-6 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-coffee-light/30">
    `;

    menuItems.forEach(item => {
        html += `
            <tr class="hover:bg-cream transition-colors">
                <td class="py-4 px-6 font-medium text-coffee-dark">${item.name}</td>
                <td class="py-4 px-6 text-right font-bold text-coffee-dark">${item.price}₺</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    app.innerHTML = html;
}
