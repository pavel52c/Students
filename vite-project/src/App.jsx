import React, { useState } from 'react'
import './App.css'
import {AddMark} from "./AddMark.jsx";
import {Performancies} from "./Performancies.jsx";

const pages = {
  'addMark': AddMark,
  'performancies': Performancies,
}

function App() {
  const [currentPage, setCurrentPage] = useState('addMark');

  const Page = pages[currentPage];

  return (
      <Page setCurrentPage={setCurrentPage}/>
  )
}

export default App
