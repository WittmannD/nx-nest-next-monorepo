import { Slider } from '@storia/ui';

import cover1 from '../../../../public/assets/covers/244x412/001.png';
import cover2 from '../../../../public/assets/covers/244x412/002.png';
import cover3 from '../../../../public/assets/covers/244x412/003.png';
import cover4 from '../../../../public/assets/covers/244x412/004.png';

import ComicSliderItem from './ComicSliderItem';

function ComicSlider() {
  return (
    <Slider
      sliderPerView={4.4}
      spaceBetween={30}
      scrollbarColor="black"
      swiperProps={{ centeredSlidesBounds: true }}
    >
      <ComicSliderItem cover={cover1} />
      <ComicSliderItem cover={cover2} />
      <ComicSliderItem cover={cover3} />
      <ComicSliderItem cover={cover4} />
      <ComicSliderItem cover={cover2} />
      <ComicSliderItem cover={cover1} />
      <ComicSliderItem cover={cover2} />
      <ComicSliderItem cover={cover3} />
    </Slider>
  );
}

export default ComicSlider;
