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

const views = {
    home: `
        <div class="flex flex-col items-center justify-center space-y-8 animate-fade-in text-center max-w-4xl mx-auto">
            <h1 class="font-playfair text-4xl md:text-5xl font-bold text-brand-brown">Kahve Dükkanı'na Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl text-brand-brown/80 max-w-2xl">En taze kahve çekirdekleri ve lezzetli atıştırmalıklarla dolu sıcak ve samimi ortamımıza davetlisiniz. Her yudumda kaliteyi hissedin.</p>
            <div class="w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl border-4 border-brand-brown/10">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf" alt="Kahve Dükkanı Görseli" class="w-full h-auto object-cover max-h-[500px]">
            </div>
            <a href="#menu-icerikleri" class="inline-block px-8 py-3 bg-brand-brown text-brand-cream font-bold rounded-full hover:bg-brand-accent transition-colors duration-300 shadow-md">Menüyü İncele</a>
        </div>
    `,
    hakkinda: `
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 class="font-playfair text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-accent pb-2">Hakkımızda</h2>
            <div class="space-y-4 text-brand-brown/80 leading-relaxed">
                <p>Kahve Dükkanı, 2026 yılında kaliteli kahve deneyimini herkes için erişilebilir kılmak amacıyla kuruldu.</p>
                <p>Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini kendi kavurmahanemizde ustalıkla işliyoruz. Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize sıcak, modern ve minimalist bir ortamda huzurlu bir mola sunmaktır.</p>
                <p>Kahvenin yanı sıra günlük taze olarak hazırlanan tatlılarımız ve sandviçlerimizle de gününüzü güzelleştiriyoruz.</p>
            </div>
        </div>
    `,
    destek: `
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 class="font-playfair text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-accent pb-2">Destek</h2>
            <div class="space-y-6 text-brand-brown/80">
                <div class="bg-brand-cream p-4 rounded-md border border-brand-light">
                    <h3 class="font-bold text-lg mb-2 text-brand-brown">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 space-y-2">
                        <li><strong>Kahve çekirdeklerinizi nereden alıyorsunuz?</strong><br>Çekirdeklerimiz ağırlıklı olarak Kolombiya, Etiyopya ve Brezilya'daki adil ticaret sertifikalı çiftliklerden tedarik edilmektedir.</li>
                        <li><strong>Glütensiz seçenekleriniz var mı?</strong><br>Evet, tatlı vitrinimizde günlük olarak değişen glütensiz seçeneklerimiz bulunmaktadır.</li>
                        <li><strong>Toplu sipariş veriyor musunuz?</strong><br>Evet, etkinlikleriniz için toplu sipariş alıyoruz. Lütfen iletişim sayfasından bize ulaşın.</li>
                    </ul>
                </div>
                <p>Daha fazla yardıma ihtiyacınız olursa lütfen bizimle iletişime geçmekten çekinmeyin.</p>
            </div>
        </div>
    `,
    iletisim: `
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 class="font-playfair text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-accent pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 text-brand-brown/80">
                <div>
                    <h3 class="font-bold text-xl mb-4 text-brand-brown">Bize Ulaşın</h3>
                    <div class="space-y-4">
                        <p class="flex items-center gap-3">
                            <svg class="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <span>+90 (212) 555 01 23</span>
                        </p>
                        <p class="flex items-center gap-3">
                            <svg class="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <span>merhaba@kahvedukkani.com</span>
                        </p>
                        <p class="flex items-start gap-3">
                            <svg class="w-6 h-6 text-brand-accent mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            <span>Kahve Sokak No:42<br>Kadıköy, İstanbul</span>
                        </p>
                    </div>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-4 text-brand-brown">Çalışma Saatleri</h3>
                    <ul class="space-y-2">
                        <li class="flex justify-between border-b border-brand-light pb-1"><span>Pazartesi - Cuma</span> <span>07:30 - 22:00</span></li>
                        <li class="flex justify-between border-b border-brand-light pb-1"><span>Cumartesi</span> <span>08:30 - 23:00</span></li>
                        <li class="flex justify-between border-b border-brand-light pb-1"><span>Pazar</span> <span>09:00 - 21:00</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md animate-fade-in">
            <h2 class="font-playfair text-3xl font-bold mb-6 text-brand-brown border-b-2 border-brand-accent pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-brand-cream/50 p-5 rounded-lg border border-brand-light hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brand-brown">Kadıköy Merkez</h3>
                    <p class="text-brand-brown/80 mb-3">Kahve Sokak No:42, Moda / Kadıköy</p>
                    <p class="text-sm text-brand-accent">Hafta içi: 07:30 - 22:00</p>
                </div>
                <div class="bg-brand-cream/50 p-5 rounded-lg border border-brand-light hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brand-brown">Beşiktaş Şube</h3>
                    <p class="text-brand-brown/80 mb-3">Çınar Caddesi No:15, Akaretler / Beşiktaş</p>
                    <p class="text-sm text-brand-accent">Hafta içi: 08:00 - 22:30</p>
                </div>
                <div class="bg-brand-cream/50 p-5 rounded-lg border border-brand-light hover:shadow-lg transition-shadow">
                    <h3 class="font-bold text-xl mb-2 text-brand-brown">Karaköy Şube</h3>
                    <p class="text-brand-brown/80 mb-3">Liman Sokak No:8, Karaköy / Beyoğlu</p>
                    <p class="text-sm text-brand-accent">Hafta içi: 08:30 - 23:00</p>
                </div>
            </div>
        </div>
    `,
    'menu-icerikleri': `
        <div class="max-w-4xl mx-auto animate-fade-in">
            <h2 class="font-playfair text-3xl font-bold mb-8 text-center text-brand-brown">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-brand-accent hover:-translate-y-1 transition-transform duration-300">
                        <div class="flex justify-between items-center mb-2">
                            <h3 class="font-playfair text-xl font-bold text-brand-brown">${item.name}</h3>
                            <span class="text-lg font-bold text-brand-accent bg-brand-cream px-3 py-1 rounded-full">${item.price}₺</span>
                        </div>
                        <p class="text-sm text-brand-brown/60 italic">Özenle hazırlanmış enfes lezzet.</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg animate-fade-in">
            <div class="text-center mb-8">
                <h2 class="font-playfair text-3xl font-bold text-brand-brown mb-2">Fiyat Listesi</h2>
                <p class="text-brand-brown/60">Tüm fiyatlarımıza KDV dahildir.</p>
            </div>

            <div class="space-y-4">
                ${menuItems.map(item => `
                    <div class="flex items-center justify-between py-3 border-b border-brand-light border-dashed last:border-0 hover:bg-brand-cream/30 px-2 rounded transition-colors">
                        <span class="font-medium text-lg text-brand-brown">${item.name}</span>
                        <div class="flex-grow mx-4 border-b border-dotted border-brand-light/50 relative top-2"></div>
                        <span class="font-bold text-lg text-brand-accent">${item.price}₺</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Routing
function renderView() {
    const hash = window.location.hash.slice(1) || 'home';
    const contentDiv = document.getElementById('app-content');

    // Check if view exists, fallback to home
    const viewContent = views[hash] || views['home'];
    contentDiv.innerHTML = viewContent;

    // Scroll to top on navigation
    window.scrollTo(0, 0);
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navLinks = document.querySelectorAll('.nav-link');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    // Prevent body scroll when sidebar is open
    document.body.classList.toggle('overflow-hidden');
}

// Event Listeners
window.addEventListener('hashchange', renderView);
window.addEventListener('DOMContentLoaded', renderView);

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});
