// Lapas ielādes animācijas noņemšana
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.style.opacity = '0';
        setTimeout(() => loading.remove(), 400);
    }
});

// Plūstoša ritināšana uz augšu, uzklikšķinot uz logo
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ==========================================================================
   MODĀLO LOGU LOĢIKA (DRY - Optimizēta versija abiem logiem)
   ========================================================================== */
const openModalButtons = document.querySelectorAll('.open-modal-btn');
const closeButtons = document.querySelectorAll('.close-modal');
const overlays = document.querySelectorAll('.projects-overlay');

// Funkcija, kas atver konkrētu modālo logu
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    // Atrodam overlay, kas atrodas blakus šim modālim HTML struktūrā
    const overlay = modal.previousElementSibling;
    if (overlay && overlay.classList.contains('projects-overlay')) {
        overlay.classList.add('show');
    }

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Kartīšu kaskādes animācija (strādā abos modāļos, ja tur ir kartītes)
    const projectCards = modal.querySelectorAll('.project-card');
    projectCards.forEach((card, i) => { 
        setTimeout(() => card.classList.add('show'), 100 + i * 150); 
    });
}

// Funkcija, kas aizver visus aktīvos modālos logus
function hideAllModals() {
    document.querySelectorAll('.projects-modal.show, .projects-overlay.show').forEach(el => el.classList.remove('show'));
    document.querySelectorAll('.project-card.show').forEach(card => card.classList.remove('show'));
    document.body.style.overflow = '';
}

// Event Listeners modālo logu atvēršanai
openModalButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetModalId = btn.getAttribute('data-modal');
        openModal(targetModalId);
    });
});

// Event Listeners aizvēršanai (X pogas un klikšķis uz aptumšotā fona)
closeButtons.forEach(btn => btn.addEventListener('click', hideAllModals));
overlays.forEach(overlay => overlay.addEventListener('click', hideAllModals));

// Aizvēršana ar 'Escape' taustiņu
document.addEventListener('keydown', (e) => { 
    if (e.key === 'Escape') hideAllModals(); 
});

/* ==========================================================================
   DIZANA TĒMAS PĀRSLĒGŠANA (Light / Dark)
   ========================================================================== */
const themeToggleBtn = document.getElementById('themeToggle');
const rootElement = document.documentElement;

// Uzstādām pareizo ikonu pogai jau ielādes brīdī, balstoties uz inline skripta datiem
const activeTheme = rootElement.getAttribute('data-theme') || 'light';
themeToggleBtn.innerHTML = activeTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

// Klikšķa notikums tēmas maiņai
themeToggleBtn.addEventListener('click', () => {
    const isCurrentlyDark = rootElement.getAttribute('data-theme') === 'dark';
    const nextTheme = isCurrentlyDark ? 'light' : 'dark';
    
    rootElement.setAttribute('data-theme', nextTheme);
    themeToggleBtn.innerHTML = isCurrentlyDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', nextTheme);
});
