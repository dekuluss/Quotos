'use client'

import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function WelcomePage() {
  const router = useRouter()

  const handleEnterApp = () => {
    router.push('/home')
  }

  return (
    <main id="page-welcome" className={styles.pageWelcome}>
      <div id="welcome-center" className={styles.welcomeCenter}>
        <img 
          id="welcome-logo" 
          className={styles.welcomeLogo}
          src="/images/logo-placeholder.png" 
          alt="Quotos Logo" 
        />
        <button 
          id="enter-app-button" 
          className={styles.enterAppButton}
          onClick={handleEnterApp}
        >
          Enter App
        </button>
      </div>
    </main>
  )
}
