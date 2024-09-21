import React, { useEffect, useMemo, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {StyledWrapper, StyledWrapperChart} from './style';
import storage from 'utils/storage';
import { themeDark, themeLight } from 'styles/theme';
import Title from 'components/Atoms/Title';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const PieChartProductSales = ({ data = [], title,  }) => {
  const KEY_THEME_NAME = 'theme';
  const localTheme = storage.getItem(KEY_THEME_NAME);
  const [background, setBackground] = useState();
  const [colorTitle, setColorTitle] = useState();

  useEffect(() => {
    if (localTheme === 'light') {
      setBackground(themeLight.colors.background);
      setColorTitle(themeLight.colors.text);
    } else {
      setBackground(themeDark.colors.background);
      setColorTitle(themeDark.colors.text);
    }
  }, [localTheme]);

  const chartData = useMemo(() => {
    return {
      labels: data?.map(item => item.product.productName),
      datasets: [
        {
          data: data?.map(item => item.cant),
          backgroundColor: data?.map(() => getRandomColor()),
          borderColor: data?.map(() => getRandomColor()),
          borderWidth: 0.5,
        },
      ],
    };
  }, [data]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          color: colorTitle,
        },
      },
      title: {
        display: true,
        text: title,
        color: colorTitle,
        position: 'top',
      },
      datalabels: {
        align: 'center',
        color: colorTitle,
      },
      tooltip: {
        backgroundColor: background,
        bodyColor: colorTitle,
        titleColor: colorTitle,
      },
    },
  };

  return (
    <StyledWrapper>
      {(data?.length  > 0) && data ? (
        <>
          <Title size={18} size_mobile={8}>{title}</Title>
          <StyledWrapperChart>
            <Pie data={chartData} options={options}/>
          </StyledWrapperChart>
        </>
      ) : (
        <>No hay datos</>
      )}
    </StyledWrapper>
  );
};

export default PieChartProductSales;
