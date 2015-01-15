
	var tbaID = "awards:awards-data:01";

	var year = "2014";


function getEvents()
{
	var events = [];
	$.ajax({
		type:"GET",
		url: "http://www.thebluealliance.com/api/v2/events/" + year,
		data: {"X-TBA-App-Id": tbaID},
		dataType: "json",
		async: false,
		success: function(data) {

			// console.log(data);
			// return (data);
			// var jsonParsed = JSON.parse(data);
				// dont need to parse json, jquery does it automatically

			// for(var i = 0; i < jsonParsed.length; i++)
			// {
			// 	events.push(jsonParsed[i]['key']);
			// }

			for(var i = 0; i < data.length; i++)
			{
				events.push(data[i]['key']);
			}

			console.log("1");

		}
	});

	return events;
}


$(document).ready(function() {

	var events = getEvents();

	for(var i = 0; i < events.length; i++)
	{
		console.log(events[i]);
	}

	console.log("2");



});



