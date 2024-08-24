import React from 'react';
import Input from 'components/Atoms/Input';
import { SearchIcon, StyleWrapper } from './style';
import Search from 'components/Atoms/Icons/search';

const HeaderFilter = React.forwardRef(({ value, handleSearch, placeHolder }, ref) => {
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
        ref={ref} // Usar la ref pasada
      />
      <SearchIcon>
        <Search/>
      </SearchIcon>
    </StyleWrapper>
  );
});

export default HeaderFilter;
