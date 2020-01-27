

    var split = 2;
    var initial = 1000*split;

    var myObj = {
    "date":

    ["19/10", "19/10", "19/10", "19/10", 
    "19/11", "19/11", "19/11", "19/11", 
    "19/12", "19/12", "19/12", "19/12", "19/12", 
    "20/01", "20/01", "20/01"], 

    "balance":
    [initial]
    };


    var type = ['No Risk, Fixed 0.15%', 'No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];

    var incr = [4,3.85,3.63,
    1.07, 5.91, 3.85, 3.41,
    -2.48, 6.04, 6.26, -1.9, 3.47,
    5.72, 0.61, -1.02];

    for(var i of incr){
        myObj["balance"].push(i/100*myObj["balance"][myObj["balance"].length-1]+myObj["balance"][myObj["balance"].length-1]);
    }

    var out = 5000;
    var management = 20758357.35;
    var insider = 100;

	var date = myObj["date"];
	var overall = myObj["balance"];
	var fixed = [initial];
	for (var i = 0; i < date.length-1; i++) {
		fixed.push((fixed[fixed.length -1]*1.0015).toFixed(2));
	}
	var ninetyfive = [initial];
	var fund = initial;
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.045;
		if(gain<0) gain =0;
		fund += gain;
		ninetyfive.push(fund.toFixed(2));
	}

	fund = initial;
	var ninety = [initial];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.082;
        if(gain<0) gain*=1.1;
		fund += gain;
		ninety.push(fund.toFixed(2));
	}

	fund = initial;
	var doublerisk = [initial];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.14;
		if(gain<0) gain*=2.1;
		fund += gain;
		doublerisk.push(fund.toFixed(2));
	}

	fund = initial;
	var ultrarisk = [initial];
	for (var i = 0; i < date.length-1; i++) {
		var gain = (overall[i+1]-overall[i])*0.24;
		if(gain<0) gain*=3.1;
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
