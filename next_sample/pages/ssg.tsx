import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type SSGProps = {
  messages: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { messages } = props;

  return (
    <div>
      <Head>
        <title> Static Site Generation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 SSG를 통해 빌드 시 생성된 페이지 입니다.</p>
        <p>{messages}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const messages = `${timestamp}에 getStaticProps가 실행되었습니다.`;

  return {
    props: {
      messages,
    },
  };
};
export default SSG;
