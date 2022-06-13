let myChart = document.getElementById('myChart').getContext('2d');

Chart.defaults.global.defaultFontFamily:'lato';
Chart.defaults.global.defaultFontSize:18;

let massPopChart = new Chart(myChart, {
    type: 'bar', // bar, horizontal, pie, line, doughnut, radar, polarArea
    data:{
        labels:['boston', 'worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford'],
        datasets:[{
            label:'population',
            data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor: [
                'green',
                'red',
                'purple',
                'orange',
                'blue',
                'cyan'
            ],
            borderWidth:2,
            borderColor: 'red',
            hoverBorderWidth:3,
            hoverBorderColor: 'black'
        }]
    }
})

