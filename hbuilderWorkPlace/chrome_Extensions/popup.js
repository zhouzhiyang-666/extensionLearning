chrome.tabs.getSelected(null,function(tab){
	console.log(tab.url);
	document.querySelector('#barrage-js').innerHTML = 
	"<a href='https://jx.618g.com/?url="+tab.url+"' target='_blank'>解析视频</a>";
})
