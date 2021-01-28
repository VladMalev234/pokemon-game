//для того чтоб стили применялись только для определенного класса внутри данного файла
import s from './style.module.css';
//import ReactLogo from '../../assets/ReactLogo.png';
//import ReactLogo from '../../assets/ReactLogo.png';
//console.log(s);
//console.log(ReactLogo);
//для взаимодействия с svg
//import { ReactComponent as ReactLogo } from '../../assets/ReactLogo.png';

const HeaderBlock = ({ title, descr}) => {
    //console.log('props: ', props);
    return (
        <header className={s.root}>
          <div className={s.forest}>
            <div className={s.container}>
                {
                title && <h1 className={s.header}>
                    {title}
                </h1>
                }
                {
                descr && 
                <p>{descr}</p>
                }
            </div>
          </div>
        </header>

    )
    
}

//Чтобы мы наш блок могли експортировать  где угодно export default
export default HeaderBlock;


                //{/*<ReactLogo/>*/}
                //{/*<img src={ReactLogo} alt="" />*/}
                //style={styleRoot}