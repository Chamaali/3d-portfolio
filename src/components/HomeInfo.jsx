import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

const InfoBox = ({text, link, btnText}) => (
    <div className='info-box'>
        <p className='font-medium sm:text-lg text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)


const renderContent = {
    1: (
        <h1 className='sm:text-lg sm:leading-snug text-center neo-brutalism-blue py-3 px-6 text-white mx-5'>
            Hi, I&apos;m <span className='font-semibold'>Ivan</span> <span className='wave'>👋</span>
            <br/>
            A frontend engineer with passion to development
        </h1>
    ),
    2: (
        <InfoBox
            text='Follow me, I&apos;ll tell you about my experience'
            btnText='Show it!'
            link={'/about'}
        />

    ),
    3: (
        <InfoBox
            text='You&apos;re interested in some projects?😊'
            btnText='Let&apos;s look!'
            link={'/projects'}
        />
    ),
    4: (
        <InfoBox
            text='Do you have an idea, you want to make real product? I&apos;ll be more than happy to help🎉'
            btnText='Just send me an email!'
            link={'/contacts'}
        />
    ),

}
const HomeInfo = ({currentStage}) => {
    return renderContent[currentStage]
};

export default HomeInfo;