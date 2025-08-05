function detectBrowser() {
  const ua = navigator.userAgent;

  const browsers = [
    { name: 'Edge', check: () => ua.includes("Edg") },
    { name: 'Opera', check: () => ua.includes("OPR") || ua.includes("Opera") } ,  // Legacy and New Opera
    { name: 'Vivaldi', check: () => ua.includes("Vivaldi") },
    { name: 'Waterfox', check: () => ua.includes("Waterfox") },
    { name: 'Brave', check: () => ua.includes("Brave") || navigator.brave && typeof navigator.brave.isBrave === 'function' && navigator.brave.isBrave() },
    { name: 'Firefox', check: () => ua.includes("Firefox/") }, 
    { name: 'Safari', check: () => ua.includes("Safari") && !ua.includes("Chrome") && !ua.includes("Chromium") },
    { name: 'Chrome', check: () => ua.includes("Chrome") && ua.includes("Safari") && !ua.includes("Edg") && !ua.includes("OPR") && !ua.includes("Vivaldi") },
    { name: 'Arc', check: () => ua.includes("Arc") },
    { name: 'DuckDuckGo', check: () => ua.includes("DuckDuckGo") },
    { name: 'Samsung Internet', check: () => ua.includes("SamsungBrowser") },
    { name: 'PaleMoon', check: () => ua.includes("PaleMoon") && ua.includes("Goanna") },
    { name: 'Falkon', check: () => ua.includes("Falkon") },
    { name: 'Otter', check: () => ua.includes("Otter") },
    { name: 'SRWare Iron', check: () => ua.includes("SRWare Iron") },
    { name: 'Lunascape', check: () => ua.includes("Lunascape")},
    { name: 'Basilisk', check: () => ua.includes("Basilisk")},
    { name: 'UCBrowser', check: () => ua.includes("UCBrowser")},
    { name: 'Iridium Browser', check: () => ua.includes("Iridium")},
    { name: 'Selenium', check: () => navigator.webdriver }, // Selenium webdriver protocol
    { name: 'Puppeteer', check: () => navigator.webdriver === undefined && navigator.plugins.length === 0 && navigator.languages.length === 0  && window.chrome && !window.chrome.runtime}, // Puppeteer has no plugins, languages are empty
    //Add extra browsers here:
    
    //Less Reliable Detection:
    { name: 'Librefox', check: () => !navigator.doNotTrack && !navigator.brave && ua.includes("Firefox") && typeof window.sidebar === 'undefined'}, // DonotTrack is removed + Uses Firefox
    { name: 'Ungoogled', check: () => !navigator.doNotTrack && ua.includes("Chrome") && !ua.includes("Google") && !window.chrome?.runtime && !navigator.brave && !ua.includes("Vivaldi") && !ua.includes("Edge") && !ua.includes("Opera") }, // DonotTrack is removed + Uses Chromium
    { name: 'Unknown', check: () => true }
  ];

  for (const browser of browsers) {
    if (browser.check()) return browser.name;
  }
}
const browser = detectBrowser();
console.log("Browser:", browser); 
document.getElementById('browser-info').textContent = browser;
