import LibModal from 'react-modal';
import { customStyles as defaultCustomStyles, StyleBody } from './style';
import { useTheme } from 'styled-components';

LibModal.setAppElement('#root');

const Modal = ({
                 isOpen,
                 children,
                 onCancel,
                 title,
                 okText = 'Ok',
                 okProps = {},
                 width = 350,
                 contentStyle = defaultCustomStyles.content,
                 closeButton = true,
                 isLoading,
                 ...restProps
               }) => {
  const theme = useTheme();

  const customStyles = {
    overlay: {
      background: theme.colors.overlay || '#6e6e65', // Fallback si no hay valor en el tema
      backdropFilter: 'saturate(10%) blur(1px)',
      zIndex: 6,
    },
    content: {
      ...contentStyle,
    },
  };


  return (
    <LibModal style={{...customStyles,
      content: contentStyle}}
              isOpen={isOpen}
              onRequestClose={onCancel}
              shouldCloseOnOverlayClick={false}
              {...restProps}>

      <StyleBody $width={width}>
        {children}
      </StyleBody>
    </LibModal>
  );
};

export default Modal;
