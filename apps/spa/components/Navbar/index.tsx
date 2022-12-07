import Link from 'next/link';
import styles from './navbar.module.scss';
import Image from 'next/image';
import clsx from 'clsx';

function Navbar() {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <Image src={'/assets/logo.png'} alt="logo" width="57" height="57" />
        <span>Сторіа</span>
      </div>
      <div className={styles.navbarCenter}>
        <ul role="navigation" className={styles.navbarMenu}>
          <li className={styles.menuItem}>
            <Link href="/">Комікси</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">Книги</Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/">Друковане видання</Link>
          </li>
        </ul>
        <div className={styles.searchBar}>
          <input type="text" role="search" placeholder="Пошук..." />
          <button type="submit">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.44622 0.01408C6.16595 0.253338 4.36907 1.06388 2.81634 2.54338C0.282158 4.97013 -0.63581 8.64201 0.448174 12.0209C1.08294 13.9936 2.44036 15.7563 4.19817 16.894C7.41595 18.9692 11.7079 18.7885 14.7646 16.4545L14.9843 16.2885L17.4745 18.7787C19.33 20.6293 20.0087 21.2738 20.1161 21.2983C20.1992 21.3178 20.3017 21.3422 20.3505 21.3569C20.497 21.3959 20.9413 21.2348 21.0781 21.0932C21.2343 20.932 21.3613 20.644 21.3613 20.4584C21.3613 20.0336 21.3857 20.0629 18.7929 17.4653C17.4404 16.1078 16.332 14.9799 16.332 14.9604C16.332 14.936 16.4296 14.7944 16.5468 14.643C17.3036 13.6518 17.9433 12.1918 18.1972 10.8442C18.29 10.3559 18.3046 10.0971 18.3095 9.18888C18.3095 8.09513 18.2802 7.78752 18.0849 6.99162C17.6406 5.17521 16.6201 3.48576 15.2431 2.27482C14.0029 1.18596 12.372 0.409588 10.7656 0.13615C10.1796 0.0336113 8.89056 -0.0298653 8.44622 0.01408ZM10.6288 1.98674C13.6269 2.6215 15.8974 4.99943 16.4052 8.03166C16.5126 8.65666 16.4833 10.0531 16.3564 10.6293C16.0439 12.0404 15.3798 13.2758 14.3788 14.2963C13.207 15.4828 11.7812 16.2006 10.0868 16.4447C9.45696 16.5326 8.23138 16.474 7.59173 16.3276C6.15618 15.9858 5.05755 15.3705 3.99798 14.3158C2.90911 13.2319 2.26946 12.0258 1.96673 10.5072C1.82513 9.79924 1.81536 8.58342 1.9472 7.89494C2.36224 5.74162 3.66595 3.9008 5.56536 2.80217C6.27825 2.38713 7.22552 2.0551 8.10442 1.91349C8.71966 1.81584 9.99407 1.85002 10.6288 1.98674Z"
                fill="#8A8A8A"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className={styles.navbarAuthMenu}>
        <li className={clsx(styles.menuItem, styles.authItem, styles.login)}>
          <Link href={'/'}>Вхід</Link>
        </li>
        <li className={clsx(styles.menuItem, styles.authItem, styles.signup)}>
          <Link href={'/'} className={styles.signupButton} role="button">
            Реєстрація
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
