import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Subdivisao from '@/components/subdivisao'
import Linha from '@/components/linha'


export default function Home() {
  return (
    <div className={styles.center}>
      <Linha />
    </div>
  )
}
