import   Card404  from 'components/Molecules/Card404'
import Layout from 'components/Organisms/Layout';

document.title = 'NotFound';

function NotFound() {
  return (
    <Layout>
    <div align={'center'}><Card404 /></div>
    </Layout>
  );
}

export default NotFound;
