import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const TahsilatMixed = () => {
  useEffect(() => {
    const charts = document.querySelectorAll('.mixed-widget-17-chart');

    Array.from(charts).forEach((element: HTMLElement) => {
      const height = parseInt(window.getComputedStyle(element).height || '0');

      if (!element) {
        return;
      }

      const color = element.getAttribute('data-kt-chart-color') || 'primary';

      const options: ApexCharts.ApexOptions = {
        labels: [""],
        series: [75],
        chart: {
          fontFamily: 'inherit',
          height: height,
          type: 'radialBar',
          offsetY: 0
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 0,
              size: "55%"
            },
            dataLabels: {
              showOn: "always",
              name: {
                show: true,
                fontSize: "12px",
                fontWeight: "700",
                offsetY: -5,
                color: getComputedStyle(document.documentElement).getPropertyValue('--bs-gray-500')
              },
              value: {
                color: getComputedStyle(document.documentElement).getPropertyValue('--bs-gray-900'),
                fontSize: "24px",
                fontWeight: "600",
                offsetY: -40,
                show: true,
                formatter: function (value: number) {
                  return '8,346';
                }
              }
            },
            track: {
              background: getComputedStyle(document.documentElement).getPropertyValue('--bs-gray-300'),
              strokeWidth: '100%'
            }
          }
        },
        colors: [getComputedStyle(document.documentElement).getPropertyValue('--bs-' + color)],
        stroke: {
          lineCap: "round",
        }            
      };

      const chart = new ApexCharts(element, options);
      chart.render();
    });
  }, []);

  return null; // Bu bileşen bir arayüz üretmiyor, bu yüzden null döndürüyoruz
}

export default TahsilatMixed;
