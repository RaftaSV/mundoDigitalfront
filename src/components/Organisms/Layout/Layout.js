
import Navbar from 'components/Organisms/Navbar';
import {StyleWrapper, Content} from './style';

const Layout = ({ children, refresh }) => {
  return (
    <StyleWrapper className="App">
      <Navbar refresh={refresh}/>
      <Content>
      {children}
      </Content>
    </StyleWrapper>
  );
};

export default Layout;
