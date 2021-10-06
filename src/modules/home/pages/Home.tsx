import { HomeLanding } from '../components/HomeLanding';
import { HomeLayout } from '../components/HomeLayout';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  return (
    <HomeLayout>
      <Navbar />
      <HomeLanding />
    </HomeLayout>
  );
};
