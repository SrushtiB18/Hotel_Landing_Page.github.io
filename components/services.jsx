import React from 'react'
import Image from 'next/image'
import styles from '../styles/Services.module.css'

const Services = () => {
  return (
    <div className={styles.container}>
            <div className={`${styles.title} ${styles.text_center}`}>
                <h2>Our Services</h2>
            </div>
        <div className={styles.wrapper}>
            <div className={styles.services}>
                <div className={styles.single_menu}>
                    <img src="https://b.zmtcdn.com/data/pictures/9/102989/9571c1155ec29bb4406e9587c9c1de25.jpg"
                        alt="menu1"/>
                    <div>
                        <h4>Restaurant</h4>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium doloribus delectus, quo non
                            illo culpa id odit dolores quaerat inventore dolor</p>
                    </div>    
                </div>
                <div className={styles.single_menu}>
                    <img src="https://cdn.spafinder.com/2019/11/iStock-1063599460-1024x683.jpg"
                        alt="menu2" width="220px" height="146.52px"/>
                    <div className="menu-contect">
                        <h4>Spa</h4>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium doloribus delectus, quo non
                            illo culpa id odit dolores quaerat inventore dolor</p>
                    </div>        
                </div>
                <div className={styles.single_menu}>
                    <img src="https://media.cntraveler.com/photos/59dc0961d74f3663416ffe8b/3:2/w_2046,h_1364,c_limit/Pool-COMOMetropolitanMiamiBeach-Florida-CRHotel.jpg"
                        alt="menu3"/>
                    <div className="menu-content">
                        <h4>Swimming pool</h4>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium doloribus delectus, quo non
                            illo culpa id odit dolores quaerat inventore dolor</p>
                    </div>
                </div>
                <div className={styles.single_menu}>
                    <img src="https://assets.entrepreneur.com/article/how-boutique-hotels-courting-gamers.jpg"
                        alt="menu3"/>
                    <div className="menu-content">
                        <h4>Gaming zone</h4>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium doloribus delectus, quo non
                            illo culpa id odit dolores quaerat inventore dolor</p>
                    </div>
                </div>
               
    {/* </section> */}
    </div>
    </div>
    </div>
  )
}

export default Services