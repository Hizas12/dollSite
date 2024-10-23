import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Импортируем стили Swiper
import './style.css'; // Подключаем свои стили

const Slider = () => {
    const reviews = [
        { id: 1, name: "Иван", text: "Отличный сервис!" },
        { id: 2, name: "Мария", text: "Очень доволен покупкой!" },
        { id: 3, name: "Алексей", text: "Рекомендую всем!" },
    ];

    return (
        <Swiper
            spaceBetween={30} // Промежуток между слайдами
            slidesPerView={1} // Количество видимых слайдов
            navigation // Включаем навигацию
            pagination={{ clickable: true }} // Включаем пагинацию
            autoplay={{ delay: 3000 }} // Автопроигрывание
            loop={true} // Зацикливание слайдов
        >
            {reviews.map(review => (
                <SwiperSlide key={review.id} className="slide">
                    <h2>{review.name}</h2>
                    <p>{review.text}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;