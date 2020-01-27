var animate = false;

var options = {
    chart: {
        height: 500,
        type: 'line',
        toolbar:{
            show: false,
        },
        animations:{
            enabled: animate,
        }
    },
    markers: {
        size: 0,
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
        name: 'No Risk, Fixed 0.15%',
        data: fixed
    }
    ],
    xaxis: {
        type: 'text',
        categories: date,                
    },
    yaxis:{
        min:Math.min(...ultrarisk),
        //forceNiceScale: true,
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
            enabled: animate,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'No Risk, Fixed 0.15%',
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
            enabled: animate,
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
            enabled: animate,
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
            enabled: animate,
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
            enabled: animate,
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


Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#fff',
    align: 'left',
    anchor: 'end'
});

var ctx = document.getElementById('mycanvas');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    responsive: false,
    data: {
        labels: ['Weekly Average Return %'],
        datasets: [{
            label: type[0],
            data: [weekly[0]],
            backgroundColor: "#5C6BC0",
            hoverBackgroundColor: "#5C6BC0",
            barPercentage: 0.95
        },
        {
            label: type[1],
            data: [weekly[1]],
            backgroundColor: '#29B6F6',
            hoverBackgroundColor: '#29B6F6',
            barPercentage: 0.95
        },
        {
            label: type[2],
            data: [weekly[2]],
            backgroundColor: '#67BB6A',
            hoverBackgroundColor: '#67BB6A',
            barPercentage: 0.95
        },
        {
            label: type[3],
            data: [weekly[3]],
            backgroundColor: '#FAD53F',
            hoverBackgroundColor: "#FAD53F",
            barPercentage: 0.95
        },
        {
            label: type[4],
            data: [weekly[4]],
            backgroundColor: "#FFA726",
            hoverBackgroundColor: "#FFA726",
            barPercentage: 0.95
        },]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },

            }],
            yAxes: [{
                display: false,
                
            }]
        },
        tooltips: {
            mode: "nearest",
          },

          
        title: {
                    display: true,
                    fontSize: 24,
                    text: 'Weekly Average Return',
                    fontFamily: "'Helvetica', 'Arial', sans-serif",
                    fontStyle: "normal",
                },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return value+"%";
                }
            }
        }

    }
});

var ctx1 = document.getElementById('mycanvas1');
var myChart1 = new Chart(ctx1, {
    type: 'horizontalBar',
    responsive: false,
    data: {
        labels: ['Monthly Average Return %'],
        datasets: [{
            label: type[0],
            data: [monthly[0]],
            backgroundColor: "#5C6BC0",
            hoverBackgroundColor: "#5C6BC0",
            barPercentage: 0.95
        },
        {
            label: type[1],
            data: [monthly[1]],
            backgroundColor: '#29B6F6',
            hoverBackgroundColor: '#29B6F6',
            barPercentage: 0.95
        },
        {
            label: type[2],
            data: [monthly[2]],
            backgroundColor: '#67BB6A',
            hoverBackgroundColor: '#67BB6A',
            barPercentage: 0.95
        },
        {
            label: type[3],
            data: [monthly[3]],
            backgroundColor: '#FAD53F',
            hoverBackgroundColor: "#FAD53F",
            barPercentage: 0.95
        },
        {
            label: type[4],
            data: [monthly[4]],
            backgroundColor: "#FFA726",
            hoverBackgroundColor: "#FFA726",
            barPercentage: 0.95
        },]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },

            }],
            yAxes: [{
                display: false,
            }]
        },
        tooltips: {
            mode: "nearest",
          },

          
        title: {
                    display: true,
                    fontSize: 24,
                    text: 'Monthly Average Return',
                    fontFamily: "'Helvetica', 'Arial', sans-serif",
                    fontStyle: "normal",
                },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return value+"%";
                }
            }
        }

    }
});

var ctx2 = document.getElementById('mycanvas2');
var myChart2 = new Chart(ctx2, {
    type: 'horizontalBar',
    responsive: false,
    data: {
        labels: ['Yearly Estimated Return %'],
        datasets: [{
            label: type[0],
            data: [yearly[0]],
            backgroundColor: "#5C6BC0",
            hoverBackgroundColor: "#5C6BC0",
            barPercentage: 0.95
        },
        {
            label: type[1],
            data: [yearly[1]],
            backgroundColor: '#29B6F6',
            hoverBackgroundColor: '#29B6F6',
            barPercentage: 0.95
        },
        {
            label: type[2],
            data: [yearly[2]],
            backgroundColor: '#67BB6A',
            hoverBackgroundColor: '#67BB6A',
            barPercentage: 0.95
        },
        {
            label: type[3],
            data: [yearly[3]],
            backgroundColor: '#FAD53F',
            hoverBackgroundColor: "#FAD53F",
            barPercentage: 0.95
        },
        {
            label: type[4],
            data: [yearly[4]],
            backgroundColor: "#FFA726",
            hoverBackgroundColor: "#FFA726",
            barPercentage: 0.95
        },]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                },

            }],
            yAxes: [{
                display: false,
            }]
        },
        tooltips: {
            mode: "nearest",
          },

          
        title: {
                    display: true,
                    fontSize: 24,
                    text: 'Yearly Estimated Return',
                    fontFamily: "'Helvetica', 'Arial', sans-serif",
                    fontStyle: "normal",
                },
        plugins: {
            datalabels: {
                formatter: function(value, context) {
                    return value+"%";
                }
            }
        }

    }
});

compare.render();
area.render();
area1.render();
area2.render();
area3.render();
area4.render();
