// ============================================ //
// SYSTEM MAINTENANCE CONFIGURATION
// ============================================ //
window.MAINTENANCE_CONFIG = {
  // 🛠️ SET TO true TO TURN ON MAINTENANCE MODE
  isMaintenance: true, 
  
  title: 'V I R S B U R T S',
  subtitle: 'UNDER MAINTENANCE',
  description: 'The space is temporarily unavailable due to system optimization. We will be back shortly.'
};

// If maintenance is active, halt loading and render the clean interface
if (window.MAINTENANCE_CONFIG.isMaintenance) {
    window.stop(); 
    
    // Sagatavojam tekstus pirms ielikšanas HTML, lai izvairītos ar gļukiem ar backtick zīmēm
    var mTitle = window.MAINTENANCE_CONFIG.title;
    var mSubtitle = window.MAINTENANCE_CONFIG.subtitle;
    var mDesc = window.MAINTENANCE_CONFIG.description;

    document.documentElement.innerHTML = `
        <head>
            <title>` + mTitle + ` — Maintenance</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * { box-sizing: border-box; }
                body {
                    margin: 0; padding: 24px; height: 100vh; width: 100vw;
                    display: flex; justify-content: center; align-items: center;
                    background-color: #0a0a0c; color: #ffffff; 
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; 
                    text-align: center; overflow: hidden;
                }
                .container { max-width: 480px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
                h1 { font-size: 1.8rem; font-weight: 300; letter-spacing: 0.3em; margin: 0 0 8px 0; color: #ffffff; text-transform: uppercase; }
                .badge { font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); padding: 4px 12px; border-radius: 4px; color: #a0a0aa; margin-bottom: 24px; text-transform: uppercase; }
                p { color: #71717a; font-size: 0.95rem; line-height: 1.6; margin: 0; font-weight: 400; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>` + mTitle + `</h1>
                <div class="badge">` + mSubtitle + `</div>
                <p>` + mDesc + `</p>
            </div>
        </body>
    `;
}
