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
    document.documentElement.style.setProperty('background-color', '#0a0a0c', 'important');
    document.documentElement.style.setProperty('background', '#0a0a0c', 'important');

    var box = document.createElement('div');
    box.id = 'maintenance-screen';
    
    box.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        background-color: #0a0a0c !important;
        background: #0a0a0c !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        z-index: 999999999 !important;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif !important;
        text-align: center !important;
        box-sizing: border-box !important;
        padding: 24px !important;
    `;

    box.innerHTML = `
        <div style="max-width: 440px !important; display: flex !important; flex-direction: column !important; align-items: center !important; justify-content: center !important; background: none !important;">
            
            <!-- 1. Virsraksts — tumšāks, piesātināts sarkans -->
            <h1 style="font-size: 1.8rem !important; font-weight: 300 !important; letter-spacing: 0.3em !important; margin: 0 0 16px 0 !important; color: #e13c3c !important; text-transform: uppercase !important; font-family: 'Manrope', sans-serif !important; opacity: 1 !important; visibility: visible !important;">
                ` + window.MAINTENANCE_CONFIG.title + `
            </h1>
            
            <!-- 2. Statuss — spilgts, degoši sarkans -->
            <div style="font-size: 0.9rem !important; font-weight: 600 !important; letter-spacing: 0.25em !important; color: #ff3b3b !important; margin-bottom: 16px !important; text-transform: uppercase !important; opacity: 1 !important; visibility: visible !important;">
                ` + window.MAINTENANCE_CONFIG.subtitle + `
            </div>
            
            <!-- 3. Apraksts — skaidri saskatāms, gaiši sārts/sarkans -->
            <p style="color: #ff9999 !important; font-size: 0.95rem !important; line-height: 1.6 !important; margin: 0 !important; font-weight: 400 !important; letter-spacing: 0.01em !important; opacity: 1 !important; visibility: visible !important;">
                ` + window.MAINTENANCE_CONFIG.description + `
            </p>
            
        </div>
    `;

    var checkBody = setInterval(function() {
        if (document.body) {
            clearInterval(checkBody);
            document.body.innerHTML = '';
            document.body.appendChild(box);
            
            document.body.style.setProperty('overflow', 'hidden', 'important');
            document.body.style.setProperty('background', '#0a0a0c', 'important');
            document.body.style.setProperty('background-color', '#0a0a0c', 'important');
        }
    }, 1);
}
