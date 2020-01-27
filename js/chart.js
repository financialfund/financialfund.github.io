Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
    color: '#fff',
    align: 'left',
    anchor: 'end'
});

new Chart(document.getElementById('mycanvas'), {
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

new Chart(document.getElementById('mycanvas1'), {
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

new Chart(document.getElementById('mycanvas2'), {
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

new Chart(document.getElementById("myarea"),{"type":"line","data":{
    "labels":myObj["date"],
    "datasets":[{"label":type[0],"data":fixed,
    "fill":true,
    "borderColor":"#5C6BC0",
    backgroundColor: 'rgba(92,107,192,0.2)',
    }]},
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            mode: "nearest",
            intersect: false,
          },
          legend:{
            display: false,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});

new Chart(document.getElementById("myarea1"),{"type":"line","data":{
    "labels":myObj["date"],
    "datasets":[{"label":type[1],"data":ninetyfive,
    "fill":true,
    "borderColor":"#29B6F6",
    backgroundColor: 'rgba(41,182,246,0.2)',
    }]},
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            mode: "nearest",
            intersect: false,
          },
          legend:{
            display: false,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});

new Chart(document.getElementById("myarea2"),{"type":"line","data":{
    "labels":myObj["date"],
    "datasets":[{"label":type[2],"data":ninety,
    "fill":true,
    "borderColor":"#67BB6A",
    backgroundColor: 'rgba(103,187,106,0.2)',
    }]},
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            mode: "nearest",
            intersect: false,
          },
          legend:{
            display: false,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});

new Chart(document.getElementById("myarea3"),{"type":"line","data":{
    "labels":myObj["date"],
    "datasets":[{"label":type[3],"data":doublerisk,
    "fill":true,
    "borderColor":"#FAD53F",
    backgroundColor: 'rgba(250,213,63,0.2)',
    }]},
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            mode: "nearest",
            intersect: false,
          },
          legend:{
            display: false,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});

new Chart(document.getElementById("myarea4"),{"type":"line","data":{
    "labels":myObj["date"],
    "datasets":[{"label":type[4],"data":ultrarisk,
    "fill":true,
    "borderColor":"#FFA726",
    backgroundColor: 'rgba(255,167,38,0.2)',
    }]},
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            mode: "nearest",
            intersect: false,
          },
          legend:{
            display: false,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});

new Chart(document.getElementById("compare"),{
    "type":"line","data":{
    "labels":myObj["date"],
    "datasets":
        [
            {   
                "label":type[0],"data":fixed,
                "fill":true,
                "borderColor":"#5C6BC0",
                backgroundColor: 'rgba(92,107,192,0.2)',
            },
            {   
                "label":type[1],"data":ninetyfive,
                "fill":true,
                "borderColor":"#29B6F6",
                backgroundColor: 'rgba(41,182,246,0.2)',
            },
            {
                "label":type[2],"data":ninety,
                "fill":true,
                "borderColor":"#67BB6A",
                backgroundColor: 'rgba(103,187,106,0.2)',
            },
            {
                "label":type[3],"data":doublerisk,
                "fill":true,
                "borderColor":"#FAD53F",
                backgroundColor: 'rgba(250,213,63,0.2)',
            },
            {
                "label":type[4],"data":ultrarisk,      
                "fill":true,
                "borderColor":"#FFA726",
                backgroundColor: 'rgba(255,167,38,0.2)',
            }

        ]

    },
    "options":{
        maintainAspectRatio: false,
        tooltips: {
            itemSort: function(a, b) {
                return b.datasetIndex - a.datasetIndex
              },
            intersect: false,
            mode: "index"
          },
          legend:{
            display: true,
          },
        plugins: {
          datalabels: {
             display: false
          }
        },

    }});