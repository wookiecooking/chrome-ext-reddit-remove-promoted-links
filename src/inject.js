chrome.extension.sendMessage({}, response => {
	let readyStateCheckInterval = setInterval( ()=> {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		let promotedLinks=document.querySelectorAll('.promotedlink');
		if (promotedLinks.length > 0){
			promotedLinks.forEach( v =>{ v.style.display = 'none'; })
			console.log('Reddit promoted links removed')
		}
	}
	}, 10);
});