
	var start = 501;

function scoring() {

	

	var dart1p1 = document.getElementById('p1dart1').value;
	var dart2p1 = document.getElementById('p1dart2').value;
	var dart3p1 = document.getElementById('p1dart3').value;

	var youReq = start - (parseInt(dart1p1) + parseInt(dart2p1) + parseInt(dart3p1)); 
	document.getElementById('youRequaied').innerHTML = youReq;
}

