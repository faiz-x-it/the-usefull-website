function uselessWebButton(button, popup) {
	var buttonElement = button
	var popupElement = popup
	var initialClick = false
	var randomRange = 7

	var sitesList = [
"http://faiz-x-it.github.io/",
"http://airhorner.com",
"http://answerthepublic.com",
"http://archive.org",
"http://axiom.ai",
"http://brave.com",
"http://builtwith.com",
"http://calltrackingmetrics.com",
"http://carrd.co",
"http://documents.reverso.net",
"http://downforeveryoneorjustme.com",
"http://duckduckgo.com",
"http://flick.tech",
"http://flippa.com",
"http://flodesk.com",
"http://golastminute.com",
"http://grow.google",
"http://gusto.com",
"http://hackthemenu.com",
"http://sleepyti.me/",
"https://alternativeto.net",
"https://bit.ly/APPSUMOTOOL",
"https://bit.ly/BEACONSTOOL",
"https://bit.ly/CALLTRACKING",
"https://bit.ly/CANVATOOL",
"https://bit.ly/CHIPBOT",
"https://bit.ly/CLICKUPTOOL",
"https://bit.ly/COPYAITOOL",
"https://bit.ly/DESCRIPTTOOL",
"https://bit.ly/digitalift",
"https://bit.ly/GOHIGHLEVEL",
"https://bit.ly/HYPEFURY",
"https://bit.ly/JASPERAI",
"https://bit.ly/JOTFORMBOT",
"https://bit.ly/LEADPAGESTOOL",
"https://bit.ly/LINKWHISPER",
"https://bit.ly/LOCALVIKING",
"https://bit.ly/MAILCHIMPTOOL",
"https://bit.ly/PICTORYTOOL",
"https://bit.ly/RANKEDAI",
"https://bit.ly/RENDERFORESTTOOL",
"https://bit.ly/REPURPOSETOOL",
"https://bit.ly/SCRIBEHOW",
"https://bit.ly/SEMRUSHSEOTOOL",
"https://bit.ly/SIRLINKSALOT",
"https://bit.ly/SOCIALSTUDIO",
"https://bit.ly/STANSTORE",
"https://bit.ly/SURFERSEO",
"https://bit.ly/SYNTHESIA",
"https://bit.ly/TELLATOOL",
"https://bit.ly/VIDIQTOOL",
"https://bit.ly/VOLLEYAPP",
"https://bit.ly/WAVEVIDEO",
"https://bit.ly/WORDAITOOL",
"https://bit.ly/WRITESONICAPP",
"https://cheatography.com/",
"https://copykat.com/",
"https://gofile.io/",
"https://hemingwayapp.com/",
"https://icons8.com/upscaler",
"https://ideasai.com/",
"https://musclewiki.com/",
"https://myfridgefood.com/",
"https://namechk.com/",
"https://remove.bg",
"https://retailmenot.com",
"https://smmry.com/",
"https://snapdrop.net/",
"https://syllaby.io/",
"https://vocalremover.com",
"https://www.accountkiller.com/en/home",
"https://www.blackmagicdesign.com/",
"https://www.buildai.space/",
"https://www.capitoltrades.com/",
"https://www.classcentral.com/report/free-certificates/",
"https://www.cymath.com/",
"https://www.edx.org/",
"https://www.feedblitz.com/",
"https://www.gethuman.com",
"https://www.ifixit.com/",
"https://www.importyeti.com/",
"https://www.kartiv.com/",
"https://www.magiceraser.io/",
"https://www.media.io/",
"https://www.midomi.com",
"https://www.myfonts.com/WhatTheFont/",
"https://www.naturalreaders.com/",
"https://www.ninjaessays.com/",
"https://www.omnicalculator.com/",
"https://www.photopea.com/",
"https://www.prepostseo.com/",
"https://www.quiverquant.com/",
"https://www.slidescarnival.com/",
"https://www.startups.fyi/",
"https://www.tinywow.com",
"https://www.vectorwiki.com",
"https://www.wifimap.io",
"https://www.wolframalpha.com/",
"https://www.yandex.com/images",
"http://hunter.io",
"http://instafinsta.com",
"http://legiit.com",
"http://livechat.com",
"http://looka.com",
"http://marketingexamples.com",
"http://myactivity.google.com",
"http://Nobaproject.com",
"http://notion.so",
"http://panzoid.com",
"http://pdfescape.com",
"http://promo.com/tools/image-resizer",
"http://Quora.com",
"http://resumemaker.online",
"http://scholarships.com",
"http://similarweb.com",
"http://smallpdf.com",
"http://socialblade.com",
"http://spyfu.com",
"http://taskrabbit.com",
"http://tineye.com",
"http://toffeeshare.com",
"http://Trello.com",
"http://Upwork.com",
"http://www.answersocrates.com",
"http://www.compressor.io",
"http://you.com",
"http://Zapier.com"
	]

	var sites = null

	// Prepares and binds the button
	var init = function () {
		button.onclick = onButtonClick

		// Initial set sites
		sites = sitesList.slice()

		if (localStorage["currentSiteList"]) {
			// They have storage, filter out any not in the base list, that could be spam now
			var currentSites = JSON.parse(localStorage["currentSiteList"])
			var filteredSites = currentSites.filter(
				(site) => sitesList.indexOf(site) !== -1
			)
			if (filteredSites.length > 0) {
				sites = filteredSites
			}
		}
	}

	// Selects and removes the next website from the list
	var selectWebsite = function () {
		var site, range, index

		range = randomRange > sites.length ? sites.length : randomRange
		index = Math.floor(Math.random() * range)

		site = sites[index]
		sites.splice(index, 1)

		return site
	}

	var openSite = function (url) {
		window.open(url)
	}

	var onButtonClick = function () {
		if (window.gtag) {
			gtag("event", "click", { event_category: "button" })
		}

		if (initialClick === false) {
			// Change text from "TO A"
			document.getElementById("joint").innerHTML = "TO ANOTHER"
			initialClick = true
		}

		var url = selectWebsite()
		openSite(url)

		// User has visited ALL the sites... refresh the list.
		if (sites.length == 0) {
			sites = sitesList.slice()
		}

		localStorage["currentSiteList"] = JSON.stringify(sites)
	}

	init()
}

var uselessWebButton = new uselessWebButton(document.getElementById("button"))
;
