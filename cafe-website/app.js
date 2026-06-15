const menuData = [
    { name: "Espresso", price: 45 },
    { name: "Cappuccino", price: 55 },
    { name: "Latte", price: 60 },
    { name: "Türk Kahvesi", price: 40 },
    { name: "Çay", price: 25 },
    { name: "Cheesecake", price: 70 },
    { name: "Kruvasan", price: 50 },
    { name: "Sandviç", price: 80 },
    { name: "Soğuk Kahve", price: 65 },
    { name: "Limonata", price: 35 }
];

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const appContainer = document.getElementById('app');

function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

const sidebarLinks = document.querySelectorAll('#sidebar a');
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleSidebar();
    });
});

function renderHome() {
    return `
        <div class="text-center space-y-6">
            <h2 class="text-4xl font-heading font-bold">Hoş Geldiniz</h2>
            <p class="text-lg">Sıcak bir kahve ve lezzetli atıştırmalıklar için doğru yerdesiniz.</p>
            <img src="./Images/coffee.jpg" alt="Kahve" class="w-full max-w-2xl mx-auto rounded-lg shadow-md object-cover h-64">
        </div>
    `;
}

function renderHakkinda() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold mb-4">Hakkında</h2>
            <p>Kafe Logo olarak, en kaliteli kahve çekirdeklerini özenle seçip sizlerle buluşturuyoruz. Misafirlerimize rahat ve huzurlu bir ortam sunmayı amaçlıyoruz.</p>
        </div>
    `;
}

function renderDestek() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold mb-4">Destek</h2>
            <p>Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorununuz varsa lütfen bize ulaşın.</p>
            <p>Destek Hattı: 0850 123 45 67</p>
        </div>
    `;
}

function renderIletisim() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold mb-4">İletişim</h2>
            <p><strong>Adres:</strong> Kahve Sokak No:1, İstanbul</p>
            <p><strong>Telefon:</strong> 0212 987 65 43</p>
            <p><strong>E-posta:</strong> info@kafelogo.com</p>
        </div>
    `;
}

function renderSubeler() {
    return `
        <div class="space-y-4">
            <h2 class="text-3xl font-heading font-bold mb-4">Şube Konumları</h2>
            <ul class="list-disc pl-5 space-y-2">
                <li>Kadıköy Şubesi (Merkez)</li>
                <li>Beşiktaş Şubesi</li>
                <li>Nişantaşı Şubesi</li>
            </ul>
        </div>
    `;
}

function renderMenu() {
    let itemsHtml = menuData.map(item => `
        <div class="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 class="font-bold text-lg">${item.name}</h3>
        </div>
    `).join('');

    return `
        <div class="space-y-6">
            <h2 class="text-3xl font-heading font-bold mb-4">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function renderFiyatlar() {
    let itemsHtml = menuData.map(item => `
        <div class="flex justify-between items-center border-b border-coffee border-opacity-20 py-2">
            <span class="text-lg">${item.name}</span>
            <span class="font-bold text-lg">${item.price}₺</span>
        </div>
    `).join('');

    return `
        <div class="space-y-6 max-w-md mx-auto">
            <h2 class="text-3xl font-heading font-bold mb-4 text-center">Fiyatlar</h2>
            <div class="bg-white p-6 rounded-lg shadow-md">
                ${itemsHtml}
            </div>
        </div>
    `;
}

function router() {
    const hash = window.location.hash;
    let content = '';

    switch (hash) {
        case '#hakkinda':
            content = renderHakkinda();
            break;
        case '#destek':
            content = renderDestek();
            break;
        case '#iletisim':
            content = renderIletisim();
            break;
        case '#subeler':
            content = renderSubeler();
            break;
        case '#menu':
            content = renderMenu();
            break;
        case '#fiyatlar':
            content = renderFiyatlar();
            break;
        default:
            content = renderHome();
            break;
    }

    appContainer.innerHTML = content;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
