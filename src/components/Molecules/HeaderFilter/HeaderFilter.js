import Input from 'components/Atoms/Input';
import { SearchIcon, StyleWrapper } from './style';
import Search from 'components/Atoms/Icons/search';
const HeaderFilter = ({ value, handleSearch, placeHolder ,useRef}) => {

  return (
    <StyleWrapper>
      <Input
        size='500'
        sizeTablet='400'
        sizeMobile='180'
        placeholder={placeHolder}
        value={value}
        onChange={handleSearch}
        autoFocus={true}
        refProp={useRef}
      />
      <SearchIcon>
        <Search/>
      </SearchIcon>
    </StyleWrapper>
  );
}


export default HeaderFilter;
