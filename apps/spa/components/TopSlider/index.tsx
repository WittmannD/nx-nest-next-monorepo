import { Slider } from '@storia/ui';
import SliderItem from './SliderItem';
import styles from './top-slider.module.scss';

function TopSlider() {
  return (
    <div className={styles['slider']}>
      <Slider
        spaceBetween={15}
        sliderPerView={1980 / 1580}
        scrollbarColor="emerald"
        scrollbarClassName={styles['slider__scrollbar']}
        swiperProps={{ centeredSlides: true, autoplay: true }}
      >
        <SliderItem />
        <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider>
    </div>
  );
}

export default TopSlider;
