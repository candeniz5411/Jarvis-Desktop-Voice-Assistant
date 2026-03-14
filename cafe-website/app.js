// DOM Elements
const appDiv = document.getElementById('app');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const sidebarLinks = sidebar.querySelectorAll('a');

// Menu Items Data
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

// Pages Content
const pages = {
    '': () => `
        <div class="flex flex-col items-center text-center space-y-6 animate-fade-in">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-brown-dark mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v8l9-11h-7z" />
            </svg>
            <h2 class="text-4xl font-playfair font-bold text-brown-dark">Kahve Dükkanı'na Hoş Geldiniz</h2>
            <p class="text-lg max-w-2xl text-gray-700">Gününüzü taze kavrulmuş kahvelerimiz ve lezzetli atıştırmalıklarımızla güzelleştirin. Sizi aramızda görmekten mutluluk duyarız.</p>
            <div class="w-full max-w-2xl rounded-xl overflow-hidden shadow-lg mt-8">
                <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1000" alt="Kahve Dükkanı" class="w-full h-80 object-cover">
            </div>
            <button onclick="window.location.hash='#menu'" class="mt-6 bg-brown-dark text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-md">
                Menüyü Keşfet
            </button>
        </div>
    `,
    'hakkinda': () => `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2">Hakkımızda</h2>
            <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
                <p class="text-lg leading-relaxed">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor, ustalıkla kavuruyor ve sizlere sunuyoruz.</p>
                <p class="text-lg leading-relaxed">Amacımız, her yudumda size benzersiz bir deneyim yaşatmak ve sıcak, samimi ortamımızda evinizdeymiş gibi hissetmenizi sağlamaktır.</p>
                <p class="text-lg leading-relaxed">Kahvelerimizin yanında sunduğumuz tatlı ve tuzlu atıştırmalıklarımızı her gün taze olarak hazırlıyoruz.</p>
            </div>
        </div>
    `,
    'destek': () => `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2">Destek SSS</h2>
            <div class="bg-white p-6 rounded-lg shadow-md space-y-6">
                <div>
                    <h3 class="font-bold text-xl mb-2 text-brown-dark">Çalışma Saatleriniz Nelerdir?</h3>
                    <p>Hafta içi: 07:00 - 22:00<br>Hafta sonu: 08:00 - 23:00</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2 text-brown-dark">Toplu Sipariş Veriyor musunuz?</h3>
                    <p>Evet, ofisler ve etkinlikler için toplu kahve ve atıştırmalık siparişi alıyoruz. Detaylar için iletişim sayfamızı kullanabilirsiniz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2 text-brown-dark">Vegan Seçenekleriniz Var mı?</h3>
                    <p>Bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan atıştırmalıklarımız mevcuttur.</p>
                </div>
            </div>
        </div>
    `,
    'iletisim': () => `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-md space-y-4">
                    <h3 class="font-bold text-xl text-brown-dark mb-4">Bize Ulaşın</h3>
                    <p><strong>Telefon:</strong> 0(212) 555 12 34</p>
                    <p><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                    <p><strong>Adres:</strong> Kahve Sokak No: 42, Kadıköy / İstanbul</p>
                </div>
                <form class="bg-white p-6 rounded-lg shadow-md space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                    <div>
                        <label class="block text-sm font-bold mb-1">Adınız</label>
                        <input type="text" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-dark" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">E-posta</label>
                        <input type="email" class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-dark" required>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Mesajınız</label>
                        <textarea class="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-dark h-24" required></textarea>
                    </div>
                    <button type="submit" class="w-full bg-brown-dark text-white font-bold py-2 px-4 rounded hover:bg-opacity-90 transition">Gönder</button>
                </form>
            </div>
        </div>
    `,
    'subeler': () => `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2">Şube Konumları</h2>
            <div class="space-y-4">
                <div class="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h3 class="font-bold text-xl text-brown-dark">Moda Şubesi (Merkez)</h3>
                        <p class="text-gray-600 mt-1">Moda Caddesi, Kadıköy</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" class="text-brown-dark underline font-bold">Haritada Gör</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h3 class="font-bold text-xl text-brown-dark">Beşiktaş Şubesi</h3>
                        <p class="text-gray-600 mt-1">Akaretler Yokuşu, Beşiktaş</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" class="text-brown-dark underline font-bold">Haritada Gör</a>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                    <div>
                        <h3 class="font-bold text-xl text-brown-dark">Karaköy Şubesi</h3>
                        <p class="text-gray-600 mt-1">Kemankeş Caddesi, Beyoğlu</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" class="text-brown-dark underline font-bold">Haritada Gör</a>
                </div>
            </div>
        </div>
    `,
    'menu': () => `
        <div class="animate-fade-in max-w-4xl mx-auto w-full">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow-md flex justify-between items-center border-l-4 border-brown-dark hover:shadow-lg transition-shadow">
                        <span class="text-lg font-bold">${item.name}</span>
                        <span class="text-brown-dark font-playfair text-xl font-bold">${item.price}₺</span>
                    </div>
                `).join('')}
            </div>
            <div class="mt-8 text-center">
               <button onclick="window.location.hash='#fiyatlar'" class="bg-brown-dark text-white px-6 py-2 rounded font-bold hover:bg-opacity-90 transition shadow-md">Fiyat Listesi Görünümü</button>
            </div>
        </div>
    `,
    'fiyatlar': () => `
        <div class="animate-fade-in max-w-2xl mx-auto w-full">
            <h2 class="text-3xl font-playfair font-bold text-brown-dark mb-6 border-b-2 border-brown-dark pb-2 text-center">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown-dark text-white">
                            <th class="py-3 px-6 font-bold uppercase text-sm">Ürün</th>
                            <th class="py-3 px-6 font-bold uppercase text-sm text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        ${menuItems.map((item, index) => `
                            <tr class="${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-cream transition-colors">
                                <td class="py-4 px-6 font-medium">${item.name}</td>
                                <td class="py-4 px-6 text-right font-bold font-playfair text-brown-dark">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// Routing logic
function handleRoute() {
    let hash = window.location.hash.substring(1); // Remove '#'

    // Default to home if route doesn't exist
    if (!pages[hash] && hash !== '') {
        hash = '';
        window.history.replaceState(null, null, ' ');
    }

    // Inject content
    appDiv.innerHTML = pages[hash]();

    // Scroll to top
    window.scrollTo(0, 0);
}

// Sidebar logic
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebarOverlay.classList.remove('hidden');
    // small delay to allow display block to apply before opacity transition
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
    }, 300); // match transition duration
    document.body.style.overflow = '';
}

// Event Listeners
window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Initialize Overlay Classes
sidebarOverlay.classList.add('opacity-0');
