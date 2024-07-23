import ReactSelect from 'react-select';
import styled from 'styled-components';
import { mediaQueries } from 'styles/theme';

export const StyledSelect = styled(ReactSelect)`
  .react-select__single-value {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    font-size: 15px;
    width: 100%;
  }

  .react-select__control {
    min-height: 20px;
    height: 35px;
    border: none;
    border-radius: 16px;
    border: 2px solid ${({ theme }) => theme.colors.borderInput};
    background: ${({ theme }) => theme.colors.input};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.shadowInput};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-select__menu {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.input};
  }

  .react-select__option {
    text-align: center; /* Center the text for all options */
  }

  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.price};
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
  }

  .react-select__option--is-focused {
    background-color: ${({ theme }) => theme.colors.selected};
    color: white;
    text-align: center;
  }

  ${mediaQueries.desktop} {
    width: 250px;
  }

  ${mediaQueries.tablet} {
    width: 200px;

    .react-select__control {
      border-radius: 12px;
    }
  }

  ${mediaQueries.mobile} {
    width: 180px;

    .react-select__control {
      border-radius: 10px;
    }
  }
`;
