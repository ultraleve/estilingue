var appsDefault = {
	'store.settings.app1':'http://underthesite.com/sites/{url}',
	'store.settings.app2':'http://www.ip-adress.com/ip_tracer/{url}',
	'store.settings.app3':'',
	'store.settings.app4':''
}
if(localStorage.getItem('store.settings.app1') == "" || localStorage.getItem('store.settings.app1') == undefined){
	for(var key in appsDefault){
		localStorage.setItem(key, appsDefault[key]);
	}
	
}

chrome.browserAction.onClicked.addListener(action);
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	var settings = localStorage.getItem('store.settings.app1');
	verifyHttp(tab);
});

function verifyHttp(tab){
	if(tab.url !== undefined && isHttp(tab.url)){
		/*chrome.browserAction.enable(tab.id);
		chrome.browserAction.setBadgeText({text:""});
		chrome.browserAction.setTitle({title:""});*/
		console.log('ativo');
	}else{
		/*chrome.browserAction.disable(tab.id);
		chrome.browserAction.setBadgeText({text:"x"});
		chrome.browserAction.setTitle({title:"Not valid protocol"});*/
		console.log('inativo');
	}
}

function action(tab){
	var url = isHttp(tab.url);
	if(url){
		apps = appsDefault;
		for(var key in apps){
			var val = localStorage.getItem(key).replace(/\"/gi,"");
			if(val !=="" && val !== undefined){
				var config = new Object();
				config.url = val.replace(/{url}/gi,url);
				config.active = false;
				console.log(config.url);
				chrome.tabs.create(config);
			}
		}
	}
}

function isHttp(url){
	if(url.slice(0,7) == "http://"){
		url = url.slice(7);
		url = url.slice(0,url.indexOf("/"));
		return url;
	}else if(url.slice(0,8) == "https://"){
		url = url.slice(8);
		url = url.slice(0,url.indexOf("/"));
		return url;
	}else{
		console.log(url.slice(0,7)+" protocol");
		return false;
	}
}

// =============