// Импортируем реакт из библиотеки реакт
import React from 'react';
// Импортируем реактDOM из библиотеки реактDOM
import ReactDOM from 'react-dom'; 

import App from './App'; 

import './index.css';

 



// показать єлемент на странице
ReactDOM.render(<App/>, document.getElementById('root'));















//используем компонент будто это кастомный html тег внутри el <AppList/>
//const AppList = () => {
//const items =['Items 1', 'Items 2','Items 3', 'Items 4'];
//const firstItems = <li>Item 0</li>

//const isAuth = true

// return (
// <ul>
//   {
//     //если isAuth=true то покажи firstItems а иначе м
//     isAuth ? firstItems: null
//   }
//   {
//     items.map(item => <li>{item}</li>)
//   }
//  <li>{ items[0] }</li>
//  <li>{ items[1] }</li>
// </ul>)
//}

//const AppHeader = () => {
 
//  return(
//  <h1 
//    className="header"
//  >
//    This is my header</h1>
//  )
//};
//const AppInput = () => {
//  const placeholder = "Type text"
//  return (
//    <label htmlFor="search">
//      <input 
//      id="search"
//      placeholder={placeholder}/>
//    </label>
//  )
//}


// cоздаем реакт элемент React.createElent
//const el = React.createElement(
//  //каой элемент зотим отобразить
//  'h1',
//  //свойства или данный / prox
//  null,
//  //его значение
//  'Hello World'
//);
// компонент функция которая возвращает React элемент

//const margin = 40;

//const headerStyle = {
//  color:'red',
//  marginLeft:`${margin}px`,
//  marginBottom: `${margin}px`,
//};

//style={headerStyle}