import React from 'react'
import styles from '../styles/Contact.module.css'
import Circle from './circle'

const Contact = () => {
  return (
      <div>
        <div className={`${styles.title} ${styles.text_center}`}>
                <h2>Contact Us</h2>
            </div>
    <div className={styles.container}>
        <Circle backgroundColor="purple" right='52.5vh'/>
            <form className={styles.form}>
            <input className={styles.inputS} placeholder="Username"/>
            <input className={styles.inputS} placeholder="Phone"/>
            <input className={styles.inputL} placeholder="Email"/>
            <input className={styles.inputL} placeholder="Subject"/>
            <textarea className={styles.textArea} placeholder="Message" rows={6}/>
            <button className={styles.button}>SUBMIT</button>
        </form>
    </div>
    </div>
  )
}

export default Contact