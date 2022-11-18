import styles from './index.module.scss';
import UISheet from '../components/UISheet';
import {NextPageWithLayout} from "../types/Layout.type";
import AppLayout from "../components/layouts/AppLayout";

const Index: NextPageWithLayout = () => {
  return (
    <div className={styles.page}>
      <UISheet />
      <div>
        ababa
        <span className="text-xs">babab</span>
        <span className="text-sm">babab</span>
        <span className="text-base">babab</span>
        <span className="text-lg">babab</span>
        <span className="text-xl">babab</span>
        <span className="text-[1.25em]">babab</span>
      </div>
    </div>
  );
}

Index.getLayout = (page) => (
  <AppLayout>
    {page}
  </AppLayout>
)

export default Index;
