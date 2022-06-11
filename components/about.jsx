import React from 'react'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Circle from './circle'

const about = () => {
    return (
        <div>
            <div className={`${styles.title} ${styles.text_center}`}>
                <h2>About Us</h2>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <p className={styles.about}>
                        We at Hotel The Purple Orchid strive to create a pleasant and welcoming atmosphere. It&aposs our goal to make our clients feel at ease, greeting them with professionalism and attention for their every need. 
                        Decorated & furnished in a modern elegant style, our rooms and facilities are fresh & stylish, yet maintaining a coziness & warmth that are essential to us. Extra comfort is guaranteed by our hi-speed Wi-Fi, satellite HD LCD TVs, 
                        sound-proof double windows, and other facilities. Cozy guest rooms with panoramic views allow you to unwind, an indoor pool, exotic spa and all favourite gamimg area ensure that your stay is filled with ease.
                    </p>
                </div>
                <Circle backgroundColor="violet" bottom="-50vh" left="-55vh" />
                <Circle backgroundColor="purple" bottom="-190vh" left="-55vh" />
                <Circle backgroundColor="violet" bottom="-130vh" right="2vh" width="50vh" height="50vh" />
                <div className={styles.card}>
                    <Image src="/imgs/lobby.jpg" alt="" width='100%' height='100%' layout='fill' />
                </div>
            </div>
        </div>
    )
}

export default about