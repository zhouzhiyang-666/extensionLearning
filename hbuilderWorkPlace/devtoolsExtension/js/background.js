chrome.contextMenus.create({
	id:"radio1",
	type:"radio",
	contexts:["selection"],
	title:"radio1",
	onclick:function(info){
		console.log("这是radio1右键菜单！")
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