import { useEffect } from 'react';
import Layout from 'components/Organisms/Layout';
import HeaderPage from '../components/Molecules/HeaderPage';
import Payment from '../components/template/Payment';


const  PaymentProducts = () => {

  useEffect(() => {
    document.title= 'Paga aqui'
  }, []);
  return (
    <Layout>
      <HeaderPage title={'Finalizar Compra'}/>
      <Payment/>
    </Layout>
  )
}

export default PaymentProducts;
