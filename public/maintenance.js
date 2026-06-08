// ============================================ //
// SYSTEM MAINTENANCE CONFIGURATION
// ============================================ //
window.MAINTENANCE_CONFIG = {
  isMaintenance: true, 
  
  title: 'V I R S B U R T S',
  subtitle: 'UNDER MAINTENANCE',
  description: 'The space is temporarily unavailable due to system optimization. We will be back shortly.'
};

if (window.MAINTENANCE_CONFIG.isMaintenance) {
    window.stop(); // Apturam tālāko ielādi

    // Izveidojam pilnīgi jaunu, tīru pilnekrāna elementu
    var box = document.createElement('div');
    
    // Piespiežam to ieņemt VISU monitoru un centrēt saturu
    box.style.position = 'fixed';
    box.style.top = '0';
    box.style.left = '0';
    box.style.width = '100vw';
    box.style.height = '100vh';
    box.style.backgroundColor = '#0a0a0c';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.zIndex = '9999999';
    box.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    box.style.textAlign = 'center';
    box.style.boxSizing = 'border-box';
    box.style.padding = '24px';

    // Ieliekam iekšā smuko dizainu
    box.innerHTML = `
        <div style="max-width: 480px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 style="font-size: 1.8rem; font-weight: 300; letter-spacing: 0.3em; margin: 0 0 8px 0; color: #ffffff; text-transform: uppercase;">
                ` + window.MAINTENANCE_CONFIG.title + `
            </h1>
            <div style="font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); padding: 4px 12px; border-radius: 4px; color: #a0a0aa; margin-bottom: 24px; text-transform: uppercase;">
                ` + window.MAINTENANCE_CONFIG.subtitle + `
            </div>
            <p style="color: #71717a; font-size: 0.95rem; line-height: 1.6; margin: 0; font-weight: 400;">
                ` + window.MAINTENANCE_CONFIG.description + `
            </p>
        </div>
    `;

    // Ievietojam šo bloku pašā augšā, tiklīdz dokuments sāk eksistēt
    if (document.body) {
        document.body.innerHTML = '';
        document.body.appendChild(box);
    } else {
        document.documentElement.appendChild(box);
    }
}
