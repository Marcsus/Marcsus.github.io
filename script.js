var xhr = new XMLHttpRequest();
xhr.onload = function() {
  dump(xhr.responseXML.documentElement.nodeName);
}
xhr.onerror = function() {
  dump("Error while getting XML.");
}
xhr.open("GET", "fileName.xml");
xhr.responseType = "document";
xhr.send();

button.onclick = function() {
	var randomint = Math.floor(Math.random() * 1645)
	document.getElementById('quest').innerHTML=xhr.responseXML.getElementsByTagName("question")[randomint].textContent;
        document.getElementById('ans').innerHTML=xhr.responseXML.getElementsByTagName("answer")[randomint].textContent;
	}

function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '32') {
    var randomint = Math.floor(Math.random() * 1645)
    document.getElementById('quest').innerHTML=xhr.responseXML.getElementsByTagName("question")[randomint].textContent;
    document.getElementById('ans').innerHTML=xhr.responseXML.getElementsByTagName("answer")[randomint].textContent;
    }
    }