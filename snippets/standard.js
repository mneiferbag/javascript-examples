function myShowMoreLinks(linkId) {
	myCreateAnchor("movieLinks",
	               "http://www.warner.com/",
				   "warner.jpg",
				   "Warner Pictures",
				   "168",
				   "147");
	myCreateAnchor("musicLinks",
	               "http://www.rollingstone.com/",
				   "rollingstone.gif",
				   "Rolling Stone",
				   "246",
				   "70");

	var anchor = document.getElementById(linkId);
	var paragraph = anchor.parentNode;
	paragraph.removeChild(anchor);
}

function myCreateAnchor(parentId, url, file, text, w, h) {

	var anchor = document.createElement("a");
	var image = document.createElement("img");

	var href = document.createAttribute("href");
	var alt = document.createAttribute("alt");
	var border = document.createAttribute("border");
	var height = document.createAttribute("height");
	var src = document.createAttribute("src");
	var width = document.createAttribute("width");

	href.nodeValue = url;
	alt.nodeValue = text;
	border.nodeValue = "0";
	height.nodeValue = h;
	src.nodeValue = file;
	width.nodeValue = w;

	anchor.setAttributeNode(href);
	image.setAttributeNode(alt);
	image.setAttributeNode(border);
	image.setAttributeNode(height);
	image.setAttributeNode(src);
	image.setAttributeNode(width);

	anchor.appendChild(image);

	document.getElementById(parentId).appendChild(anchor);
}
