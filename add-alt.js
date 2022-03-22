/** @format */
document.addEventListener("DOMContentLoaded", function () {
	var imagesTag = document.querySelectorAll("img");
	imagesTag.forEach(function (entry) {
		let method = entry.getAttribute("src");
		var regExp = /[a-zA-Z]/g;
		let altText = entry.getAttribute("alt");
		if (regExp.test(altText)) {
			console.log("You are Good");
		} else {
			let filename = method.split("/").pop().split(".")[0];
			let setAlt = entry.setAttribute("alt", filename);
		}
	});

	var check = document.querySelector('meta[name="description"]');
	var pageTitle = document.querySelector("title").innerText;
	let url = window.location.href;
	let webName = url.split("/")[2].split(".")[1];
	if (check == null) {
		let newMeta = document.createElement("meta");
		let setMeta = newMeta.setAttribute("name", "description");
		let setMetaContent = webName.concat("-", pageTitle);
		let setDescription = newMeta.setAttribute("content", setMetaContent);
		document.head.appendChild(newMeta);
		console.log(setDescription);
		console.log(setMeta);
	} else {
		console.log("More Searching");
	}
});
