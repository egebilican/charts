import React, { createRef, useEffect, useState } from "react";
import Chart from "chart.js";
import "chartjs-plugin-annotation";

export const FancyChart = props => {
  const [showAnnotation, setShowAnnotation] = useState(false);
  console.log("showAnnotation", showAnnotation);

  const ref = createRef();
  useEffect(() => {
    const customChart = new Chart(ref.current, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Male",
            data: props.dataSet1,
            backgroundColor: "rgba(100, 0, 0, 0.1)",
            pointRadius: 2,
            hoverBackgroundColor: "blue"
          },
          {
            label: "Female",
            data: props.dataSet2,
            backgroundColor: "rgba(0, 50, 0, 0.1)",
            pointRadius: 2
          }
        ]
      },

      options: {
        legend: false,

        onHover: (event, item) => {
          if (item.length > 0 && !showAnnotation) {
            console.log("to true");

            setShowAnnotation(true);
          } else if (item.length === 0 && showAnnotation) {
            console.log("to false");
            setShowAnnotation(false);
          }
        },
        tooltips: {
          mode: "point"
        },
        hover: {
          mode: "nearest",
          intersect: false
        },
        annotation: showAnnotation && {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-label",
              value: props.linePos,
              borderColor: "black",
              label: {
                content: `Facebook Average: ${props.linePos}`,
                enabled: true,
                position: "top"
              }
            }
          ]
        },
        elements: {
          line: {
            borderWidth: 0
          }
        },
        scales: {
          yAxes: [
            {
              gridLines: { drawTicks: false },
              scaleLabel: {
                display: true,
                labelString: "Viewership"
              },
              ticks: {
                suggestedMax: props.max,
                callback: function(value) {
                  if (value === 0) {
                    return 0;
                  } else if (value === props.max) {
                    return `${value} %`;
                  }
                  return "";
                }
              }
            }
          ],
          xAxes: [
            {
              gridLines: { drawTicks: false },
              type: "linear",
              id: "x-axis-label",
              ticks: {
                display: false
              }
            }
          ]
        },
        layout: {
          padding: 160,
          backgroundColor: "grey"
        }
      }
    });
  });
  return <canvas ref={ref} />;
};
