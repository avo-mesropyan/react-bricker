import './SectionWork.scss'
import workerImg from '../../assets/img/img-06.jpg';
import {WorkCardItem} from "../WorkCardItem/WorkCardItem";

export const SectionWork = () => {
    return <section className={'section-work'}>
        <div className={'container'}>
            <div className={'work-block'}>
                <div className={'work-list'}>
                    <div className={'work-card'}>
                        <WorkCardItem icon={'icon-pets'} bgColor={'#C81010'} text={'Unlimited Color Variants'}/>
                        <WorkCardItem icon={'icon-rocket'} bgColor={'#005881'} text={'Unlimited Color Variants'}/>
                        <WorkCardItem icon={'icon-sentiment'} bgColor={'#E4A600'} text={'Unlimited Color Variants'}/>
                        <WorkCardItem icon={'icon-check'} bgColor={'#00B5A6'} text={'Unlimited Color Variants'}/>

                    </div>
                </div>
                <div className={'work-list'}>
                      <img src={workerImg} alt={'test-data'}/>
                </div>
            </div>
        </div>
    </section>
}