
import Navbar from 'components/Organisms/Navbar';
import {StyleWrapper, Content} from './style';

const Layout = ({ children }) => {
  return (
    <StyleWrapper className="App">
      <Navbar />
      <Content>
      {children}
      </Content>
    </StyleWrapper>
  );
};

export default Layout;
