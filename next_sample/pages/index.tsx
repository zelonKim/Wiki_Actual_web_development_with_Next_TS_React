/* import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`
  color: red;
`

const Home: NextPage = () => {
  return (
      <div className={styles.container}>
        <main className={styles.main}>
          <H1>
            Welcome to <a href="https://nextjs.org"> Next.js </a>
          </H1>
        </main>
      </div>
    )
}
export default Home; */

///////////////
/* 
import type { NextPage } from "next";
import styled, { css } from "styled-components";

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid red;
  border-radius: 10px;
`;

const font = css`
  color: blue;
`;

const Button = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redBox}
  ${font}
`;

const Text = styled.p`
  font-weight: bold;
  ${font}
`;

const Page: NextPage = () => {
  return (
    <div>
      <Button> Hello </Button>
      <Text> World </Text>
    </div>
  );
};
export default Page;
 */

//////////////////////

/* 
import { NextPage } from "next";
import Link, { LinkProps } from "next/link";
import styled from "styled-components";

type BaseLinkProps = React.PropsWithChildren<LinkProps> & {
  className?: string;
  children: React.ReactNode;
};



const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props;

  return (
    <Link {...rest} className={className}>
      {children}
    </Link>
  );
};


const StyledLink = styled(BaseLink)`
  color: red; // color와 font-size는 BaseLink의 props.className으로 전달됨.
  font-size: 2em;
`;

const Page: NextPage = () => {
  return (
    <div>
      <StyledLink href="/gogo"> Go to index </StyledLink>
    </div>
  );
};
export default Page;
// 'Go to index'는 BaseLink의 props.children으로 전달됨.

// href="/gogo"는 BaseLink의 ...rest로 전달됨.
 */

///////////////////

/* import { NextPage } from "next";
import styled from "styled-components";

const Text = styled.span`
  color: ${(props) => props.theme.colors.red}
  font-size: ${(props) => props.theme.fontSizes[3]}
  margin: ${(props) => props.theme.space[2]}
`;
// theme에서 정의한 값을 사용할때는 props의 theme 객체를 참조함.

const Page: NextPage = () => {
  return (
    <div>
      <Text> Theme에서 참조한 색상을 사용하고 있습니다. </Text>
    </div>
  );
};
export default Page; */

/////////////////////

// 프레젠테이션 컴포넌트
import ".styles.css";

type ButtonProps = {
  label: string;
  text: string;
  disabled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props;

  return (
    <div className="button-container">
      <span> {label} </span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

///////////////////

// 컨테이너 컴포넌트
import { useState, useCallback } from "react";

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text);
  }, []);
  return cb;
};

type CountButtonProps = {
  label: string;
  maximum: number;
};

export const CountButton = (props: CountButtonProps) => {
  const { label, maximum } = props;

  const displayPopup = usePopup();

  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount >= maximum) {
      displayPopup(`You've clicked ${newCount} times`);
    }
  }, [count, maximum]);

  const disabled = count >= maximum;
  const text = disabled
    ? `Can't click any more`
    : `You've clicked ${count} times`;

  return (
    <Button disabled={disabled} onClick={onClick} label={label} text={text} />
  );
};
