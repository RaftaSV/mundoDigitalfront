import ContainerCard from '../../template/ContainerCard';
import {ChartNoAxesCombinedIcon, EyeIcon, LucideCircleDollarSign, ShoppingCartIcon} from 'lucide-react';
import InfoCard from '../../Molecules/InfoCard';


const HeaderInfoPage = ({productData, data, monthlySales, difference}) => {
  return (
    <ContainerCard widthDesktop={280} widthMobile={150} widthTablet={280}>
      <InfoCard
        title={'Venta mensual'}
        value={`$ ${monthlySales}`}
        description={`${difference} respecto al mes anterior`}
        color={'success'}
      >
        <LucideCircleDollarSign size={25}/>
      </InfoCard>
      <InfoCard title={'Vistas del sitio web'} value={data ? data?.totalViews : 0}
                description={'Histórico de visitas registradas'}
                color={'warning'}
      >
        <EyeIcon size={25}/>
      </InfoCard>
      <InfoCard title={'Visitas al sitio web'} value={data?.viewsByUrlDaily[0]?.totalViews || 0}
                description={'Visitas registradas este dia'}
                color={'info'}
      >
        <ChartNoAxesCombinedIcon size={25}/>
      </InfoCard>
      <InfoCard title={'Total productos vendidos'} value={productData ? productData?.totalHistoryProductsSale : 0}
                description={'Histórico de ventas de productos'}
                color={'secondary'}
      >
        <ShoppingCartIcon size={25}/>
      </InfoCard>
    </ContainerCard>
  );
};

export default HeaderInfoPage;
