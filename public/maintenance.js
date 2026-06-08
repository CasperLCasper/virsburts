// ============================================ //
// SYSTEM MAINTENANCE CONFIGURATION
// ============================================ //
window.MAINTENANCE_CONFIG = {
  // 🛠️ NOMAINI UZ true, LAI IESLĒGTU APKOPES REŽĪMU // NOMAINI UZ false, LAI IZSLĒGTU APKOPES REŽĪMU
  isMaintenance: true, 
  
  title: '🛠️ TEHNISKĀ APKOPE / MAINTENANCE 🛠️',
  subtitle: 'Lapa uz brīdi nav pieejama. Atvainojamies par sagādātajām neērtībām.'
};

// Ja apkope ir aktīva, uzreiz pārrakstām lapu un bloķējam visu pārējo
if (window.MAINTENANCE_CONFIG.isMaintenance) {
    console.warn("🛠️ Maintenance mode active.");
    
    // Apturam tālāko HTML elementu un skriptu izpildi
    window.stop(); 
    
    // Aizvietojam visu lapas saturu ar glītu paziņojumu
    document.documentElement.innerHTML = `
        <head>
            <title>Maintenance</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                body {
                    margin: 0; padding: 20px; height: 100vh; display: flex; 
                    flex-direction: column; justify-content: center; align-items: center;
                    background-color: #0f0f11; color: #ffffff; font-family: sans-serif; text-align: center;
                }
                h1 { color: #ff3333; font-size: 2.2rem; margin-bottom: 10px; }
                p { color: #aaa; font-size: 1.1rem; max-width: 500px; line-height: 1.5; }
            </style>
        </head>
        <body>
            <h1>${window.MAINTENANCE_CONFIG.title}</h1>
            <p>${window.MAINTENANCE_CONFIG.subtitle}</p>
        </body>
    `;
}
