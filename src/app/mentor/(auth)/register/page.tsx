'use client';

import { useAppDispatch } from '@/lib/store/hooks';
import styles from './register.module.css';
import { register } from '@/lib/store/features/auth/authSlice';

function MentorSignup() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      hello from mentor signup
      <button
        onClick={() =>
          dispatch(
            register({
              name: 'Emmanuel',
              email: 'dushimeemma@gmail.com',
              password: 'Dushime@1994#4^1',
            })
          )
        }
      >
        Test Register User Redux
      </button>
    </div>
  );
}

export default MentorSignup;
