import React from 'react';


const Todo=({list,deletetodo})=>  {  
    const Listuu = list.length?(
        list.map(list1=>{
            return (
                <div className="collection-item" key={list1.id}>
                    <span onClick={()=>{deletetodo(list1.id)}}>
                        {list1.job}
                    </span>
                </div>
            )
        })
    ):(<p className="center"> Nothing To Do </p>);
      
    return (
        <div className="todo collection">
        { Listuu }
      </div>
    )
  }

export default Todo

