import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home, Item } from '../pages'

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:index' element={<Item/>}/>
        <Route path='/category/:id' element={<Category/>}/>
        </Routes>
    </BrowserRouter>
)
}
