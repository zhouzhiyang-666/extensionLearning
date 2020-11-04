//创建自定义面板
chrome.devtools.panels.create('MyPanel','img/icon.png','mypanel.html',function(panel){
	console.log('自定义面板创建成功!');
});

//创建自定义侧边栏
chrome.devtools.panels.elements.createSidebarPane("Images",function(sidebar){
	sidebar.setExpression('document.querySelector("img")','All Images');
});