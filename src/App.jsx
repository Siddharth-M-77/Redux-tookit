import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userdelete } from "./Store/Reducers/UserReducer";


function App() {
const {User} = useSelector((state)=>state.UserReducer)

const dispatch = useDispatch()

const deleteHandler = (index)=>{
  dispatch(userdelete(index))
  
}

  return (
    <div className="max-h-screen w-full ">
      <div className="max-w-screen-xl mx-auto rounded-md mt-10 bg-black">
        <h1 className="text-white text-5xl p-5 text-center font-serif">
          Redux Toolkit
        </h1>

     <div className="cursor-pointer">
      {
        User.map((elem,index)=>(
          <ul  key={index}>
          <li className="text-xl text-white text-center"><h1>{elem.title
          }</h1><span onClick={()=>deleteHandler(index)}>❌</span></li>
          <li className="text-white text-center">{elem.id}</li>
        </ul>
        ))
      }
     </div>
      </div>
    </div>
  );
}

export default App;
