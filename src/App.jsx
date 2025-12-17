import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TodoList from './components/TodoList'

function App() {
  
  return (
    <>
      <Header />
      <TodoList/>
    </>
  )
}

export default App
