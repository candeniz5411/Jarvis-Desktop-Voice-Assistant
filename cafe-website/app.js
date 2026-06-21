const appDiv = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

// --- Data ---
const cafeItems = [
    { name: 'Espresso', price: 45, category: 'Sıcak İçecek', desc: 'Sert ve yoğun kahve deneyimi.' },
    { name: 'Cappuccino', price: 55, category: 'Sıcak İçecek', desc: 'Bol süt köpüklü klasik İtalyan lezzeti.' },
    { name: 'Latte', price: 60, category: 'Sıcak İçecek', desc: 'Yumuşak içimli, sütlü espresso.' },
    { name: 'Türk Kahvesi', price: 40, category: 'Sıcak İçecek', desc: 'Geleneksel yöntemle hazırlanan kahve.' },
    { name: 'Çay', price: 25, category: 'Sıcak İçecek', desc: 'Taze demlenmiş siyah çay.' },
    { name: 'Soğuk Kahve', price: 65, category: 'Soğuk İçecek', desc: 'Buzlu ve ferahlatıcı kahve.' },
    { name: 'Limonata', price: 35, category: 'Soğuk İçecek', desc: 'Ev yapımı, nane ferahlığıyla.' },
    { name: 'Cheesecake', price: 70, category: 'Tatlı', desc: 'Orman meyvesi soslu nefis dilim.' },
    { name: 'Kruvasan', price: 50, category: 'Atıştırmalık', desc: 'Taze pişmiş, tereyağlı çıtır kruvasan.' },
    { name: 'Sandviç', price: 80, category: 'Atıştırmalık', desc: 'Özel ekmek arası peynir ve füme et.' }
];

// --- Sidebar Logic ---
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small delay to ensure display:block is applied before opacity transition
    setTimeout(() => {
        sidebarOverlay.classList.remove('opacity-0');
        sidebarOverlay.classList.add('opacity-100');
    }, 10);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.remove('opacity-100');
    sidebarOverlay.classList.add('opacity-0');
    setTimeout(() => {
        sidebarOverlay.classList.add('hidden');
    }, 300); // Wait for transition to finish
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
const sidebarLinks = sidebar.querySelectorAll('nav a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth < 1024) { // Assuming typical mobile breakpoint, though we can just always close it
            closeSidebar();
        }
    });
});


// --- Views ---
const views = {
    home: `
        <div class="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
            <div class="flex-1 space-y-6 text-center md:text-left">
                <h1 class="text-5xl md:text-6xl font-playfair font-bold text-brown-900 leading-tight">
                    Hoş Geldiniz. <br> <span class="text-brown-600">Kahveniz Hazır.</span>
                </h1>
                <p class="text-xl text-brown-700 font-light max-w-lg mx-auto md:mx-0">
                    Özenle seçilmiş kahve çekirdekleri, taze demlenmiş lezzetler ve huzur dolu bir atmosfer sizi bekliyor.
                </p>
                <div class="pt-4">
                    <a href="#/menu-icerikleri" class="inline-block bg-brown-800 hover:bg-brown-900 text-cream px-8 py-4 rounded-full text-lg font-medium transition-transform hover:scale-105 shadow-lg">Menüyü Keşfet</a>
                </div>
            </div>
            <div class="flex-1 relative">
                <div class="absolute inset-0 bg-brown-200 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
                <img src="./Images/hero.jpg" alt="Kahve Sunumu" class="w-full h-auto rounded-3xl shadow-xl object-cover aspect-[4/3]">
            </div>
        </div>
    `,
    hakkinda: `
        <div class="max-w-3xl mx-auto py-10 bg-white p-8 rounded-2xl shadow-sm border border-brown-100 mt-8">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-4 border-brown-100">Hakkımızda</h2>
            <div class="space-y-4 text-lg text-brown-700 leading-relaxed">
                <p>Kahve Dünyası olarak serüvenimiz, iyi bir fincan kahvenin insanları bir araya getirme gücüne olan inancımızla başladı.</p>
                <p>Dünyanın dört bir yanından özenle seçtiğimiz çekirdekleri, ustalıkla kavuruyor ve modern demleme teknikleriyle fincanınıza taşıyoruz. Amacımız sadece kahve satmak değil, misafirlerimize evlerindeymiş gibi hissedebilecekleri samimi ve huzurlu bir ortam sunmaktır.</p>
                <p>Sürdürülebilirlik ilkelerine bağlı kalarak, hem üreticilerimizi destekliyor hem de doğaya saygılı bir yaklaşım benimsiyoruz.</p>
            </div>
        </div>
    `,
    destek: `
        <div class="max-w-3xl mx-auto py-10 bg-white p-8 rounded-2xl shadow-sm border border-brown-100 mt-8">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6 border-b pb-4 border-brown-100">Destek ve Yardım</h2>
            <p class="text-lg text-brown-700 mb-6">Müşteri memnuniyeti bizim için her şeyden önemlidir. Karşılaştığınız herhangi bir sorunda size yardımcı olmaktan mutluluk duyarız.</p>

            <div class="space-y-6">
                <div class="bg-brown-50 p-6 rounded-xl border border-brown-100">
                    <h3 class="font-playfair font-bold text-xl text-brown-900 mb-2">Sıkça Sorulan Sorular</h3>
                    <ul class="list-disc pl-5 text-brown-700 space-y-2">
                        <li>Özel diyet gereksinimlerine uygun sütünüz var mı? <br><span class="text-sm text-brown-500">Evet, yulaf, badem ve soya sütü seçeneklerimiz mevcuttur.</span></li>
                        <li>Toplu sipariş verebilir miyim? <br><span class="text-sm text-brown-500">Elbette, iletişim bölümünden kurumsal taleplerinizi iletebilirsiniz.</span></li>
                        <li>Wi-Fi hizmetiniz var mı? <br><span class="text-sm text-brown-500">Tüm şubelerimizde misafirlerimize ücretsiz ve hızlı Wi-Fi sunuyoruz.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    iletisim: `
        <div class="max-w-4xl mx-auto py-10 mt-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-brown-100">
                    <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-6">Bizimle İletişime Geçin</h2>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız başarıyla gönderildi!');">
                        <div>
                            <label class="block text-sm font-medium text-brown-700 mb-1">Adınız Soyadınız</label>
                            <input type="text" class="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 outline-none transition-shadow bg-cream/30" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-brown-700 mb-1">E-posta Adresiniz</label>
                            <input type="email" class="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 outline-none transition-shadow bg-cream/30" required>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-brown-700 mb-1">Mesajınız</label>
                            <textarea rows="4" class="w-full px-4 py-2 border border-brown-200 rounded-lg focus:ring-2 focus:ring-brown-500 focus:border-brown-500 outline-none transition-shadow bg-cream/30" required></textarea>
                        </div>
                        <button type="submit" class="w-full bg-brown-800 hover:bg-brown-900 text-white font-medium py-3 rounded-lg transition-colors shadow-md">Gönder</button>
                    </form>
                </div>
                <div class="bg-brown-900 text-cream p-8 rounded-2xl shadow-sm flex flex-col justify-center">
                    <h3 class="text-2xl font-playfair font-bold mb-6 text-white">İletişim Bilgileri</h3>
                    <div class="space-y-6">
                        <div class="flex items-start gap-4">
                            <svg class="w-6 h-6 text-brown-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <div>
                                <h4 class="font-bold text-white">E-posta</h4>
                                <p class="text-brown-200">merhaba@kahvedunyasi.com</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <svg class="w-6 h-6 text-brown-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            <div>
                                <h4 class="font-bold text-white">Telefon</h4>
                                <p class="text-brown-200">+90 (212) 555 01 23</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <svg class="w-6 h-6 text-brown-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <div>
                                <h4 class="font-bold text-white">Çalışma Saatleri</h4>
                                <p class="text-brown-200">Pzt - Cum: 07:00 - 23:00</p>
                                <p class="text-brown-200">Hft Sonu: 08:00 - 00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="max-w-5xl mx-auto py-10 mt-8">
            <h2 class="text-3xl font-playfair font-bold text-brown-900 mb-8 text-center">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Şube 1 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-brown-100 hover:shadow-md transition-shadow group">
                    <div class="h-40 bg-brown-200 relative overflow-hidden">
                        <div class="absolute inset-0 bg-brown-800/10 group-hover:bg-transparent transition-colors"></div>
                        <div class="flex items-center justify-center h-full">
                            <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Kadıköy Şubesi</h3>
                        <p class="text-brown-600 text-sm mb-4">Caferağa Mah. Moda Cad. No:123 Kadıköy / İstanbul</p>
                        <a href="#" class="text-brown-700 font-medium hover:text-brown-900 text-sm flex items-center gap-1 group-hover:underline">Haritada Gör <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
                    </div>
                </div>
                <!-- Şube 2 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-brown-100 hover:shadow-md transition-shadow group">
                    <div class="h-40 bg-brown-200 relative overflow-hidden">
                        <div class="absolute inset-0 bg-brown-800/10 group-hover:bg-transparent transition-colors"></div>
                        <div class="flex items-center justify-center h-full">
                            <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Beşiktaş Şubesi</h3>
                        <p class="text-brown-600 text-sm mb-4">Sinanpaşa Mah. Ihlamurdere Cad. No:45 Beşiktaş / İstanbul</p>
                        <a href="#" class="text-brown-700 font-medium hover:text-brown-900 text-sm flex items-center gap-1 group-hover:underline">Haritada Gör <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
                    </div>
                </div>
                <!-- Şube 3 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-brown-100 hover:shadow-md transition-shadow group">
                    <div class="h-40 bg-brown-200 relative overflow-hidden">
                        <div class="absolute inset-0 bg-brown-800/10 group-hover:bg-transparent transition-colors"></div>
                        <div class="flex items-center justify-center h-full">
                            <svg class="w-12 h-12 text-brown-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-brown-900 mb-2">Alsancak Şubesi</h3>
                        <p class="text-brown-600 text-sm mb-4">Kültür Mah. Kıbrıs Şehitleri Cad. No:89 Konak / İzmir</p>
                        <a href="#" class="text-brown-700 font-medium hover:text-brown-900 text-sm flex items-center gap-1 group-hover:underline">Haritada Gör <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>
                    </div>
                </div>
            </div>
        </div>
    `,
    menuIcerikleri: `
        <div class="max-w-5xl mx-auto py-10 mt-8">
            <div class="text-center mb-10">
                <h2 class="text-4xl font-playfair font-bold text-brown-900 mb-4">Menü İçerikleri</h2>
                <p class="text-brown-600 text-lg max-w-2xl mx-auto">En taze malzemelerle hazırlanan içeceklerimiz ve damak çatlatan tatlılarımızla lezzet yolculuğuna çıkın.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                ${['Sıcak İçecek', 'Soğuk İçecek', 'Tatlı', 'Atıştırmalık'].map(category => {
                    const items = cafeItems.filter(item => item.category === category);
                    if(items.length === 0) return '';
                    return `
                        <div class="bg-white p-8 rounded-2xl shadow-sm border border-brown-100">
                            <h3 class="text-2xl font-playfair font-bold text-brown-800 mb-6 pb-2 border-b-2 border-brown-200 inline-block">${category}</h3>
                            <div class="space-y-6">
                                ${items.map(item => `
                                    <div class="group">
                                        <div class="flex justify-between items-baseline mb-1">
                                            <h4 class="text-lg font-bold text-brown-900 group-hover:text-brown-600 transition-colors">${item.name}</h4>
                                            <div class="flex-grow mx-4 border-b border-dashed border-brown-300"></div>
                                        </div>
                                        <p class="text-brown-500 text-sm italic">${item.desc}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="max-w-4xl mx-auto py-10 mt-8">
            <div class="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-brown-100 relative overflow-hidden">
                <!-- Decorative element -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-brown-50 rounded-bl-full -z-10"></div>

                <h2 class="text-3xl md:text-4xl font-playfair font-bold text-brown-900 mb-2 text-center">Fiyat Listesi</h2>
                <p class="text-center text-brown-500 mb-10">Güncel menü fiyatlarımız (₺)</p>

                <div class="space-y-4">
                    ${cafeItems.map(item => `
                        <div class="flex items-center justify-between p-4 rounded-xl hover:bg-brown-50 transition-colors border border-transparent hover:border-brown-100">
                            <div class="flex items-center gap-4">
                                <div class="w-10 h-10 rounded-full bg-brown-100 flex items-center justify-center text-brown-600 font-bold font-playfair">
                                    ${item.name.charAt(0)}
                                </div>
                                <div>
                                    <h3 class="font-bold text-brown-900 text-lg">${item.name}</h3>
                                    <span class="text-xs text-brown-500 bg-brown-100 px-2 py-1 rounded-full uppercase tracking-wider">${item.category}</span>
                                </div>
                            </div>
                            <div class="text-2xl font-playfair font-bold text-brown-800">
                                ${item.price}₺
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `
};

// --- Router ---
function router() {
    // Get hash, remove #/, default to home
    let hash = window.location.hash.substring(2) || 'home';

    // Map URL hash to view key (e.g., menu-icerikleri -> menuIcerikleri)
    let viewKey = hash;
    if (hash === 'menu-icerikleri') viewKey = 'menuIcerikleri';
    if (hash === '') viewKey = 'home';

    // Inject content or 404
    if (views[viewKey]) {
        // Add a slight fade effect
        appDiv.style.opacity = 0;
        setTimeout(() => {
            appDiv.innerHTML = views[viewKey];
            appDiv.style.opacity = 1;
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150);
        appDiv.style.transition = 'opacity 0.2s ease-in-out';
    } else {
        appDiv.innerHTML = `
            <div class="text-center py-20">
                <h2 class="text-4xl font-playfair font-bold text-brown-900 mb-4">404</h2>
                <p class="text-brown-600">Sayfa bulunamadı.</p>
                <a href="#/" class="mt-6 inline-block text-brown-800 underline hover:text-brown-600">Ana Sayfaya Dön</a>
            </div>
        `;
    }
}

// Listen to hash changes
window.addEventListener('hashchange', router);

// Load initial view
window.addEventListener('DOMContentLoaded', router);
