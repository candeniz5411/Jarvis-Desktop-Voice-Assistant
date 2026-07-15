// Menu Data
const menuItems = [
    { name: "Espresso", price: "45₺", category: "Kahveler" },
    { name: "Cappuccino", price: "55₺", category: "Kahveler" },
    { name: "Latte", price: "60₺", category: "Kahveler" },
    { name: "Türk Kahvesi", price: "40₺", category: "Kahveler" },
    { name: "Çay", price: "25₺", category: "Çaylar" },
    { name: "Cheesecake", price: "70₺", category: "Tatlılar" },
    { name: "Kruvasan", price: "50₺", category: "Atıştırmalıklar" },
    { name: "Sandviç", price: "80₺", category: "Atıştırmalıklar" },
    { name: "Soğuk Kahve", price: "65₺", category: "Kahveler" },
    { name: "Limonata", price: "35₺", category: "Soğuk İçecekler" },
];

// Page Contents
const pages = {
    '': `
        <div class="text-center animate-fade-in">
            <h1 class="text-4xl font-extrabold text-coffee-700 mb-4">Hoş Geldiniz</h1>
            <p class="text-lg text-gray-700 mb-8">Coffee House'a hoş geldiniz. Sizi en iyi kahvelerimizle ağırlamaktan mutluluk duyarız.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mx-auto border-4 border-coffee-100 max-w-2xl">
                <img src="./Images/coffee.jpg" alt="Coffee House Logo ve Atmosfer" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
        </div>
    `,
    'hakkinda': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">Hakkımızda</h2>
            <p class="text-gray-700 leading-relaxed mb-4">
                Coffee House, 2010 yılında kahve tutkunları için özel olarak kurulmuştur. Amacımız, dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini en taze haliyle sizlere sunmaktır.
            </p>
            <p class="text-gray-700 leading-relaxed">
                Usta baristalarımız tarafından hazırlanan özel lezzetlerimizle, günün stresini atabileceğiniz sıcak ve samimi bir ortam sunuyoruz.
            </p>
        </div>
    `,
    'destek': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">Destek Merkezi</h2>
            <div class="bg-coffee-100 p-6 rounded-lg text-coffee-900">
                <h3 class="text-xl font-semibold mb-2">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc pl-5 space-y-2 mb-4">
                    <li>Siparişimi nasıl iptal edebilirim?</li>
                    <li>Vegan seçenekleriniz var mı?</li>
                    <li>Çevrimiçi hediye kartı alabilir miyim?</li>
                </ul>
                <p>Daha fazla yardım için lütfen bizimle iletişime geçin.</p>
            </div>
        </div>
    `,
    'iletisim': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-semibold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong class="text-coffee-700">Telefon:</strong> +90 (555) 123 45 67</p>
                    <p class="mb-2"><strong class="text-coffee-700">E-posta:</strong> info@coffeehouse.com</p>
                    <p><strong class="text-coffee-700">Adres:</strong> Kahveciler Sokak No:42, Kadıköy/İstanbul</p>
                </div>
                <div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <input type="text" placeholder="Adınız" class="w-full p-2 border border-coffee-200 rounded focus:outline-none focus:border-coffee-500" required>
                        <input type="email" placeholder="E-posta Adresiniz" class="w-full p-2 border border-coffee-200 rounded focus:outline-none focus:border-coffee-500" required>
                        <textarea placeholder="Mesajınız" rows="4" class="w-full p-2 border border-coffee-200 rounded focus:outline-none focus:border-coffee-500" required></textarea>
                        <button type="submit" class="bg-coffee-700 text-cream px-6 py-2 rounded hover:bg-coffee-900 transition w-full font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    'subeler': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="border border-coffee-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-coffee-900 mb-2">Kadıköy Şubesi (Merkez)</h3>
                    <p class="text-gray-600">Kahveciler Sokak No:42, Kadıköy/İstanbul</p>
                    <p class="text-sm text-coffee-500 mt-2">Çalışma Saatleri: 07:00 - 23:00</p>
                </div>
                <div class="border border-coffee-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-coffee-900 mb-2">Beşiktaş Şubesi</h3>
                    <p class="text-gray-600">Çarşı İçi, Kartal Cad. No:15, Beşiktaş/İstanbul</p>
                    <p class="text-sm text-coffee-500 mt-2">Çalışma Saatleri: 08:00 - 00:00</p>
                </div>
                <div class="border border-coffee-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-coffee-900 mb-2">Alsancak Şubesi</h3>
                    <p class="text-gray-600">Kordonboyu No:8, Konak/İzmir</p>
                    <p class="text-sm text-coffee-500 mt-2">Çalışma Saatleri: 07:30 - 23:30</p>
                </div>
                <div class="border border-coffee-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-coffee-900 mb-2">Çankaya Şubesi</h3>
                    <p class="text-gray-600">Tunalı Hilmi Cad. No:99, Çankaya/Ankara</p>
                    <p class="text-sm text-coffee-500 mt-2">Çalışma Saatleri: 08:00 - 22:00</p>
                </div>
            </div>
        </div>
    `,
    'icerikler': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="flex items-center p-4 bg-coffee-50 rounded-lg shadow-sm">
                        <div class="w-12 h-12 bg-coffee-200 rounded-full flex items-center justify-center text-coffee-900 font-bold mr-4">
                            ${item.name.charAt(0)}
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-coffee-900">${item.name}</h3>
                            <span class="text-sm text-coffee-500 bg-coffee-100 px-2 py-1 rounded-full">${item.category}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    'fiyatlar': `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold text-coffee-700 mb-6 border-b-2 border-coffee-200 pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-lg shadow overflow-x-auto border border-coffee-100">
                <table class="min-w-full">
                    <thead class="bg-coffee-700 text-white">
                        <tr>
                            <th class="py-3 px-6 text-left">Ürün</th>
                            <th class="py-3 px-6 text-left">Kategori</th>
                            <th class="py-3 px-6 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-coffee-100 text-gray-700">
                        ${menuItems.map((item, index) => `
                            <tr class="${index % 2 === 0 ? 'bg-white' : 'bg-coffee-50'} hover:bg-coffee-100 transition">
                                <td class="py-3 px-6 font-medium">${item.name}</td>
                                <td class="py-3 px-6">${item.category}</td>
                                <td class="py-3 px-6 text-right font-bold text-coffee-900">${item.price}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

// DOM Elements
const appDiv = document.getElementById('app');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Function to toggle sidebar
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOverlay.classList.toggle('hidden');
}

// Event Listeners for Sidebar
menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar when a link is clicked (especially for mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing Function
function router() {
    // Get the hash from the URL, remove the '#' character
    let hash = window.location.hash.substring(1);

    // If hash is empty, render home page
    if (!pages[hash]) {
        hash = '';
    }

    // Render the content
    appDiv.innerHTML = pages[hash];

    // Smooth scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Listen for hash changes
window.addEventListener('hashchange', router);

// Add custom fade-in animation to document (for tailwind)
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
    </style>
`);

// Initial render
window.addEventListener('DOMContentLoaded', router);
