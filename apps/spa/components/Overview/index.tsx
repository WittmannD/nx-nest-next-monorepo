import styles from './overview.module.scss';
import ComicSlider from './sliders/ComicSlider';

function Overview() {
  return (
    <div className={styles['overviewContainer']}>
      <div className={styles['sectionsContainer']}>
        <section>
          <h3 className={styles['sectionTitle']}>Нові комікси</h3>
          <div className={styles['sectionSlider']}>
            <ComicSlider />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Overview;
