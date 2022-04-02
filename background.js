const usingChrome = navigator.userAgent.indexOf('Chrome') > -1;

if (usingChrome) {
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ['antishort.js']
            });
        }
    });
} else {
    browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        if (changeInfo.url) {
            browser.tabs.executeScript({file: 'antishort.js'});
        }
    });
}
