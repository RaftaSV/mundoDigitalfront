import styled from 'styled-components';

export const InvoiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  width: 330px;
  min-height: 85px;
  transition: box-shadow 0.3s ease;
  isolation: isolate;
  display: flex;
  flex-direction: column;
  position: relative;


  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const InvoiceHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.bgCard};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;

  border-radius: 12px;
  align-items: center;
  height: 100px;
  flex-direction: row;
`;

export const InvoiceHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 270px;
`
export const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`
export const InvoiceHeaderButtons = styled.div`
  width: 30px;
  display: flex;
  `
export const ExpandButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const InvoiceFooter = styled.div`
  width: 330px;
  height:50px;
  background: ${({ theme }) => theme.colors.bgCard};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InvoiceDetails = styled.div`
  width: 330px;
  background-color: ${({ theme }) => theme.colors.bgcard};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const ProductItem = styled.div`
  display: flex;
  width: 330px;
  background-color: ${({ theme }) => theme.colors.nav};
  gap: 15px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`;

export const ProductImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  filter: drop-shadow(${({ theme }) => theme.colors.boxShadow});
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`;

export const ProductName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const ProductQuantity = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 4px;
`;

export const ProductPrice = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2px;
`;

export const ProductTotal = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  margin-top: 2px;
`;

export const TotalAmount = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 15px;
  text-align: right;
  padding-top: 10px;
  border-top: 2px solid ${({ theme }) => theme.colors.borderInput};
`;
