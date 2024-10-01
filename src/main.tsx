import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { registerLicense } from '@syncfusion/ej2-base';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-calendars/styles/material.css';
import '@syncfusion/ej2-dropdowns/styles/material.css';
import '@syncfusion/ej2-inputs/styles/material.css';
import '@syncfusion/ej2-navigations/styles/material.css';
import '@syncfusion/ej2-popups/styles/material.css';
import '@syncfusion/ej2-splitbuttons/styles/material.css';
import '@syncfusion/ej2-react-schedule/styles/material.css';

registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWGNCf1NpR2RGfV5ycEVCalhZTndaUj0eQnxTdEFjUH1ZcXNVR2BaWEJ0XQ==');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
