import React from 'react'
import ReactDOM from 'react-dom/client'
import BooksContainer from './Components/BooksContainer.tsx'

import './Styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BooksContainer />
  </React.StrictMode>,
)
