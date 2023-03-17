function askForTrackerAnalyse(tabId) {
  chrome.action.setIcon({path:"assets/geolidIcon.png"});
  chrome.storage.sync.set({trackerInfo: ''});
  chrome.scripting.executeScript(
    {func: () => document.dispatchEvent(new Event('analyse')), target: {tabId: tabId}}
  );
}

chrome.tabs.onActivated.addListener(function(activeInfo) {
    askForTrackerAnalyse(activeInfo.tabId);
});

chrome.tabs.onUpdated.addListener(function(tabId) {
    askForTrackerAnalyse(tabId);
});


chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if(request.trackerInfo != null)
    {
      chrome.action.setIcon({path:"assets/geolidIconOn.png"});
    }
    chrome.storage.sync.set({trackerInfo: request.trackerInfo});
  }
);
