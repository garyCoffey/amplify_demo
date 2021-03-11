import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify Demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to this cool App!!
        </h1>
        <form >
          <label>
            Name:
            <input type="text" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
