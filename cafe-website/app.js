const menuItems = [
    { name: "Espresso", price: 45, image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=80" },
    { name: "Cappuccino", price: 55, image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&q=80" },
    { name: "Latte", price: 60, image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80" },
    { name: "Türk Kahvesi", price: 40, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80" },
    { name: "Çay", price: 25, image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=400&q=80" },
    { name: "Cheesecake", price: 70, image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&q=80" },
    { name: "Kruvasan", price: 50, image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80" },
    { name: "Sandviç", price: 80, image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80" },
    { name: "Soğuk Kahve", price: 65, image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400&q=80" },
    { name: "Limonata", price: 35, image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80" }
];

const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const app = document.getElementById('app');

// Sidebar Toggle
function toggleSidebar() {
    sidebar.classList.toggle('-translate-x-full');
    const isOpen = !sidebar.classList.contains('-translate-x-full');
    if (isOpen) {
        overlay.classList.remove('opacity-0', 'pointer-events-none');
        overlay.classList.add('opacity-50', 'pointer-events-auto');
    } else {
        overlay.classList.remove('opacity-50', 'pointer-events-auto');
        overlay.classList.add('opacity-0', 'pointer-events-none');
    }
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);

// Close sidebar on link click
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});

// Routing
function renderHome() {
    app.innerHTML = `
        <div class="flex flex-col items-center justify-center text-center h-full animate-fade-in">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-[#3E2723]">Hoş Geldiniz</h2>
            <p class="text-xl mb-8 max-w-2xl">En taze kahve çekirdekleri ve lezzetli tatlılarımızla hizmetinizdeyiz.</p>
            <div class="rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full">
                <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80" alt="Cafe Ambiyans" class="w-full h-auto object-cover">
            </div>
            <a href="#menu-icerikleri" class="mt-8 bg-[#8B4513] text-[#FFFDD0] px-8 py-3 rounded-full hover:bg-[#A0522D] transition shadow-lg text-lg">Menüyü İncele</a>
        </div>
    `;
}

function renderMenu() {
    let html = `
        <div class="animate-fade-in">
            <h2 class="text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B4513] pb-2 inline-block">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    `;

    menuItems.forEach(item => {
        html += `
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover">
                <div class="p-4 flex justify-between items-center bg-white">
                    <h3 class="text-xl font-semibold text-[#3E2723]">${item.name}</h3>
                    <span class="text-lg font-bold bg-[#FFFDD0] text-[#8B4513] px-3 py-1 rounded-full">${item.price}₺</span>
                </div>
            </div>
        `;
    });

    html += `</div></div>`;
    app.innerHTML = html;
}

function renderPrices() {
    // Similar to menu but maybe list view or table focused on prices
    let html = `
        <div class="animate-fade-in max-w-3xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B4513] pb-2 inline-block">Fiyat Listesi</h2>
            <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                <table class="w-full">
                    <thead class="bg-[#8B4513] text-[#FFFDD0]">
                        <tr>
                            <th class="p-4 text-left">Ürün</th>
                            <th class="p-4 text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
    `;

    menuItems.forEach(item => {
        html += `
            <tr class="hover:bg-gray-50 transition">
                <td class="p-4 text-lg text-[#3E2723]">${item.name}</td>
                <td class="p-4 text-right text-lg font-bold text-[#8B4513]">${item.price}₺</td>
            </tr>
        `;
    });

    html += `
                    </tbody>
                </table>
            </div>
        </div>
    `;
    app.innerHTML = html;
}

function renderGeneric(title, content) {
    app.innerHTML = `
        <div class="animate-fade-in max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold mb-6 text-[#3E2723] border-b-2 border-[#8B4513] pb-2 inline-block">${title}</h2>
            <div class="bg-white p-6 rounded-lg shadow-md text-lg leading-relaxed text-gray-700">
                ${content}
            </div>
        </div>
    `;
}

function handleRoute() {
    const hash = window.location.hash;

    switch(hash) {
        case '#hakkinda':
            renderGeneric('Hakkında', 'Kafe Keyfi, 2010 yılından beri en kaliteli kahve çekirdeklerini sizlerle buluşturuyor. Amacımız, sıcak ve samimi bir ortamda unutulmaz tatlar sunmak.');
            break;
        case '#destek':
            renderGeneric('Destek', 'Her türlü soru ve öneriniz için yanınızdayız. Müşteri memnuniyeti bizim için her şeyden önemlidir.');
            break;
        case '#iletisim':
            renderGeneric('İletişim', '<p><strong>Adres:</strong> Kahve Sokak No: 1, İstanbul</p><p><strong>Telefon:</strong> 0212 123 45 67</p><p><strong>E-posta:</strong> bilgi@kafekeyfi.com</p>');
            break;
        case '#sube-konumlari':
            renderGeneric('Şube Konumları', '<ul><li>- Beşiktaş Merkez</li><li>- Kadıköy Moda</li><li>- Karaköy Sahil</li></ul>');
            break;
        case '#menu-icerikleri':
            renderMenu();
            break;
        case '#fiyatlar':
            renderPrices();
            break;
        default:
            renderHome();
            break;
    }
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);
