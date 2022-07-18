import LogoImage from '@img/logo.png';

const Logo = () => 
    <div className='flex justify-center items-center w-full h-full bg-background'>
        <img src={LogoImage} alt='logo' />
    </div>;

export default Logo;