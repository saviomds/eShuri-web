import { ChangeEventHandler } from 'react';

import styles from './textfield.module.css';

function TextField({ label, placeholder, type, onChange }: Props) {
  return (
    <>
      <label
        htmlFor={label ?? 'First name'}
        className={styles.label}
      >
        {label ?? 'First name'}
      </label>
      <input
        type={type ?? 'text'}
        className={styles.input}
        placeholder={placeholder ?? 'Input your email'}
        onChange={onChange}
      />
    </>
  );
}

export default TextField;

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}
