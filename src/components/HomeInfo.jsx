import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-lg text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
        </Link>
    </div>
)

// (
//     <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-3 px-6 text-white mx-5'>
//         I&apos;m <span className='font-semibold text-lg'>Chamaali Dilka</span> <span className='wave'>👋</span>
//         <br/>
//         Software Engineer with passion to both Web Development and Android Development..
//     </h1>
// ),

const renderContent = {
    1: (
        <InfoBox
            text='Hi!, I&apos;m Chamaali Dilka. I&apos;m a Software Engineer. Do you want to know more..'
            btnText='Click me'
            link={'/about'}
        />
    ),
    2: (
        <InfoBox
            text='I&apos;m collecting memories..'
            btnText='Click me'
            link={'/gallery'}
        />

    ),
    3: (
        <InfoBox
            text='You&apos;re interested in some projects?'
            btnText='Click me'
            link={'/projects'}
        />
    ),
    4: (
        <InfoBox
            text='If you want to contact me'
            btnText='Click me'
            link={'/contacts'}
        />
    ),
    5: (
        <div className='flex sm:text-lg sm:leading-snug text-center bg-emerald-600 rounded-lg shadow-xl py-3 px-6 text-white mx-5'>
            <p>Come on, Let's travel.. </p> 
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain self-center'/>

        </div>
    ),

}
const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage]
};

export default HomeInfo;