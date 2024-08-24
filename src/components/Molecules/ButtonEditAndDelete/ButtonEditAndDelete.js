import Delete from 'components/Atoms/Icons/Delete';
import { StyleButtonDelete, StyleButtonEdit, StyleButtonSend, StyleWrapper } from './style';
import PencilFilled from 'components/Atoms/Icons/PencilFilled';
import useTokenInformation from 'hooks/useTokenInformation';

const ButtonEditAndDelete = ({ onEdit, onRemove = false, showSend }) => {
  const { userType } = useTokenInformation();

  // Condición para mostrar los botones solo si userType es diferente de 'CAJERO'
  if (userType === 'CLIENTE') {
    return null;
  }

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
    </StyleWrapper>
  );
}

export default ButtonEditAndDelete;
