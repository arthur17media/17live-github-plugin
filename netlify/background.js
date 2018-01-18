chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
  chrome.tabs.executeScript(null, { file: 'netlify/app.js' });
  chrome.tabs.insertCSS(null, { file: 'netlify/app.css' });
});
