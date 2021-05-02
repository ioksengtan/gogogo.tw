sheetsUrl = "https://docs.google.com/spreadsheets/d/1ATHYC1UnMTIhTlmnwSqaSOaRgCUgKQSYvaE6BM-5YpM/edit#gid=0";
appUrl = "https://script.google.com/macros/s/AKfycbw3VSmnrt--uqXN07mjrlAV7nrk4Q4Ekc_hx9EN1ez7orv1Turt/exec";
function goto(key){
	parameter = {
		url: sheetsUrl,
		command: "get_link_from_id",
		key: key
	};
	$.get(appUrl, parameter, function(data) {
		//console.log(data);
		if(data == "na"){
			console.log("invalid link")
		}else{
			window.location.href = data;
		}
	});
}
