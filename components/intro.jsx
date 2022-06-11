import React from 'react'
import styles from '../styles/Intro.module.css'

const Intro = () => {
  return (
    <div className={styles.container}>
       <div className={styles.box_main}>
            <div className={styles.firstHalf}>
                <p className={styles.textBig}>Welcome to THE PURPLE ORCHID</p>
                <p className={styles.textSmall}>A luxurious hotel with a purple theme that serves great services and make feels like home</p>
                <div className={styles.buttons}>
                    <button className={styles.menubtn} href="/rooms">Book a room</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro
