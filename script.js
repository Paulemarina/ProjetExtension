function lookForTrackerInfos(loopNum = 0)
{
	let trackerCode = (typeof gt !== 'undefined') ? gt("whoami") : null;

	if(loopNum > 20 || trackerCode != null) {
		chrome.runtime.sendMessage('nafkkgmfkekndmfllipgjoaogejbkkdn',{trackerInfo:trackerCode});
		return;
	}

	setTimeout(() => {
		lookForTrackerInfos(loopNum+1);
	},
	300
	);
}

document.addEventListener('analyse', function(e) {
		setTimeout(() => {
			lookForTrackerInfos();
			},
			300
		);
	}
);
