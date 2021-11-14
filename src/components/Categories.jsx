import React, { useEffect, useState } from 'react'
import { Pagination, Autoplay, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// categories db
import categories from '../db/categories'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/a11y'


export default function Categories(props) {
    const [columns, setColumns] = useState(3)
    const { language, onClick } = props

    useEffect(() => {
        const getWidth = () => window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        const width = getWidth() > 1200 ? 1200 : getWidth()
        setColumns(Math.floor((width - 20) / 250))
    }, [])

    return (
        <div className='carousel'>
            <div className='container'>
                <div className='swiper-container'>
                    <Swiper
                        key={language}
                        dir={language === 'arabic' ? "rtl" : "ltr"}
                        modules={[Pagination, Autoplay, A11y]}
                        spaceBetween={20}
                        slidesPerView={columns}
                        // autoplay={{ disableOnInteraction: false }}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        onResize={e => setColumns(Math.floor(e.width / 250))}
                    >
                        {categories.map((el, i) => (
                            <SwiperSlide key={`${el.name}-${i}`}>
                                <div className='category-card' onClick={() => onClick(el.name)}>
                                    <div className='category-name'>
                                        {el.title[language]}
                                    </div>
                                    <div className='category-image'>
                                        <img src={el.img} alt={el.title[language]} />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}