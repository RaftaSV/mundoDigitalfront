import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import showAlert from 'components/Atoms/SweetAlert';
import storage from 'utils/storage';
import {themeDark, themeLight} from 'styles/theme';
import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';

const ModalDeleteComponent = ({ id, title, icon, deleteMethod }) => {
  const MySwal = withReactContent(Swal);

  const KEY_THEME_NAME = 'theme';
  const localTheme = storage.getItem(KEY_THEME_NAME);
  const [background, setBackground] = useState();
  const [colorTitle, setColorTitle] = useState();

  useEffect(() => {
    if (localTheme === 'light') {
      setBackground(themeLight.colors.background);
      setColorTitle(themeLight.colors.text);
    } else {
      setBackground(themeDark.colors.background);
      setColorTitle(themeDark.colors.text);
    }
  }, [localTheme]);

  useEffect(() => {
    MySwal.fire({
      title: title,
      icon: icon,
      showDenyButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `No eliminar`,
      background: background,
      confirmButtonColor: '#ff0000',
      denyButtonColor: '#373c56',
      color: colorTitle
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteMethod({}, id);
        if (result?.data) {
          showAlert('', result.data.message, 1000);
        }
      }
    });
  }, [background, colorTitle, id, title, icon, deleteMethod]);

  return null;
};

const modalDelete = (id, title, icon, deleteMethod) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<ModalDeleteComponent id={id} title={title} icon={icon} deleteMethod={deleteMethod} />);
};

const onDelete = (id, title, icon, deleteMethod) => {
  modalDelete(id, title, icon, deleteMethod);
};

export default modalDelete;
