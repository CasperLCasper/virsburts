// ============================================ //
// SYSTEM MAINTENANCE CONFIGURATION
// ============================================ //
window.MAINTENANCE_CONFIG = {
  isMaintenance: false, 
  
  title: 'V I R S B U R T S',
  subtitle: 'UNDER MAINTENANCE',
  description: 'The space is temporarily unavailable due to system optimization. We will be back shortly.'
};

if (window.MAINTENANCE_CONFIG.isMaintenance) {
    document.documentElement.style.backgroundColor = '#0a0a0c';

    var box = document.createElement('div');
    box.id = 'maintenance-screen';
    box.style.position = 'fixed';
    box.style.top = '0';
    box.style.left = '0';
    box.style.width = '100vw';
    box.style.height = '100vh';
    box.style.backgroundColor = '#0a0a0c';
    box.style.display = 'flex';
    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';
    box.style.zIndex = '999999999';
    box.style.fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
    box.style.textAlign = 'center';
    box.style.boxSizing = 'border-box';
    box.style.padding = '24px';

    box.innerHTML = `
        <div style="max-width: 440px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
            <h1 style="font-size: 1.8rem; font-weight: 300; letter-spacing: 0.3em; margin: 0 0 16px 0; color: #ffffff; text-transform: uppercase;">
                ` + window.MAINTENANCE_CONFIG.title + `
            </h1>
            
            <div style="font-size: 0.85rem; font-weight: 600; letter-spacing: 0.25em; color: #e13c3c; margin-bottom: 16px; text-transform: uppercase;">
                ` + window.MAINTENANCE_CONFIG.subtitle + `
            </div>
            
            <p style="color: #a38f8f; font-size: 0.95rem; line-height: 1.6; margin: 0; font-weight: 400; letter-spacing: 0.01em;">
                ` + window.MAINTENANCE_CONFIG.description + `
            </p>
        </div>
    `;

    var checkBody = setInterval(function() {
        if (document.body) {
            clearInterval(checkBody);
            document.body.innerHTML = '';
            document.body.appendChild(box);
            document.body.style.overflow = 'hidden';
            document.body.style.backgroundColor = '#0a0a0c';
        }
    }, 1);
}
