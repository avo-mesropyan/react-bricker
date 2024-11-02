import './SectionHero.scss';
import  bg_img from '../../assets/img/carousel-01.jpg';


export const SectionHero = () => {
    return <section className={'section-hero'} style={{backgroundImage:`url('${bg_img}')`}}>
        <h1>we are web design heroes</h1>
        <p>we are web design heroes we are web design heroes</p>
    </section>
}