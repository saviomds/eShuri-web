import styles from './title.module.css';

function Title({ label, classes }: Props) {
  return (
    <span className={`${styles.container} ${classes}`}>
      {label ?? 'Mentee'} Login
    </span>
  );
}

export default Title;

interface Props {
  label?: string;
  classes?: string;
}
