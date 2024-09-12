import {Container} from './styled';

export const ContainerCard =({children, widthMobile,widthTablet, widthDesktop}) => {

  return(
      <Container
        $widthMobile={widthMobile}
        $widthTablet={widthTablet}
        $widthDesktop={widthDesktop}
      >
        {children}
      </Container>
  )
}

export default ContainerCard
