function detectBrowser() {
  const ua = navigator.userAgent.toLowerCase();

  const browsers = [
    { name: 'Edge', check: () => ua.includes("edg") },
    { name: 'Opera', check: () => ua.includes("oPR") || ua.includes("Opera") } ,  // Legacy and New Opera
    { name: 'Vivaldi', check: () => ua.includes("vivaldi") },
    { name: 'Waterfox', check: () => ua.includes("waterfox") },
    { name: 'Brave', check: () => ua.includes("brave") || navigator.brave && typeof navigator.brave.isBrave === 'function' && navigator.brave.isBrave() },
    { name: 'Firefox', check: () => ua.includes("firefox/") }, 
    { name: 'Safari', check: () => ua.includes("safari") && !ua.includes("Chrome") && !ua.includes("Chromium") },
    { name: 'Chrome', check: () => ua.includes("chrome") && ua.includes("Safari") && !ua.includes("Edg") && !ua.includes("OPR") && !ua.includes("Vivaldi") },
    { name: 'Arc', check: () => ua.includes("arc") },
    { name: 'DuckDuckGo', check: () => ua.includes("duckDuckGo") },
    { name: 'Samsung Internet', check: () => ua.includes("samsungBrowser") },
    { name: 'PaleMoon', check: () => ua.includes("paleMoon") && ua.includes("goanna") },
    { name: 'Falkon', check: () => ua.includes("falkon") },
    { name: 'Otter', check: () => ua.includes("otter") },
    { name: 'SRWare Iron', check: () => ua.includes("srware iron") },
    { name: 'Lunascape', check: () => ua.includes("lunascape")},
    { name: 'Basilisk', check: () => ua.includes("basilisk")},
    { name: 'UCBrowser', check: () => ua.includes("ucbrowser")},
    { name: 'Iridium Browser', check: () => ua.includes("iridium")},
    { name: 'Selenium', check: () => navigator.webdriver }, // Selenium webdriver protocol
    { name: 'Puppeteer', check: () => navigator.webdriver === undefined && navigator.plugins.length === 0 && navigator.languages.length === 0  && window.chrome && !window.chrome.runtime}, // Puppeteer has no plugins, languages are empty
    //Add extra browsers here:
    
    //Less Reliable Detection:
    { name: 'Librefox', check: () => !navigator.doNotTrack && !navigator.brave && ua.includes("firefox") && typeof window.sidebar === 'undefined'}, // DonotTrack is removed + Uses Firefox
    { name: 'Ungoogled', check: () => !navigator.doNotTrack && ua.includes("chrome") && !ua.includes("google") && !window.chrome?.runtime && !navigator.brave && !ua.includes("vivaldi") && !ua.includes("edge") && !ua.includes("opera") }, // DonotTrack is removed + Uses Chromium
    { name: 'Unknown', check: () => true }
  ];

  for (const browser of browsers) {
    if (browser.check()) return browser.name;
  }
}
const browser = detectBrowser();
console.log("Browser:", browser); 
document.getElementById('browser-info').textContent = browser;
