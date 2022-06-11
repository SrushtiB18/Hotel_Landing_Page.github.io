import Head from 'next/head'
import Script from 'next/script'
import styles from '../styles/Home.module.css'
import Intro from '../components/intro';
import Rooms from '../components/rooms';
import Services from '../components/services';
import About from '../components/about';
import Contact from '../components/contact';
// import styles from '../styles/Intro.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Purple Orchid Hotel</title>
        <meta name="description" content="The best luxury hotel for family and friends" />
        <link rel="icon" href="favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>
      <Intro/>
      <About/>
      <Rooms/>
      <Services/>
      <Contact/>
      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></Script>
    </div>
  )
}
