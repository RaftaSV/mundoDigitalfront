import styled from 'styled-components';
import Input from 'components/Atoms/Input';
import Title from 'components/Atoms/Title';
import { mediaQueries } from 'styles/theme';
export const FormContainer = styled.div`
${mediaQueries.mobile}{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bgCard};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  max-width: 100vw;
  min-width: 80vw;
  margin-top: 5%;
  max-height: 80vh;
  min-height: 60vh;
  border-radius: 16px;

} ${mediaQueries.tablet}{
  margin-top: 3%;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  background-color: ${({ theme }) => theme.colors.bgCard};
  max-width: 85vw;
  min-width: 70vw;
  border-radius: 16px;
}
  ${mediaQueries.desktop}{
  background-color: ${({ theme }) => theme.colors.bgCard};
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  max-width: 85vw;
  min-width: 70vw;
  align-items: center;
    justify-content: space-between;
  min-height: 80vh;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  margin-top: 3%;
  }
`;
export const Style = styled.form`
  ${mediaQueries.mobile}{
    display:flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    flex-direction: column;
  }
  ${mediaQueries.tablet}{
    display:flex;
    width: 40vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  ${mediaQueries.desktop}{
    width: 50%;
    border-radius: 16px;
    display: flex;
    border: 2px;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }
`;

export const StyleImageAvatar = styled.img`
  ${mediaQueries.mobile}{
    min-width: 30vw;
    max-width: 50vw;
  }
  ${mediaQueries.tablet}{
    min-width: 5vw;
    max-width: 20vw;
  }
  ${mediaQueries.desktop}{
    min-width: 3vw;
    max-width: 15vw;
  }
`;
export const StyleRegisterUser = styled.div`

  @media screen and (min-width: 768px) {
    margin-left: -90%;
    margin-top: 50%;
  }
  `;
export const StyleImageLogo = styled.img `
  ${mediaQueries.mobile}{
display: none;

}
  ${mediaQueries.tablet}{
    width: 475px;
    height: 355px;
  }
  ${mediaQueries.desktop}{
    width: 675px;
    height: 555px;
  }
`;

export const StyleShowPassword = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  `;

export const Checkbox = styled(Input)`
  display: flex;
  width: 17px;
  margin-left: 20px;
`;


