import React from 'react';
import {render} from 'react-dom'
import { TodoContainer } from './TodoContainer';


//Ele é pai de container
const App = function () {
    return <TodoContainer title="Lista de tarefas à fazer"/>
    // return React.createElement(TodoContainer, {title: 'Lista de tarefas à fazer'})
};

//Precisar da função render para atualizar os componentes
render(<App/>, document.getElementById('root'));
//render(React.createElement(App), document.getElementById('root'));