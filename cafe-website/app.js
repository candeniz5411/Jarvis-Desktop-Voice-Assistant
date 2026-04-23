// Elements
const menuToggle = document.getElementById('menu-toggle');
const closeSidebar = document.getElementById('close-sidebar');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const appDiv = document.getElementById('app');

// Sidebar Logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebarFunc() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuToggle.addEventListener('click', openSidebar);
closeSidebar.addEventListener('click', closeSidebarFunc);
overlay.addEventListener('click', closeSidebarFunc);

// Close sidebar on link click (for mobile experience)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', closeSidebarFunc);
});

// Data
const menuItems = [
    { name: 'Espresso', price: 45 },
    { name: 'Cappuccino', price: 55 },
    { name: 'Latte', price: 60 },
    { name: 'Türk Kahvesi', price: 40 },
    { name: 'Çay', price: 25 },
    { name: 'Cheesecake', price: 70 },
    { name: 'Kruvasan', price: 50 },
    { name: 'Sandviç', price: 80 },
    { name: 'Soğuk Kahve', price: 65 },
    { name: 'Limonata', price: 35 }
];

// Views
const views = {
    '/': () => `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl heading-font font-bold mb-4">Hoş Geldiniz</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">En taze kahveler ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
            <div class="rounded-xl overflow-hidden shadow-xl max-w-2xl mx-auto border-4 border-brand-cream relative">
                <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı Görseli" class="w-full h-auto object-cover" onerror="this.src='https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'; this.onerror=null;">
                <div class="absolute inset-0 bg-gradient-to-t from-brand-brown/80 to-transparent flex items-end justify-center p-6">
                    <p class="text-brand-cream heading-font text-2xl font-semibold">Taze Çekilmiş Kahvenin Kokusu</p>
                </div>
            </div>
        </div>
    `,
    '/hakkinda': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">Hakkında</h2>
            <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-accent">
                <p class="mb-4 text-lg leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor, kavuruyor ve sizlere sunuyoruz.</p>
                <p class="text-lg leading-relaxed">Amacımız sadece bir içecek değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir ortam sağlamaktır. Modern ve minimalist yaklaşımımızla kahve kültürünü yeniden tanımlıyoruz.</p>
            </div>
        </div>
    `,
    '/destek': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">Destek</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <p class="mb-6">Sıkça sorulan sorulara göz atabilir veya bir destek talebi oluşturabilirsiniz.</p>
                <div class="space-y-4">
                    <details class="bg-brand-light p-4 rounded cursor-pointer group">
                        <summary class="font-semibold text-lg outline-none group-open:text-brand-accent">Hangi ödeme yöntemlerini kabul ediyorsunuz?</summary>
                        <p class="mt-2 text-brand-brown/80">Kredi kartı, banka kartı ve nakit ödeme seçeneklerimiz mevcuttur. Ayrıca temassız ödeme de yapabilirsiniz.</p>
                    </details>
                    <details class="bg-brand-light p-4 rounded cursor-pointer group">
                        <summary class="font-semibold text-lg outline-none group-open:text-brand-accent">Vegan seçenekleriniz var mı?</summary>
                        <p class="mt-2 text-brand-brown/80">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan atıştırmalıklarımız mevcuttur.</p>
                    </details>
                </div>
            </div>
        </div>
    `,
    '/iletisim': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-4 text-brand-accent">Bize Ulaşın</h3>
                    <ul class="space-y-3">
                        <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> info@kahvedukkani.com</li>
                        <li class="flex items-center"><svg class="w-5 h-5 mr-3 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> +90 555 123 4567</li>
                        <li class="flex items-start"><svg class="w-5 h-5 mr-3 mt-1 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <div>Kahve Caddesi No:1<br>Kadıköy, İstanbul</div></li>
                    </ul>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block text-sm font-medium mb-1">Adınız</label>
                            <input type="text" class="w-full p-2 border border-brand-accent/30 rounded focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Mesajınız</label>
                            <textarea class="w-full p-2 border border-brand-accent/30 rounded focus:ring-2 focus:ring-brand-accent focus:border-brand-accent outline-none transition-shadow h-24" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brand-brown text-brand-cream py-2 rounded hover:bg-brand-accent transition-colors font-semibold">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    '/subeler': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">Şube Konumları</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-brown">
                    <h3 class="text-xl font-bold mb-2 heading-font text-brand-accent">Kadıköy Merkez</h3>
                    <p class="text-brand-brown/80 mb-2">Caferağa Mah. Moda Cad. No:123</p>
                    <p class="text-sm font-semibold">Çalışma Saatleri:</p>
                    <p class="text-sm">08:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-brown">
                    <h3 class="text-xl font-bold mb-2 heading-font text-brand-accent">Beşiktaş</h3>
                    <p class="text-brand-brown/80 mb-2">Sinanpaşa Mah. Barbaros Bulvarı No:45</p>
                    <p class="text-sm font-semibold">Çalışma Saatleri:</p>
                    <p class="text-sm">07:30 - 22:30</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-brand-brown">
                    <h3 class="text-xl font-bold mb-2 heading-font text-brand-accent">Karaköy</h3>
                    <p class="text-brand-brown/80 mb-2">Kemankeş Mah. Rıhtım Cad. No:8</p>
                    <p class="text-sm font-semibold">Çalışma Saatleri:</p>
                    <p class="text-sm">08:00 - 24:00</p>
                </div>
            </div>
        </div>
    `,
    '/menu': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">Menü İçerikleri</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <ul class="divide-y divide-brand-accent/10">
                    ${menuItems.map(item => `
                        <li class="p-4 flex justify-between items-center hover:bg-brand-light transition-colors">
                            <span class="font-semibold text-lg">${item.name}</span>
                            <span class="text-brand-accent font-bold px-3 py-1 bg-brand-light rounded-full">${item.price} ₺</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `,
    '/fiyatlar': () => `
        <div class="animate-fade-in">
            <h2 class="text-3xl heading-font font-bold mb-6 border-b-2 border-brand-accent pb-2 inline-block">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-md p-6">
                <div class="grid md:grid-cols-2 gap-x-12 gap-y-4">
                    ${menuItems.map(item => `
                        <div class="flex justify-between items-baseline border-b border-brand-accent/20 pb-2">
                            <span class="text-lg">${item.name}</span>
                            <span class="font-bold font-mono text-brand-accent">${item.price} ₺</span>
                        </div>
                    `).join('')}
                </div>
                <div class="mt-8 p-4 bg-brand-light rounded border border-brand-accent/20 text-center text-sm">
                    Fiyatlarımıza KDV dahildir. Özel süt seçenekleri (badem, yulaf) için +10₺ ek ücret alınmaktadır.
                </div>
            </div>
        </div>
    `
};

// Router
function router() {
    // Basic hash routing
    let hash = window.location.hash.slice(1) || '/';

    // Add a simple fade out effect
    appDiv.style.opacity = 0;

    setTimeout(() => {
        // Render content
        if (views[hash]) {
            appDiv.innerHTML = views[hash]();
        } else {
            appDiv.innerHTML = `
                <div class="text-center py-12">
                    <h2 class="text-4xl heading-font font-bold mb-4 text-red-800">404</h2>
                    <p class="text-xl">Sayfa bulunamadı.</p>
                    <a href="#/" class="mt-6 inline-block bg-brand-brown text-brand-cream px-6 py-2 rounded hover:bg-brand-accent transition-colors">Ana Sayfaya Dön</a>
                </div>
            `;
        }
        // Fade in
        appDiv.style.opacity = 1;

        // Add fade-in animation style dynamically
        if(!document.getElementById('anim-style')) {
            const style = document.createElement('style');
            style.id = 'anim-style';
            style.innerHTML = `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `;
            document.head.appendChild(style);
        }
    }, 150); // Small delay to allow fade out
}

// Event Listeners for routing
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
