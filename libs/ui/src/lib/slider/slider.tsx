import {
  Children,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';

import styles from './slider.module.scss';

type SliderProps = PropsWithChildren & {
  scrollbarClassName?: string;
  scrollbarColor?: 'emerald' | 'black';
  sliderPerView?: number | 'auto';
  spaceBetween?: number;
  swiperProps?: SwiperProps;
};

export function Slider({
  children,
  scrollbarClassName,
  sliderPerView,
  spaceBetween,
  scrollbarColor = 'black',
  swiperProps,
}: SliderProps) {
  const arrayChildren = useMemo(() => Children.toArray(children), [children]);
  const [scrollbar, setScrollbar] = useState<HTMLElement | null>(null);
  const onRefChange = useCallback(
    (node: SetStateAction<HTMLElement | null>) => setScrollbar(node),
    [],
  );

  return (
    <>
      <Swiper
        {...swiperProps}
        modules={[Scrollbar, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={sliderPerView}
        scrollbar={{
          el: scrollbar,
          dragClass: clsx(styles['scrollbar'], styles[scrollbarColor]),
          draggable: true,
        }}
      >
        {Children.map(arrayChildren, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
      <div
        className={clsx(styles['scrollbar-container'], scrollbarClassName)}
        ref={onRefChange}
      />
    </>
  );
}
