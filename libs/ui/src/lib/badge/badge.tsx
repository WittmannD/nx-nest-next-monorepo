import { ElementType, useMemo } from 'react';
import clsx from 'clsx';
import { PolymorphicComponentProps } from '../common/types';
import styles from './badge.module.scss';

export type BadgeVariants = 'dark' | 'light';

export interface BasicBadgeProps {
  className?: string;
  variant?: BadgeVariants;
}

export type BadgeProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  BasicBadgeProps
>;

export function Badge<C extends ElementType = 'span'>({
  children,
  className,
  as,
  variant = 'dark',
  ...defaultProps
}: BadgeProps<C>) {
  const Component = useMemo(() => as || 'span', [as]);

  return (
    <Component
      {...defaultProps}
      className={clsx(styles['badge'], styles[`badge--${variant}`], className)}
    >
      {children}
    </Component>
  );
}

export default Badge;
