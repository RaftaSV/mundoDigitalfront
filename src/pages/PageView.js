import useQuery from 'hooks/useQuery';

import Layout from 'components/Organisms/Layout';

import PieChart from '../components/Molecules/Charts/PieChart';
import Button from '../components/Atoms/Button';
import { RefreshCcwIcon } from 'lucide-react'
import HeaderPage from '../components/Molecules/HeaderPage';
const PageView = () => {

  const { data, loading, refresh } = useQuery(`/Pageview`);
  document.title = 'Informacion del sitio';
  return(
    <Layout>
      <HeaderPage title={'Informacion del sitio web' } >
        <Button onClick={async ()=>{
          await refresh()
        }} color={'transparent'}>
          <RefreshCcwIcon color="#3e9392" />
        </Button>
      </HeaderPage>
      <PieChart
        data={data?.viewsByUrl}
        totalView={data?.totalViews}
      />
    </Layout>
  )
};

export default PageView;
