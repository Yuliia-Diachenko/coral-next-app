import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
        <div className={styles.ctas}>
          <Link
            className={styles.primary}
            href="/home"
            
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Home
          </Link>
         
        </div>
      </main>
      <footer className={styles.footer}>
        
      </footer>
    </div>
  );
}
