// Menu Data
const menuItems = [
    { name: "Espresso", price: 45, category: "Kahve", description: "Yoğun ve aromatik bir espresso." },
    { name: "Cappuccino", price: 55, category: "Kahve", description: "Espresso, sıcak süt ve süt köpüğü." },
    { name: "Latte", price: 60, category: "Kahve", description: "Espresso ve buharlanmış süt." },
    { name: "Türk Kahvesi", price: 40, category: "Kahve", description: "Geleneksel Türk kahvesi." },
    { name: "Çay", price: 25, category: "İçecek", description: "Taze demlenmiş siyah çay." },
    { name: "Cheesecake", price: 70, category: "Tatlı", description: "Limonlu veya frambuazlı cheesecake." },
    { name: "Kruvasan", price: 50, category: "Hamur İşi", description: "Tereyağlı taze kruvasan." },
    { name: "Sandviç", price: 80, category: "Yiyecek", description: "Peynirli ve domatesli sandviç." },
    { name: "Soğuk Kahve", price: 65, category: "Kahve", description: "Buzlu ve ferahlatıcı kahve." },
    { name: "Limonata", price: 35, category: "İçecek", description: "Ev yapımı taze limonata." }
];

// DOM Elements
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const hamburgerBtn = document.getElementById('hamburger-btn');
const closeSidebarBtn = document.getElementById('close-sidebar-btn');
const app = document.getElementById('app');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

// Sidebar Logic
function toggleSidebar() {
    sidebar.classList.toggle('open');
    if (sidebar.classList.contains('open')) {
        sidebarOverlay.classList.remove('hidden');
        setTimeout(() => sidebarOverlay.classList.add('visible'), 10); // Fade in
    } else {
        sidebarOverlay.classList.remove('visible');
        setTimeout(() => sidebarOverlay.classList.add('hidden'), 300); // Wait for fade out
    }
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
    setTimeout(() => sidebarOverlay.classList.add('hidden'), 300);
}

// Event Listeners
hamburgerBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

sidebarLinks.forEach(link => {
    link.addEventListener('click', closeSidebar);
});

// Routing Logic
function router() {
    const hash = window.location.hash || '#home';

    // Clear content
    app.innerHTML = '';

    switch(hash) {
        case '#home':
            renderHome();
            break;
        case '#about':
            renderAbout();
            break;
        case '#menu':
            renderMenu();
            break;
        case '#prices':
            renderPrices();
            break;
        case '#locations':
            renderLocations();
            break;
        case '#support':
            renderSupport();
            break;
        case '#contact':
            renderContact();
            break;
        default:
            renderHome();
    }
}

// Render Functions
function renderHome() {
    const section = document.createElement('section');
    section.className = "flex flex-col items-center justify-center text-center py-10 fade-in";
    section.innerHTML = `
        <div class="mb-8 rounded-full overflow-hidden shadow-xl border-4 border-coffee-light">
             <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Kahve Görseli" class="w-64 h-64 object-cover">
        </div>
        <h2 class="text-4xl font-heading mb-4 text-coffee-dark font-bold">Hoş Geldiniz</h2>
        <p class="text-xl max-w-2xl mx-auto mb-8 text-gray-700 leading-relaxed">
            Şehrin en taze kahveleri ve en lezzetli atıştırmalıkları ile keyifli anlar yaşayın.
            Sıcak atmosferimiz ve güler yüzlü hizmetimizle sizi bekliyoruz.
        </p>
        <a href="#menu" class="bg-coffee-dark text-white py-3 px-8 rounded-full hover:bg-coffee-light transition duration-300 shadow-md transform hover:scale-105">
            Menüyü İncele
        </a>
    `;
    app.appendChild(section);
}

function renderAbout() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in";
    section.innerHTML = `
        <h2 class="text-3xl font-heading mb-6 text-center border-b-2 border-coffee-light pb-2 inline-block mx-auto">Hakkımızda</h2>
        <div class="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <p class="text-lg mb-4 text-gray-700">
                Kahve Dükkanı olarak, 2010 yılından beri kahve tutkunlarına hizmet veriyoruz.
                Dünyanın en iyi çekirdeklerini özenle seçiyor ve ustalıkla kavuruyoruz.
            </p>
            <p class="text-lg text-gray-700">
                Amacımız sadece kahve satmak değil, misafirlerimize unutulmaz bir deneyim sunmaktır.
                Her fincanda kaliteyi ve tutkuyu hissetmeniz için çalışıyoruz.
            </p>
        </div>
    `;
    app.appendChild(section);
}

function renderMenu() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in";

    const title = document.createElement('h2');
    title.className = "text-3xl font-heading mb-8 text-center text-coffee-dark";
    title.textContent = "Menü İçerikleri";
    section.appendChild(title);

    const grid = document.createElement('div');
    grid.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

    menuItems.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-white p-6 rounded-lg shadow-md menu-card flex flex-col justify-between border-l-4 border-coffee-light";
        card.innerHTML = `
            <div>
                <div class="flex justify-between items-start mb-2">
                    <h3 class="text-xl font-bold text-coffee-dark">${item.name}</h3>
                    <span class="text-sm bg-coffee-cream text-coffee-dark py-1 px-2 rounded-full font-bold">${item.category}</span>
                </div>
                <p class="text-gray-600 mb-4 text-sm">${item.description}</p>
            </div>
            <div class="text-right mt-2">
                <span class="text-2xl font-bold text-coffee-dark">${item.price}₺</span>
            </div>
        `;
        grid.appendChild(card);
    });

    section.appendChild(grid);
    app.appendChild(section);
}

function renderPrices() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in max-w-2xl mx-auto";

    const title = document.createElement('h2');
    title.className = "text-3xl font-heading mb-8 text-center text-coffee-dark";
    title.textContent = "Fiyat Listesi";
    section.appendChild(title);

    const listContainer = document.createElement('div');
    listContainer.className = "bg-white rounded-lg shadow-lg overflow-hidden";

    menuItems.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = `flex justify-between items-center p-4 border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-coffee-cream transition-colors duration-200`;
        row.innerHTML = `
            <span class="text-lg font-medium text-coffee-dark">${item.name}</span>
            <span class="text-lg font-bold text-coffee-light">${item.price}₺</span>
        `;
        listContainer.appendChild(row);
    });

    section.appendChild(listContainer);
    app.appendChild(section);
}

function renderLocations() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in";
    section.innerHTML = `
        <h2 class="text-3xl font-heading mb-6 text-center text-coffee-dark">Şube Konumları</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-coffee-dark">
                <h3 class="text-xl font-bold mb-2">Merkez Şube</h3>
                <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>İstiklal Caddesi No: 123, Beyoğlu/İstanbul</p>
                <p class="text-gray-600"><i class="fas fa-phone mr-2"></i>(0212) 123 45 67</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-md border-t-4 border-coffee-dark">
                <h3 class="text-xl font-bold mb-2">Kadıköy Şube</h3>
                <p class="text-gray-600 mb-2"><i class="fas fa-map-marker-alt mr-2"></i>Moda Caddesi No: 45, Kadıköy/İstanbul</p>
                <p class="text-gray-600"><i class="fas fa-phone mr-2"></i>(0216) 987 65 43</p>
            </div>
        </div>
    `;
    app.appendChild(section);
}

function renderSupport() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in text-center";
    section.innerHTML = `
        <h2 class="text-3xl font-heading mb-6 text-coffee-dark">Destek</h2>
        <div class="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <p class="mb-4 text-gray-700">Size nasıl yardımcı olabiliriz? Sıkça sorulan sorulara göz atın veya bizimle iletişime geçin.</p>
            <div class="space-y-4 text-left">
                <details class="group bg-gray-50 p-4 rounded-lg cursor-pointer">
                    <summary class="font-bold text-coffee-dark list-none flex justify-between items-center">
                        Siparişimi iptal edebilir miyim?
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <p class="mt-2 text-gray-600">Henüz hazırlanmaya başlanmamış siparişlerinizi kasadan iptal edebilirsiniz.</p>
                </details>
                <details class="group bg-gray-50 p-4 rounded-lg cursor-pointer">
                    <summary class="font-bold text-coffee-dark list-none flex justify-between items-center">
                        Vegan seçenekleriniz var mı?
                        <span class="transition group-open:rotate-180">
                            <i class="fas fa-chevron-down"></i>
                        </span>
                    </summary>
                    <p class="mt-2 text-gray-600">Evet, sütlü kahvelerimizde badem, soya ve yulaf sütü seçeneklerimiz mevcuttur.</p>
                </details>
            </div>
        </div>
    `;
    app.appendChild(section);
}

function renderContact() {
    const section = document.createElement('section');
    section.className = "py-10 fade-in max-w-2xl mx-auto";
    section.innerHTML = `
        <h2 class="text-3xl font-heading mb-6 text-center text-coffee-dark">İletişim</h2>
        <form class="bg-white p-8 rounded-lg shadow-md space-y-4">
            <div>
                <label class="block text-gray-700 font-bold mb-2">Adınız Soyadınız</label>
                <input type="text" class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-coffee-light" placeholder="Adınız">
            </div>
            <div>
                <label class="block text-gray-700 font-bold mb-2">E-posta Adresiniz</label>
                <input type="email" class="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-coffee-light" placeholder="ornek@email.com">
            </div>
            <div>
                <label class="block text-gray-700 font-bold mb-2">Mesajınız</label>
                <textarea class="w-full border border-gray-300 p-3 rounded h-32 focus:outline-none focus:border-coffee-light" placeholder="Mesajınızı buraya yazın..."></textarea>
            </div>
            <button type="submit" class="w-full bg-coffee-dark text-white font-bold py-3 rounded hover:bg-coffee-light transition duration-300">
                Gönder
            </button>
        </form>
    `;
    app.appendChild(section);
}

// Initial Load
window.addEventListener('load', router);
window.addEventListener('hashchange', router);