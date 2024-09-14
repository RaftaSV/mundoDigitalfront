import useQuery from 'hooks/useQuery';

import Layout from 'components/Organisms/Layout';

import PieChart from '../components/Molecules/Charts/PieChart';
import Button from '../components/Atoms/Button';

const PageView = () => {

  const { data, loading, refresh } = useQuery(`/Pageview`);


  return(
    <Layout>
      <br/>
      <Button onClick={async ()=>{
        await refresh()
      }}> refrescar</Button>
      <PieChart
        data={data?.viewsByUrl}
        title={'Visitas de paginas'}
      />
    </Layout>
  )
};

export default PageView;
