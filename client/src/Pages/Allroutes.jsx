import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home/Home'
import Askquestion from './Askquestion/Askquestion'
import Auth from './Auth/Auth'
import Question from './Question/Question'
import Displayquestion from './Question/Displayquestion'
import Tags from './Tags/Tags'
import Users from './Users/Users'
import Userprofile from './Userprofile/Userprofile'

function Allroutes({slidein,handleslidein}) {
  return (
    <Routes>
       <Route path='/' element={<Home slidein={slidein} handleslidein={handleslidein}/>}></Route>
       <Route path='/Askquestion' element={<Askquestion/>}></Route>
       <Route path='/Auth' element={<Auth/>}></Route>
       <Route path='/Question' element={<Question slidein={slidein} handleslidein={handleslidein}/>}></Route>
       <Route path='/Question/:id' element={<Displayquestion slidein={slidein} handleslidein={handleslidein}/>}></Route>
       <Route path='/Tags' element={<Tags slidein={slidein} handleslidein={handleslidein}/>}></Route>
       <Route path='/Users' element={<Users slidein={slidein} handleslidein={handleslidein}/>}></Route>
       <Route path='/Users/:id' element={<Userprofile slidein={slidein} handleslidein={handleslidein}/>}></Route>
    </Routes>
     
    
  )
}

export default Allroutes
