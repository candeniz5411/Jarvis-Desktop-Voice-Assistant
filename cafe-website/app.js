const menuItems = [
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

const appContainer = document.getElementById('app');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const sidebarLinks = document.querySelectorAll('#sidebar a');

function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');
    if (isClosed) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }
}

menuToggle.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
sidebarLinks.forEach(link => {
    link.addEventListener('click', toggleSidebar);
});

const views = {
    home: `
        <div class="text-center animate-fade-in">
            <img src="./Images/logo.png" alt="Cafe Logo" class="mx-auto w-32 h-32 mb-6 shadow-sm rounded-full bg-cream p-2">
            <h2 class="font-heading text-4xl mb-4 font-bold">Kafemize Hoş Geldiniz</h2>
            <p class="text-lg mb-8 max-w-2xl mx-auto">En iyi kahveler ve atıştırmalıklar için doğru adrestesiniz. Kendinize bir mola verin ve lezzetin tadını çıkarın.</p>
            <img src="./Images/coffee.jpg" alt="Coffee" class="mx-auto w-full max-w-2xl rounded-xl shadow-lg border-4 border-brown-100">
        </div>
    `,
    hakkinda: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed">Kafemiz 2024 yılında, kaliteli kahveyi ve sıcak bir ortamı arayanlar için kuruldu. En iyi çekirdekleri özenle seçiyor, yetenekli baristalarımızla sizlere sunuyoruz. Misyonumuz, her yudumda mutluluk yaratmaktır.</p>
        </div>
    `,
    destek: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">Destek</h2>
            <p class="text-lg leading-relaxed mb-4">Müşteri memnuniyeti bizim için çok önemlidir. Sorularınız, önerileriniz veya şikayetleriniz için lütfen bizimle iletişime geçmekten çekinmeyin.</p>
            <p class="text-lg font-bold">E-posta: destek@mycafe.com</p>
            <p class="text-lg font-bold">Telefon: 0850 123 45 67</p>
        </div>
    `,
    iletisim: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">İletişim</h2>
            <div class="bg-brown-100 bg-opacity-10 p-6 rounded-lg shadow-md">
                <p class="text-lg mb-2"><span class="font-bold">Adres:</span> Kahveciler Sokak, No: 1, Kadıköy / İstanbul</p>
                <p class="text-lg mb-2"><span class="font-bold">Çalışma Saatleri:</span> Pazartesi - Pazar: 08:00 - 23:00</p>
                <p class="text-lg"><span class="font-bold">Telefon:</span> 0216 987 65 43</p>
            </div>
        </div>
    `,
    subeler: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">Şube Konumları</h2>
            <ul class="space-y-4">
                <li class="bg-white p-4 rounded-lg shadow-sm border border-brown-100 border-opacity-30">
                    <h3 class="font-bold text-xl mb-1">Kadıköy Şubesi (Merkez)</h3>
                    <p>Kahveciler Sokak, No: 1, Kadıköy</p>
                </li>
                <li class="bg-white p-4 rounded-lg shadow-sm border border-brown-100 border-opacity-30">
                    <h3 class="font-bold text-xl mb-1">Beşiktaş Şubesi</h3>
                    <p>Çarşı İçi, Kahve Hanı Cad. No: 42, Beşiktaş</p>
                </li>
                <li class="bg-white p-4 rounded-lg shadow-sm border border-brown-100 border-opacity-30">
                    <h3 class="font-bold text-xl mb-1">Üsküdar Şubesi</h3>
                    <p>Sahil Yolu, İskele Yanı, Üsküdar</p>
                </li>
            </ul>
        </div>
    `,
    menu: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow-sm flex items-center border-l-4 border-brown-100">
                        <div class="w-12 h-12 bg-brown-100 text-cream rounded-full flex items-center justify-center font-bold text-xl mr-4">
                            ${item.name.charAt(0)}
                        </div>
                        <div>
                            <h3 class="font-bold text-lg">${item.name}</h3>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="animate-fade-in">
            <h2 class="font-heading text-3xl mb-6 font-bold border-b-2 border-brown-100 pb-2">Fiyatlar</h2>
            <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <table class="w-full text-left border-collapse">
                    <thead>
                        <tr class="bg-brown-100 text-cream">
                            <th class="p-4 font-bold text-lg border-b">Ürün</th>
                            <th class="p-4 font-bold text-lg border-b text-right">Fiyat</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${menuItems.map((item, index) => `
                            <tr class="${index % 2 === 0 ? 'bg-cream bg-opacity-20' : 'bg-white'} hover:bg-brown-100 hover:bg-opacity-10 transition-colors">
                                <td class="p-4 border-b border-brown-100 border-opacity-20 font-medium">${item.name}</td>
                                <td class="p-4 border-b border-brown-100 border-opacity-20 text-right font-bold text-brown-100">${item.price}₺</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `
};

function router() {
    let hash = window.location.hash.substring(1);

    // Default to home if hash is empty or not in views
    if (!hash || !views[hash]) {
        hash = 'home';
    }

    // Add some simple animation styling to the head if not exists
    if (!document.getElementById('fade-style')) {
        const style = document.createElement('style');
        style.id = 'fade-style';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in {
                animation: fadeIn 0.4s ease-out forwards;
            }
        `;
        document.head.appendChild(style);
    }

    appContainer.innerHTML = views[hash];
    window.scrollTo(0, 0);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
