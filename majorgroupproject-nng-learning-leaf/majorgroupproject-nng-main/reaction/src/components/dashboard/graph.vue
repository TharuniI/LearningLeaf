<template lang="">
    <div id="chart" class="flex flex-col bg-white bg-opacity-20 backdrop p-4 rounded-lg items-centered w-1/2">
    </div>
</template>
<script>
import * as d3 from "d3";

export default {
    props: {
        lecName:{
            type: String,
        },
        arr:{
            type:Array,
        }
    },
    mounted() {
        console.log(this.$parent)
        console.log("mounted")
        this.createGraph();
    },
    updated(){
        console.log("updated")
    },
    methods: {
        createGraph:function(){
        
            //let arr = [1,1,2,2,3,4,5]; //arr which will be passed in
            let count = [0,0,0,0,0];


            //count the frequency of each rating
            for(let i=0;i<this.arr.length;i++){
                console.log(this.arr[i])
                count[this.arr[i]-1] += 1;
            }

            //calculate max y domain
            const MAX_Y = Math.max(...count);

            let freq = [
                {"rating" : '1',"frequency": count[0]},
                {"rating" : '2',"frequency": count[1]},
                {"rating" : '3',"frequency": count[2]},
                {"rating" : '4',"frequency": count[3]},
                {"rating" : '5',"frequency": count[4]},
            ];

            //now render graph
            const title = this.lecName + " Ratings"
            const xLabel = "Rating";
            const yLabel = "Number of Students";
            const colourLow = "#FF7070";
            const colourHigh= "#99FF85";
            const labelColor = "#FFFFFF";
            

            const margin = 50;
            const width = 500;
            const height = 500;
            const chartWidth = width - 2 * margin;
            const chartHeight = height - 2 * margin;

            const colourScale = d3.scaleLinear()
                                    .domain([0,MAX_Y])
                                    .range([colourLow, colourHigh]);
            
            const xScale = d3.scaleBand() // discrete, bucket
                                .domain(freq.map((data) => data.rating))
                                .range([0, chartWidth])
                                .padding(0.3);
            
            const yScale = d3.scaleLinear()
                                .domain([0, MAX_Y])
                                .range([chartHeight, 0]);

            /* we want to add the chart to the div */
            let svg = d3.select('#chart')
                            .append('svg')
                                .attr("viewBox", `0 0 ` + width + ' ' + height );
            
            //title
            svg.append('text')
                    .attr("class", "title")
                    .attr('x', width / 2)
                    .attr('y', margin - 25)
                    .attr('text-anchor', 'middle')
                    .text(title)
                    .style("font-size","1.25em")
                    .style("stroke",labelColor)
                    .style("fill",labelColor);

            //y-axis
            svg.append("text")
                .attr("class", "y-label")
                .attr("id","y-label")
                .attr("text-anchor", "middle")
                .attr('x', -1 * height / 2 )
                .attr('y', 10)
                .attr("dy", "0.3em")
                .attr("transform", "rotate(-90)")
                .text(yLabel)
                .style("font-size","1.25rem")
                .style("stroke",labelColor)
                .style("fill",labelColor);

            //x-axis
            svg.append("text")
                .attr("x", width / 2)
                .attr("y", height - 6)
                .attr("class", "x-label")
                .attr("id","x-label")
                .attr("text-anchor", "middle")
                .text(xLabel)
                .style("font-size","1.25rem")
                .style("stroke",labelColor)
                .style("fill",labelColor);
                

            // create a group (g) for the bars
            let g = svg.append('g')
                            .attr('transform', `translate(${margin}, ${margin})`);

            // y-axis
            g.append('g')
                .attr("stroke", "white")
                .attr("stroke-width", 0.5)
                .call(d3.axisLeft(yScale));
                
            
            // x-axis
            g.append('g')
                .attr("stroke", "white")
                .attr("stroke-width", 0.5)
                .attr('transform', `translate(0, ${chartHeight})`)
                .call(d3.axisBottom(xScale));
            
            let rectangles = g.selectAll('rect')
                .data(freq)
                .enter()
                    .append('rect')
                        .attr('x', (data) => xScale(data.rating))
                        .attr('y', (data) => yScale(data.frequency))
                        .attr('width', xScale.bandwidth())
                        .attr('height', (data) => chartHeight - yScale(data.frequency))
                        .attr('fill', (data) => colourScale(data.frequency))
                        .on('mouseenter', function(source, index) {
                            d3.select(this)
                                .transition()
                                .duration(200)
                                .attr('opacity', 0.5);
                        })
                        .on('mouseleave', function(source, index) {
                            d3.select(this)
                                .transition()
                                .duration(200)
                                .attr('opacity', 1.0);
                        });
            
            rectangles.transition()
                .ease(d3.easeElastic)
                .attr('height', (data) => chartHeight - yScale(data.frequency))
                .attr('y', (data) => yScale(data.frequency))
                .duration(1000)
                .delay((data, index) => index * 50);
        }      
    },
    
}
</script>
<style scoped>
.backdrop{
    backdrop-filter: blur(2px);
}
.axis line{
    stroke:#FFFFFF;
}

</style>