import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import meetups from '../data/meetups.json'
const { events } = meetups

const MEETUP_DOMAIN = 'https://meetup.com'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meetups</title>
        <meta name="description" content="A list of Meetups" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {events.map((meetup, i) => (
            <li key={i}>
              <a href={MEETUP_DOMAIN + meetup.url}>
                {meetup.title}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
