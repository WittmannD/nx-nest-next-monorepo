import styles from './ui.module.scss';

function UISheet() {
  return (
    <div className="flex flex-col gap-10 p-10">
      <div>
        <h3 className="text-regular font-semibold mb-5">Badges:</h3>
        <div className="flex flex-row gap-5">
          <span className={styles['badge-dark']}>комікс</span>
          <span className={styles['badge-light']}>книга</span>
        </div>
      </div>
      <div>
        <h3 className="text-regular font-semibold my-5">Buttons:</h3>
        <div className="flex flex-row gap-5">
          <span className={styles['badge-dark']}>комікс</span>
          <span className={styles['badge-light']}>книга</span>
        </div>
      </div>
    </div>
  );
}

export default UISheet;
