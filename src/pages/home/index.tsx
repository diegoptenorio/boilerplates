import Logo from '@components/Logo';
import { CONSTANTS } from '@constants';

const { GORILLAZ_OFICIAL_WEBSITE } = CONSTANTS.URL;

const Home = () =>
<div className='flex justify-center flex-col items-center w-full h-full bg-background'>
    <Logo />
    <h1 className='text-primary-color text-6xl'>Gorrilaz</h1>
    <p>
        <a
            href={GORILLAZ_OFICIAL_WEBSITE}
            target='_blank'
            rel="noreferrer"
            className='text-secundary-color'
        >
            OFICIAL WEBSITE
        </a>
    </p>
</div>;

export default Home;