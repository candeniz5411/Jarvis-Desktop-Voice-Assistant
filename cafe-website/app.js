// Sidebar toggle logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const sidebarLinks = document.querySelectorAll('#sidebar a');

function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
}

function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
}

menuBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Menu Data
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

// SPA Routing Logic
const contentDiv = document.getElementById('content');

const pages = {
    '/': `
        <div class="text-center max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-4">Kafe Ahenk'e Hoş Geldiniz!</h2>
            <p class="text-lg mb-8">Modern, minimalist ve kullanıcı dostu atmosferimizde en taze kahveleri deneyimleyin.</p>
            <div class="rounded-lg overflow-hidden shadow-lg border-4 border-brand-brown inline-block">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto max-h-[500px] object-cover block">
            </div>
        </div>
    `,
    '/hakkinda': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">Hakkında</h2>
            <p class="mb-4">Kafe Ahenk, kahve tutkusunu modern ve huzurlu bir ortamla buluşturmak amacıyla kurulmuştur. Özenle seçilmiş kahve çekirdeklerimiz ve taze atıştırmalıklarımızla misafirlerimize unutulmaz anlar yaşatmayı hedefliyoruz.</p>
        </div>
    `,
    '/destek': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">Destek</h2>
            <p class="mb-4">Siparişlerinizle veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça sorulan sorularımıza göz atabilir veya destek ekibimizle iletişime geçebilirsiniz.</p>
            <ul class="list-disc list-inside">
                <li>Sipariş takibi</li>
                <li>Ödeme yöntemleri</li>
                <li>Geri bildirim ve şikayetler</li>
            </ul>
        </div>
    `,
    '/iletisim': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">İletişim</h2>
            <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No: 42, Moda, İstanbul</p>
            <p class="mb-2"><strong>Telefon:</strong> 0(212) 555 12 34</p>
            <p class="mb-2"><strong>E-posta:</strong> info@kafeahenk.com</p>
            <p class="mt-4">Çalışma Saatleri: Her gün 08:00 - 22:00</p>
        </div>
    `,
    '/sube-konumlari': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">Şube Konumları</h2>
            <ul class="space-y-4">
                <li class="bg-white p-4 rounded-md shadow-md">
                    <h3 class="text-xl font-bold">Moda Şubesi (Merkez)</h3>
                    <p>Kahve Sokak No: 42, Kadıköy / İstanbul</p>
                </li>
                <li class="bg-white p-4 rounded-md shadow-md">
                    <h3 class="text-xl font-bold">Beşiktaş Şubesi</h3>
                    <p>Çınar Caddesi No: 18, Beşiktaş / İstanbul</p>
                </li>
            </ul>
        </div>
    `,
    '/menu-icerikleri': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">Menü İçerikleri</h2>
            <p class="mb-6">Kafemizde bulabileceğiniz özenle hazırlanmış yiyecek ve içeceklerimiz.</p>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <li class="bg-white p-4 rounded-md shadow border-l-4 border-brand-brown flex items-center">
                        <span class="text-lg font-bold">${item.name}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `,
    '/fiyatlar': `
        <div class="max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold mb-4 border-b-2 border-brand-brown pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-md shadow overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brand-brown text-brand-cream">
                            <th class="p-4 border-b border-gray-300">Ürün</th>
                            <th class="p-4 border-b border-gray-300 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map(item => `
                            <tr class="border-b border-gray-200 hover:bg-gray-50">
                                <td class="p-4 text-lg">${item.name}</td>
                                <td class="p-4 text-lg font-bold text-right">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

function renderPage() {
    // Get the current hash, default to '/' if none
    let path = window.location.hash.slice(1) || '/';

    // Fallback to home if path not found
    const content = pages[path] || pages['/'];
    contentDiv.innerHTML = content;
}

// Listen for hash changes
window.addEventListener('hashchange', renderPage);

// Initial render
renderPage();
