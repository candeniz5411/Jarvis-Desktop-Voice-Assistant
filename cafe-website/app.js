// Sidebar Logic
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-sidebar');
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

// Close sidebar when a link is clicked (for responsive experience)
sidebarLinks.forEach(link => {
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

// Pages Content Logic
const pages = {
    'ana-sayfa': `
        <div class="text-center">
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6">Bizim Kafe'ye Hoş Geldiniz!</h2>
            <p class="text-lg text-brown-700 mb-8">Modern, minimalist ve samimi ortamımızda en kaliteli kahvelerin tadını çıkarın.</p>
            <div class="w-full rounded-xl overflow-hidden shadow-md">
                <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-[400px]">
            </div>
        </div>
    `,
    'hakkinda': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">Hakkımızda</h2>
            <p class="text-brown-700 leading-relaxed mb-4">
                Bizim Kafe, kahve tutkusunu kalite ve huzurla buluşturmak amacıyla kuruldu. Modern ve minimalist tasarımımızla şehrin gürültüsünden uzaklaşıp kendinize vakit ayırabileceğiniz rahat bir alan sunuyoruz.
            </p>
            <p class="text-brown-700 leading-relaxed">
                Özenle seçtiğimiz kahve çekirdeklerimiz, usta baristalarımızın ellerinde sanata dönüşüyor. Taptaze tatlılarımız ve atıştırmalıklarımızla kahve keyfinizi tamamlıyoruz.
            </p>
        </div>
    `,
    'destek': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">Destek</h2>
            <p class="text-brown-700 mb-4">Siparişleriniz veya hizmetlerimizle ilgili yardıma mı ihtiyacınız var? Sıkça Sorulan Sorular bölümümüzden veya doğrudan bize ulaşarak destek alabilirsiniz.</p>
            <ul class="list-disc list-inside text-brown-700 space-y-2">
                <li>Sipariş Takibi</li>
                <li>İade ve İptal Koşulları</li>
                <li>Özel Etkinlik Rezervasyonları</li>
                <li>Alerjen Bilgileri</li>
            </ul>
        </div>
    `,
    'iletisim': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">İletişim</h2>
            <div class="space-y-4 text-brown-700">
                <p><strong>Adres:</strong> Kahve Sokak No:42, Lezzet Mahallesi, İstanbul</p>
                <p><strong>Telefon:</strong> 0212 555 00 00</p>
                <p><strong>E-posta:</strong> merhaba@bizimkafe.com</p>
                <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
            </div>
        </div>
    `,
    'subeler': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="bg-brown-100 p-4 rounded-lg">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Merkez Şube</h3>
                    <p class="text-brown-700">Kadıköy, İstanbul</p>
                </div>
                <div class="bg-brown-100 p-4 rounded-lg">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Sahil Şube</h3>
                    <p class="text-brown-700">Beşiktaş, İstanbul</p>
                </div>
                <div class="bg-brown-100 p-4 rounded-lg">
                    <h3 class="font-bold text-xl mb-2 text-brown-900">Park Şube</h3>
                    <p class="text-brown-700">Çankaya, Ankara</p>
                </div>
            </div>
        </div>
    `,
    'menu-icerikleri': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">Menü İçerikleri</h2>
            <p class="text-brown-700 mb-6">Özenle hazırladığımız yiyecek ve içecek seçeneklerimiz:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center p-3 hover:bg-brown-100 rounded transition duration-150">
                        <span class="text-lg font-medium text-brown-900">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    'fiyatlar': `
        <div>
            <h2 class="text-3xl font-serif font-bold text-brown-900 mb-6 border-b border-brown-100 pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-lg shadow-sm border border-brown-100 overflow-hidden">
                <ul class="divide-y divide-brown-100">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center p-4 hover:bg-brown-100 transition duration-150">
                            <span class="text-lg font-medium text-brown-900">${item.name}</span>
                            <span class="text-lg font-bold text-brown-700">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
};

// Router Logic
const contentDiv = document.getElementById('content');

function renderPage() {
    // Get hash, default to 'ana-sayfa'
    let hash = window.location.hash.substring(1);
    if (!hash || !pages[hash]) {
        hash = 'ana-sayfa';
        window.location.hash = hash;
    }

    // Inject content
    contentDiv.innerHTML = pages[hash];

    // Scroll to top on page change
    window.scrollTo(0,0);
}

// Listen for hash changes
window.addEventListener('hashchange', renderPage);

// Initial render
renderPage();
