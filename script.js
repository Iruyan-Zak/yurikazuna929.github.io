$(document).ready(function(){
	pdd = $(".pdd");
	for(var i=0; i<pdd.length; ++i){
		var str = pdd[i].innerHTML;
		var reg = /(\d+)\/(\d+)/;
		var f = str.match(reg);
		console.log(f[1]);
		console.log(f[2]);
 		pdd[i].innerHTML +=
			'<img src="blank.png" class="gauge-blank" width="'+f[2]*10+'" height="10">'+
		'<img src="fill.png" class="gauge-fill" width="'+f[1]*10+'" height="10">';
	}
})
