import LibModal from 'react-modal';
import {customStyles, StyleBody, StyleCloseBtn, StyleFooter, StyleTitle} from './style';
import Title from '../Title';
import Button from '../Button';
import Loading from '../Loading';
import { useTheme } from 'styled-components';
LibModal.setAppElement('*');



const Modal = ({
  isOpen,
  children,
  onCancel,
  title,
  okText = 'Ok',
  okProps = {},
  width = 300,
  contentStyle = customStyles.content,
  closeButton = true,
                 isLoading,
                 ...restProps

}) => {
  const theme = useTheme();

  const customStyles = {
    overlay: {
      background: theme.colors.overlay || '#6e6e65', // Fallback si no hay valor en el tema
      backdropFilter: 'saturate(10%) blur(1px)',
      zIndex: 30,
    },
    content: {
      ...contentStyle,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
    },
  };


  return (
    <LibModal style={{ ...customStyles, content: contentStyle }} isOpen={isOpen} {...restProps}>
      <StyleTitle>
        {title && <Title size={27}>{title}</Title>}
        {closeButton && (
          <StyleCloseBtn labelColor="text" color="transparent" onClick={() => { onCancel()}}>
            X
          </StyleCloseBtn>
        )}
      </StyleTitle>
      <StyleBody $width={width}>
        {children}
      </StyleBody>
      <StyleFooter>
        <Button {...okProps} disabled={isLoading} >
          {isLoading ? <Loading /> : `${okText}`}
        </Button>
      </StyleFooter>
    </LibModal>
  );
};

export default Modal;
