import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from './context/context'
import { SpeechProvider } from '@speechly/react-client'

import App from './App'
import './index.css'

ReactDOM.render(
    <SpeechProvider appId="63d8d4e3-cd0b-4d1f-b648-cf740b104cba " language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
    );