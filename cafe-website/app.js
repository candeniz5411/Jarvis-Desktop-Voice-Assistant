const menuItems = [
    { name: "Espresso", price: "45₺" },
    { name: "Cappuccino", price: "55₺" },
    { name: "Latte", price: "60₺" },
    { name: "Türk Kahvesi", price: "40₺" },
    { name: "Çay", price: "25₺" },
    { name: "Cheesecake", price: "70₺" },
    { name: "Kruvasan", price: "50₺" },
    { name: "Sandviç", price: "80₺" },
    { name: "Soğuk Kahve", price: "65₺" },
    { name: "Limonata", price: "35₺" }
];

const pages = {
    '': `
        <div class="text-center">
            <h2 class="text-4xl font-heading font-bold mb-4">Kahve Molası'na Hoş Geldiniz!</h2>
            <p class="text-lg mb-8">En taze çekirdeklerle hazırladığımız kahvelerimizi denemeye davetlisiniz.</p>
            <div class="max-w-2xl mx-auto rounded-lg overflow-hidden shadow-xl">
                <img src="./Images/coffee-photo.jpg" alt="Kahve" class="w-full h-auto">
            </div>
        </div>
    `,
    '#hakkinda': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-4 border-b border-brown-900/20 pb-2">Hakkında</h2>
            <p class="text-lg leading-relaxed">Kahve Molası, 2026 yılında kahve tutkunlarına en kaliteli hizmeti sunmak amacıyla kurulmuştur. Modern ve minimalist yaklaşımımızla, her yudumda huzuru hissetmenizi amaçlıyoruz.</p>
        </div>
    `,
    '#destek': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-4 border-b border-brown-900/20 pb-2">Destek</h2>
            <p class="text-lg leading-relaxed">Müşteri memnuniyeti bizim için ön plandadır. Herhangi bir sorunuz veya öneriniz varsa lütfen bizimle iletişime geçmekten çekinmeyin. Size en kısa sürede yardımcı olmaktan memnuniyet duyarız.</p>
        </div>
    `,
    '#iletisim': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-4 border-b border-brown-900/20 pb-2">İletişim</h2>
            <p class="text-lg leading-relaxed mb-4">Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
            <ul class="list-disc list-inside text-lg space-y-2">
                <li><strong>Telefon:</strong> +90 555 123 45 67</li>
                <li><strong>E-posta:</strong> iletisim@kahvemolasi.com</li>
            </ul>
        </div>
    `,
    '#sube-konumlari': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-4 border-b border-brown-900/20 pb-2">Şube Konumları</h2>
            <p class="text-lg leading-relaxed mb-4">Şubelerimiz her gün 08:00 - 22:00 saatleri arasında hizmet vermektedir:</p>
            <ul class="list-disc list-inside text-lg space-y-2">
                <li><strong>Kadıköy Merkez Şubesi:</strong> Moda Cd. No: 123, Kadıköy, İstanbul</li>
                <li><strong>Beşiktaş Şubesi:</strong> Barbaros Blv. No: 45, Beşiktaş, İstanbul</li>
                <li><strong>Çankaya Şubesi:</strong> Tunalı Hilmi Cd. No: 67, Çankaya, Ankara</li>
            </ul>
        </div>
    `,
    '#menu-icerikleri': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-900/20 pb-2">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${menuItems.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow border border-brown-900/10">
                        <span class="text-xl font-bold font-heading">${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    '#fiyatlar': `
        <div>
            <h2 class="text-3xl font-heading font-bold mb-6 border-b border-brown-900/20 pb-2">Fiyatlar</h2>
            <div class="space-y-4 max-w-3xl mx-auto">
                ${menuItems.map(item => `
                    <div class="flex justify-between items-center bg-white p-4 rounded-lg shadow border border-brown-900/10">
                        <span class="text-xl font-bold font-heading">${item.name}</span>
                        <span class="text-xl font-bold text-brown-700">${item.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const contentDiv = document.getElementById('content');

    function toggleMenu() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    const menuLinks = document.querySelectorAll('#sidebar a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!sidebar.classList.contains('-translate-x-full')) {
                toggleMenu();
            }
        });
    });

    function renderPage() {
        const hash = window.location.hash;
        contentDiv.innerHTML = pages[hash] || pages[''];

        // Scroll to top
        window.scrollTo(0, 0);
    }

    window.addEventListener('hashchange', renderPage);

    // Initial render
    renderPage();
});
