import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>KYRO</title>
        <meta name="description" content="KYRO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home page</h1>
      <Link href='/account'>
        <a>Account</a>
      </Link>
    </div>
  )
}

export default Home
