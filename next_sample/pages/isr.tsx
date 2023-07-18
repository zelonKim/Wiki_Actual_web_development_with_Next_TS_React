import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'

type ISRProps = {
  messages: string;
};


const ISR: NextPage<ISRProps> = (props) => {
  const { messages } = props;

  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <Head>
        <title> Static Site Generation </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>이 페이지는 ISR을 통해 빌드 시 생성된 페이지 입니다.</p>
        <p>{messages}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const messages = `${timestamp}에 getStaticProps가 실행되었습니다.`;

  return {
    props: {
      messages,
    },
    revalidate: 60,
  };
};
export default ISR;
