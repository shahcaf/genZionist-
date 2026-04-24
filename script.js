// Content Data
const content = {
    en: {
        heroTitle: "THE FUTURE<br>IS ZIONIST",
        heroSub: "A moral awakening for a generation that refuses to be silent. We are reimagining our identity for the 21st century.",
        btnExplore: "Explore Mission",
        btnDiscord: "Join Community",
        navAbout: "About",
        navCharter: "Charter",
        navUpdates: "Updates",
        footMission: "Mission",
        footDiscord: "Discord",
        footCharter: "The Charter",
        aboutNum: "01. Background",
        aboutTitle: "The Preamble",
        aboutText: "This charter is a bold, unapologetic reimagining of Zionism for our generation, Gen Z, rooted in truth, complexity, and fierce love for the Jewish people and only Jewish state. It balances pride with critique, identity with action, and hope with realism and pragmatism. Refusing both extremism and apathy, it offers a blueprint for a generation that won’t be silent, sidelined, or simplified.",
        charterNum: "02. Declaration",
        charterTitle: "The Charter",
        newsNum: "03. Timeline",
        newsTitle: "Latest Updates",
        langBtn: "HE",
        btnFullCharter: "Read Full Charter",
        articles: [
            { id: 1, title: "Belonging", text: "Zionism is the belief that the Jewish people have a right to exist safely and autonomously in their ancestral homeland. It's about restoration." },
            { id: 2, title: "Our Chapter", text: "We are the present. We reshape Zionism into something real and honest, reflecting our identity in the 21st century." },
            { id: 3, title: "Social Justice", text: "Guided by the ethics of a people who have faced exile. We stand against oppression wherever it occurs." },
            { id: 4, title: "Nuance", text: "We refuse to flatten history. Recognizing complexity makes us more Zionist, not less. We tell the full truth." },
            { id: 5, title: "Herzl's Dream", text: "Protecting Israel as a thriving, pluralistic home. It requires renewed commitment and courage." },
            { id: 6, title: "Pluralism", text: "We integrate the best ideas from all streams. We believe in democratic integrity and constant reflection." },
            { id: 7, title: "Culture", text: "Our food, songs, and rituals keep our spirit alive. A Zionism that ignores culture is shallow and hollow." },
            { id: 8, title: "Future", text: "October 7th was a turning point. We build solidarity and readiness to ensure a secure future for all." },
            { id: 9, title: "Coexistence", text: "We seek a pragmatic peace—two states for two peoples—recognizing the complexity and the cost." },
            { id: 10, title: "Unity", text: "Unity based on shared values. If you believe in the survival of our people, you have a seat at our table." },
            { id: 11, title: "Vision", text: "The status quo is not a strategy. We demand better leadership and real vision, not recycled soundbites." }
        ],
        news: [
            { day: "24", month: "APRIL", title: "Charter Launch", text: "The GenZionist Charter 2025 has been officially released to the public." },
            { day: "20", month: "APRIL", title: "Global Presence", text: "Our community has expanded to over 15 countries within its first month." }
        ]
    },
    he: {
        heroTitle: "העתיד הוא<br>ציוני",
        heroSub: "התעוררות מוסרית לדור שמסרב לשתוק. אנחנו מעצבים מחדש את הזהות שלנו למאה ה-21.",
        btnExplore: "גלו את המשימה",
        btnDiscord: "הצטרפו לקהילה",
        navAbout: "אודות",
        navCharter: "אמנה",
        navUpdates: "עדכונים",
        footMission: "המשימה",
        footDiscord: "דיסקורד",
        footCharter: "האמנה",
        aboutNum: "01. רקע",
        aboutTitle: "הקדמה",
        aboutText: "אמנה זו היא דמיון מחדש נועז ולא מתנצל של הציונות לדור שלנו — דור ה־Z — המושתתת על אמת, מורכבות ואהבה עזה למדינת היהודים היחידה שלנו. היא מאזנת גאווה עם ביקורת, זהות עם פעולה, ותקווה עם ריאליזם ופרגמטיזם. תוך סירוב לקיצוניות ואדישות, היא מציעה מפת דרכים לדור שלא ישתוק.",
        charterNum: "02. הצהרה",
        charterTitle: "האמנה",
        newsNum: "03. ציר זמן",
        newsTitle: "עדכונים אחרונים",
        langBtn: "EN",
        btnFullCharter: "קראו את האמנה המלאה",
        articles: [
            { id: 1, title: "שייכות", text: "הציונות היא האמונה שלעם היהודי יש זכות להתקיים בבטחה ובאופן אוטונומי במולדתו. זהו סיפור של שיקום." },
            { id: 2, title: "הפרק שלנו", text: "אנחנו ההווה. אנחנו מעצבים מחדש את הציונות למשהו אמיתי וכנה, המשקף את זהותנו במאה ה-21." },
            { id: 3, title: "צדק חברתי", text: "מונחים על ידי האתיקה של עם שחווה גלות. אנו עומדים נגד דיכוי בכל מקום שבו הוא מתקיים." },
            { id: 4, title: "מורכבות", text: "אנו מסרבים לשטח את ההיסטוריה. הכרה במורכבות הופכת אותנו ליותר ציונים, לא פחות. אנו אומרים את האמת." },
            { id: 5, title: "החלום של הרצל", text: "הגנה על ישראל כבית פלורליסטי ותוסס. זה דורש מחויבות מחודשת ואומץ מהדור הבא." },
            { id: 6, title: "פלורליזם", text: "אנו משלבים את הרעיונות הטובים מכל הזרמים. אנו מאמינים ביושרה דמוקרטית וחשבון נפש מתמיד." },
            { id: 7, title: "תרבות", text: "האוכל, השירים והטקסים שלנו שומרים על רוחנו חיה. ציונות שמתעלמת מהתרבות היא ריקה וחלולה." },
            { id: 8, title: "עתיד", text: "השביעי באוקטובר היה נקודת מפנה. אנו בונים סולידריות ומוכנות כדי להבטיח עתיד בטוח לכולנו." },
            { id: 9, title: "דו-קיום", text: "אנו שואפים לשלום פרגמטי — שתי מדינות לשני עמים — תוך הכרה במורכבות ובמחיר הכרוך בכך." },
            { id: 10, title: "אחדות", text: "אחדות המבוססת על ערכים משותפים. אם אתם מאמינים בהישרדות עמנו, יש לכם מקום ליד השולחן." },
            { id: 11, title: "חזון", text: "הסטטוס קוו אינו אסטרטגיה. אנו דורשים מנהיגות טובה יותר וחזון אמיתי, לא סיסמאות ממוחזרות." }
        ],
        news: [
            { day: "24", month: "אפריל", title: "השקת האמנה", text: "אמנת ה-GenZionist 2025 שוחררה רשמית לציבור המעוניין בשינוי." },
            { day: "20", month: "אפריל", title: "נוכחות גלובלית", text: "הקהילה שלנו התרחבה ללמעלה מ-15 מדינות כבר בחודש הראשון לפעילותה." }
        ]
    }
};

let currentLang = 'en';

// Initialize Three.js
function initThreeJS() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    const particlesGeometry = new THREE.BufferGeometry();
    const count = 3000;
    const posArray = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 15;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.008,
        color: 0x0084ff,
        transparent: true,
        opacity: 0.2,
        blending: THREE.AdditiveBlending
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const geometry = new THREE.TorusKnotGeometry(2, 0.5, 200, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x0084ff, wireframe: true, transparent: true, opacity: 0.05 });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    camera.position.z = 6;

    let mouseX = 0, mouseY = 0;
    window.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.3;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.3;
    });

    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.0003;
        torusKnot.rotation.y += 0.0005;
        scene.rotation.y += (mouseX - scene.rotation.y) * 0.05;
        scene.rotation.x += (mouseY - scene.rotation.x) * 0.05;
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// Language Toggle Function
function updateLanguage() {
    const langData = content[currentLang];
    document.documentElement.lang = currentLang;
    document.body.dir = currentLang === 'he' ? 'rtl' : 'ltr';

    document.querySelector('.hero-content h1').innerHTML = langData.heroTitle;
    document.querySelector('.hero-content p').textContent = langData.heroSub;
    document.querySelector('.hero-btns .btn-primary').textContent = langData.btnExplore;
    document.querySelector('.btn-discord').textContent = langData.btnDiscord;
    document.getElementById('lang-toggle').textContent = langData.langBtn;
    document.getElementById('charter-link-full').textContent = langData.btnFullCharter;

    const navLinksList = document.querySelectorAll('.nav-links a');
    if (navLinksList.length >= 3) {
        navLinksList[0].textContent = langData.navAbout;
        navLinksList[1].textContent = langData.navCharter;
        navLinksList[2].textContent = langData.navUpdates;
    }

    const footerLinksList = document.querySelectorAll('.social-links a');
    if (footerLinksList.length >= 3) {
        footerLinksList[0].textContent = langData.footMission;
        footerLinksList[1].textContent = langData.footDiscord;
        footerLinksList[2].textContent = langData.footCharter;
    }

    document.querySelector('#about .section-header p').textContent = langData.aboutNum;
    document.querySelector('#about .section-header h2').textContent = langData.aboutTitle;
    document.getElementById('about-text').textContent = langData.aboutText;
    
    document.querySelector('#charter .section-header p').textContent = langData.charterNum;
    document.querySelector('#charter .section-header h2').textContent = langData.charterTitle;
    
    document.querySelector('#news .section-header p').textContent = langData.newsNum;
    document.querySelector('#news .section-header h2').textContent = langData.newsTitle;

    // Articles Bento 2.0
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    langData.articles.forEach((art) => {
        const card = document.createElement('div');
        card.className = 'article-card';
        card.innerHTML = `<h3>${art.title}</h3><p>${art.text}</p><div class="article-num">${art.id < 10 ? '0'+art.id : art.id}</div>`;
        container.appendChild(card);
        gsap.from(card, { scrollTrigger: { trigger: card, start: "top 95%" }, opacity: 0, scale: 0.9, y: 30, duration: 1, ease: "expo.out" });
    });

    // News Timeline 2.0
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    langData.news.forEach(item => {
        const card = document.createElement('div');
        card.className = 'news-card';
        card.innerHTML = `
            <div class="news-date-box">
                <div class="day">${item.day}</div>
                <div class="month">${item.month}</div>
            </div>
            <div class="news-content-box">
                <h3>${item.title}</h3>
                <p>${item.text}</p>
            </div>
        `;
        newsContainer.appendChild(card);
        gsap.from(card, { scrollTrigger: { trigger: card, start: "top 95%" }, opacity: 0, x: -30, duration: 1, ease: "power3.out" });
    });
}

// Mobile Menu Logic
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    
    if (menuBtn && navLinks) {
        const closeMenu = () => {
            navLinks.classList.remove('active');
            menuBtn.classList.remove('open');
        };
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
        document.getElementById('lang-toggle').addEventListener('click', closeMenu);
    }
}

// Start
window.onload = () => {
    initThreeJS();
    updateLanguage();
    initMobileMenu();
    
    gsap.from(".hero-content > *", { y: 100, opacity: 0, stagger: 0.2, duration: 1.5, ease: "expo.out" });
    gsap.from(".navbar", { y: -100, duration: 1.2, ease: "power4.out" });
};

document.getElementById('lang-toggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'he' : 'en';
    updateLanguage();
});
