import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image}), var(--darkGray);
  background-size: 100%, cover;
  height: 500px;
  position: relative;
  background-position: center;
  animation: animateHeroImage 1s;

  @keyframes animateHeroImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 20px;
`;

export const Text = styled.div`
  z-index: 100;
  max-width: 700px;
  position: absolute;
  bottom: 30px;
  min-height: 100px;
  color: var(--white);

  h1 {
    font-size: var(--fontSuperBig);
    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    margin-top: 10px;
    font-size: var(--fontMedium);
    color: var(--lightGray);

    @media screen and (max-width: 720px) {
      fonts-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
