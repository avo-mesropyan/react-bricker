import './WorkCardItem.scss';



export const WorkCardItem = ({bgColor,icon,text}) => {
    return <div className={'work-card-item'} style={{backgroundColor:bgColor}}>
        <div className={'card-info'}>
            <i className={`custom-icon ${icon}`}></i>
            <p className={'work-card-title'}>{text}</p>
        </div>
    </div>
}