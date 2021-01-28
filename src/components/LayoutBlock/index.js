import style from './style.module.css';
//console.log(style);


const LayoutBlock = ({id, descr, title}) => {
    //const idOne = {id};
    console.log(id);
    //console.log(descr);
     return (
        <section className={style.root} id={id}>
             {/*{style.id}*/}
       <div className={style.wrapper}>
            <article>
                <div className={style.title}>
                    <h3>{title}</h3>
                    <span className={style.separator}></span>
                </div>
                <div className={style.desc.full}>
                    <p>{descr}</p>
                </div>
            </article>
        </div>
    </section>
     );
}

export default LayoutBlock;