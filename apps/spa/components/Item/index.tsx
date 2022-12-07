import { PropsWithChildren } from 'react';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import style from './item.module.scss';

type ItemProps = PropsWithChildren & {
  cover: string | StaticImageData;
  className?: string;
};

function Item({ children, className, cover }: ItemProps) {
  return (
    <figure className={clsx(style.itemFigure, className)}>
      <div className={style.cover}>
        <Image alt="cover" src={cover} />
      </div>
      <div className={style.overlay}>{children}</div>
    </figure>
  );
}

export default Item;
