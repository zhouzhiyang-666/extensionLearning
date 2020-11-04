chrome.contextMenus.create({
	id:"search",
	title:"onlineTranslate",
	contexts:["selection"],
	onclick:function(params){
		// console.log(params.selectionText);
		// 注意不能使用location.href，因为location是属于background的window对象
		chrome.tabs.create({url: 'https://www.baidu.com/s?ie=utf-8&wd=' + encodeURI(params.selectionText)});
	}
})