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
	$.ajax({
		type:"GET",
		url: "http://www.thebluealliance.com/api/v2/events/" + year,
		data: {"X-TBA-App-Id": tbaID},
		dataType: "json",
		async: false,
		success: function(data) {

			for(var i = 0; i < data.length; i++)
			{
				var tempRDO = Object.create(rankingDataObject);
				tempRDO.addEventKey(data[i]['key']);
				rankingData.push(tempRDO);
			}
		}
	});
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



$(document).ready(function() {

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

		award types: https://github.com/the-blue-alliance/the-blue-alliance/blob/master/consts/award_type.py#L15

		need to(for api call of 1 event, in the 'success' function):
			-can have object hold array(which has award type and team number and team's ranking)
			-then, get ranking data through ajax call, and get each team's rank in the above array
			-after that's done, make 2-d array(1-60ish) which holds data for all awards
			-iterate through all objects in the RDO array, putting the ranking data into the array
				-also put data such as # of teams, to calc average



		----------------------ignore below--------------
		have to find a way for the array of awards (for a particular event) to get put in the RDO, given
			that I do not want to enumerate every event in the RDO declaration, and that different events 
			give out different awards
		------
		
		messy way:
		only ranking matters
		so, given object key, could get awards data, and from the json recieved, get team's ranking 

	*/


});



