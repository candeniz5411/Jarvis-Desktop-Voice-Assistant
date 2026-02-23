// Menu Data
const menuItems = [
    { name: 'Espresso', price: '45₺', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80', description: 'Yoğun ve aromatik bir başlangıç.' },
    { name: 'Cappuccino', price: '55₺', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5dd7359?w=400&q=80', description: 'Espresso, sıcak süt ve süt köpüğünün mükemmel uyumu.' },
    { name: 'Latte', price: '60₺', image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80', description: 'Yumuşak içimli sütlü kahve keyfi.' },
    { name: 'Türk Kahvesi', price: '40₺', image: 'https://images.unsplash.com/photo-1576402187878-974f70c890a5?w=400&q=80', description: 'Geleneksel lezzet, bol köpüklü.' },
    { name: 'Çay', price: '25₺', image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80', description: 'Taze demlenmiş Rize çayı.' },
    { name: 'Cheesecake', price: '70₺', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80', description: 'Limonlu veya frambuazlı seçenekleriyle.' },
    { name: 'Kruvasan', price: '50₺', image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80', description: 'Tereyağlı, çıtır çıtır Fransız lezzeti.' },
    { name: 'Sandviç', price: '80₺', image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80', description: 'Taze malzemelerle hazırlanan doyurucu sandviç.' },
    { name: 'Soğuk Kahve', price: '65₺', image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?w=400&q=80', description: 'Buz gibi ferahlık.' },
    { name: 'Limonata', price: '35₺', image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80', description: 'Ev yapımı, nane ferahlığıyla.' }
];

// Content Templates
const templates = {
    home: `
        <div class="text-center py-10">
            <h2 class="text-4xl font-heading mb-6 text-coffee-dark">Hoş Geldiniz</h2>
            <div class="mb-8 rounded-lg overflow-hidden shadow-xl max-w-2xl mx-auto">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" alt="Kahve Dükkanı" class="w-full h-auto object-cover">
            </div>
            <p class="text-xl text-gray-700 max-w-2xl mx-auto">
                En taze kahve çekirdekleri ve sıcak bir atmosferle sizi bekliyoruz.
                Günün yorgunluğunu atmak için mükemmel bir durak.
            </p>
            <div class="mt-8">
                <a href="#menu" class="bg-coffee-dark text-coffee-cream px-6 py-3 rounded-full hover:bg-coffee-light transition-colors">Menümüzü Keşfedin</a>
            </div>
        </div>
    `,
    about: `
        <div class="max-w-2xl mx-auto py-10">
            <h2 class="text-3xl font-heading mb-6 text-center">Hakkımızda</h2>
            <p class="mb-4 text-lg">
                Kahve Dükkanı olarak, 2010 yılından beri şehrin en iyi kahvesini sunma tutkusuyla çalışıyoruz.
                Sürdürülebilir tarım uygulamalarını destekliyor ve doğrudan üreticiden aldığımız çekirdekleri özenle kavuruyoruz.
            </p>
            <p class="text-lg">
                Amacımız sadece kahve satmak değil, aynı zamanda misafirlerimize evlerindeki konforu ve sıcaklığı hissettirmektir.
            </p>
        </div>
    `,
    support: `
        <div class="max-w-2xl mx-auto py-10 text-center">
            <h2 class="text-3xl font-heading mb-6">Destek</h2>
            <p class="mb-6">Sormak istediğiniz bir şey mi var? Size yardımcı olmaktan mutluluk duyarız.</p>
            <div class="bg-white p-6 rounded-lg shadow-md inline-block text-left">
                <p><strong>E-posta:</strong> destek@kahvedukkani.com</p>
                <p><strong>Telefon:</strong> 0850 123 45 67</p>
                <p><strong>Çalışma Saatleri:</strong> 09:00 - 18:00 (Hafta İçi)</p>
            </div>
        </div>
    `,
    contact: `
        <div class="max-w-2xl mx-auto py-10 text-center">
            <h2 class="text-3xl font-heading mb-6">İletişim</h2>
            <p class="mb-8">Bizimle iletişime geçin, görüşleriniz bizim için değerli.</p>
            <form class="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto text-left">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Adınız</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Adınız">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">E-posta</label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="E-posta Adresiniz">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="message">Mesajınız</label>
                    <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Mesajınız..."></textarea>
                </div>
                <button class="bg-coffee-dark hover:bg-coffee-light text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition-colors" type="button">
                    Gönder
                </button>
            </form>
        </div>
    `,
    locations: `
        <div class="max-w-4xl mx-auto py-10">
            <h2 class="text-3xl font-heading mb-8 text-center">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2 text-coffee-dark">Kadıköy Şubesi</h3>
                    <p class="text-gray-600">Caferağa Mah. Moda Cad. No:12</p>
                    <p class="text-gray-600">Kadıköy / İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2 text-coffee-dark">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600">Sinanpaşa Mah. Ortabahçe Cad. No:5</p>
                    <p class="text-gray-600">Beşiktaş / İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2 text-coffee-dark">Nişantaşı Şubesi</h3>
                    <p class="text-gray-600">Teşvikiye Mah. Valikonağı Cad. No:24</p>
                    <p class="text-gray-600">Şişli / İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold mb-2 text-coffee-dark">Karaköy Şubesi</h3>
                    <p class="text-gray-600">Kemankeş Karamustafa Paşa Mah. No:8</p>
                    <p class="text-gray-600">Beyoğlu / İstanbul</p>
                </div>
            </div>
        </div>
    `,
    menu: () => `
        <div class="max-w-6xl mx-auto py-10">
            <h2 class="text-3xl font-heading mb-8 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${menuItems.map(item => `
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2 text-coffee-dark">${item.name}</h3>
                            <p class="text-gray-600 mb-4">${item.description}</p>
                            <span class="inline-block bg-coffee-cream text-coffee-dark px-3 py-1 rounded-full text-sm font-bold">${item.price}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    prices: () => `
        <div class="max-w-2xl mx-auto py-10">
            <h2 class="text-3xl font-heading mb-8 text-center">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="w-full">
                    <thead class="bg-coffee-dark text-coffee-cream">
                        <tr>
                            <th class="py-3 px-6 text-left">Ürün</th>
                            <th class="py-3 px-6 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${menuItems.map(item => `
                            <tr class="hover:bg-gray-50 transition-colors">
                                <td class="py-4 px-6 font-medium text-gray-800">${item.name}</td>
                                <td class="py-4 px-6 text-right font-bold text-coffee-dark">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// Router Logic
function router() {
    const hash = window.location.hash.slice(1) || 'home';
    const app = document.getElementById('app');

    // Check if the template is a function (for dynamic content) or string
    if (templates[hash]) {
        if (typeof templates[hash] === 'function') {
            app.innerHTML = templates[hash]();
        } else {
            app.innerHTML = templates[hash];
        }
    } else {
        // Fallback to home if route not found
        window.location.hash = 'home';
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Close sidebar on mobile after navigation
    closeSidebar();
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const menuBtn = document.getElementById('menu-btn');

function toggleSidebar() {
    sidebar.classList.toggle('active');

    if (sidebar.classList.contains('active')) {
        overlay.classList.remove('hidden');
        // Small timeout to allow display:block to apply before opacity transition
        setTimeout(() => overlay.classList.add('active'), 10);
    } else {
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

function closeSidebar() {
    if (sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        setTimeout(() => overlay.classList.add('hidden'), 300);
    }
}

// Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);

// Handle links inside sidebar to ensure they close the menu (extra safety)
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        closeSidebar();
    });
});
