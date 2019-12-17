import React from 'react';

//a variável vai guardar uma referência desta função
//Não é usado apenas para guardar dos primitivos

export const tarefas = [
    {
        id: 1,
        name: "⏰ Academia",
        time: "18:00"
    },
    {
        id: 2,
        name: "💰 Compras",
        time: "19:30"
    },
    {
        id: 3,
        name: "🎥 Assistir filme",
        time: "20:00"
    }
];

//Cria uma lista de tarefas e alimentá-la com o array
 function createList(tarefas) {
    const listArray = [];

    tarefas.forEach(function(item){
    listArray.push(
        <li className="list-item" key={item.id}>
            {`${item.name} as ${item.time} Horas`}
        </li>
        // React.createElement(
        //     "li",
        //     {className: 'list-item', key: item.id},
        //     `${item.name} as ${item.time} Horas`
        // )
    );
    });

    return listArray;

}


//PADRÃO REACT JSX
export const TodoContainer = function (props) {
    const newList = createList(tarefas);
    return (<div className="container">
        <h1 className="header">{props.title}</h1>
        <div className="list-container">
            <ul className="list-container">
                {newList}
            </ul>
        </div>
    </div>);
};

// const TodoContainer = function (props) {
//     //vc cria o elemento e depois cria o objeto
//     //o objeto são os atributos, que é o segundo argumento
//     return React.createElement('div',  {className: 'container'}, [
//             React.createElement('h1',   {className: 'header'},props.title),
//             React.createElement(
//                 'div', 
//                 {className: 'list-container'},
//                 React.createElement(
//                     'ul', 
//                     {className: 'list-wrapper'}, createList(tarefas)
//                 ))
//     ]);
// };
