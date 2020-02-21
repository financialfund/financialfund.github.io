

    var split = 2;
    var initial = 1000*split;

    var myObj = {
    "date":

    ["19/10", "19/10", "19/10", "19/10", 
    "19/11", "19/11", "19/11", "19/11", 
    "19/12", "19/12", "19/12", "19/12", "19/12", 
    "20/01", "20/01", "20/01", "20/01",
    "20/02", "20/02", "20/02"], 

    "balance":
    [initial]
    };


    var type = ['No Risk, Fixed 0.15%', 'No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];

    var incr = [4,3.85,3.63,
    1.07, 5.91, 3.85, 3.41,
    -2.48, 6.04, 6.26, -1.9, 3.47,
    5.72, 1.13, -1.01, 2.15,
    2.89, -4.25, -0.55];
    //2.89

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
		var gain = ninetyfive[i]*incr[i]/100*0.0575;
		if(gain<0) gain =0;
		fund += gain;
		ninetyfive.push(fund.toFixed(2));
	}

	fund = initial;
	var ninety = [initial];
	for (var i = 0; i < date.length-1; i++) {
		// var gain = (overall[i+1]-overall[i])*0.082;
        var gain = ninety[i]*incr[i]/100*0.1;
        if(gain<0) gain*=1.1;
		fund += gain;
		ninety.push(fund.toFixed(2));
	}

	fund = initial;
	var doublerisk = [initial];
	for (var i = 0; i < date.length-1; i++) {
		// var gain = (overall[i+1]-overall[i])*0.14;
        var gain = doublerisk[i]*incr[i]/100*0.16;
		if(gain<0) gain*=2.1;
		fund += gain;
		doublerisk.push(fund.toFixed(2));
	}

	fund = initial;
	var ultrarisk = [initial];
	for (var i = 0; i < date.length-1; i++) {
		// var gain = (overall[i+1]-overall[i])*0.24;
        var gain = ultrarisk[i]*incr[i]/100*0.275;
		if(gain<0) gain*=3.1;
		fund += gain;
		ultrarisk.push(fund.toFixed(2));
	}

	var sum = 0;
    var weekly = [];
    var monthly =[];
    var yearly = [];


    //fixed
    for (var i = 1; i < fixed.length; i++) {
        sum += (fixed[i]-fixed[i-1])/fixed[i-1]*100;
    }
    var week =(sum.toFixed(2)/(incr.length));
    var month=100;
    for (var i = 0; i < 4; i++) {
        month*=(week+100)/100;
    }
    var year = 100;
    for (var i = 0; i < 50; i++) {
        year*=(week+100)/100;
    }
    weekly.push(week.toFixed(2));
    monthly.push((month-100).toFixed(2));
    yearly.push((year-100).toFixed(2));
    

    //norisk
    var sum = 0;
    for (var i = 1; i < ninetyfive.length; i++) {
        sum += (ninetyfive[i]-ninetyfive[i-1])/ninetyfive[i-1]*100;
    }
    var week =(sum/incr.length);
    weekly.push(week.toFixed(2));
    var month=100;
    for (var i = 0; i < 4; i++) {
        month*=(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));
    var year = 100;
    for (var i = 0; i < 50; i++) {
        year*=(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));


    //lowrisk
    var sum = 0;
    for (var i = 1; i < ninety.length; i++) {
        sum += (ninety[i]-ninety[i-1])/ninety[i-1]*100;
    }
    var week =(sum/incr.length);
    weekly.push(week.toFixed(2));
    var month=100;
    for (var i = 0; i < 4; i++) {
        month*=(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));
    var year = 100;
    for (var i = 0; i < 50; i++) {
        year*=(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));

    //medium
    var sum = 0;
    for (var i = 1; i < doublerisk.length; i++) {
        sum += (doublerisk[i]-doublerisk[i-1])/doublerisk[i-1]*100;
    }
    var week =(sum/incr.length);
    weekly.push(week.toFixed(2));
    var month=100;
    for (var i = 0; i < 4; i++) {
        month*=(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 50; i++) {
        year*=(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));

    //high
    var sum = 0;
    for (var i = 1; i < ultrarisk.length; i++) {
        sum += (ultrarisk[i]-ultrarisk[i-1])/ultrarisk[i-1]*100;
    }
    var week =(sum/incr.length);
    weekly.push(week.toFixed(2));
    var month=100;
    for (var i = 0; i < 4; i++) {
        month*=(week+100)/100;
    }
    monthly.push((month-100).toFixed(2));

    var year = 100;
    for (var i = 0; i < 50; i++) {
        year*=(week+100)/100;
    }
    yearly.push((year-100).toFixed(2));
