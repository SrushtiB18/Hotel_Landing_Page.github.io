import React from 'react'
import Image from 'next/image'
import styles from '../styles/Rooms.module.css'

const Rooms = () => {
    return (
        <div className={styles.container}>
            <div className={`${styles.title} ${styles.text_center}`}>
                <h2>Our Rooms</h2>
            </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.leplacidehotel.com/img/photos/f/1e3cb7c56888fc5aa010a1da4672cf31.jpg" className="d-block"  alt="slide1" width="850px" height="450px" ></img>
                        <div className="carousel-caption d-none d-md-block">
                                <h5 className='fs-2'>Junior suite</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/181660622.jpg?k=278403d435184cc9f47846868a58f285bbc6f883230627a6d44575e59a19a179&o=&hp=1" className="d-block" alt="slide2" width="850px" height="450px"></img>
                        <div className="carousel-caption d-none d-md-block">
                                <h5 className='fs-2'>Delux suite</h5>
                        </div>                    
                    </div>
                    <div className="carousel-item">
                        <img src="https://media-cdn.tripadvisor.com/media/photo-s/07/8a/3e/a6/mercure-jakarta-sabang.jpg" className="d-block w-100" alt="slide3" width="850px" height="450px"></img>
                        <div className="carousel-caption d-none d-md-block">
                                <h5 className='fs-2'>Superior suite</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://hotel2020.com/wp-content/uploads/2021/07/IMG_8862-1-605x465.jpg" className="d-block w-100" alt="slide4" width="850px" height="450px"></img>
                        <div className="carousel-caption d-none d-md-block">
                                <h5 className='fs-2'>Premium suite</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Rooms