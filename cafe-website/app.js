const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');
const app = document.getElementById('app');
const sidebarLinks = document.querySelectorAll('.sidebar-link');

function toggleMenu() {
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);
sidebarLinks.forEach(link => link.addEventListener('click', () => {
    // Small delay to allow visual click before closing
    setTimeout(toggleMenu, 150);
}));

const routes = {
    '/': `
        <div class="text-center mt-10 fade-in">
            <h2 class="text-4xl md:text-5xl font-serif font-bold mb-4">Hoş Geldiniz</h2>
            <p class="text-lg md:text-xl font-sans mb-10 max-w-2xl mx-auto opacity-80">Günün her saati taze kahve ve sıcak ortamımızla hizmetinizdeyiz.</p>
            <div class="rounded-xl overflow-hidden shadow-2xl mx-auto max-w-4xl">
                <img src="./Images/coffee.jpg" alt="Kafe Görseli" class="w-full h-auto object-cover max-h-[500px]">
            </div>
        </div>
    `,
    '/hakkinda': `
        <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-900/20 pb-2">Hakkında</h2>
            <p class="text-lg font-sans leading-relaxed">
                Kafemiz, kahve tutkusunu en saf haliyle misafirlerine sunmak amacıyla kurulmuştur. Dünyanın dört bir yanından özenle seçilmiş kahve çekirdeklerini, ustalıkla kavurup, deneyimli baristalarımızın ellerinde birer sanat eserine dönüştürüyoruz.
            </p>
        </div>
    `,
    '/destek': `
         <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-900/20 pb-2">Destek</h2>
            <p class="text-lg font-sans leading-relaxed mb-4">
                Siparişleriniz veya hizmetlerimizle ilgili herhangi bir sorun yaşarsanız, destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
            <p class="font-bold">Sıkça Sorulan Sorular:</p>
            <ul class="list-disc pl-6 mt-2">
                <li>Online sipariş verebilir miyim? (Şu an için sadece gel-al ve paket servisimiz mevcuttur.)</li>
                <li>Vegan seçenekleriniz var mı? (Evet, bitkisel süt alternatiflerimiz bulunmaktadır.)</li>
            </ul>
        </div>
    `,
    '/iletisim': `
         <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-900/20 pb-2">İletişim</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-xl mb-2">Bize Ulaşın</h3>
                    <p class="mb-2"><strong>Telefon:</strong> +90 555 123 45 67</p>
                    <p class="mb-2"><strong>E-posta:</strong> merhaba@kafelogo.com</p>
                    <p><strong>Çalışma Saatleri:</strong> Her gün 08:00 - 22:00</p>
                </div>
            </div>
        </div>
    `,
    '/subeler': `
         <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-900/20 pb-2">Şube Konumları</h2>
            <ul class="space-y-6">
                <li class="bg-white/50 p-6 rounded-lg shadow-sm">
                    <h3 class="font-bold text-xl mb-2 font-serif">Merkez Şube</h3>
                    <p>Kahveciler Cad. No: 1, Kadıköy, İstanbul</p>
                </li>
                <li class="bg-white/50 p-6 rounded-lg shadow-sm">
                    <h3 class="font-bold text-xl mb-2 font-serif">Kuzey Şube</h3>
                    <p>Lezzet Sk. No: 42, Beşiktaş, İstanbul</p>
                </li>
            </ul>
        </div>
    `,
    '/menu': `
         <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-6 border-b-2 border-brown-900/20 pb-2">Menü İçerikleri</h2>
            <p class="text-lg font-sans leading-relaxed mb-6">
                Özenle hazırladığımız yiyecek ve içecek seçeneklerimizle lezzet dolu bir deneyim sizi bekliyor.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 class="font-bold text-2xl mb-4 font-serif">Sıcak İçecekler</h3>
                    <ul class="list-disc pl-6 space-y-2">
                        <li>Espresso</li>
                        <li>Cappuccino</li>
                        <li>Latte</li>
                        <li>Türk Kahvesi</li>
                        <li>Çay</li>
                    </ul>
                </div>
                <div>
                    <h3 class="font-bold text-2xl mb-4 font-serif">Soğuk İçecekler & Yiyecekler</h3>
                    <ul class="list-disc pl-6 space-y-2">
                         <li>Soğuk Kahve</li>
                         <li>Limonata</li>
                         <li>Cheesecake</li>
                         <li>Kruvasan</li>
                         <li>Sandviç</li>
                    </ul>
                </div>
            </div>
        </div>
    `,
    '/fiyatlar': `
         <div class="max-w-3xl mx-auto mt-8 fade-in">
            <h2 class="text-3xl font-serif font-bold mb-8 border-b-2 border-brown-900/20 pb-2">Fiyatlar</h2>
            <div class="bg-white/60 rounded-xl shadow-md p-6 md:p-8">
                <ul class="space-y-4 font-sans text-lg">
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Espresso</span>
                        <span>45₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Cappuccino</span>
                        <span>55₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Latte</span>
                        <span>60₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Türk Kahvesi</span>
                        <span>40₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Çay</span>
                        <span>25₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Cheesecake</span>
                        <span>70₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Kruvasan</span>
                        <span>50₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Sandviç</span>
                        <span>80₺</span>
                    </li>
                    <li class="flex justify-between items-center border-b border-brown-900/10 pb-2">
                        <span class="font-semibold">Soğuk Kahve</span>
                        <span>65₺</span>
                    </li>
                    <li class="flex justify-between items-center pb-2">
                        <span class="font-semibold">Limonata</span>
                        <span>35₺</span>
                    </li>
                </ul>
            </div>
        </div>
    `
};

function renderPage() {
    let path = window.location.hash.slice(1) || '/';

    // Fallback to home if route not found
    if (!routes[path]) {
        path = '/';
    }

    // Add a simple fade out/in effect
    app.style.opacity = 0;

    setTimeout(() => {
        app.innerHTML = routes[path];
        // Trigger reflow
        void app.offsetWidth;
        app.style.transition = 'opacity 0.3s ease-in-out';
        app.style.opacity = 1;
    }, 150);
}

// Initial render
window.addEventListener('hashchange', renderPage);
window.addEventListener('load', renderPage);
