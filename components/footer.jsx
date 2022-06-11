import React from 'react'
import styles from '../styles/Footer.module.css'
import Link from 'next/link'

const footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.cardL}>
            <h1 className={styles.title}>THE PURPLE ORCHID</h1>
            <h3 className={styles.linkTitle}>
              <Link href="/contact" passHref>
                <span>CONTACT US</span>
              </Link>
            </h3>
        </div>
        <div className={styles.cardS}>
          <div className={styles.cardItem}>
             12 rock street,<br/> near Samruddhi Apartments,<br/> Mumbai - 99
          </div>
          <div className={styles.cardItem}>
             thepurpleorchid@gmail.com <br/> 996 485 321
          </div>
        </div>
        <div className={styles.cardS}>
          <div className={styles.cardItem}>
              FOLLOW US:
              <br/> __FB __IN __BE __TW          
          </div>
          <div className={styles.cardItem}>
             @ 2022 THE PURPLE ORCHID <br/>
             ALL RIGHTS RESERVED
          </div>
        </div>
    </div>
  )
}

export default footer
