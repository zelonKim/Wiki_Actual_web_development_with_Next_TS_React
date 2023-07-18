import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

const EnvSample: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title> Create Next App </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p> {process.env.TEST}</p>
        <p> {process.env.NEXT_PUBLIC_TEST} </p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

export default EnvSample;
