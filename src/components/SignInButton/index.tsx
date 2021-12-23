import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export function SindInButton() {
  const isUserLoggerdIn = true;

  return isUserLoggerdIn ? (
    <button type="button"
      className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Davi Sousa
      <FiX color='#737380' className={styles.closeIcon} />
    </button>

  ) : (
    <button type="button"
      className={styles.signInButton}>
      <FaGithub color='#eba417' />
      Sign in with github
    </button >

  );
}