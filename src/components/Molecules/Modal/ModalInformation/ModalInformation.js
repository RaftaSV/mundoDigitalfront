import { createRoot } from 'react-dom/client';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';
import storage from 'utils/storage';
import { themeDark, themeLight } from 'styles/theme';
import React, { useEffect, useState } from 'react';

const ModalInformationComponent = ({ title, icon, executeFunction }) => {

  // eslint-disable-next-line
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
    const swalOptions = {
      title: title,
      icon: icon,
      background: background,
      confirmButtonColor: '#02a627',
      color: colorTitle
    };

    if (executeFunction) {
      swalOptions.showDenyButton = true;
      swalOptions.confirmButtonText = 'Sí';
      swalOptions.denyButtonText = 'No';
      swalOptions.denyButtonColor = '#0d32f6';

      MySwal.fire(swalOptions).then((result) => {
        if (result.isConfirmed) {
          executeFunction();
        }
      });
    } else {
      swalOptions.confirmButtonText = 'Ok';
      MySwal.fire(swalOptions);
    }
  }, [background, colorTitle, title, icon, executeFunction /* eslint-disable-line */]);

  return null;
};

const  modalInformation = (title, icon, executeFunction) => {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  root.render(<ModalInformationComponent title={title} icon={icon} executeFunction={executeFunction} />);
};

export default modalInformation;
