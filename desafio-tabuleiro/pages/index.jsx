import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Subdivisao from '@/components/subdivisao'
import Linha from '@/components/Linha'
import Tabuleiro from '@/components/Tabuleiro'


export default function Home() {
  return (
    <div className={styles.center}>
      <Tabuleiro />
    </div>
  )
}
