// Menu Data
const menuItems = [
    { name: 'Espresso', price: 45, type: 'drink' },
    { name: 'Cappuccino', price: 55, type: 'drink' },
    { name: 'Latte', price: 60, type: 'drink' },
    { name: 'Türk Kahvesi', price: 40, type: 'drink' },
    { name: 'Çay', price: 25, type: 'drink' },
    { name: 'Soğuk Kahve', price: 65, type: 'drink' },
    { name: 'Limonata', price: 35, type: 'drink' },
    { name: 'Cheesecake', price: 70, type: 'food' },
    { name: 'Kruvasan', price: 50, type: 'food' },
    { name: 'Sandviç', price: 80, type: 'food' }
];

// Sidebar Logic
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const navLinks = document.querySelectorAll('.nav-link');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    sidebarOverlay.classList.add('hidden');
}

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on link click (especially useful for mobile)
navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
const app = document.getElementById('app');

const routes = {
    '': homeView,
    '#hakkinda': hakkindaView,
    '#destek': destekView,
    '#iletisim': iletisimView,
    '#sube-konumlari': subeKonumlariView,
    '#menu-icerikleri': menuIcerikleriView,
    '#fiyatlar': fiyatlarView
};

function router() {
    let hash = window.location.hash;

    // Default to home if route not found
    const view = routes[hash] || routes[''];

    app.innerHTML = view();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Views
function homeView() {
    return `
        <div class="text-center mt-8">
            <h2 class="text-4xl font-bold heading mb-4">Hoş Geldiniz</h2>
            <p class="text-lg text-brown-800 mb-8 max-w-2xl mx-auto">Günün stresini lezzetli bir kahveyle atmak için doğru yerdesiniz. Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla sizleri bekliyoruz.</p>

            <div class="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                <!-- Image will be replaced via URL reachability check later -->
                <img id="homeCoffeeImage" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Taze Kahve" class="w-full h-auto aspect-video object-cover">
            </div>

            <div class="mt-12">
                <a href="#menu-icerikleri" class="bg-brown-900 text-cream px-8 py-3 rounded-full font-bold hover:bg-brown-800 transition duration-300 shadow-md">Menümüzü Keşfedin</a>
            </div>
        </div>
    `;
}

function hakkindaView() {
    return `
        <div class="bg-cream p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold heading mb-6 border-b-2 border-brown-700 pb-2">Hakkımızda</h2>
            <p class="mb-4 text-brown-900 leading-relaxed">Kahve Dükkanı olarak 2024 yılında, şehrin kalbinde en kaliteli kahve deneyimini sunmak amacıyla yola çıktık. Amacımız sadece kahve satmak değil, misafirlerimize kendilerini evlerinde hissedebilecekleri sıcak ve samimi bir ortam sağlamaktır.</p>
            <p class="mb-4 text-brown-900 leading-relaxed">Kahve çekirdeklerimizi dünyanın en iyi tarlalarından özenle seçiyor ve kendi yöntemlerimizle kavuruyoruz. Yanında sunduğumuz günlük ve taze atıştırmalıklarımızla, her yudumda ve her lokmada mutluluğu hedefliyoruz.</p>
            <p class="text-brown-900 leading-relaxed">Sizleri de bu eşsiz deneyimi paylaşmaya bekliyoruz.</p>
        </div>
    `;
}

function destekView() {
    return `
        <div class="bg-white p-8 border border-brown-600 rounded-lg shadow-md max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold heading mb-6">Destek ve Sıkça Sorulan Sorular</h2>
            <div class="space-y-6">
                <div>
                    <h3 class="font-bold text-xl text-brown-800 mb-2">Çalışma saatleriniz nedir?</h3>
                    <p class="text-gray-700">Haftanın her günü sabah 08:00'dan akşam 22:00'a kadar hizmet vermekteyiz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl text-brown-800 mb-2">Paket servisiniz var mı?</h3>
                    <p class="text-gray-700">Evet, yakın bölgelere paket servisimiz mevcuttur. Ayrıca popüler yemek sipariş uygulamalarından da bize ulaşabilirsiniz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl text-brown-800 mb-2">Vegan/Glütensiz seçenekleriniz var mı?</h3>
                    <p class="text-gray-700">Evet, menümüzde bitkisel süt seçenekleri ve bazı glütensiz atıştırmalıklar bulunmaktadır.</p>
                </div>
            </div>
            <div class="mt-8 p-4 bg-cream rounded">
                <p class="text-brown-900 font-bold">Daha fazla yardım için lütfen İletişim sayfamızı kullanın.</p>
            </div>
        </div>
    `;
}

function iletisimView() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold heading mb-8 text-center">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-cream p-6 rounded-lg shadow">
                    <h3 class="text-2xl font-bold text-brown-900 mb-4">Bize Ulaşın</h3>
                    <ul class="space-y-4 text-brown-800">
                        <li class="flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            +90 (555) 123 45 67
                        </li>
                        <li class="flex items-center">
                            <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            info@kahvedukkani.com
                        </li>
                        <li class="flex items-start">
                            <svg class="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Kahve Caddesi, No:42, Kadıköy, İstanbul
                        </li>
                    </ul>
                </div>
                <form class="bg-white p-6 rounded-lg shadow-md border border-brown-200" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div class="mb-4">
                        <label class="block text-brown-800 text-sm font-bold mb-2" for="name">İsim</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-brown-600" id="name" type="text" placeholder="Adınız Soyadınız" required>
                    </div>
                    <div class="mb-4">
                        <label class="block text-brown-800 text-sm font-bold mb-2" for="email">E-posta</label>
                        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-brown-600" id="email" type="email" placeholder="E-posta Adresiniz" required>
                    </div>
                    <div class="mb-6">
                        <label class="block text-brown-800 text-sm font-bold mb-2" for="message">Mesaj</label>
                        <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-brown-600 h-24 resize-none" id="message" placeholder="Mesajınız..." required></textarea>
                    </div>
                    <button class="bg-brown-900 hover:bg-brown-800 text-cream font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition duration-200" type="submit">
                        Gönder
                    </button>
                </form>
            </div>
        </div>
    `;
}

function subeKonumlariView() {
    return `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold heading mb-8 text-center border-b-2 border-brown-700 pb-2 inline-block">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div class="bg-white border border-brown-300 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                    <h3 class="text-2xl font-bold text-brown-900 mb-2 font-serif">Kadıköy Merkez (İstanbul)</h3>
                    <p class="text-gray-600 mb-4">Kahve Caddesi, No:42, Moda Sahili Yakını</p>
                    <p class="text-sm text-brown-700">08:00 - 22:00</p>
                </div>
                <div class="bg-white border border-brown-300 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                    <h3 class="text-2xl font-bold text-brown-900 mb-2 font-serif">Beşiktaş (İstanbul)</h3>
                    <p class="text-gray-600 mb-4">Çarşı İçi Sokak, No:15, Meydan</p>
                    <p class="text-sm text-brown-700">08:00 - 23:00</p>
                </div>
                <div class="bg-white border border-brown-300 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                    <h3 class="text-2xl font-bold text-brown-900 mb-2 font-serif">Alsancak (İzmir)</h3>
                    <p class="text-gray-600 mb-4">Kıbrıs Şehitleri Caddesi, No:108</p>
                    <p class="text-sm text-brown-700">09:00 - 22:30</p>
                </div>
                <div class="bg-white border border-brown-300 rounded-lg p-6 shadow hover:shadow-lg transition duration-300">
                    <h3 class="text-2xl font-bold text-brown-900 mb-2 font-serif">Çankaya (Ankara)</h3>
                    <p class="text-gray-600 mb-4">Tunalı Hilmi Caddesi, No:65</p>
                    <p class="text-sm text-brown-700">07:30 - 21:00</p>
                </div>
            </div>
        </div>
    `;
}

function menuIcerikleriView() {
    let html = `
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold heading mb-8 text-center">Menü İçerikleri</h2>
            <p class="text-center text-brown-800 mb-8">En taze malzemelerle hazırlanan lezzetlerimiz.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-2xl font-serif text-brown-900 border-b border-brown-700 pb-2 mb-4">İçecekler</h3>
                    <ul class="space-y-3">
    `;

    menuItems.filter(item => item.type === 'drink').forEach(item => {
        html += `<li class="flex justify-between items-center text-lg"><span class="font-bold text-brown-800">${item.name}</span> <span class="text-sm text-gray-500 italic">Sıcak/Soğuk seçenekleriyle</span></li>`;
    });

    html += `
                    </ul>
                </div>
                <div>
                    <h3 class="text-2xl font-serif text-brown-900 border-b border-brown-700 pb-2 mb-4">Yiyecekler</h3>
                    <ul class="space-y-3">
    `;

    menuItems.filter(item => item.type === 'food').forEach(item => {
        html += `<li class="flex justify-between items-center text-lg"><span class="font-bold text-brown-800">${item.name}</span> <span class="text-sm text-gray-500 italic">Günlük taze</span></li>`;
    });

    html += `
                    </ul>
                </div>
            </div>
            <div class="mt-8 text-center">
                <a href="#fiyatlar" class="inline-block bg-cream text-brown-900 border border-brown-900 px-6 py-2 rounded hover:bg-brown-900 hover:text-cream transition duration-300">Fiyat Listesini Gör</a>
            </div>
        </div>
    `;
    return html;
}

function fiyatlarView() {
    let html = `
        <div class="max-w-2xl mx-auto bg-white p-8 shadow-lg rounded-lg border-t-4 border-brown-900">
            <h2 class="text-3xl font-bold heading mb-8 text-center">Fiyatlar</h2>

            <div class="space-y-6">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="flex justify-between items-center border-b border-dotted border-brown-300 pb-2">
                <span class="text-xl font-bold text-brown-800">${item.name}</span>
                <span class="text-xl font-bold text-brown-900">${item.price}₺</span>
            </div>
        `;
    });

    html += `
            </div>
            <div class="mt-8 text-center text-sm text-gray-500">
                <p>* Fiyatlarımıza KDV dahildir.</p>
                <p>* Paket servislerde fiyatlar değişiklik gösterebilir.</p>
            </div>
        </div>
    `;
    return html;
}