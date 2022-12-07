import styles from './index.module.scss';
import {NextPageWithLayout} from "../types/Layout.type";
import AppLayout from "../components/layouts/AppLayout";
import TopSlider from "../components/TopSlider";
import Overview from "../components/Overview";

const Index: NextPageWithLayout = () => {
  return (
    <div className={styles.page}>
      <TopSlider />
      <Overview />
    </div>
  );
}

Index.getLayout = (page) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Index;
