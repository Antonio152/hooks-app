import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
/* import { HooksApp } from './HooksApp' */
/* import { CounterApp, CounterWithCustomHook } from './useState' */
/* import { SimpleForm } from './useEffect/SimpleForm' */
/* import { FormWithCustomHook } from './02-useEffect' */
/* import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks' */
/* import { FocusScreen } from './04-useRef/FocusScreen' */
/* import { Layout } from './05-useLayoutEffect/Layout' */
/* import { Memorize } from './06-memos/Memorize' */
/* import { MemoHook } from './06-memos/MemoHook' */
/* import { CallbackHook } from './06-memos/CallbackHook' */
/* import { Padre } from './07-Tarea-memo/Padre' */
/* import './08-useReducer/IntroReducer' */
/* import { TodoApp } from './08-useReducer/TodoApp' */
import { MainApp } from './09-useContext/MainContextApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <MainApp />
    </React.StrictMode>
  </BrowserRouter>
)
