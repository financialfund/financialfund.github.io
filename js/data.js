	var myJSON = '{"date":[\
	"2019 October", 	"2019 October", 	"2019 October", 	"2019 October", \
	"2019 November", 	"2019 November", 	"2019 November", 	"2019 November", \
	"2019 December", 	"2019 December",	"2019 December",	"2019 December",	"2019 December"\
	],"balance":[\
	1000,			1040, 			1080, 			1119.23, \
	1131.23,		1198.11, 		1244.25, 		1286.73, \
	1254.76, 		1330.57,		1413.83,		1386.91,		1435.02\
	]}';
	var myObj = JSON.parse(myJSON);
	
    var management = 19969738.32;

	var date = myObj["date"];
	var overall = myObj["balance"];
	var fixed = [1000];
	for (var i = 0; i < date.length-1; i++) {
		fixed.push((fixed[fixed.length -1]*1.0018).toFixed(2));
	}
	var ninetyfive = [1000];
	var fund = 1000;
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.055;
		if(gain<0) gain =0;
		fund += gain;
		ninetyfive.push(fund.toFixed(2));
	}

	fund = 1000;
	var ninety = [1000];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.09;
		fund += gain;
		ninety.push(fund.toFixed(2));
	}

	fund = 1000;
	var doublerisk = [1000];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.2;
		if(gain<0) gain*=5;
		fund += gain;
		doublerisk.push(fund.toFixed(2));
	}

	fund = 1000;
	var ultrarisk = [1000];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.3;
		if(gain<0) gain*=6;
		fund += gain;
		ultrarisk.push(fund.toFixed(2));
	}

	var sum = 0;
    var weekly = [];
    var monthly =[];
    var yearly = [];
    for (var i = 1; i < fixed.length; i++) {
        sum += (fixed[i]-fixed[i-1])/fixed[i-1]*100;
    }
    var week =(sum/(fixed.length-1)).toFixed(2);
    weekly.push(week);

    var month=100;
    for (var i = 0; i < 4; i++) {
        month+=month*(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 48; i++) {
        year+=year*(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));
    
    var sum = 0;
    for (var i = 1; i < ninetyfive.length; i++) {
        sum += (ninetyfive[i]-ninetyfive[i-1])/ninetyfive[i-1]*100;
    }
    var week =(sum/(ninetyfive.length-1)).toFixed(2);
    weekly.push(week);
    var month=100;
    for (var i = 0; i < 4; i++) {
        month+=month*(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 48; i++) {
        year+=year*(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));

    var sum = 0;
    for (var i = 1; i < ninety.length; i++) {
        sum += (ninety[i]-ninety[i-1])/ninety[i-1]*100;
    }
    var week =(sum/(ninety.length-1)).toFixed(2);
    weekly.push(week);
    var month=100;
    for (var i = 0; i < 4; i++) {
        month+=month*(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 48; i++) {
        year+=year*(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));

    var sum = 0;
    for (var i = 1; i < doublerisk.length; i++) {
        sum += (doublerisk[i]-doublerisk[i-1])/doublerisk[i-1]*100;
    }
    var week =(sum/(doublerisk.length-1)).toFixed(2);
    weekly.push(week);
    var month=100;
    for (var i = 0; i < 4; i++) {
        month+=month*(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 48; i++) {
        year+=year*(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));

    var sum = 0;
    for (var i = 1; i < ultrarisk.length; i++) {
        sum += (ultrarisk[i]-ultrarisk[i-1])/ultrarisk[i-1]*100;
    }
    var week =(sum/(ultrarisk.length-1)).toFixed(2);
    weekly.push(week);
    var month=100;
    for (var i = 0; i < 4; i++) {
        month+=month*(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 48; i++) {
        year+=year*(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));
