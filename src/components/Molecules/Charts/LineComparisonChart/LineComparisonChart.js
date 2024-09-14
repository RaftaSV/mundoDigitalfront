import React, { useEffect, useMemo, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { StyledWrapperChart } from './style';
import storage from 'utils/storage';
import { themeDark, themeLight } from 'styles/theme';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartDataLabels, Filler);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const LineComparisonChart = ({ currentMonthData, lastYearMonthData, title , firstLabel, secondLabel, xLabel }) => {

  const KEY_THEME_NAME = 'theme';
  const localTheme = storage.getItem(KEY_THEME_NAME);

  const [colorTitle, setColorTitle] = useState();
  const [tooltipBackgroundColor, setTooltipBackgroundColor] = useState();

  useEffect(() => {
    if (localTheme === 'light') {
      setColorTitle(themeLight.colors.text);
      setTooltipBackgroundColor(themeLight.colors.background);
    } else {
      setColorTitle(themeDark.colors.text);
      setTooltipBackgroundColor(themeDark.colors.background);
    }
  }, [localTheme]);

  const chartData = useMemo(() => {
    const currentMonthColor = getRandomColor();
    const lastYearMonthColor = getRandomColor();

    const labels = currentMonthData.map((item, index) => index + 1);

    // Convert hex color to rgba for transparency
    const hexToRgba = (hex, alpha = 0.5) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},${alpha})`;
    };

    const currentMonthBackgroundColor = hexToRgba(currentMonthColor);
    const lastYearMonthBackgroundColor = hexToRgba(lastYearMonthColor);

    return {
      labels: labels,
      datasets: [
        {
          label: firstLabel,
          data: currentMonthData.map(item => item.total),
          borderColor: currentMonthColor,
          backgroundColor: currentMonthBackgroundColor,
          borderWidth: 2,
          fill: true
        },
        {
          label: secondLabel,
          data: lastYearMonthData.map(item => item.total),
          borderColor: lastYearMonthColor,
          backgroundColor: lastYearMonthBackgroundColor,
          borderWidth: 2,
          fill: true
        },
      ],
    };
  }, [currentMonthData, lastYearMonthData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: colorTitle,
        },
      },
      title: {
        display: true,
        text: title,
        color: colorTitle,
      },
      tooltip: {
        backgroundColor: tooltipBackgroundColor,
        bodyColor: colorTitle,
        titleColor: colorTitle,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: colorTitle,
        },
        grid: {
          display: false
        },
        title: {
          display: true,
          text: xLabel,
          color: colorTitle,
        },
      },
      y: {
        ticks: {
          color: colorTitle,
        },
        grid: {
          display: false
        },
        title: {
          display: true,
          text: 'Ventas',
          color: colorTitle,
        },
        beginAtZero: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <StyledWrapperChart>
      <Line data={chartData} options={options} />
    </StyledWrapperChart>
  );
};

export default LineComparisonChart;
