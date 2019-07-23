import React, { createRef, useEffect, useState } from "react";
import Chart from "chart.js";
import "chartjs-plugin-annotation";

export const FancyChart = ({ dataSet1, dataSet2, fbAverage, max }) => {
  const [showAnnotation, setShowAnnotation] = useState(false);

  const ref = createRef();

  useEffect(() => {
    const customChart = new Chart(ref.current, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Male",
            data: dataSet1,
            backgroundColor: "rgba(100, 0, 0, 0.1)",
            pointRadius: 0
          },
          {
            label: "Female",
            data: dataSet2,
            backgroundColor: "rgba(0, 50, 0, 0.1)",
            pointRadius: 0
          }
        ]
      },

      options: {
        legend: false,
        onHover: (event, item) => {
          if (item.length > 0 && !showAnnotation) {
            setShowAnnotation(true);
          } else if (item.length === 0 && showAnnotation) {
            setShowAnnotation(false);
          }
        },
        hover: {
          mode: "dataset",
          intersect: false
        },
        annotation: showAnnotation && {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-label",
              value: fbAverage,
              borderColor: "black",
              label: {
                content: `Facebook Average: ${fbAverage}`,
                enabled: true,
                position: "top"
              }
            }
          ]
        },
        animation: {
          duration: 0
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
                suggestedMax: max,
                callback: function(value) {
                  if (value === 0) {
                    return 0;
                  } else if (value === max) {
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
        layout: { padding: 150 }
      }
    });
  });
  return <canvas ref={ref} />;
};
