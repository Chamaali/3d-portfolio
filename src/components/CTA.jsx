import {Link} from "react-router-dom";

export const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>Have a suitable position for me? <br className='sm:block hidden'/>
             Just write me an email!</p>
            <Link to={'/contacts'} className='btn'>Contact</Link>

        </section>
    );
};