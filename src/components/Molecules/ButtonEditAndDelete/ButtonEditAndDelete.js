import Delete from 'components/Atoms/Icons/Delete';
import { StyleButtonDelete, StyleButtonEdit, StyleButtonSend, StyleWrapper } from './style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';
import SendProduct from 'components/Atoms/Icons/SendProduct';
import useTokenInformation from 'hooks/useTokenInformation';

const ButtonEditAndDelete = ({ onEdit, onRemove = false, showSend }) => {
  const { userType } = useTokenInformation();

  // Condición para mostrar los botones solo si userType es diferente de 'CAJERO'
  if (userType === 'CLIENTE') {
    return null;
  }

  console.log(userType)
  return (
    <StyleWrapper>
      <StyleButtonEdit onClick={(event)=> {
        event.preventDefault();
        onEdit();
      }}>
        <PencilFilled />
      </StyleButtonEdit>
      <StyleButtonDelete onClick={  (event)=>{
        event.preventDefault();
        onRemove();
      }}>
        <Delete />
      </StyleButtonDelete>
      {userType==='ADMIN' && (
        <StyleButtonSend onClick={showSend}>
          <SendProduct />
        </StyleButtonSend>
      )}
    </StyleWrapper>
  );
}

export default ButtonEditAndDelete;
