import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './exchange.module.scss'
import exchangePic from '../../assets/images/card.png'
import checkoutPic from '../../assets/images/Checkout.png'
import successPic from '../../assets/images/success.png'


const ExchangeComponent = () => {
    
    return (
        <>
            <div className={styles.exchangeWrapper}>
                <h2 className={styles.mainTitle}>How to exchange BTC to EUR<span> for business</span></h2>

                <div className={styles.imagesWrapper}>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            768: {
                                slidesPerView: 3,
                                pagination: false,
                            },
                        }}
                    >
                        <SwiperSlide className={styles.imageItem}>
                            <h3 className={styles.itemTitle}>01. Join us</h3>
                            <p className={styles.itemSubtitle}>Complete a fast & simple onboarding process.</p>
                            <img src={checkoutPic} alt="checkoutPic" />
                        </SwiperSlide>

                        <SwiperSlide className={styles.imageItem}>
                            <h3 className={styles.itemTitle}>02. Exchange</h3>
                            <p className={styles.itemSubtitle}>Choose what to exchange and make the deposit.</p>
                            <img src={exchangePic} alt="exchangePic" />
                        </SwiperSlide>

                        <SwiperSlide className={styles.imageItem}>
                                <h3 className={styles.itemTitle}>03. Enjoy</h3>
                                <p className={styles.itemSubtitle}>Receive your funds & we hope to see you soon!</p>
                                <img src={successPic} alt="successPic" />
                        </SwiperSlide>
                    </Swiper>
                </div>

                <button className={styles.exchangeBtn}>Start making exchanges</button>
                
            </div>


        </>
    );
};

export default ExchangeComponent;