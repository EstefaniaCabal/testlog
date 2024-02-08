import styles from '@/styles/styles.module.css';
import Contenido from '@/components/contenido';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Login from '@/components/login';
import IndexPage from '@/components/IndexPage';

export default function Home() {
  return (
    <div className={styles.container}>
    <Header/>
    <Contenido/>


    <div>
    <IndexPage />
    </div>

    
    <Footer />
  </div>
  )
}