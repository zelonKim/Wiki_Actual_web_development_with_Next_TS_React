import styled, { css } from "styled-components";

// variants는 컴포넌트의 스타일에 키워드를 기반으로 변형시키는 기능임.
const variants = {
  primary: {
    color: "#ffffff",
    backgroundColor: "#1D3461",
    border: "none",
  },
  success: {
    color: "#ffffff",
    backgroundColor: "#5AB203",
    border: "none",
  },
  transparent: {
    color: "#111111",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
} as const;



type StyledButtonProps = {
  variant: keyof typeof variants;
};


export const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => {
    const style = variants[variant]; // variant에 주어진 키를 기반으로, 대응할 스타일을 얻음.

    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border: ${style.border};
    `;
  }}

  border-radius: 12px;
  font-size: 14px;
  hegith: 38px;
  line-height: 22px;
  letter-spacing: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;



