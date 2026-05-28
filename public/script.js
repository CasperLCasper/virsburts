// Loading
window.addEventListener('load', () => {
    const loading = document.getElementById('loading');
    loading.style.opacity = '0';
    setTimeout(() => loading.remove(), 400);
});

// Scroll top on logo click
document.getElementById('logo').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Horizons modal
const showProjectsBtn = document.getElementById('showProjectsBtn');
const projectsOverlay = document.getElementById('projectsOverlay');
const projectsModal = document.getElementById('projectsModal');
const closeModal = document.getElementById('closeModal');
const projectCards = projectsModal.querySelectorAll('.project-card');

showProjectsBtn.addEventListener('click', (e) => {
    e.preventDefault();
    projectsOverlay.classList.add('show');
    projectsModal.classList.add('show');
    document.body.style.overflow = 'hidden';
    projectCards.forEach((card, i) => { setTimeout(() => card.classList.add('show'), 100 + i*150); });
});
function hideProjectsModal() {
    projectsOverlay.classList.remove('show');
    projectsModal.classList.remove('show');
    projectCards.forEach(card => card.classList.remove('show'));
    document.body.style.overflow = '';
}
closeModal.addEventListener('click', hideProjectsModal);
projectsOverlay.addEventListener('click', hideProjectsModal);
document.addEventListener('keydown', (e) => { if(e.key==='Escape' && projectsModal.classList.contains('show')) hideProjectsModal(); });

// Info modal
const infoToggle = document.getElementById('infoToggle');
const infoOverlay = document.getElementById('infoOverlay');
const infoModal = document.getElementById('infoModal');
const closeInfoModal = document.getElementById('closeInfoModal');

infoToggle.addEventListener('click', () => {
    infoOverlay.classList.add('show');
    infoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});
function hideInfoModal() {
    infoOverlay.classList.remove('show');
    infoModal.classList.remove('show');
    document.body.style.overflow = '';
}
closeInfoModal.addEventListener('click', hideInfoModal);
infoOverlay.addEventListener('click', hideInfoModal);
document.addEventListener('keydown', (e) => { if(e.key==='Escape' && infoModal.classList.contains('show')) hideInfoModal(); });

// Theme toggle
const toggle = document.getElementById('themeToggle');
const root = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'light';
root.setAttribute('data-theme', savedTheme);
toggle.innerHTML = savedTheme==='dark'?'<i class="fas fa-sun"></i>':'<i class="fas fa-moon"></i>';
toggle.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme')==='dark';
    const newTheme = isDark ? 'light':'dark';
    root.setAttribute('data-theme', newTheme);
    toggle.innerHTML = isDark?'<i class="fas fa-moon"></i>':'<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', newTheme);
});
