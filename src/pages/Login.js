import LoginMolecule from 'components/Molecules/Login/Login';
import LayoutLogin from 'components/Organisms/Layout';
import { AddUserModal } from 'components/Molecules/Modal/ModalUser';
import useModal from 'hooks/useModal';

function Login() {
  const { visible: visibleUser, onToggle: onToggleUser } = useModal();
  document.title = 'Iniciar Sesión';
return(
    <LayoutLogin>
      <LoginMolecule onClickUser={()=> onToggleUser()}/>
      <AddUserModal isOpen={visibleUser} onCancel={onToggleUser} isLogin={true} />
    </LayoutLogin>
)}


export default Login;
