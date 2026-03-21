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

const pages = {
    home: `
        <div class="flex flex-col items-center justify-center text-center mt-8 space-y-6 animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-heading font-bold mb-2">Kahve Dükkanı'na Hoş Geldiniz!</h1>
            <p class="text-lg md:text-xl text-gray-800 max-w-2xl">En taze çekirdeklerden özenle hazırlanan kahvelerimiz ve leziz atıştırmalıklarımızla sizleri bekliyoruz.</p>
            <div class="w-full max-w-3xl rounded-lg overflow-hidden shadow-xl mt-8">
                <img src="../Images/Cover_pic.jpg" alt="Kahve Dükkanı" class="w-full h-auto object-cover max-h-96">
            </div>
            <a href="#menu" class="mt-8 bg-brandDark text-brandCream py-3 px-8 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg text-lg">Menüyü İncele</a>
        </div>
    `,
    hakkinda: `
        <div class="max-w-3xl mx-auto mt-8 bg-white/50 p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brandDark pb-2">Hakkımızda</h2>
            <div class="space-y-4 text-lg">
                <p>Kahve Dükkanı olarak, kahve tutkusunu en saf haliyle misafirlerimize sunmak için yola çıktık.</p>
                <p>Dünyanın dört bir yanından özenle seçtiğimiz kaliteli kahve çekirdeklerini, ustalarımızın ellerinde mükemmel bir deneyime dönüştürüyoruz.</p>
                <p>Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir ortam yaratmaktır.</p>
            </div>
        </div>
    `,
    destek: `
        <div class="max-w-3xl mx-auto mt-8 bg-white/50 p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brandDark pb-2">Destek S.S.S.</h2>
            <div class="space-y-6">
                <div>
                    <h3 class="font-bold text-xl mb-2">Çalışma saatleriniz nelerdir?</h3>
                    <p>Haftanın her günü 08:00 - 22:00 saatleri arasında hizmet vermekteyiz.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2">Paket servisiniz var mı?</h3>
                    <p>Evet, anlaşmalı yemek platformları üzerinden paket servisimiz bulunmaktadır.</p>
                </div>
                <div>
                    <h3 class="font-bold text-xl mb-2">Vegan seçenekleriniz mevcut mu?</h3>
                    <p>Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve vegan tatlılarımız bulunmaktadır.</p>
                </div>
            </div>
        </div>
    `,
    iletisim: `
        <div class="max-w-3xl mx-auto mt-8 bg-white/50 p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brandDark pb-2">İletişim</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Adres:</strong> Kahve Sokak No:123, Kadıköy/İstanbul</p>
                    <p class="mb-2"><strong>Telefon:</strong> 0 (216) 123 45 67</p>
                    <p class="mb-4"><strong>E-posta:</strong> merhaba@kahvedukkani.com</p>
                </div>
                <div>
                    <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                        <div>
                            <label class="block mb-1 text-sm font-bold">Ad Soyad</label>
                            <input type="text" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brandDark" required>
                        </div>
                        <div>
                            <label class="block mb-1 text-sm font-bold">E-posta</label>
                            <input type="email" class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-brandDark" required>
                        </div>
                        <div>
                            <label class="block mb-1 text-sm font-bold">Mesaj</label>
                            <textarea class="w-full p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-brandDark" required></textarea>
                        </div>
                        <button type="submit" class="bg-brandDark text-brandCream py-2 px-6 rounded hover:bg-opacity-90 transition-colors w-full font-bold">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `,
    subeler: `
        <div class="max-w-4xl mx-auto mt-8">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brandDark pb-2">Şube Konumları</h2>
            <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white/50 p-6 rounded-lg shadow-md border-t-4 border-brandDark">
                    <h3 class="text-2xl font-bold mb-3 font-heading">Kadıköy Merkez Şube</h3>
                    <p class="mb-2">Moda Caddesi, Kahve Sokak No:123</p>
                    <p class="text-sm text-gray-600 mb-4">Hafta içi: 08:00 - 22:00 | Hafta sonu: 09:00 - 23:00</p>
                    <button class="text-sm border border-brandDark px-4 py-1 rounded hover:bg-brandDark hover:text-brandCream transition-colors">Haritada Gör</button>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-md border-t-4 border-brandDark">
                    <h3 class="text-2xl font-bold mb-3 font-heading">Beşiktaş Şube</h3>
                    <p class="mb-2">Çarşı İçi, Çınar Sokak No:45</p>
                    <p class="text-sm text-gray-600 mb-4">Hafta içi: 08:00 - 22:00 | Hafta sonu: 09:00 - 23:00</p>
                    <button class="text-sm border border-brandDark px-4 py-1 rounded hover:bg-brandDark hover:text-brandCream transition-colors">Haritada Gör</button>
                </div>
                <div class="bg-white/50 p-6 rounded-lg shadow-md border-t-4 border-brandDark">
                    <h3 class="text-2xl font-bold mb-3 font-heading">Karaköy Şube</h3>
                    <p class="mb-2">Kemankeş Caddesi No:78</p>
                    <p class="text-sm text-gray-600 mb-4">Hafta içi: 08:00 - 22:00 | Hafta sonu: 09:00 - 23:00</p>
                    <button class="text-sm border border-brandDark px-4 py-1 rounded hover:bg-brandDark hover:text-brandCream transition-colors">Haritada Gör</button>
                </div>
            </div>
        </div>
    `,
    menu: `
        <div class="max-w-4xl mx-auto mt-8">
            <h2 class="text-3xl font-heading font-bold mb-8 text-center border-b-2 border-brandDark pb-4 inline-block mx-auto">Menü İçerikleri</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                ${menuItems.map(item => `
                    <div class="bg-white/60 p-4 rounded-lg shadow-sm flex justify-between items-center border-l-4 border-brandDark hover:shadow-md transition-shadow">
                        <span class="font-bold text-lg">${item.name}</span>
                        <span class="text-sm text-gray-500 italic">Detaylar için mağazamıza sorunuz</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    fiyatlar: `
        <div class="max-w-3xl mx-auto mt-8 bg-white/50 p-8 rounded-lg shadow-md">
            <h2 class="text-3xl font-heading font-bold mb-6 border-b-2 border-brandDark pb-2 text-center">Fiyat Listesi</h2>
            <ul class="divide-y divide-gray-300">
                ${menuItems.map(item => `
                    <li class="py-4 flex justify-between items-center hover:bg-white/40 px-2 rounded transition-colors">
                        <span class="font-bold text-lg">${item.name}</span>
                        <span class="font-bold text-xl text-brandDark bg-brandCream px-3 py-1 rounded-full border border-brandDark">${item.price}</span>
                    </li>
                `).join('')}
            </ul>
            <p class="text-xs text-center mt-6 text-gray-600">* Fiyatlarımıza KDV dahildir.</p>
        </div>
    `
};

document.addEventListener('DOMContentLoaded', () => {
    const appContent = document.getElementById('app-content');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const navLinks = document.querySelectorAll('.nav-link');

    // Routing function
    function router() {
        let hash = window.location.hash.substring(1);
        if (!hash || !pages[hash]) {
            hash = 'home';
            window.location.hash = 'home';
        }

        // Add a simple fade-in effect
        appContent.style.opacity = '0';
        setTimeout(() => {
            appContent.innerHTML = pages[hash];
            appContent.style.transition = 'opacity 0.3s ease-in-out';
            appContent.style.opacity = '1';
        }, 150);

        // Close sidebar on navigation (mobile friendly)
        closeSidebar();
    }

    // Sidebar Toggle Functions
    function openSidebar() {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
    }

    function closeSidebar() {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
    }

    // Event Listeners
    window.addEventListener('hashchange', router);

    menuBtn.addEventListener('click', openSidebar);
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    // Initial load
    router();
});
