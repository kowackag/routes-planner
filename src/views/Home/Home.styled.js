import styled from 'styled-components';

const StyledHome = styled.div`
  color: var(--color-darkBlue);
  ul {
    line-height: 1.8;
    list-style: none;
    color: var(--color-darkBlue);
    li {
      margin-bottom: 1rem;
    }
    a {
      text-decoration: none;
      &:visited {
        color: inherit;
      }
    }
  }
`;
export default StyledHome;
