import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit Clone</title>
        <meta name="description" content="Reddit clone by @chiziivictor" />
      </Head>

      <PostCard />
    </div>
  );
};

export default Home;
