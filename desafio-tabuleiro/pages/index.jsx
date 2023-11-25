import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Subdivisao from '@/components/subdivisao'


export default function Home() {
  return (
    <div className={styles.center}>
      <Subdivisao />
    </div>
  )
}
