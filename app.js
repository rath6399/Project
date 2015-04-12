var winEvent = Ti.UI.createWindow();

var sectionMonday = Ti.UI.createTableViewSection({
	headerTitle : 'Monday, April 13'
});

var sectionTuesday = Ti.UI.createTableViewSection({
	headerTitle : 'Tuesday, April 14'
});

var sectionWednesday = Ti.UI.createTableViewSection({
	headerTitle : 'Wednesday, April 15'
});

var mondayDataE = ['Barker Trading Competition', 'Department of Business Advisory Board', 'Outdoor Rental Center Open',
'How to Facilitate Meetings Effectively', 'Josh Collette - Fish & Wildlife Sciences 501 Seminar', 'Mountain Bike Mondays'];

var mondayDataT = ['12 days', 'All Day', '10am', '11am', 'll:30am', '4pm'];

var mondayDataP = ['ALB 203', 'ALB Gallery', 'SRC 101', 'Admin 217', 'CNR 108', 'Moscow Mountain'];

allRows1 = [];

for (var i = 0; i < mondayDataE.length; i++) {
	theRow = Ti.UI.createTableViewRow({
		eventInfo : mondayDataE[i],
		height : '70px'
	});

	eventLabel = Ti.UI.createLabel({
		text : mondayDataE[i],
		top : '0%',
		height : '50%',
		font : {fontSize:12}
	});
	theRow.add(eventLabel);

	placeLabel = Ti.UI.createLabel({
		text : mondayDataP[i],
		font : {fontsize:10},
		top : '50%',
		height : '50%',
		left : '15%',
	});
	theRow.add(placeLabel);

	timeLabel = Ti.UI.createLabel({
		text : mondayDataT[i],
		font : {fontSize:10},
		left : '75%',
		top : '50%',
		height : '50%'
	});
	theRow.add(timeLabel);

	//allRows1.push(theRow);
	sectionMonday.add(theRow);
};

//sectionMonday.add(allRows1);

var tableEvent = Ti.UI.createTableView({
	data : [sectionMonday, sectionTuesday, sectionWednesday]
});
winEvent.add(tableEvent);
winEvent.open();
