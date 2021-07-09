import React, { useRef, useEffect } from 'react';
import Draw from './draw';
import styles from './index.less';

const App: React.FC<{}> = (attr: any) => {
  const { option } = attr;
  const rootRef: any = useRef(null);

  useEffect(() => {
    Draw(rootRef.current, option);
  }, [option])

  return <div className={styles.main} ref={rootRef} />;
};

export default App;