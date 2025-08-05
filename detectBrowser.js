function detectBrowser() {
  const ua = navigator.userAgent;

  const browsers = [
    { name: 'Edge', check: () => ua.includes("Edg") },
    { name: 'Opera', check: () => ua.includes("OPR") || ua.includes("Opera") } ,  // Legacy and New Opera
    { name: 'Vivaldi', check: () => ua.includes("Vivaldi") },
    { name: 'Waterfox', check: () => ua.includes("Waterfox") },
    { name: 'Brave', check: () => ua.includes("Brave") || navigator.brave && typeof navigator.brave.isBrave === 'function' && navigator.brave.isBrave() },
    { name: 'Ungoogled', check: () => !navigator.doNotTrack && !navigator.brave && ua.includes("Chrome") }, // DonotTrack is removed + Uses Chromium
    { name: 'Librefox', check: () => !navigator.doNotTrack && !navigator.brave && ua.includes("Firefox") }, // DonotTrack is removed + Uses Firefox
    { name: 'Firefox', check: () => ua.includes("Firefox/") }, 
    { name: 'Safari', check: () => ua.includes("Safari") && !ua.includes("Chrome") && !ua.includes("Chromium") },
    { name: 'Chrome', check: () => ua.includes("Chrome") && ua.includes("Safari") && !ua.includes("Edg") && !ua.includes("OPR") && !ua.includes("Vivaldi") },
    { name: 'Selenium', check: () => navigator.webdriver }, // Selenium webdriver protocol
    { name: 'Puppeteer', check: () => navigator.webdriver === undefined && navigator.plugins.length === 0 && navigator.languages.length === 0  && window.chrome && !window.chrome.runtime}, // Puppeteer has no plugins, languages are empty
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
    //Add extra browsers here:
    { name: 'Unknown', check: () => true }
  ];

  for (const browser of browsers) {
    if (browser.check()) return browser.name;
  }
}
const browser = detectBrowser();
console.log("Browser:", browser); 
document.getElementById('browser-info').textContent = browser;
