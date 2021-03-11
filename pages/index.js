import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
const handleSubmit = () => {

}

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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
