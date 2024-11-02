import './Header.scss';

export  const Header = () =>{
    return <header>
        <div className={"header-block"}>
            <div className={'logo'}>
                <a href="">BRICKER</a>
            </div>
            <div className={'menu-block'}>
                <ul>
                    <li><a className={'active'}>HOME</a></li>
                    <li><a>ABOUT US</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
        </div>
    </header>
}