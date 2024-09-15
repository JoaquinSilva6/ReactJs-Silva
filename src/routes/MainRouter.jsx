import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { Home, Item, Category } from '../pages'

export const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/item/:id' element={<Item/>}/>
        <Route path='/category/:categoryId' element={<Category/>}/>
        </Routes>
    </BrowserRouter>
)
}
