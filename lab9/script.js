document.addEventListener('DOMContentLoaded', function () {
    // Fetch data from the Fake Store API
    fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            const categoryCounts = {};
            json.forEach((product) => {
                const category = product.category;
                if (categoryCounts[category]) {
                    categoryCounts[category]++;
                } else {
                    categoryCounts[category] = 1;
                }
            });

            const categories = Object.keys(categoryCounts);
            const data = categories.map((category) => categoryCounts[category]);

            let options = {
                title: { text: 'Store Items' },
                xAxis: {
                    axisLabel: {
                        interval: 0,
                        rotate: 45,
                    },
                },
                yAxis: {
                    data: categories,
                },

                series: [{
                    name: '# products',
                    type: 'bar',
                    data: data,
                    //Function to color the bars
                    itemStyle: {
                        color: function (params) {
                            const colorList = ['red', 'orange', 'yellow', 'lightgreen'];
                            return colorList[params.dataIndex];
                        },
                    },
                }],
            };
//end of color function
            let myChart = echarts.init(document.getElementById('main'));
            myChart.setOption(options);


            myChart.getZr().dom.style.left = '150px';
        });
});


