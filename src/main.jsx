import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'

import 'primeicons/primeicons.css';

const notes = [
    {
      id: 1,
      content: 'HTML is easy',
      important: true
    },
    {
      id: 2,
      content: 'Browser can execute only JavaScript',
      important: false
    },
    {
      id: 3,
      content: 'GET and POST are the most important methods of HTTP protocol',
      important: true
    }
  ]
  

createRoot(document.getElementById('root')).render(<App notes={notes}/>)

