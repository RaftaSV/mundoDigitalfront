import LibModal from 'react-modal';
import {customStyles, StyleBody } from './style';

const ModalMenuAtom = ({
                 isOpen,
                 children,
                 onCancel,
                 title,
                 okText = 'Ok',
                 okProps = {},
                 width = 450,
                 contentStyle = customStyles.content,
                 closeButton = true,
                 ...restProps
               }) => {
  return (
    <LibModal style={{ ...customStyles, content: contentStyle }} isOpen={isOpen} {...restProps}>
      <StyleBody
        style={{
          maxWidth: width
        }}
      >
        {children}
      </StyleBody>
    </LibModal>
  );
};

export default ModalMenuAtom;
