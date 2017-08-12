module.exports=(url)=>{
	const xmlhttp=window.XMLHttpRequest?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
	return new Promise((resolve,reject)=>{
		xmlhttp.onreadystatechange=()=>{
			if (xmlhttp.readyState==4 && xmlhttp.status==200)
   				resolve(xmlhttp.responseText)
		}
	}
}
