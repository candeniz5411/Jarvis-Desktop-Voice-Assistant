const contentDiv = document.getElementById('app-content');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const navLinks = document.querySelectorAll('.nav-link');

// Sidebar logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent scrolling on main content
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

navLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Data
const menuItems = [
    { name: 'Espresso', price: '45₺' },
    { name: 'Cappuccino', price: '55₺' },
    { name: 'Latte', price: '60₺' },
    { name: 'Türk Kahvesi', price: '40₺' },
    { name: 'Çay', price: '25₺' },
    { name: 'Cheesecake', price: '70₺' },
    { name: 'Kruvasan', price: '50₺' },
    { name: 'Sandviç', price: '80₺' },
    { name: 'Soğuk Kahve', price: '65₺' },
    { name: 'Limonata', price: '35₺' }
];

// Views
const views = {
    home: `
        <div class="max-w-4xl mx-auto text-center">
            <div class="mb-8 rounded-xl overflow-hidden shadow-2xl aspect-video relative">
                 <img src="./Images/coffee-bg.jpg" alt="Kafe Atmosferi" class="w-full h-full object-cover">
                 <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                     <div class="bg-white/90 p-8 rounded-full shadow-lg text-center w-64 h-64 flex flex-col justify-center items-center transform transition-transform hover:scale-105 duration-300">
                         <img src="./Images/logo.jpg" alt="Kafe Logosu" class="w-24 h-24 rounded-full object-cover mb-4 border-4 border-cafe-brown">
                         <h1 class="text-3xl text-cafe-brown font-serif font-bold">Hoş Geldiniz</h1>
                     </div>
                 </div>
            </div>
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-4">Kahve Durağı'na Hoş Geldiniz!</h2>
            <p class="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                Günün yorgunluğunu atmak, dostlarla keyifli vakit geçirmek veya çalışırken odaklanmak için en doğru yerdesiniz.
                Özenle seçilmiş kahve çekirdeklerimiz ve taptaze tatlılarımızla size unutulmaz bir deneyim sunuyoruz.
            </p>
        </div>
    `,
    about: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 text-center border-b-2 border-cafe-cream pb-4">Hakkımızda</h2>
            <div class="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>Kahve Durağı olarak 2010 yılından beri, kahve tutkusunu kalite ve samimiyetle buluşturuyoruz.</p>
                <p>Amacımız sadece bir kahve dükkanı olmak değil, aynı zamanda misafirlerimizin kendilerini evlerinde gibi hissettikleri, sosyalleşip dinlenebilecekleri sıcak bir mekan sunmaktır.</p>
                <p>Yerel üreticileri destekliyor ve sürdürülebilir tarım uygulamalarıyla elde edilen en iyi kahve çekirdeklerini kullanmaya özen gösteriyoruz.</p>
            </div>
        </div>
    `,
    support: `
         <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 text-center border-b-2 border-cafe-cream pb-4">Destek</h2>
            <p class="text-lg text-gray-700 mb-8 text-center">Sorularınız, önerileriniz veya karşılaştığınız sorunlar için buradayız.</p>
            <form class="space-y-6" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                <div>
                    <label class="block text-cafe-brown font-semibold mb-2">Adınız Soyadınız</label>
                    <input type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-brown" required>
                </div>
                <div>
                    <label class="block text-cafe-brown font-semibold mb-2">E-posta Adresiniz</label>
                    <input type="email" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-brown" required>
                </div>
                <div>
                    <label class="block text-cafe-brown font-semibold mb-2">Mesajınız</label>
                    <textarea rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cafe-brown" required></textarea>
                </div>
                <button type="submit" class="w-full bg-cafe-brown text-cafe-cream font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors">Gönder</button>
            </form>
        </div>
    `,
    contact: `
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg text-center">
             <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 border-b-2 border-cafe-cream pb-4">İletişim</h2>
             <div class="space-y-6 text-lg text-gray-700">
                <div class="flex flex-col items-center">
                    <span class="font-bold text-cafe-brown block mb-1">📍 Adres</span>
                    <span>Kahve Sokak, No:42, Kadıköy / İstanbul</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="font-bold text-cafe-brown block mb-1">📞 Telefon</span>
                    <span>0(212) 555 01 23</span>
                </div>
                <div class="flex flex-col items-center">
                    <span class="font-bold text-cafe-brown block mb-1">📧 E-posta</span>
                    <span>iletisim@kahveduragi.com</span>
                </div>
                <div class="mt-8 p-4 bg-cafe-cream rounded-lg">
                    <span class="font-bold text-cafe-brown block mb-2">🕒 Çalışma Saatleri</span>
                    <p>Hafta içi: 07:30 - 22:00</p>
                    <p>Hafta sonu: 08:30 - 23:30</p>
                </div>
             </div>
        </div>
    `,
    locations: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 text-center border-b-2 border-cafe-cream pb-4">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                    <h3 class="text-2xl font-serif font-bold text-cafe-brown mb-2">Kadıköy Merkez (Moda)</h3>
                    <p class="text-gray-600 mb-1">Caferağa Mah. Kahve Sokak No:42</p>
                    <p class="text-sm text-gray-500">Açık</p>
                </div>
                <div class="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                    <h3 class="text-2xl font-serif font-bold text-cafe-brown mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600 mb-1">Sinanpaşa Mah. Çay Sk. No:15</p>
                    <p class="text-sm text-gray-500">Açık</p>
                </div>
                <div class="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                    <h3 class="text-2xl font-serif font-bold text-cafe-brown mb-2">Karaköy Şubesi</h3>
                    <p class="text-gray-600 mb-1">Kemankeş Mah. Rıhtım Cad. No:8</p>
                    <p class="text-sm text-gray-500">Açık</p>
                </div>
                <div class="p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow bg-gray-50">
                    <h3 class="text-2xl font-serif font-bold text-cafe-brown mb-2">Nişantaşı Şubesi</h3>
                    <p class="text-gray-600 mb-1">Teşvikiye Mah. Hüsrev Gerede Cad. No:11</p>
                    <p class="text-sm text-gray-500">Açık</p>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 text-center border-b-2 border-cafe-cream pb-4">Menü İçerikleri</h2>
            <p class="text-center text-gray-600 mb-8 text-lg">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz.</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-cafe-cream/30 p-4 rounded-lg flex items-center shadow-sm">
                        <div class="w-2 h-2 bg-cafe-brown rounded-full mr-3"></div>
                        <span class="text-xl font-medium text-cafe-brown">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    prices: `
        <div class="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <h2 class="text-4xl text-cafe-brown font-serif font-bold mb-6 text-center border-b-2 border-cafe-cream pb-4">Fiyat Listesi</h2>
            <div class="space-y-4">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center border-b border-gray-200 py-3 hover:bg-gray-50 px-2 rounded transition-colors">
                        <span class="text-xl text-gray-800">${item.name}</span>
                        <span class="text-xl font-bold text-cafe-brown">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

// Routing
function handleRouting() {
    const hash = window.location.hash.substring(1) || 'home';
    const viewContent = views[hash];

    if (viewContent) {
        contentDiv.innerHTML = viewContent;
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        contentDiv.innerHTML = views['home'];
        window.location.hash = 'home';
    }
}

// Listen for hash changes
window.addEventListener('hashchange', handleRouting);

// Initial load
window.addEventListener('DOMContentLoaded', handleRouting);
