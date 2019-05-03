function createChart(){
    var crtSelected = document.getElementById("ctrSel").options[document.getElementById("ctrSel").selectedIndex].value;
    
    if (width > 800) {

        var height = 0.9*window.innerHeight;
   //( d.Quality_of_opportunities +  d.Income + d.Future_prospects + d.Family_environment + d.Skills_environment+ d.Inclusiveness + d.Quality_of_life)/7


        svg.attr("width", width)
        .attr("height", height)

        xScale = d3.scaleBand()
            .domain(data.map(function (d) { return d.Countries }).sort(function (a, b) { return parseFloat(a.Countries) - parseFloat(b.Countries); }))
            .range([margin, width - margin / 2])
            .padding(padding);

        yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height - margin, margin / 3]);


        /** var dimDescGuide = dimDescChart.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .append("tspan")
            .attr("id", "chartGuideDimDesc")
            .attr("x", margin)
            .attr("y", heightChart - margin / 10)
            .html(guideStart2display)*/
        //.call(wrap,0.25*width);

       /** var dimDescGuideEnd = dimDescChart.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .append("tspan")
            .attr("id", "chartGuideDimDescEnd")
            .attr("x", width - margin / 2)
            .attr("y", heightChart - margin / 10)
            .html(guideEnd2display)
            .style("text-anchor", "end")*/ 


        //Create Y axis
        svg.append("g")
            .attr("class", "axis y yAxis")
            .attr("transform", "translate(" + margin + ",0)")
            .call(d3.axisLeft(yScale));


        ///Lollipop dimDesc
        lollipopsCircle = svg.selectAll("circle")
            .data(data.filter(function (d) { return d.Cat==crtSelected ;}))
            .enter().append("circle")
            .attr("class", "lollipopCircle")
            .attr("r", lollipopRadius)
            .attr("cx", function (d) {
                    return xScale(d.Countries) + xScale.bandwidth() / 2;
            })
            .attr("cy", function (d) {
                return yScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .attr("fill", lollipopColor)
            /** .on("mouseover", function (d) {
                tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
                tooltip.style("visibility", "visible");
            })*/
         //   .on("mousemove", mousemove)
          //  .on("mouseout", mouseout);


        lollipopsText = svg.selectAll("circleText")
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .enter().append("text")
            .attr("class", "lollipopText")

            .attr("transform", "translate(-3,15)rotate(-90)")
            .attr("dy", function (d) {
                    return xScale(d.Countries) + xScale.bandwidth() / 2;
            })
            .attr("dx", function (d) {
                return -yScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .text(function (d) {
                return d.Countries;
            })
            .attr("text-anchor", "end")
            .attr("fill", lollipopText)
           // .on("mouseover", function (d) {
             //   tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
               // tooltip.style("visibility", "visible");
         //   })
            //.on("mousemove", mousemove)
           // .on("mouseout", mouseout);;;

        lollipopsLine = svg.selectAll("circleLine")
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .enter().append("line")
            .attr("class", "lollipopLine")
            .attr("x1", function (d) {
                    return xScale(d.Countries) + xScale.bandwidth() / 2;
            })
            .attr("x2", function (d) {
                    return xScale(d.Countries) + xScale.bandwidth() / 2;
            })
            .attr("y1", function (d) {
                    return yScale(0);
            })
            .attr("y2", function (d) {
                    return yScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .attr("stroke", lollipopColor)
            .attr("stroke-width", "1")
           /**  .on("mouseover", function (d) {
                tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
                tooltip.style("visibility", "visible");
            })
            .on("mousemove", mousemove)
            .on("mouseout", mouseout);;;*/


    }
    else {
        width=0.8*width;
        var height = window.innerHeight;


        svg.attr("width", width)
            .attr("height", height)

        yScale = d3.scaleBand()
            .domain(data.map(function (d) { return d.Countries }).sort(function (a, b) { return parseFloat(a.Countries) - parseFloat(b.Countries); }))
            .range([margin, height - margin / 2])
            .padding(padding);

        xScale = d3.scaleLinear()
            .domain([0, 1])
            .range([2*margin, width -  margin / 3]);


        /** var dimDescGuide = dimDescChart.append("text")
            .attr("x", 0)
            .attr("y", 0)
            .append("tspan")
            .attr("id", "chartGuideDimDesc")
            .attr("x", margin)
            .attr("y", heightChart - margin / 10)
            .html(guideStart2display)*/
        //.call(wrap,0.25*width);

        /** var dimDescGuideEnd = dimDescChart.append("text")
             .attr("x", 0)
             .attr("y", 0)
             .append("tspan")
             .attr("id", "chartGuideDimDescEnd")
             .attr("x", width - margin / 2)
             .attr("y", heightChart - margin / 10)
             .html(guideEnd2display)
             .style("text-anchor", "end")*/


        //Create Y axis
        svg.append("g")
            .attr("class", "axis x yAxis")
            .attr("transform", "translate(" + 0 + "," + margin + ")")
            .call(d3.axisTop(xScale));


        ///Lollipop dimDesc
        lollipopsCircle = svg.selectAll("circle")
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .enter().append("circle")
            .attr("class", "lollipopCircle")
            .attr("r", lollipopRadius)
            .attr("cx", function (d) {
                return xScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .attr("cy", function (d) {
                return yScale(d.Countries) + yScale.bandwidth() / 2;
            })
            .attr("fill", lollipopColor)
        /** .on("mouseover", function (d) {
            tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
            tooltip.style("visibility", "visible");
        })*/
        //   .on("mousemove", mousemove)
        //  .on("mouseout", mouseout);


        lollipopsText = svg.selectAll("circleText")
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .enter().append("text")
            .attr("class", "lollipopText")

            .attr("transform", "translate("+(-lollipopRadius)+",-2)rotate(0)")
            .attr("dx", function (d) {
                return xScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .attr("dy", function (d) {
                return yScale(d.Countries) + yScale.bandwidth() / 2;
            })
            .text(function (d) {
                return d.Countries;
            })
            .attr("text-anchor", "end")
            .attr("fill", lollipopText)
        // .on("mouseover", function (d) {
        //   tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
        // tooltip.style("visibility", "visible");
        //   })
        //.on("mousemove", mousemove)
        // .on("mouseout", mouseout);;;

        lollipopsLine = svg.selectAll("circleLine")
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .enter().append("line")
            .attr("class", "lollipopLine")
            .attr("x1", function (d) {
                return xScale(0);
            })
            .attr("x2", function (d) {
                return xScale(d.Penalty * (parseFloat(d.Quality_of_opportunities) + parseFloat(d.Income) + parseFloat(d.Future_prospects) + parseFloat(d.Family_environment) + parseFloat(d.Skills_environment) + parseFloat(d.Inclusiveness) + parseFloat(d.Quality_of_life))/7);
            })
            .attr("y1", function (d) {
                return yScale(d.Countries) + yScale.bandwidth() / 2;
            })
            .attr("y2", function (d) {
                return yScale(d.Countries) + yScale.bandwidth() / 2;
            })
            .attr("stroke", lollipopColor)
            .attr("stroke-width", "1")
           /**  .on("mouseover", function (d) {
         tooltip.html(d.Country + "<br><br> score: " + d3.format(".2f")(d.value));
         tooltip.style("visibility", "visible");
     })
     .on("mousemove", mousemove)
     .on("mouseout", mouseout);;;*/

    }

}

function update(){
    var crtSelected = document.getElementById("ctrSel").options[document.getElementById("ctrSel").selectedIndex].value;


    var Quality_of_opportunities_weight;
    if (document.getElementById('Quality_of_opportunities_radio_1').checked) {
        Quality_of_opportunities_weight = document.getElementById('Quality_of_opportunities_radio_1').value
    } else if (document.getElementById('Quality_of_opportunities_radio_2').checked) {
        Quality_of_opportunities_weight = document.getElementById('Quality_of_opportunities_radio_2').value
    } else if (document.getElementById('Quality_of_opportunities_radio_3').checked) {
        Quality_of_opportunities_weight = document.getElementById('Quality_of_opportunities_radio_3').value
    }

    var Income_weight;
    if (document.getElementById('Income_radio_1').checked) {
        Income_weight = document.getElementById('Income_radio_1').value
    } else if (document.getElementById('Income_radio_2').checked) {
        Income_weight = document.getElementById('Income_radio_3').value
    } else if (document.getElementById('Income_radio_3').checked) {
        Income_weight = document.getElementById('Income_radio_3').value
    }

    var Future_prospects_weight;
    if (document.getElementById('Future_prospects_radio_1').checked) {
        Future_prospects_weight = document.getElementById('Future_prospects_radio_1').value
    } else if (document.getElementById('Future_prospects_radio_2').checked) {
        Future_prospects_weight = document.getElementById('Future_prospects_radio_2').value
    } else if (document.getElementById('Future_prospects_radio_3').checked) {
        Future_prospects_weight = document.getElementById('Future_prospects_radio_3').value
    }

    var Family_environment_weight;
    if (document.getElementById('Family_environment_radio_1').checked) {
        Family_environment_weight = document.getElementById('Family_environment_radio_1').value
    } else if (document.getElementById('Family_environment_radio_2').checked) {
        Family_environment_weight = document.getElementById('Family_environment_radio_2').value
    } else if (document.getElementById('Family_environment_radio_3').checked) {
        Family_environment_weight = document.getElementById('Family_environment_radio_3').value
    }

    var Skills_environment_weight;
    if (document.getElementById('Skills_environment_radio_1').checked) {
        Skills_environment_weight = document.getElementById('Skills_environment_radio_1').value
    } else if (document.getElementById('Skills_environment_radio_2').checked) {
        Skills_environment_weight = document.getElementById('Skills_environment_radio_2').value
    } else if (document.getElementById('Skills_environment_radio_3').checked) {
        Skills_environment_weight = document.getElementById('Skills_environment_radio_3').value
    }

    var Inclusiveness_weight;
    if (document.getElementById('Inclusiveness_radio_1').checked) {
        Inclusiveness_weight = document.getElementById('Inclusiveness_radio_1').value
    } else if (document.getElementById('Inclusiveness_radio_2').checked) {
        Inclusiveness_weight = document.getElementById('Inclusiveness_radio_2').value
    } else if (document.getElementById('Inclusiveness_radio_3').checked) {
        Inclusiveness_weight = document.getElementById('Inclusiveness_radio_3').value
    }

    var Quality_of_life_weight;
    if (document.getElementById('Quality_of_life_radio_1').checked) {
        Quality_of_life_weight = document.getElementById('Quality_of_life_radio_1').value
    } else if (document.getElementById('Quality_of_life_radio_2').checked) {
        Quality_of_life_weight = document.getElementById('Quality_of_life_radio_2').value
    } else if (document.getElementById('Quality_of_life_radio_3').checked) {
        Quality_of_life_weight = document.getElementById('Quality_of_life_radio_3').value
    }

    var divisor = parseFloat(Quality_of_opportunities_weight) + parseFloat(Income_weight) + parseFloat(Future_prospects_weight) + parseFloat(Family_environment_weight) + parseFloat(Skills_environment_weight) + parseFloat(Inclusiveness_weight) + parseFloat(Quality_of_life_weight)
   //(Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight*d.Future_prospects + Family_environment_weight*d.Family_environment + Skills_environment_weight * d.Skills_environment+ Inclusiveness_weight*d.Inclusiveness + Quality_of_life_weight*d.Quality_of_life)

    if (width > 800) {


        lollipopsCircle.data(data.filter(function (d) { return d.Cat == crtSelected; }))
           // .enter()
            .transition()
            .duration(1000)
            .ease(d3.easeBounce) 
            .attr("cy", function (d) {
                return yScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life)*d.Penalty/divisor);
            })


        lollipopsText
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .transition()
            .duration(1000)
            .ease(d3.easeBounce) 
            .attr("dx", function (d) {
                return -yScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life) * d.Penalty / divisor);
            })

        lollipopsLine
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .transition()
            .duration(1000)
            .ease(d3.easeBounce) 
            .attr("y2", function (d) {
                return yScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life) * d.Penalty / divisor);
            })


    } else {
        lollipopsCircle.data(data.filter(function (d) { return d.Cat == crtSelected; }))
            // .enter()
            .transition()
            .duration(1500)
            .ease(d3.easeBounce)
            .attr("cx", function (d) {
                return xScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life) * d.Penalty / divisor);
            })


        lollipopsText
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .transition()
            .duration(1500)
            .ease(d3.easeBounce)
            .attr("dx", function (d) {
                return xScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life) * d.Penalty / divisor);
            })

        lollipopsLine
            .data(data.filter(function (d) { return d.Cat == crtSelected; }))
            .transition()
            .duration(1500)
            .ease(d3.easeBounce)
            .attr("x2", function (d) {
                return xScale((Quality_of_opportunities_weight * d.Quality_of_opportunities + Income_weight * d.Income + Future_prospects_weight * d.Future_prospects + Family_environment_weight * d.Family_environment + Skills_environment_weight * d.Skills_environment + Inclusiveness_weight * d.Inclusiveness + Quality_of_life_weight * d.Quality_of_life) * d.Penalty / divisor);
            })


    }

}



