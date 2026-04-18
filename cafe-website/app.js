const appDiv = document.getElementById('app');

const menuItems = [
    { name: 'Espresso', price: '45₺', type: 'İçecek' },
    { name: 'Cappuccino', price: '55₺', type: 'İçecek' },
    { name: 'Latte', price: '60₺', type: 'İçecek' },
    { name: 'Türk Kahvesi', price: '40₺', type: 'İçecek' },
    { name: 'Çay', price: '25₺', type: 'İçecek' },
    { name: 'Cheesecake', price: '70₺', type: 'Yiyecek' },
    { name: 'Kruvasan', price: '50₺', type: 'Yiyecek' },
    { name: 'Sandviç', price: '80₺', type: 'Yiyecek' },
    { name: 'Soğuk Kahve', price: '65₺', type: 'İçecek' },
    { name: 'Limonata', price: '35₺', type: 'İçecek' }
];

const routes = {
    '': homeView,
    '#': homeView,
    '#hakkinda': hakkindaView,
    '#destek': destekView,
    '#iletisim': iletisimView,
    '#sube-konumlari': subeKonumlariView,
    '#menu-icerikleri': menuIcerikleriView,
    '#fiyatlar': fiyatlarView
};

function homeView() {
    return `
        <div class="text-center animate-fade-in">
            <h2 class="text-4xl font-heading font-bold mb-4 text-coffee-brown">Hoş Geldiniz!</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">En taze çekirdeklerle hazırladığımız enfes kahvelerimizi ve lezzetli atıştırmalıklarımızı denemeye davetlisiniz. Sıcak ve modern atmosferimizde günün yorgunluğunu atın.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl max-w-3xl mx-auto">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80" alt="Kafemizden bir kare" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `;
}

function hakkindaView() {
    return `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">Hakkımızda</h2>
            <p class="mb-4 leading-relaxed">Kahve Dükkanı olarak 2010 yılından bu yana, dünyanın en iyi kahve çekirdeklerini özenle seçip sizlerle buluşturuyoruz.</p>
            <p class="leading-relaxed">Misyonumuz, sadece kahve satmak değil, aynı zamanda misafirlerimize huzurlu ve keyifli bir deneyim sunmaktır. Modern ve minimalist yaklaşımımızla, kaliteden ödün vermeden en iyisini hedefliyoruz.</p>
        </div>
    `;
}

function destekView() {
    return `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">Destek</h2>
            <p class="mb-4">Her türlü soru, görüş ve öneriniz için buradayız. Sıkça sorulan sorulara göz atabilir veya doğrudan ekibimizle iletişime geçebilirsiniz.</p>
            <ul class="list-disc list-inside space-y-2 mt-4 text-coffee-brown">
                <li>Sipariş takibi nasıl yapılır?</li>
                <li>İade ve iptal koşulları nelerdir?</li>
                <li>Toptan kahve alımı mümkün mü?</li>
            </ul>
        </div>
    `;
}

function iletisimView() {
    return `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-3">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak, No: 1, Beşiktaş, İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0212 555 00 00</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                    <p class="mt-4"><strong>Çalışma Saatleri:</strong><br>Pzt - Paz: 08:00 - 22:00</p>
                </div>
                <div>
                    <form class="flex flex-col space-y-4">
                        <input type="text" placeholder="Adınız Soyadınız" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-coffee-brown">
                        <input type="email" placeholder="E-posta Adresiniz" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-coffee-brown">
                        <textarea rows="4" placeholder="Mesajınız" class="p-3 border border-gray-300 rounded focus:outline-none focus:border-coffee-brown"></textarea>
                        <button type="button" class="bg-coffee-dark text-white p-3 rounded hover:bg-coffee-brown transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function subeKonumlariView() {
    return `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="font-bold text-lg text-coffee-brown mb-2">Merkez Şube</h3>
                    <p class="text-sm">Beşiktaş Meydan, İstanbul</p>
                </div>
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="font-bold text-lg text-coffee-brown mb-2">Moda Şubesi</h3>
                    <p class="text-sm">Kadıköy Moda Caddesi, İstanbul</p>
                </div>
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="font-bold text-lg text-coffee-brown mb-2">Alsancak Şubesi</h3>
                    <p class="text-sm">Kıbrıs Şehitleri Caddesi, İzmir</p>
                </div>
                <div class="border border-gray-200 p-4 rounded-lg bg-gray-50">
                    <h3 class="font-bold text-lg text-coffee-brown mb-2">Kızılay Şubesi</h3>
                    <p class="text-sm">Karanfil Sokak, Ankara</p>
                </div>
            </div>
        </div>
    `;
}

function menuIcerikleriView() {
    let html = `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">Menü İçerikleri</h2>
            <p class="mb-6">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içeceklerimiz.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="flex items-center p-3 hover:bg-gray-50 rounded transition-colors border-b border-dashed border-gray-200">
                <div class="w-3 h-3 rounded-full bg-coffee-brown mr-3"></div>
                <span class="text-lg font-medium">${item.name}</span>
                <span class="ml-auto text-sm text-gray-500 italic">${item.type}</span>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;
    return html;
}

function fiyatlarView() {
    let html = `
        <div class="bg-white p-8 rounded-xl shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-coffee-light pb-2">Fiyat Listesi</h2>
            <div class="max-w-2xl mx-auto">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            <th class="py-3 px-4 bg-coffee-dark text-white font-bold rounded-tl-lg">Ürün</th>
                            <th class="py-3 px-4 bg-coffee-dark text-white font-bold rounded-tr-lg text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
    `;

    menuItems.forEach((item, index) => {
        const isEven = index % 2 === 0;
        const bgClass = isEven ? 'bg-white' : 'bg-gray-50';
        html += `
            <tr class="border-b border-gray-200 hover:bg-coffee-light transition-colors ${bgClass}">
                <td class="py-3 px-4 font-medium">${item.name}</td>
                <td class="py-3 px-4 text-right font-bold text-coffee-brown">${item.price}</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    return html;
}

function router() {
    let hash = window.location.hash;
    const view = routes[hash] || homeView;
    appDiv.innerHTML = view();
}

// Listen to hash changes
window.addEventListener('hashchange', router);

// Load the initial view
window.addEventListener('load', router);
