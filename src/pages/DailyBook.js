import React, { useCallback, useEffect, useState } from 'react';
import useQuery from '../hooks/useQuery';
import Layout from 'components/Organisms/Layout';
import Invoice from '../components/Organisms/Invoice';
import HeaderPage from '../components/Molecules/HeaderPage';
import Date from '../components/Atoms/Date';
import useLatAmDate from 'hooks/getDate';
import ContainerCard from '../components/template/ContainerCard';
import Loader from '../components/Molecules/Loader';
import DailySalesInfo from '../components/Molecules/DailySales';

const DailySales = () => {
  const latAmDate = useLatAmDate();
  const [selectedDate, setSelectedDate] = useState(latAmDate);
  const [totalSales, setTotalSales] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const { data, loading, refresh } = useQuery(
    selectedDate ? `/invoices/${selectedDate}` : null
  );

  const invoices = data?.invoices;

  const handleChangeDate = useCallback((e) => {
    setSelectedDate(e.target.value);
  }, []);

  const calculateTotals = (invoices) => {
    let totalSales = 0;
    let totalCost = 0;

    invoices.forEach(invoice => {
      totalSales += parseFloat(invoice.total);

      invoice.details.forEach(detail => {
        if (detail.unitCost) {
          totalCost += parseFloat(detail.unitCost);
        }
      });
    });

    return { totalSales, totalCost };
  };

  useEffect(() => {
    if (selectedDate) {
      refresh();
    }
  }, [selectedDate, refresh]);

  useEffect(() => {
    if (data) {
      const { totalSales, totalCost } = calculateTotals(data.invoices);
      setTotalSales(totalSales);
      setTotalCost(totalCost);
     document.title = `Libro Diario - ${selectedDate}`
    }
  }, [data]);

  return (
    <Layout>
      <HeaderPage title={'Libro Diario'}>
        <Date value={selectedDate} onChange={handleChangeDate} />
      </HeaderPage>
      <ContainerCard widthDesktop={200} widthMobile={130} widthTablet={180}>
        <DailySalesInfo title={'Venta diaria'} value={totalSales}/>
        <DailySalesInfo title={'Ganancia diaria'} value={parseFloat(totalSales - totalCost).toFixed(2)}/>
      </ContainerCard>
      {loading ? (
        <Loader/>
      ) : (
        <>
          {(!Array.isArray(invoices) || invoices.length === 0) ? (
            <>No hay datos de ventas disponibles.</>
          ) : (
            <ContainerCard widthMobile={330} widthTablet={330} widthDesktop={330}>
              <Invoice invoices={invoices} />
            </ContainerCard>
          )}
        </>
      )}
    </Layout>
  );
};

export default DailySales;
