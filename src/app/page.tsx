import Button from '@/components/shared/button/Button';
import Logo from '@/components/shared/logo/Logo';
import Title from '@/components/shared/logo/Title/Title';
import TextField from '@/components/shared/logo/text-field/TextField';

function Home() {
  return (
    <div>
      <Logo />
      <Title label='Mentor' />
      <TextField />
      <Button />
    </div>
  );
}

export default Home;
