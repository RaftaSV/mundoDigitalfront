import Delete from 'components/Atoms/Icons/Delete';
import { StyleButtonDelete, StyleButtonEdit, StyleWrapper } from './style';
import useTokenInformation from 'hooks/useTokenInformation';
import {Trash, Edit} from 'lucide-react'
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
        <Edit
        />
      </StyleButtonEdit>
      <StyleButtonDelete onClick={  (event)=>{
        event.preventDefault();
        onRemove();
      }}>
        <Trash />
      </StyleButtonDelete>
    </StyleWrapper>
  );
}

export default ButtonEditAndDelete;
