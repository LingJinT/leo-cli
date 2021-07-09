import React, { useRef, useEffect } from 'react';
import styles from './index.less';

const App: React.FC<{}> = (attr: any) => {
  const { option } = attr;

  useEffect(() => {
  }, [option])

  return <div className={styles.main}>you are handsome boy!</div>;
};

export default App;