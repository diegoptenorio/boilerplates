import Logo from '@components/Logo';
import Game from '@features/Game';

const Home = () =>
<div className='flex justify-center flex-col items-center w-full h-full bg-background'>
    <Logo />
    <Game />
</div>;

export default Home;