var opt = {
  type: "list",
  title: "主要标题",
  message: "要显示的主要消息",
  iconUrl: "img/icon.png",
  items: [{ title: "Item1", message: "这是项目一。"},
          { title: "Item2", message: "这是项目二。"},
          { title: "Item3", message: "这是项目三。"}]
}
chrome.contextMenus.create({
	id:"radio1",
	type:"radio",
	contexts:["selection"],
	title:"radio1",
	onclick:function(info){
		console.log("这是radio1右键菜单！");
		// chrome.notifications.create(null,{
		// 	type:'basic',
		// 	iconUrl:'img/icon.png',
		// 	title:'这是个简单的弹出！',
		// 	message:'您刚才点击了自定义右键菜单!'
		// });
		chrome.notifications.create(null,opt);
	}
});

chrome.contextMenus.create({
	id:"radio2",
	type:"radio",
	contexts:["selection"],
	title:"radio2",
	onclick:function(info){
		console.log("这是radio2右键菜单！")
	}
});

chrome.contextMenus.create({
	id:"checkbox1",
	type:"checkbox",
	contexts:["selection"],
	title:"checkbox1",
	onclick:function(info){
		console.log("这是checkbox1右键菜单！")
	}
});

chrome.contextMenus.create({
	id:"checkbox2",
	type:"checkbox",
	contexts:["selection"],
	title:"checkbox2",
	onclick:function(info){
		console.log("这是checkbox2右键菜单！")
	}
});

chrome.contextMenus.create({
	id:"father",
	type:"normal",
	contexts:["selection"],
	title:"father",
	onclick:function(info){
		console.log(info)
	}
});

chrome.contextMenus.create({
	id:"son1",
	type:"normal",
	contexts:["selection"],
	title:"son1",
	parentId:"father",
	onclick:function(info){
		// console.log(info)
		alert("son1")
	}
});

chrome.contextMenus.create({
	id:"son2",
	type:"normal",
	contexts:["selection"],
	title:"son2",
	parentId:"father",
	onclick:function(info){
		console.log(info)
	}
});

chrome.contextMenus.create({
	id:"son3",
	type:"normal",
	contexts:["selection"],
	title:"son3",
	parentId:"father",
	onclick:function(info){
		console.log(info.selectionText)
	}
});

//chrome   omnibox演示
chrome.omnibox.onInputChanged.addListener((text,suggest)=>{
	console.log('inputChanged:'+text);
	if(!text) return;
	if(text == '欧巴'){
		suggest([
			{content:'中国'+text,description:'你要找中国欧巴吗?'},
			{content:'日本'+text,description:'你要找日本欧巴吗?'},
			{content:'米国'+text,description:'你要找米国欧巴吗?'},
			{content:'泰国'+text,description:'你要找泰国欧巴吗?'},
		]);
	}
});
//popup和background通信
function test(){
	alert('我是background!');
}