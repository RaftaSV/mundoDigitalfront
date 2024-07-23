import styled from 'styled-components';
import Button from 'components/Atoms/Button';

export const StyleWrapper = styled.div`
  position: relative;
  max-width: 700px;
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 15px 0;
`;

export const StyleImage = styled.img`
  border-radius: 12px;
  max-width: 400px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;



export const StyleButtonRegresar = styled(Button)`
  position: absolute;
  background:${({ theme }) => theme.colors.success};
  color:${({ theme }) => theme.colors.Backgraund};
  min-width: auto;
  padding: 0;
  width:80px;
  height: 60px;
  right: 10px;
  top: 80%;
  border-radius: 50px;
  font-size: -100px;
`;
