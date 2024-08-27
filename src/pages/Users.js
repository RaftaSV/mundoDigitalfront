import useModal from 'hooks/useModal';
import useQuery from 'hooks/useQuery';
import { useEffect, useState } from 'react';
import Layout from 'components/Organisms/Layout';
import Loader from 'components/Molecules/Loader';
import HeaderPage from 'components/Molecules/HeaderPage';
import { AddUserModal } from 'components/Molecules/Modal/ModalUser';
import useMutation from '../hooks/useMutation';
import CardUser from 'components/Molecules/Card/CardUsers';
import modalDelete from 'components/Molecules/Modal/ModalDelete';
import ContainerCard from '../components/template/ContainerCard';

const Users = () => {
  const { visible, onToggle } = useModal();
  const [userEdit, setUserEdit] = useState(null);
  const { visible: isUpdate, onHidden, onVisible } = useModal();
  const { data, loading, refresh } = useQuery( `/Users`);

  const [deleteUser] = useMutation(`/Users`, {
    refresh,
    method: 'delete'
  });

  const onEdit = (user) => {
    onVisible();
    setUserEdit(user);
    onToggle();
  };

  const onClose = () => {
    onHidden();
    setUserEdit(null);
    onToggle();
  };

  useEffect(() => {
    document.title = 'Usuarios';

  }, []);

  return (
    <Layout>
      <HeaderPage title="Usuarios" onAdd={onToggle}>
      </HeaderPage>
      {loading ? (
        <Loader />
      ) : (
        <ContainerCard
          widthMobile={300}
          widthTablet={300}
          widthDesktop={300}
        >
          {data?.map((user) => {
            const { userId, fullName,address, email, phoneNumber, userstype, status } = user;
            return (
              <CardUser
                key={userId}
                name={fullName}
                email={email}
                tel={phoneNumber}
                userType={userstype.userType}
                address={address}
                onEdit={() => onEdit(user)}
                onRemove={() => {
                  modalDelete(userId, `Desea eliminar este usuario ${fullName}`, 'info', deleteUser);
                }}
                status={status}
              />
            );
          })}
        </ContainerCard>
      )}
      <AddUserModal
        user={userEdit}
        isOpen={visible}
        isUpdate={isUpdate}
        onRefresh={refresh}
        onCancel={onClose}
      />
    </Layout>
  );
}

export default Users;
