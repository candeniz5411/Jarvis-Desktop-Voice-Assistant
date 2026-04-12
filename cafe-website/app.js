const menuItems = [
    { name: 'Espresso', price: '45₺', image: '../Images/Picture1.png' },
    { name: 'Cappuccino', price: '55₺', image: '../Images/Picture2.png' },
    { name: 'Latte', price: '60₺', image: '../Images/Picture3.png' },
    { name: 'Türk Kahvesi', price: '40₺', image: '../Images/Picture4.png' },
    { name: 'Çay', price: '25₺', image: '../Images/Picture5.png' },
    { name: 'Cheesecake', price: '70₺', image: '../Images/Picture6.png' },
    { name: 'Kruvasan', price: '50₺', image: '../Images/Picture7.png' },
    { name: 'Sandviç', price: '80₺', image: '../Images/Picture8.png' },
    { name: 'Soğuk Kahve', price: '65₺', image: '../Images/Picture9.png' },
    { name: 'Limonata', price: '35₺', image: '../Images/Picture10.png' }
];

const appContent = document.getElementById('app-content');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    sidebarOverlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar on navigation link click (mobile friendly)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

const views = {
    home: () => `
        <div class="flex flex-col items-center justify-center p-8 max-w-4xl mx-auto text-center space-y-6">
            <h1 class="text-4xl md:text-5xl font-bold font-heading text-[#3E2723]">Kahve Dükkanına Hoş Geldiniz</h1>
            <p class="text-xl">Sizi en taze kahvelerimiz ve lezzetli atıştırmalıklarımızla ağırlamaktan mutluluk duyarız.</p>
            <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı Görseli" class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mt-6" onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'">
        </div>
    `,
    hakkinda: () => `
        <div class="p-8 max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-4 border-b border-[#3E2723] pb-2">Hakkında</h2>
            <p class="text-lg">Kahve Dükkanı olarak 2010 yılından beri en kaliteli kahve çekirdeklerini özenle seçiyor ve sizlerle buluşturuyoruz. Amacımız sadece kahve değil, aynı zamanda samimi bir ortam sunmaktır.</p>
        </div>
    `,
    destek: () => `
        <div class="p-8 max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-4 border-b border-[#3E2723] pb-2">Destek</h2>
            <p class="text-lg">Müşteri memnuniyeti bizim için ön plandadır. Herhangi bir sorunuz veya öneriniz varsa, bizimle iletişime geçmekten çekinmeyin. Size yardımcı olmaktan memnuniyet duyarız.</p>
        </div>
    `,
    iletisim: () => `
        <div class="p-8 max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-4 border-b border-[#3E2723] pb-2">İletişim</h2>
            <ul class="text-lg space-y-2">
                <li><strong>Adres:</strong> Kahve Sokak No: 123, Lezzet Mahallesi, İstanbul</li>
                <li><strong>Telefon:</strong> +90 555 123 45 67</li>
                <li><strong>E-posta:</strong> info@kahvedukkani.com</li>
            </ul>
        </div>
    `,
    subeler: () => `
        <div class="p-8 max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-4 border-b border-[#3E2723] pb-2">Şube Konumları</h2>
            <ul class="text-lg space-y-4">
                <li class="bg-white p-4 rounded shadow"><strong>Kadıköy Şubesi:</strong> Moda Cd. No: 45</li>
                <li class="bg-white p-4 rounded shadow"><strong>Beşiktaş Şubesi:</strong> Barbaros Blv. No: 78</li>
                <li class="bg-white p-4 rounded shadow"><strong>Karaköy Şubesi:</strong> Kemankeş Cd. No: 12</li>
            </ul>
        </div>
    `,
    'menu-icerikleri': () => `
        <div class="p-8 max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b border-[#3E2723] pb-2 text-center">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center p-4">
                        <div class="w-full h-48 mb-4 bg-gray-200 rounded flex items-center justify-center overflow-hidden">
                             <img src="${item.image}" alt="${item.name}" class="object-cover w-full h-full" onerror="this.src='https://via.placeholder.com/150?text=${encodeURIComponent(item.name)}'">
                        </div>
                        <h3 class="text-xl font-bold font-heading text-[#3E2723]">${item.name}</h3>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: () => `
        <div class="p-8 max-w-2xl mx-auto">
            <h2 class="text-3xl font-bold font-heading mb-6 border-b border-[#3E2723] pb-2 text-center">Fiyat Listesi</h2>
            <div class="bg-white rounded-xl shadow-md p-6">
                <ul class="space-y-3">
                    ${menuItems.map(item => `
                        <li class="flex justify-between items-center border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                            <span class="text-lg font-medium">${item.name}</span>
                            <span class="text-lg font-bold text-[#3E2723]">${item.price}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `
};

function render() {
    let hash = window.location.hash.substring(1);
    if (!hash || !views[hash]) {
        hash = 'home';
    }
    appContent.innerHTML = views[hash]();
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', render);
