chrome.storage.sync.get('trackerInfo', (data) => {
console.log(data);
  
  let result = JSON.parse(data.trackerInfo);
  
  console.log(result);
  
document.getElementById("trackerconf").textContent= result['tracking_code'];



});




