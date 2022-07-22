/* eslint-disable no-undef */
browser.contextMenus.create({
	id: 'bgp-tools-search',
	title: 'Search BGP.tools for \'%s\'',
	contexts: ['selection']
}, onCreated);

function onCreated() {
	browser.contextMenus.onClicked.addListener(function(info, tab) {
		if (info.menuItemId === 'bgp-tools-search') {
			console.log(info.selectionText);
			browser.tabs.create({
				url: `https://bgp.tools/search?q=${info.selectionText}`
			});
		}
	});
}