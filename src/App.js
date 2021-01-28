import FooterBlock from "./components/FooterBlock";
import HeaderBlock from "./components/HeaderBlock";
import LayoutBlock from './components/LayoutBlock';

const App = () => {
  return ( 
    // пустой тег для обрамления создаваемых тегов <React.Fragment> или <>
  //<React.Fragment>
  <>
    <HeaderBlock title='This is new title'
    descr='This is new description'
    />
    <HeaderBlock
     title='This is new title'
     hideBackground
    />
    <LayoutBlock id='first'
    title='Layout title'
    descr='Layout description'/>
    <LayoutBlock id='second'
        title='Layout title'
        descr='Layout description'/>
    <LayoutBlock id='third'
        title='Layout title'
        descr='Layout description'/>
        <FooterBlock/>
  </>
  )
   /*<AppHeader/>
    <AppInput/>
    <AppList/>
  </React.Fragment>)*/
}

export default App;
