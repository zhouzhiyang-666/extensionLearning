var select = document.querySelector('#bgSelect');
var btn = document.querySelector('button');
btn.addEventListener('click',function(){
	document.querySelector('.content').innerText = '你更改了配置!!';
})
select.addEventListener('change',function(){
	let index = select.selectedIndex;
	console.log(select.children[index].value);
	document.body.backgroundColor = select.children[index].value;
})