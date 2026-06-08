// Gaidām, kad ielādējas DOM, lai veiktu apkopes pārbaudi un inicializāciju
document.addEventListener('DOMContentLoaded', () => {

    // ✅ APCOPES REŽĪMA PĀRBAUDE
    if (window.MAINTENANCE_CONFIG && window.MAINTENANCE_CONFIG.isMaintenance) {
        console.warn("🛠️ System is undergoing maintenance. Main logic halted.");
        
        // 1. Uzreiz novācam ielādes (loading) ekrānu, lai tas nemaisās
        const loading = document.getElementById('loading');
        if (loading) loading.remove();

        // 2. Izveidojam pilnekrāna apkopes bloku, kas pielāgojas tavas lapas krāsām
        const maintenanceOverlay = document.createElement('div');
        maintenanceOverlay.style.position = 'fixed';
        maintenanceOverlay.style.top = '0';
        maintenanceOverlay.style.left = '0';
        maintenanceOverlay.style.width = '100vw';
        maintenanceOverlay.style.height = '100vh';
        maintenanceOverlay.style.backgroundColor = 'var(--bg-color, #000000)'; // Paņem tavu fonu
        maintenanceOverlay.style.color = 'var(--text-color, #ffffff)';       // Paņem tavu teksta krāsu
        maintenanceOverlay.style.display = 'flex';
        maintenanceOverlay.style.flexDirection = 'column';
        maintenanceOverlay.style.justifyContent = 'center';
        maintenanceOverlay.style.alignItems = 'center';
        maintenanceOverlay.style.zIndex = '999999'; // Pa virsu visam
        maintenanceOverlay.style.fontFamily = 'sans-serif';
        maintenanceOverlay.style.textAlign = 'center';
        maintenanceOverlay.style.padding = '20px';

        maintenanceOverlay.innerHTML = `
            <h1 style="color: #ff3333; margin-bottom: 15px; font-size: 2.5rem; letter-spacing: 1px;">
                ${window.MAINTENANCE_CONFIG.title}
            </h1>
            <p style="font-size: 1.2rem; opacity: 0.8; max-width: 600px; line-height: 1.6;">
                ${window.MAINTENANCE_CONFIG.subtitle}
            </p>
        `;

        document.body.appendChild(maintenanceOverlay);
        document.body.style.overflow = 'hidden';
        
        // Apturam tālāko izpildi šajā blokā
        return; 
    }

    // ============================================ //
    // PARASTĀ LAPAS LOĢIKA (Izpildās tikai tad, ja isMaintenance: false)
    // ============================================ //

    document.getElementById('logo').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const showProjectsBtn = document.getElementById('showProjectsBtn');
    const projectsOverlay = document.getElementById('projectsOverlay');
    const projectsModal = document.getElementById('projectsModal');
    const closeModal = document.getElementById('closeModal');
    const projectCards = projectsModal ? projectsModal.querySelectorAll('.project-card') : [];

    if (showProjectsBtn) {
        showProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (projectsOverlay && projectsModal) {
                projectsOverlay.classList.add('show');
                projectsModal.classList.add('show');
                document.body.style.overflow = 'hidden';
                projectCards.forEach((card, i) => { 
                    setTimeout(() => card.classList.add('show'), 100 + i*150); 
                });
            }
        });
    }

    function hideProjectsModal() {
        if (projectsOverlay && projectsModal) {
            projectsOverlay.classList.remove('show');
            projectsModal.classList.remove('show');
            projectCards.forEach(card => card.classList.remove('show'));
            document.body.style.overflow = '';
        }
    }

    if (closeModal) closeModal.addEventListener('click', hideProjectsModal);
    if (projectsOverlay) projectsOverlay.addEventListener('click', hideProjectsModal);
    document.addEventListener('keydown', (e) => { 
        if(e.key==='Escape' && projectsModal && projectsModal.classList.contains('show')) hideProjectsModal(); 
    });

    const infoToggle = document.getElementById('infoToggle');
    const infoOverlay = document.getElementById('infoOverlay');
    const infoModal = document.getElementById('infoModal');
    const closeInfoModal = document.getElementById('closeInfoModal');

    if (infoToggle) {
        infoToggle.addEventListener('click', () => {
            if (infoOverlay && infoModal) {
                infoOverlay.classList.add('show');
                infoModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        });
    }

    function hideInfoModal() {
        if (infoOverlay && infoModal) {
            infoOverlay.classList.remove('show');
            infoModal.classList.remove('show');
            document.body.style.overflow = '';
        }
    }

    if (closeInfoModal) closeInfoModal.addEventListener('click', hideInfoModal);
    if (infoOverlay) infoOverlay.addEventListener('click', hideInfoModal);
    document.addEventListener('keydown', (e) => { 
        if(e.key==='Escape' && infoModal && infoModal.classList.contains('show')) hideInfoModal(); 
    });

    const toggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'light';
    root.setAttribute('data-theme', savedTheme);
    if (toggle) toggle.innerHTML = savedTheme==='dark'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = root.getAttribute('data-theme')==='dark';
            const newTheme = isDark ? 'light':'dark';
            root.setAttribute('data-theme', newTheme);
            toggle.innerHTML = isDark?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';
            localStorage.setItem('theme', newTheme);
        });
    }
});

// Šis paliek ārpusē, jo reaģē uz pilnīgu lapas ielādi (window load)
window.addEventListener('load', () => {
    // Izpildām tikai tad, ja nav apkopes režīms
    if (window.MAINTENANCE_CONFIG && window.MAINTENANCE_CONFIG.isMaintenance) return;

    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 400);
    }
});
