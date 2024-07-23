import LibModal from 'react-modal';
import {customStyles, StyleBody, StyleCloseBtn, StyleFooter, StyleTitle} from './style';
import Title from '../Title';
import Button from '../Button';
import Loading from '../Loading';
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
