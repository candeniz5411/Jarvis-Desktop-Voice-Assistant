const CAFE_ITEMS = [
    { id: 1, name: "Espresso", price: "45₺", category: "coffee" },
    { id: 2, name: "Cappuccino", price: "55₺", category: "coffee" },
    { id: 3, name: "Latte", price: "60₺", category: "coffee" },
    { id: 4, name: "Türk Kahvesi", price: "40₺", category: "coffee" },
    { id: 5, name: "Çay", price: "25₺", category: "tea" },
    { id: 6, name: "Cheesecake", price: "70₺", category: "dessert" },
    { id: 7, name: "Kruvasan", price: "50₺", category: "pastry" },
    { id: 8, name: "Sandviç", price: "80₺", category: "food" },
    { id: 9, name: "Soğuk Kahve", price: "65₺", category: "cold-drink" },
    { id: 10, name: "Limonata", price: "35₺", category: "cold-drink" }
];

const LOCATIONS = [
    { city: "İstanbul", address: "Kadıköy Merkez Şubesi, Moda Cd. No: 12", hours: "08:00 - 23:00" },
    { city: "Ankara", address: "Tunalı Hilmi Şubesi, Kavaklıdere, No: 45", hours: "08:00 - 22:00" },
    { city: "İzmir", address: "Alsancak Şubesi, Kıbrıs Şehitleri Cd. No: 88", hours: "08:30 - 23:30" },
];

class Router {
    constructor() {
        this.appElement = document.getElementById('app');
        this.routes = {
            '': this.renderHome.bind(this),
            '#anasayfa': this.renderHome.bind(this),
            '#hakkinda': this.renderAbout.bind(this),
            '#destek': this.renderSupport.bind(this),
            '#iletisim': this.renderContact.bind(this),
            '#sube-konumlari': this.renderLocations.bind(this),
            '#menu-icerikleri': this.renderMenuContent.bind(this),
            '#fiyatlar': this.renderPrices.bind(this)
        };

        window.addEventListener('hashchange', () => this.handleRoute());
        this.handleRoute(); // initial render
    }

    handleRoute() {
        const hash = window.location.hash || '#anasayfa';
        const route = this.routes[hash] || this.renderHome.bind(this);
        route();
        window.scrollTo(0, 0); // scroll to top on route change

        // Ensure sidebar is closed when route changes on mobile
        if(window.innerWidth < 1024 && !document.getElementById('sidebar').classList.contains('-translate-x-full')) {
           toggleSidebar();
        }
    }

    renderHome() {
        this.appElement.innerHTML = `
            <div class="animate-fade-in flex flex-col items-center justify-center text-center space-y-8 py-12">
                <h1 class="text-4xl md:text-6xl font-serif font-bold text-brand-dark mb-4 drop-shadow-sm">Hoş Geldiniz</h1>
                <p class="text-xl md:text-2xl font-light text-brand-dark/80 max-w-2xl leading-relaxed">Kahve Dükkanı'na adım atın. En taze çekirdeklerle hazırlanan enfes kahvelerimiz ve sıcak atmosferimiz sizi bekliyor.</p>
                <div class="relative w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl mt-8">
                   <div class="aspect-[16/9] w-full bg-brand-dark/20 animate-pulse absolute inset-0 z-0"></div>
                   <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200&h=800"
                        alt="Kafemizin sıcak atmosferi ve taze demlenmiş kahve"
                        class="w-full h-full object-cover relative z-10 hover:scale-105 transition-transform duration-700 ease-in-out"
                        loading="lazy"
                    />
                </div>
                <div class="flex gap-4 mt-8">
                     <a href="#menu-icerikleri" class="bg-brand-dark text-brand-light px-8 py-3 rounded-full font-bold hover:bg-brand-accent transition-colors shadow-lg">Menüyü İncele</a>
                     <a href="#iletisim" class="border-2 border-brand-dark text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-brand-dark hover:text-brand-light transition-colors shadow-lg">Bize Ulaşın</a>
                </div>
            </div>
        `;
    }

    renderAbout() {
        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">Hakkımızda</h1>
                <div class="prose prose-lg text-brand-dark/80 max-w-none space-y-6">
                    <p class="leading-relaxed">Kahve Dükkanı olarak 2010 yılından bu yana kaliteli kahve çekirdeklerini en iyi şekilde işleyerek sizlere sunuyoruz. Amacımız sadece kahve satmak değil, aynı zamanda dostlukların pekiştiği, güzel anıların biriktiği sıcak bir mekan yaratmak.</p>
                    <p class="leading-relaxed">Dünyanın farklı bölgelerinden özenle seçtiğimiz kahve çekirdeklerini kendi kavurma tesisimizde işliyor, baristalarımızın usta ellerinden size ulaştırıyoruz.</p>
                    <p class="leading-relaxed font-serif italic text-xl mt-8 pl-4 border-l-4 border-brand-accent text-brand-dark">"İyi kahve, iyi bir sohbetin başlangıcıdır."</p>
                </div>
            </div>
        `;
    }

    renderSupport() {
        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">Destek & SSS</h1>
                <div class="space-y-6">
                    <div class="bg-brand-light/50 p-6 rounded-xl border border-brand-dark/10">
                        <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
                           <svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           Siparişimi nasıl iptal edebilirim?
                        </h3>
                        <p class="text-brand-dark/80">Siparişinizi verdikten sonra ilk 5 dakika içerisinde iletişim numaramızdan bizi arayarak iptal edebilirsiniz.</p>
                    </div>
                    <div class="bg-brand-light/50 p-6 rounded-xl border border-brand-dark/10">
                        <h3 class="font-bold text-lg mb-2 flex items-center gap-2">
                           <svg class="w-5 h-5 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                           Vegan / Glütensiz seçenekleriniz var mı?
                        </h3>
                        <p class="text-brand-dark/80">Evet, bitkisel süt seçeneklerimiz (badem, yulaf, soya) ve sınırlı sayıda glütensiz atıştırmalıklarımız mevcuttur. Detaylı bilgi için baristalarımıza danışabilirsiniz.</p>
                    </div>
                    <div class="mt-8 p-6 bg-brand-dark text-brand-light rounded-xl text-center">
                        <p class="mb-4">Daha fazla yardıma mı ihtiyacınız var?</p>
                        <a href="#iletisim" class="inline-block bg-brand-light text-brand-dark px-6 py-2 rounded-full font-bold hover:bg-brand-accent hover:text-brand-light transition-colors">Bize Ulaşın</a>
                    </div>
                </div>
            </div>
        `;
    }

    renderContact() {
        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">İletişim</h1>
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 class="text-xl font-bold mb-4">Bize Ulaşın</h2>
                        <form class="space-y-4" onsubmit="event.preventDefault(); alert('Mesajınız gönderildi!');">
                            <div>
                                <label class="block text-sm font-medium mb-1" for="name">İsim Soyisim</label>
                                <input type="text" id="name" required class="w-full px-4 py-2 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="email">E-posta Adresi</label>
                                <input type="email" id="email" required class="w-full px-4 py-2 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="message">Mesajınız</label>
                                <textarea id="message" rows="4" required class="w-full px-4 py-2 border border-brand-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"></textarea>
                            </div>
                            <button type="submit" class="bg-brand-dark text-brand-light px-6 py-3 rounded-lg font-bold hover:bg-brand-accent transition-colors w-full">Gönder</button>
                        </form>
                    </div>
                    <div class="space-y-6 flex flex-col justify-center">
                        <div class="flex items-start gap-4">
                            <div class="bg-brand-light p-3 rounded-full text-brand-dark">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Telefon</h3>
                                <p class="text-brand-dark/80">+90 (216) 123 45 67</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-brand-light p-3 rounded-full text-brand-dark">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">E-posta</h3>
                                <p class="text-brand-dark/80">merhaba@kahvedukkani.com</p>
                            </div>
                        </div>
                         <div class="flex items-start gap-4">
                            <div class="bg-brand-light p-3 rounded-full text-brand-dark">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </div>
                            <div>
                                <h3 class="font-bold text-lg">Çalışma Saatleri</h3>
                                <p class="text-brand-dark/80">Hafta İçi: 08:00 - 23:00<br>Hafta Sonu: 09:00 - 00:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    renderLocations() {
        const locationsHtml = LOCATIONS.map(loc => `
            <div class="bg-brand-light/40 p-6 rounded-xl border border-brand-dark/10 hover:shadow-md transition-shadow">
                <div class="flex items-center gap-3 mb-3 text-brand-dark">
                     <svg class="w-6 h-6 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                     <h2 class="text-xl font-bold font-serif">${loc.city} Şubesi</h2>
                </div>
                <p class="text-brand-dark/80 mb-2 pl-9">${loc.address}</p>
                <div class="flex items-center gap-2 pl-9 mt-4 text-sm font-medium">
                     <svg class="w-4 h-4 text-brand-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     <span>Çalışma Saatleri: ${loc.hours}</span>
                </div>
            </div>
        `).join('');

        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">Şube Konumları</h1>
                <p class="mb-8 text-lg text-brand-dark/80">Size en yakın Kahve Dükkanı şubesini bulun ve misafirimiz olun.</p>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    ${locationsHtml}
                </div>
            </div>
        `;
    }

    renderMenuContent() {
        const categories = {
            'Sıcak İçecekler': CAFE_ITEMS.filter(i => i.category === 'coffee' || i.category === 'tea'),
            'Soğuk İçecekler': CAFE_ITEMS.filter(i => i.category === 'cold-drink'),
            'Yiyecek & Tatlılar': CAFE_ITEMS.filter(i => i.category === 'dessert' || i.category === 'pastry' || i.category === 'food')
        };

        let menuHtml = '';
        for (const [categoryName, items] of Object.entries(categories)) {
            const itemsHtml = items.map(item => `
                <div class="flex justify-between items-center p-4 bg-brand-light/30 rounded-lg hover:bg-brand-light/60 transition-colors border border-brand-dark/5">
                    <span class="font-medium text-lg">${item.name}</span>
                    <span class="font-bold text-brand-accent">${item.price}</span>
                </div>
            `).join('');

            menuHtml += `
                <div class="mb-8">
                    <h2 class="text-2xl font-serif font-bold text-brand-dark mb-4 border-b border-brand-dark/10 pb-2">${categoryName}</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                        ${itemsHtml}
                    </div>
                </div>
            `;
        }

        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">Menü İçerikleri</h1>
                <p class="mb-8 text-lg text-brand-dark/80">Özenle hazırladığımız lezzetleri keşfedin.</p>
                ${menuHtml}
            </div>
        `;
    }

    renderPrices() {
        // Similar to menu content but strictly focused on pricing layout
        const itemsHtml = CAFE_ITEMS.map(item => `
            <tr class="border-b border-brand-dark/10 hover:bg-brand-light/30 transition-colors">
                <td class="py-4 px-6 font-medium">${item.name}</td>
                <td class="py-4 px-6 text-right font-bold text-brand-accent">${item.price}</td>
            </tr>
        `).join('');

        this.appElement.innerHTML = `
            <div class="animate-fade-in bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-brand-dark/5">
                <h1 class="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6 border-b-2 border-brand-accent pb-4">Fiyatlar</h1>
                <p class="mb-8 text-lg text-brand-dark/80">Tüm ürünlerimizin güncel fiyat listesi aşağıda yer almaktadır.</p>
                <div class="overflow-x-auto rounded-xl border border-brand-dark/10 shadow-sm">
                    <table class="w-full text-left border-collapse">
                        <thead>
                            <tr class="bg-brand-dark text-brand-light">
                                <th class="py-4 px-6 font-serif text-lg">Ürün</th>
                                <th class="py-4 px-6 font-serif text-lg text-right">Fiyat (₺)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${itemsHtml}
                        </tbody>
                    </table>
                </div>
                <p class="mt-4 text-sm text-brand-dark/60 italic text-right">* Fiyatlarımıza KDV dahildir.</p>
            </div>
        `;
    }
}

// Sidebar Logic
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu-btn');
const sidebarLinks = sidebar.querySelectorAll('a');

function toggleSidebar() {
    const isClosed = sidebar.classList.contains('-translate-x-full');

    if (isClosed) {
        // Open sidebar
        sidebar.classList.remove('-translate-x-full');
        sidebarOverlay.classList.remove('hidden');
        // small delay to allow display block to apply before opacity transition
        setTimeout(() => {
            sidebarOverlay.classList.remove('opacity-0');
            sidebarOverlay.classList.add('opacity-100');
        }, 10);
    } else {
        // Close sidebar
        sidebar.classList.add('-translate-x-full');
        sidebarOverlay.classList.remove('opacity-100');
        sidebarOverlay.classList.add('opacity-0');
        // wait for transition to finish before hiding
        setTimeout(() => {
            sidebarOverlay.classList.add('hidden');
        }, 300);
    }
}

// Event Listeners for Sidebar
menuBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);
sidebarOverlay.addEventListener('click', toggleSidebar);

// Close sidebar when a link is clicked (especially useful on mobile)
sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (!sidebar.classList.contains('-translate-x-full')) {
            toggleSidebar();
        }
    });
});


// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    new Router();
});
