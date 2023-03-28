import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Tic from "./Tic-Toc/index"
import { useRouter } from 'next/router'
import Image from 'next/image'


export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Game</title>
        <meta name="description" content="Game for Play " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <h3 className='heading'>Play Game with Mojj </h3>
        <h5>click below any one and Play </h5>

        <div>
          
          <button type="button" onClick={() => router.push('/Tic-Toc')}>
          <Image
            src="/Tic-Toc.png"
            alt="Picture of the author"
            width={200}
            height={200}
          />
          </button>
        </div>
      </main>
    </>
  )
}
