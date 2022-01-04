import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 0.3s;
  object-fit: cover;
  height: ${({ movieHeight }) => (movieHeight ? `520px` : `auto`)};
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
