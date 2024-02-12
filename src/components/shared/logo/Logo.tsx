import Image from 'next/image';

import styles from './logo.module.css';

function Logo({ width, height }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src='/logo.png'
        alt='logo'
        width={width ?? 128.49}
        height={height ?? 35}
      />
    </div>
  );
}

export default Logo;

interface Props {
  width?: number;
  height?: number;
}
