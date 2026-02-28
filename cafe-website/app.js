// Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve", icon: "fa-mug-hot" },
    { name: "Cappuccino", price: 55, category: "Kahve", icon: "fa-mug-hot" },
    { name: "Latte", price: 60, category: "Kahve", icon: "fa-mug-hot" },
    { name: "Türk Kahvesi", price: 40, category: "Kahve", icon: "fa-mug-hot" },
    { name: "Soğuk Kahve", price: 65, category: "Kahve", icon: "fa-glass-water" },
    { name: "Çay", price: 25, category: "İçecek", icon: "fa-mug-saucer" },
    { name: "Limonata", price: 35, category: "İçecek", icon: "fa-glass-water" },
    { name: "Cheesecake", price: 70, category: "Tatlı", icon: "fa-cake-candles" },
    { name: "Kruvasan", price: 50, category: "Atıştırmalık", icon: "fa-bread-slice" },
    { name: "Sandviç", price: 80, category: "Yiyecek", icon: "fa-burger" }
];

// Elements
const appContent = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Sidebar Toggle Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small delay to allow display:block to apply before animating opacity if we were doing that,
    // but just removing hidden is fine for this simple setup.
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing
const routes = {
    '': renderHome,
    '#hakkinda': renderHakkinda,
    '#destek': renderDestek,
    '#iletisim': renderIletisim,
    '#subeler': renderSubeler,
    '#menu-icerikleri': renderMenuIcerikleri,
    '#fiyatlar': renderFiyatlar
};

function router() {
    const path = window.location.hash;
    const renderFunction = routes[path] || renderHome;
    appContent.innerHTML = renderFunction();
    window.scrollTo(0, 0);
}

// Initial load and hash change listener
window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Render Functions
function renderHome() {
    return `
        <div class="animate-fade-in flex flex-col items-center justify-center min-h-[70vh] text-center">
            <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-coffee-dark">
                Kahve Dükkanı'na Hoş Geldiniz
            </h1>
            <p class="text-lg md:text-xl text-coffee-medium max-w-2xl mb-10">
                Taze kavrulmuş kahve çekirdeklerinin eşsiz kokusuyla güne güzel bir başlangıç yapın.
                Modern, minimalist ve sıcak atmosferimizde sizi ağırlamaktan mutluluk duyarız.
            </p>
            <div class="w-full max-w-4xl mx-auto mb-12">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                     alt="Kafe İç Mekan ve Kahve"
                     class="w-full h-[400px] hero-image">
            </div>
            <div class="flex gap-4">
                <a href="#menu-icerikleri" class="bg-coffee-dark text-white px-8 py-3 rounded-full hover:bg-coffee-medium transition-colors font-bold shadow-lg">Menüyü İncele</a>
                <a href="#iletisim" class="bg-white text-coffee-dark border-2 border-coffee-dark px-8 py-3 rounded-full hover:bg-coffee-light transition-colors font-bold shadow-lg">Bize Ulaşın</a>
            </div>
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">Hakkında</h2>
            <div class="prose prose-lg text-coffee-medium">
                <p class="mb-4">
                    Kahve Dükkanı olarak hikayemiz, en iyi kahve çekirdeklerini bulup sizlere sunma tutkusuyla başladı.
                    2024 yılında kurulan butik kafemiz, hem kaliteli kahve içmek isteyenlerin hem de huzurlu bir ortam arayanların buluşma noktasıdır.
                </p>
                <p class="mb-4">
                    Amacımız, sadece kahve satmak değil, misafirlerimize unutulmaz bir deneyim yaşatmaktır. Minimalist tasarımımız,
                    göz yormayan kahverengi ve krem tonlarımızla kendinizi evinizde hissetmenizi sağlamak en büyük önceliğimizdir.
                </p>
                <p>
                    Usta baristalarımızın özenle hazırladığı içecekler ve taptaze atıştırmalıklarımızla size en iyisini sunmak için her gün sevgiyle çalışıyoruz.
                </p>
            </div>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">Destek</h2>
            <p class="text-coffee-medium text-lg mb-8">Müşteri memnuniyeti bizim için her şeyden önemlidir. Karşılaştığınız herhangi bir sorun veya geri bildiriminiz için buradayız.</p>

            <div class="space-y-6">
                <div class="bg-cream p-6 rounded-lg border border-coffee-light">
                    <h3 class="font-bold text-xl text-coffee-dark mb-2"><i class="fa-solid fa-circle-question mr-2"></i> Sıkça Sorulan Sorular</h3>
                    <p class="text-coffee-medium">Sipariş süreci, alerjen bilgileri veya sadakat programımız hakkında sorularınız mı var? Yakında burada SSS bölümümüz yayına girecektir.</p>
                </div>

                <div class="bg-cream p-6 rounded-lg border border-coffee-light">
                    <h3 class="font-bold text-xl text-coffee-dark mb-2"><i class="fa-solid fa-comment-dots mr-2"></i> Geri Bildirim</h3>
                    <p class="text-coffee-medium mb-4">Hizmet kalitemizi artırmak için düşünceleriniz bizim için çok değerli.</p>
                    <a href="#iletisim" class="text-coffee-dark font-bold hover:underline">Bizimle iletişime geçin &rarr;</a>
                </div>
            </div>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">İletişim</h2>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 class="font-bold text-2xl text-coffee-dark mb-6">Bize Ulaşın</h3>
                    <ul class="space-y-4 text-coffee-medium text-lg">
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-location-dot text-coffee-dark w-6"></i>
                            <span>Kahve Sokak No:42, Kadıköy, İstanbul</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-phone text-coffee-dark w-6"></i>
                            <span>+90 555 123 45 67</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-envelope text-coffee-dark w-6"></i>
                            <span>merhaba@kahvedukkani.com</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="fa-solid fa-clock text-coffee-dark w-6"></i>
                            <span>Hergün: 08:00 - 22:00</span>
                        </li>
                    </ul>
                </div>

                <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi. Teşekkür ederiz!');">
                    <div>
                        <label for="name" class="block text-sm font-medium text-coffee-dark mb-1">Adınız</label>
                        <input type="text" id="name" class="w-full px-4 py-2 border border-coffee-light rounded focus:outline-none focus:ring-2 focus:ring-coffee-medium" required>
                    </div>
                    <div>
                        <label for="email" class="block text-sm font-medium text-coffee-dark mb-1">E-posta</label>
                        <input type="email" id="email" class="w-full px-4 py-2 border border-coffee-light rounded focus:outline-none focus:ring-2 focus:ring-coffee-medium" required>
                    </div>
                    <div>
                        <label for="message" class="block text-sm font-medium text-coffee-dark mb-1">Mesajınız</label>
                        <textarea id="message" rows="4" class="w-full px-4 py-2 border border-coffee-light rounded focus:outline-none focus:ring-2 focus:ring-coffee-medium" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-coffee-dark text-white py-2 rounded font-bold hover:bg-coffee-medium transition-colors">Gönder</button>
                </form>
            </div>
        </div>
    `;
}

function renderSubeler() {
    return `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">Şube Konumları</h2>
            <p class="text-coffee-medium text-lg mb-8">Şimdilik 3 farklı lokasyonda sizlere hizmet veriyoruz. Size en yakın şubemizi ziyaret edin.</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-cream p-6 rounded-lg border border-coffee-light hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-coffee-dark mb-3"><i class="fa-solid fa-shop mr-2"></i> Kadıköy (Merkez)</h3>
                    <p class="text-coffee-medium mb-2">Moda Caddesi, Kahve Sokak No:42</p>
                    <p class="text-sm text-coffee-medium italic">Hergün 08:00 - 22:00</p>
                </div>

                <div class="bg-cream p-6 rounded-lg border border-coffee-light hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-coffee-dark mb-3"><i class="fa-solid fa-shop mr-2"></i> Beşiktaş</h3>
                    <p class="text-coffee-medium mb-2">Çarşı İçi, Çınar Sokak No:15</p>
                    <p class="text-sm text-coffee-medium italic">Hergün 07:30 - 23:00</p>
                </div>

                <div class="bg-cream p-6 rounded-lg border border-coffee-light hover:shadow-md transition-shadow">
                    <h3 class="font-bold text-xl text-coffee-dark mb-3"><i class="fa-solid fa-shop mr-2"></i> Nişantaşı</h3>
                    <p class="text-coffee-medium mb-2">Teşvikiye, Lüks Caddesi No:8</p>
                    <p class="text-sm text-coffee-medium italic">Hergün 09:00 - 21:00</p>
                </div>
            </div>

            <div class="mt-8 bg-coffee-light bg-opacity-30 h-64 rounded-lg flex items-center justify-center border border-coffee-light">
                <span class="text-coffee-medium"><i class="fa-solid fa-map text-4xl mb-2 block text-center"></i> Harita Görünümü Yakında</span>
            </div>
        </div>
    `;
}

function renderMenuIcerikleri() {
    const listHtml = menuItems.map(item => `
        <div class="flex items-center gap-4 bg-cream p-4 rounded-lg border border-coffee-light hover:shadow-md transition-shadow">
            <div class="bg-coffee-dark text-cream w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <i class="fa-solid ${item.icon} text-xl"></i>
            </div>
            <div class="flex-grow">
                <h3 class="font-bold text-lg text-coffee-dark">${item.name}</h3>
                <span class="text-sm text-coffee-medium">${item.category}</span>
            </div>
            <div class="font-heading text-xl font-bold text-coffee-dark whitespace-nowrap">
                ${item.price}₺
            </div>
        </div>
    `).join('');

    return `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">Menü İçerikleri</h2>
            <p class="text-coffee-medium text-lg mb-8">Özenle seçilmiş kahve çekirdekleri, taze demlenmiş çaylar ve günlük üretilen lezzetli atıştırmalıklar.</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${listHtml}
            </div>
        </div>
    `;
}

function renderFiyatlar() {
    // Group by category for a cleaner price list look
    const categories = [...new Set(menuItems.map(i => i.category))];

    let html = `
        <div class="animate-fade-in max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm">
            <h2 class="font-heading text-3xl md:text-4xl font-bold mb-6 text-coffee-dark border-b-2 border-coffee-light pb-4">Fiyat Listesi</h2>
            <p class="text-coffee-medium text-lg mb-8">Tüm fiyatlarımız Türk Lirası (₺) cinsindendir ve KDV dahildir.</p>
            <div class="space-y-8">
    `;

    categories.forEach(cat => {
        const items = menuItems.filter(i => i.category === cat);
        html += `
            <div>
                <h3 class="font-heading text-2xl font-bold text-coffee-dark mb-4 border-b border-coffee-light pb-2">${cat}</h3>
                <ul class="space-y-3">
        `;

        items.forEach(item => {
            html += `
                <li class="flex justify-between items-end">
                    <span class="text-lg text-coffee-dark font-medium">${item.name}</span>
                    <div class="flex-grow border-b border-dotted border-coffee-medium mx-4 mb-2"></div>
                    <span class="text-lg font-bold text-coffee-dark whitespace-nowrap">${item.price}₺</span>
                </li>
            `;
        });

        html += `
                </ul>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    return html;
}
