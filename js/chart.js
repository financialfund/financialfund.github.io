var options = {
    chart: {
        height: 500,
        type: 'line',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [
    {
        name: 'High Risk',
        data: ultrarisk
    }
    ,{
        name: 'Medium Risk',
        data: doublerisk
    }
    ,{
        name: 'Low Risk',
        data: ninety
    }
    ,{
        name: 'No Risk',
        data: ninetyfive
    },
    {
        name: 'No Risk, Fixed 0.18%',
        data: fixed
    }
    ],
    xaxis: {
        type: 'text',
        categories: date,                
    },
    yaxis:{
        min:Math.min(...ultrarisk),
        forceNiceScale: true,
    },
    tooltip: {
        enabled: true,
    },
    legend:{
        inverseOrder: true,
    	position: 'top',

    },
    stroke:{
        curve: 'smooth',
    	width: 3,
    },
    colors:['#FFA726','#FAD53F','#67BB6A','#29B6F6','#5C6BC0']
}
var compare = new ApexCharts(document.querySelector("#chart"),options);

options = {
    chart: {
        height: 300,
        type: 'area',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'No Risk, Fixed 0.18%',
        data: fixed
    }
    ],

    xaxis: {
        type: 'text',
        categories: date,                
    },
    stroke:{
    	width: 2,
    },

    colors:['#5C6BC0']

}

var area = new ApexCharts(
    document.querySelector("#chart1"),
    options
);


options = {
    chart: {
        type: 'area',
        toolbar:{
            show: false,
        }
        ,
        animations:{
            enabled: true,
        }
        ,
        height:300,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'No Risk',
        data: ninetyfive
    }
    ],

    xaxis: {
        type: 'text',
        categories: date,                
    },
    stroke:{
    	width: 2,
    },

    colors:['#29B6F6']

}

var area1 = new ApexCharts(
    document.querySelector("#chart2"),
    options
);

options = {
    chart: {
        type: 'area',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: true,
        }
        ,
        height:300,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'Low Risk',
        data: ninety
    }
    ],

    xaxis: {
        type: 'text',
        categories: date,                
    },
    stroke:{
    	width: 2,
    },

    colors:['#67BB6A']

}

var area2 = new ApexCharts(
    document.querySelector("#chart3"),
    options
);


options = {
    chart: {
        type: 'area',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: true,
        }
        ,
        height:300,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'Medium Risk',
        data: doublerisk
    }
    ],
    xaxis: {
        type: 'text',
        categories: date,                
    },
    stroke:{
    	width: 2,
    },

    colors:['#FAD53F']

}

var area3 = new ApexCharts(
    document.querySelector("#chart4"),
    options
);


options = {
    chart: {
        type: 'area',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: true,
        }
        ,
        height:300,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'High Risk',
        data: ultrarisk	
    }
    ],

    xaxis: {
        type: 'text',
        categories: date,                
    },
    stroke:{
    	width: 2,
    },

    colors:['#FFA726']

}

var area4 = new ApexCharts(
    document.querySelector("#chart5"),
    options
);

        

var c = ['#a7cb00'];

options = {
chart: {
    type: 'radialBar',
    offsetY: -20,
        animations:{
            enabled: true,
        }
},
plotOptions: {
    radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
            background: "#e7e7e7",
            strokeWidth: '97%',
            margin: 5, // margin is in pixels
            shadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
            }
        },
        dataLabels: {
            name: {
                show: false
            },   
            value: {
                offsetY: -2,
                fontSize: '22px'
            }                     
        }
    }
},
series: [0], 
}

var round = new ApexCharts(
    document.querySelector("#round"),
    options
);

var round2 = new ApexCharts(
    document.querySelector("#round2"),
    options
);

options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors: c,
    series: [30],
   
}

var round1 = new ApexCharts(
    document.querySelector("#round1"),
    options
);



var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors: c,
    series: [37],
   
}

var round3 = new ApexCharts(
    document.querySelector("#round3"),
    options
);


var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors : ['#FFA726'],
    series: [10],
   
}

var round4 = new ApexCharts(
    document.querySelector("#round4"),
    options
);


var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors: c,
    series: [55],
   
}

var round5 = new ApexCharts(
    document.querySelector("#round5"),
    options
);

var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors : ['#FFA726'],
    series: [50],
   
}

var round6 = new ApexCharts(
    document.querySelector("#round6"),
    options
);

var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors: c,
    series: [74],
   
}

var round7 = new ApexCharts(
    document.querySelector("#round7"),
    options
);

var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors : ['#FFA726'],
    series: [90],
   
}

var round8 = new ApexCharts(
    document.querySelector("#round8"),
    options
);

var options = {
    chart: {
        type: 'radialBar',
        offsetY: -20,
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
                background: "#e7e7e7",
                strokeWidth: '97%',
                margin: 5, // margin is in pixels
                shadow: {
                    enabled: true,
                    top: 2,
                    left: 0,
                    color: '#999',
                    opacity: 1,
                    blur: 2
                }
            },
            dataLabels: {
                name: {
                    show: false
                },   
                value: {
                    offsetY: -2,
                    fontSize: '22px'
                }                     
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.2,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 53, 91]
        },
    },
    colors: c,
    series: [95],
   
}

var round9 = new ApexCharts(
    document.querySelector("#round9"),
    options
);



var type = ['No Risk, Fixed 0.18%', 'No Risk', 'Low Risk'];

var options = {
  chart: {
    height: 380,
    type: "donut",
        animations:{
            enabled: true,
        }
  },
  series: [30, 40, 30],
  legend: {
    position: 'top'
  },
  plotOptions: {
     pie: {
       customScale: 0.75,
       offsetY: -40
     }
  },
  labels: type,
  theme: {
              palette: 'palette2', 
        }
};
var donut = new ApexCharts(document.querySelector("#donut"), options);

    
type = ['No Risk, Fixed 0.18%', 'No Risk', 'Low Risk', 'Medium Risk', 'High Risk'];

var options = {
  chart: {
    height: 380,
    type: "donut",
        animations:{
            enabled: true,
        }
  },
  series: [15, 20, 35, 20, 10],
  legend: {
    position: 'top'
  },
  plotOptions: {
     pie: {
       customScale: 0.75,
       offsetY: -40
     }
  },
  labels: type,
  theme: {
              palette: 'palette2', 
        }
};
var donut1 = new ApexCharts(document.querySelector("#donut1"), options);


var options = {
  chart: {
    height: 380,
    type: "donut",
        animations:{
            enabled: true,
        }
  },
  series: [20, 25, 35, 10, 10],
  legend: {
    position: 'top'
  },
  plotOptions: {
     pie: {
       customScale: 0.75,
       offsetY: -40
     }
  },
  labels: type,
  theme: {
              palette: 'palette2', 
        }
};
var donut2 = new ApexCharts(document.querySelector("#donut2"), options);


var options = {
    title: {
            text: 'Weekly Average Return',
            align: 'center',
            style: {
            fontSize:  '24px'
            },
    },
    chart: {
        height: 430,
        type: 'bar',
        toolbar:{
            show:false
        },
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
        },
    }  
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [
        {   name: type[0],
            data: [weekly[0]]},
        {   name: type[1],
            data: [weekly[1]]},
        {   name: type[2],
            data: [weekly[2]]},
        {   name: type[3],
            data: [weekly[3]]},
        {   name: type[4],
            data: [weekly[4]]}
    ],
    legend: {
        position: 'top'
    },
    
    xaxis: {
        categories: [''],
    },
    theme: {
          palette: 'palette2', 
    }
}

var bar = new ApexCharts(
    document.querySelector("#bar"),
    options
);

var options = {
    title: {
            text: 'Monthly Average Return',
            align: 'center',
            style: {
            fontSize:  '24px'
            },
    },
    chart: {
        height: 430,
        type: 'bar',
        toolbar:{
            show:false
        },
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
        },
    }  
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [
        {   name: type[0],
            data: [monthly[0]]},
        {   name: type[1],
            data: [monthly[1]]},
        {   name: type[2],
            data: [monthly[2]]},
        {   name: type[3],
            data: [monthly[3]]},
        {   name: type[4],
            data: [monthly[4]]}
    ],
    legend: {
        position: 'top'
    },
    
    xaxis: {
        categories: [''],
    },
    theme: {
          palette: 'palette2', 
    }
}

var bar1 = new ApexCharts(
    document.querySelector("#bar1"),
    options
);

var options = {
    title: {
            text: 'Yearly Estimated Average Return',
            align: 'center',
            style: {
            fontSize:  '24px'
            },
    },
    chart: {
        height: 430,
        type: 'bar',
        toolbar:{
            show:false
        },
        animations:{
            enabled: true,
        }
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
        },
    }  
    },
    dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [
        {   name: type[0],
            data: [yearly[0]]},
        {   name: type[1],
            data: [yearly[1]]},
        {   name: type[2],
            data: [yearly[2]]},
        {   name: type[3],
            data: [yearly[3]]},
        {   name: type[4],
            data: [yearly[4]]}
    ],
    legend: {
        position: 'top'
    },
    
    xaxis: {
        categories: [''],
    },
    theme: {
          palette: 'palette2', 
    }
}

var bar2 = new ApexCharts(
    document.querySelector("#bar2"),
    options
);

compare.render();
bar.render();
bar1.render();
bar2.render();
donut.render();
donut1.render();
donut2.render();
round.render();
round1.render();
area.render();
round2.render();
round3.render();
area1.render();
round4.render();
round5.render();
area2.render();
round6.render();
round7.render();
area3.render();
round8.render();
round9.render();
area4.render();
