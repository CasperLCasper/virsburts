document.addEventListener('DOMContentLoaded', () => {
    // DOM Elementi
    const themeToggle = document.getElementById('themeToggle');
    const logo = document.getElementById('logo');
    const loading = document.getElementById('loading');
    
    const showProjectsBtn = document.getElementById('showProjectsBtn');
    const projectsOverlay = document.getElementById('projectsOverlay');
    const projectsModal = document.getElementById('projectsModal');
    const closeModal = document.getElementById('closeModal');
    
    const infoToggle = document.getElementById('infoToggle');
    const infoOverlay = document.getElementById('infoOverlay');
    const infoModal = document.getElementById('infoModal');
    const closeInfoModal = document.getElementById('closeInfoModal');
    
    const cards = document.querySelectorAll('.project-card');

    // 1. Ielādes ekrāna noņemšana
    window.addEventListener('load', () => {
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(() => loading.style.display = 'none', 400);
        }
    });

    // Rezerves variants, ja 'load' notikums kavējas
    setTimeout(() => {
        if (loading && loading.style.display !== 'none') {
            loading.style.opacity = '0';
            setTimeout(() => loading.style.display = 'none', 400);
        }
    }, 2000);

    // 2. Logo vadības funkcija (CSP droša)
    function updateLogo(isDark) {
        if (logo) {
            logo.src = isDark ? 'virsburts-balts.png' : 'virsburts-melns.png';
        }
    }

    // 3. Tēmas inicializācija (no localStorage)
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        updateLogo(true);
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        updateLogo(false);
    }

    // 4. Tēmas pārslēgšanas notikums
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            if (isDark) {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
                updateLogo(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
                updateLogo(true);
            }
        });
    }

    // 5. Modālo logu atvēršanas/aizvēršanas loģika
    function openModal(modal, overlay) {
        if (!modal || !overlay) return;
        overlay.classList.add('show');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Ja tas ir projektu modālais logs, parādām kārtis ar animāciju
        if (modal.id === 'projectsModal') {
            cards.forEach((card, index) => {
                setTimeout(() => card.classList.add('show'), index * 100);
            });
        }
    }

    function closeModalWindow(modal, overlay) {
        if (!modal || !overlay) return;
        modal.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';

        if (modal.id === 'projectsModal') {
            cards.forEach(card => card.classList.remove('show'));
        }
    }

    // Projektu modālais logs
    if (showProjectsBtn) {
        showProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(projectsModal, projectsOverlay);
        });
    }
    if (closeModal) closeModal.addEventListener('click', () => closeModalWindow(projectsModal, projectsOverlay));
    if (projectsOverlay) projectsOverlay.addEventListener('click', () => closeModalWindow(projectsModal, projectsOverlay));

    // Info modālais logs
    if (infoToggle) {
        infoToggle.addEventListener('click', () => openModal(infoModal, infoOverlay));
    }
    if (closeInfoModal) closeInfoModal.addEventListener('click', () => closeModalWindow(infoModal, infoOverlay));
    if (infoOverlay) infoOverlay.addEventListener('click', () => closeModalWindow(infoModal, infoOverlay));

    // ESC taustiņš logu aizvēršanai
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModalWindow(projectsModal, projectsOverlay);
            closeModalWindow(infoModal, infoOverlay);
        }
    });
});
