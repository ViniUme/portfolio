import Head from 'next/head';
import Navbar from '../components/navbar';

export default function Index() {
  return (
    <>
        <Head>
            <title></title>
            <meta name="description" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <Navbar/>
        </main>
    </>
  )
}
