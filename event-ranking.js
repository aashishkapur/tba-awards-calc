// 
// 
// 
// 

var tbaID = "awards:awards-data:01";

var year = "2014";
	// year of events that is wanted

var rankingData = []


function getEvents()
{
	// var events = [];
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

			// for(var i = 0; i < data.length; i++)
			// {
			// 	events.push(data[i]['key']);
			// }

			for(var i = 0; i < data.length; i++)
			{
				var tempRDO = Object.create(rankingDataObject);
				tempRDO.addEventKey(data[i]['key']);
				rankingData.push(tempRDO);
			}


		}
	});

	// return events;
}

var rankingDataObject = {
	eventKey: null
};

rankingDataObject.addEventKey = function(eventKey){
	this.eventKey = eventKey;

};

rankingDataObject.printKey = function(){
	return this.eventKey;
};

// object.create(object) 


$(document).ready(function() {
	// alert("a");

	getEvents();

	for(var i = 0; i < rankingData.length; i++)
	{
		console.log(rankingData[i].printKey());
	}

	/*
		should make an object to store all the event data, and store objects in array

		object should have
			-event key
			-team numbers of teams that won awards(and what awards they won)
			-QA(qual average) of the teams winning awards
			-??

		then, go through array, get average, etc.

		need to adapt for different awards in different years?



	*/


});



