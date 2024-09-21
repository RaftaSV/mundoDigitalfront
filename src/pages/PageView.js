import useQuery from 'hooks/useQuery';
import Layout from 'components/Organisms/Layout';
import PieChart from '../components/Molecules/Charts/PieChart';
import HeaderPage from '../components/Molecules/HeaderPage';
import useLatAmDate from '../hooks/getDate';
import React, { useCallback, useEffect, useState } from 'react';
import DateAtom from '../components/Atoms/Date';
import HeaderInfoPage from '../components/Organisms/HeaderInfoPage';
import PieChartProductSales from '../components/Molecules/Charts/PieChartProductSale';
import ContainerCard from '../components/template/ContainerCard';

const PageView = () => {
  const latAmDate = useLatAmDate();
  const [selectedDate, setSelectedDate] = useState(latAmDate);

  const { data, refresh } = useQuery(selectedDate ? `/Pageview/${selectedDate}` : null);
  const { data: productData, refresh: productRefresh } = useQuery(
    selectedDate ? `/products/information/${selectedDate}` : null
  );
  const { data: invoiceData, loading: invoiceLoading, refresh: invoiceRefresh } = useQuery(
    selectedDate ? `/invoices/information/${selectedDate}` : null
  );
  const [monthlySales, setMonthlySales] = useState(0.00);
  const [difference, setDifference] = useState(0.00);

  const handleChangeDate = useCallback((e) => {
    setSelectedDate(e.target.value);
  }, []);

  const refreshAll = async () => {
    await refresh();
    await productRefresh();
    await invoiceRefresh();
  };

  useEffect(() => {
    if (invoiceData) {
      setMonthlySales(invoiceData.totalMonthlySales ?? 0.00);
      setDifference(invoiceData.percentageDifference ?? 0.00);
    }
  }, [invoiceData]);

  useEffect(() => {
    refreshAll();
  }, [selectedDate]);

  document.title = 'Informacion del sitio';

  return (
    <Layout>
      <HeaderPage title={'Informacion'}>
        <DateAtom
          value={selectedDate}
          onChange={handleChangeDate}
        />
      </HeaderPage>
      <HeaderInfoPage data={data} productData={productData} monthlySales={monthlySales} difference={difference}/>
      <ContainerCard widthDesktop={300} widthTablet={200} widthMobile={175}>
      <PieChart
        title={'Top 10 páginas visitadas hoy'}
        data={data?.viewsByUrl}
      />
      <PieChartProductSales
        title={'Top 10 productos vendidos hoy'}
        data={productData?.totalProductsSale}
      />
      </ContainerCard>
    </Layout>
  );
};

export default PageView;
