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

const routes = {
    '': homeContent,
    '#home': homeContent,
    '#hakkinda': aboutContent,
    '#destek': supportContent,
    '#iletisim': contactContent,
    '#subeler': branchesContent,
    '#menu': menuContent,
    '#fiyatlar': pricesContent
};

function renderMenuHTML(showPrices) {
    let html = '<div class="grid grid-cols-1 md:grid-cols-2 gap-4">';
    menuItems.forEach(item => {
        html += `
            <div class="flex justify-between items-center p-4 border-b border-brand-brown hover:bg-brand-brown hover:text-brand-cream transition-colors duration-200 rounded-lg">
                <span class="text-lg font-bold">${item.name}</span>
                ${showPrices ? `<span class="text-lg font-bold">${item.price}</span>` : ''}
            </div>
        `;
    });
    html += '</div>';
    return html;
}

function homeContent() {
    return `
        <div class="text-center flex flex-col items-center justify-center min-h-[60vh]">
            <h1 class="text-4xl md:text-5xl lg:text-6xl mb-6 font-heading">Kafe Mola'ya Hoş Geldiniz</h1>
            <p class="text-lg md:text-xl mb-8 max-w-2xl text-center">Günün yorgunluğunu atmak, lezzetli kahvelerimiz ve taze atıştırmalıklarımızla kendinizi şımartmak için doğru yerdesiniz.</p>
            <div class="w-full max-w-2xl overflow-hidden rounded-lg shadow-xl border-4 border-brand-brown">
                <img src="./Images/coffee.jpg" alt="Taze Kahve" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-500">
            </div>
        </div>
    `;
}

function aboutContent() {
    return `
        <div>
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 inline-block">Hakkımızda</h2>
            <p class="text-lg leading-relaxed mb-4">Kafe Mola, kaliteli kahve çekirdeklerini özenle seçerek, ustalıkla hazırlayan ve misafirlerine sıcacık bir ortam sunan modern bir kafedir.</p>
            <p class="text-lg leading-relaxed">Amacımız, sadece bir kahve dükkanı olmak değil, aynı zamanda dostlarınızla keyifli vakit geçirebileceğiniz, çalışırken ilham alabileceğiniz rahat bir yaşam alanı yaratmaktır.</p>
        </div>
    `;
}

function supportContent() {
    return `
        <div>
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 inline-block">Destek</h2>
            <p class="text-lg leading-relaxed mb-4">Müşteri memnuniyeti bizim için önceliktir. Siparişleriniz, ürünlerimiz veya hizmetlerimizle ilgili her türlü soru ve geri bildiriminiz için buradayız.</p>
            <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                <h3 class="text-xl mb-4 font-bold">Sıkça Sorulan Sorular</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Glutensiz ürünleriniz var mı?</li>
                    <li>Rezervasyon yaptırabilir miyiz?</li>
                    <li>Toplu sipariş alıyor musunuz?</li>
                </ul>
            </div>
        </div>
    `;
}

function contactContent() {
    return `
        <div>
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 inline-block">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <p class="text-lg mb-2"><strong>Adres:</strong> Kahve Sokak No: 42, Moda, Kadıköy / İstanbul</p>
                    <p class="text-lg mb-2"><strong>Telefon:</strong> 0 (216) 555 01 23</p>
                    <p class="text-lg mb-2"><strong>E-posta:</strong> merhaba@kafemola.com</p>
                    <p class="text-lg mt-4"><strong>Çalışma Saatleri:</strong></p>
                    <p>Pzt - Cum: 07:30 - 22:00</p>
                    <p>Cts - Paz: 08:30 - 23:00</p>
                </div>
                <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                     <form class="space-y-4">
                        <div>
                            <label class="block mb-1 font-bold">Adınız</label>
                            <input type="text" class="w-full border border-brand-brown rounded p-2 focus:outline-none focus:ring-2 focus:ring-brand-brown" placeholder="Adınız Soyadınız">
                        </div>
                        <div>
                            <label class="block mb-1 font-bold">Mesajınız</label>
                            <textarea class="w-full border border-brand-brown rounded p-2 focus:outline-none focus:ring-2 focus:ring-brand-brown" rows="4" placeholder="Mesajınızı buraya yazın..."></textarea>
                        </div>
                        <button type="button" class="bg-brand-brown text-brand-cream px-6 py-2 rounded hover:bg-[#5D4037] transition-colors">Gönder</button>
                    </form>
                </div>
            </div>
        </div>
    `;
}

function branchesContent() {
    return `
        <div>
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 inline-block">Şube Konumları</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                    <h3 class="text-xl mb-2 font-bold">Moda Merkez</h3>
                    <p class="mb-2">Kahve Sokak No: 42, Moda, Kadıköy</p>
                    <p class="text-sm text-gray-700">Her gün açık</p>
                </div>
                <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                    <h3 class="text-xl mb-2 font-bold">Beşiktaş Çarşı</h3>
                    <p class="mb-2">Ihlamurdere Cad. No: 15, Beşiktaş</p>
                    <p class="text-sm text-gray-700">Pazartesi kapalı</p>
                </div>
                <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                    <h3 class="text-xl mb-2 font-bold">Karaköy Rıhtım</h3>
                    <p class="mb-2">Kemankeş Cad. No: 88, Karaköy</p>
                    <p class="text-sm text-gray-700">Manzaralı teras mevcut</p>
                </div>
            </div>
        </div>
    `;
}

function menuContent() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 text-center">Menü İçerikleri</h2>
            <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                ${renderMenuHTML(false)}
            </div>
        </div>
    `;
}

function pricesContent() {
    return `
        <div class="max-w-3xl mx-auto">
            <h2 class="text-3xl mb-6 border-b-2 border-brand-brown pb-2 text-center">Fiyatlar</h2>
            <div class="bg-white bg-opacity-50 p-6 rounded-lg shadow-md border border-brand-brown">
                 ${renderMenuHTML(true)}
            </div>
        </div>
    `;
}

function router() {
    const contentDiv = document.getElementById('content');
    const hash = window.location.hash;
    const renderFunction = routes[hash] || routes['#home'];
    contentDiv.innerHTML = renderFunction();
    window.scrollTo(0, 0);
}

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function toggleSidebar() {
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    menuBtn.addEventListener('click', toggleSidebar);
    closeBtn.addEventListener('click', toggleSidebar);
    overlay.addEventListener('click', toggleSidebar);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) { // Close sidebar on mobile after clicking a link
                toggleSidebar();
            }
        });
    });

    window.addEventListener('hashchange', router);
    router(); // Initial load
});
