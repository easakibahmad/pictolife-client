import { Metadata } from 'next';
import Login from '../app/login/page';

export const metadata: Metadata = {
  title: 'Smartgram: login',
};

export default function Page() {

  return (
    <>
      <Login />
    </>
  );
}
