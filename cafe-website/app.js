const menuData = [
    { name: "Espresso", price: 45, type: "drink", description: "Yoğun ve aromatik İtalyan klasiği." },
    { name: "Cappuccino", price: 55, type: "drink", description: "Espresso, sıcak süt ve süt köpüğünün mükemmel uyumu." },
    { name: "Latte", price: 60, type: "drink", description: "Yumuşak içimli, bol sütlü kahve keyfi." },
    { name: "Türk Kahvesi", price: 40, type: "drink", description: "Geleneksel lezzet, közde pişmiş tadında." },
    { name: "Çay", price: 25, type: "drink", description: "Taze demlenmiş Rize çayı." },
    { name: "Cheesecake", price: 70, type: "food", description: "Limonlu veya frambuazlı seçenekleriyle." },
    { name: "Kruvasan", price: 50, type: "food", description: "Tereyağlı, çıtır çıtır Fransız lezzeti." },
    { name: "Sandviç", price: 80, type: "food", description: "Taze malzemelerle hazırlanmış doyurucu sandviç." },
    { name: "Soğuk Kahve", price: 65, type: "drink", description: "Yaz günleri için ferahlatıcı buzlu kahve." },
    { name: "Limonata", price: 35, type: "drink", description: "Ev yapımı, naneli ferahlatıcı limonata." }
];

const routes = {
    home: {
        title: "Ana Sayfa",
        render: () => `
            <div class="text-center animate-fade-in">
                <h2 class="text-4xl font-serif font-bold text-coffee-dark mb-6">Hoş Geldiniz</h2>
                <p class="text-xl text-coffee-medium mb-8 max-w-2xl mx-auto">En kaliteli kahve çekirdekleriyle hazırladığımız eşsiz lezzetleri denemeye davetlisiniz. Sıcak ortamımızda keyifli anlar yaşayın.</p>
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kahve Masası" class="rounded-lg shadow-xl mx-auto max-w-full h-auto border-4 border-coffee-light">
            </div>
        `
    },
    about: {
        title: "Hakkımızda",
        render: () => `
            <div class="bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-4">Biz Kimiz?</h2>
                <p class="text-coffee-medium leading-relaxed mb-4">2010 yılından beri kahve tutkunlarına hizmet veriyoruz. Amacımız sadece kahve satmak değil, kahve kültürünü yaşatmak ve misafirlerimize evlerindeki konforu sunmaktır.</p>
                <p class="text-coffee-medium leading-relaxed">Sürdürülebilir tarım uygulamalarını destekliyor, çekirdeklerimizi özenle seçiyoruz.</p>
            </div>
        `
    },
    menu: {
        title: "Menü İçerikleri",
        render: () => `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuData.map(item => `
                    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-coffee-dark">
                        <h3 class="text-xl font-bold text-coffee-dark mb-2">${item.name}</h3>
                        <p class="text-gray-600">${item.description}</p>
                        <span class="inline-block mt-3 px-3 py-1 bg-cream text-coffee-dark rounded-full text-sm font-semibold">${item.type === 'drink' ? 'İçecek' : 'Yiyecek'}</span>
                    </div>
                `).join('')}
            </div>
        `
    },
    prices: {
        title: "Fiyat Listesi",
        render: () => `
            <div class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                <h2 class="text-3xl font-serif font-bold text-center text-coffee-dark mb-8">Fiyatlarımız</h2>
                <ul class="space-y-4">
                    ${menuData.map(item => `
                        <li class="flex justify-between items-center border-b border-coffee-light pb-2">
                            <span class="text-lg text-coffee-dark font-medium">${item.name}</span>
                            <span class="text-xl font-bold text-coffee-dark">${item.price} ₺</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `
    },
    locations: {
        title: "Şube Konumları",
        render: () => `
            <div class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2"><i class="fas fa-map-pin mr-2"></i>Kadıköy Şubesi</h3>
                    <p class="text-gray-600">Caferağa Mah. Moda Cad. No:12, Kadıköy/İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2"><i class="fas fa-map-pin mr-2"></i>Beşiktaş Şubesi</h3>
                    <p class="text-gray-600">Sinanpaşa Mah. Köyiçi Cad. No:5, Beşiktaş/İstanbul</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-coffee-dark mb-2"><i class="fas fa-map-pin mr-2"></i>Karaköy Şubesi</h3>
                    <p class="text-gray-600">Kemankeş Karamustafa Paşa Mah. Fransız Geçidi, Karaköy/İstanbul</p>
                </div>
            </div>
        `
    },
    support: {
        title: "Destek",
        render: () => `
            <div class="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h2 class="text-2xl font-bold text-coffee-dark mb-4">Size Nasıl Yardımcı Olabiliriz?</h2>
                <p class="mb-4 text-gray-600">Şikayet, öneri veya teknik destek talepleriniz için aşağıdaki formu doldurabilirsiniz.</p>
                <form onsubmit="event.preventDefault(); alert('Mesajınız alındı!');" class="space-y-4">
                    <input type="text" placeholder="Adınız Soyadınız" class="w-full p-3 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                    <input type="email" placeholder="E-posta Adresiniz" class="w-full p-3 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark">
                    <textarea rows="4" placeholder="Mesajınız" class="w-full p-3 border border-coffee-light rounded focus:outline-none focus:border-coffee-dark"></textarea>
                    <button type="submit" class="w-full bg-coffee-dark text-white font-bold py-3 rounded hover:bg-coffee-medium transition-colors">Gönder</button>
                </form>
            </div>
        `
    },
    contact: {
        title: "İletişim",
        render: () => `
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-coffee-dark mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><i class="fas fa-phone mr-2 text-coffee-medium"></i> +90 212 555 1234</p>
                    <p class="mb-2"><i class="fas fa-envelope mr-2 text-coffee-medium"></i> info@kahvekeyfi.com</p>
                    <p><i class="fas fa-clock mr-2 text-coffee-medium"></i> Her gün: 08:00 - 23:00</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h3 class="text-xl font-bold text-coffee-dark mb-4">Sosyal Medya</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-3xl text-coffee-dark hover:text-coffee-medium"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-3xl text-coffee-dark hover:text-coffee-medium"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-3xl text-coffee-dark hover:text-coffee-medium"><i class="fab fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        `
    }
};

// Sidebar Elements
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const content = document.getElementById('app');

// Toggle Sidebar
function toggleSidebar() {
    sidebar.classList.toggle('active');
    sidebar.classList.toggle('-translate-x-full'); // Remove/Add the hidden transform

    if (sidebar.classList.contains('active')) {
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.add('opacity-100'), 10); // Fade in
    } else {
        overlay.classList.remove('opacity-100');
        setTimeout(() => overlay.classList.add('hidden'), 300); // Wait for fade out
    }
}

// Close Sidebar when clicking outside or on a link
function closeSidebar() {
    sidebar.classList.remove('active');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-100');
    setTimeout(() => overlay.classList.add('hidden'), 300);
}

// Event Listeners
hamburgerBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', closeSidebar);
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
function router() {
    let hash = window.location.hash.slice(1) || 'home';
    const route = routes[hash] || routes.home;

    // Update Content
    content.innerHTML = `
        <h2 class="text-3xl font-serif font-bold text-coffee-dark mb-6 border-b-2 border-coffee-light pb-2 inline-block">${route.title}</h2>
        ${route.render()}
    `;

    // Scroll to top
    window.scrollTo(0, 0);
}

// Initialize Router
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
