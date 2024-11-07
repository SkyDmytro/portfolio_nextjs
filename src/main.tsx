import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App.tsx';
import './fonts/SourceSansPro-Black.otf';
import './fonts/SourceSansPro-BlackIt.otf';
import './fonts/SourceSansPro-Bold.otf';
import './fonts/SourceSansPro-BoldIt.otf';
import './fonts/SourceSansPro-ExtraLight.otf';
import './fonts/SourceSansPro-ExtraLightIt.otf';
import './fonts/SourceSansPro-Regular.otf';
import './index.css';
import { MobileChatPage } from './pages/MobileChatPage.tsx';
import { StarWarsPage } from './pages/StarWarsPage.tsx';
import { TypingTestProjectPage } from './pages/TypingTestProjectPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/projects/typingTest',
    element: <TypingTestProjectPage />,
  },
  {
    path: '/projects/starWars',
    element: <StarWarsPage />,
  },
  {
    path: '/projects/chat',
    element: <MobileChatPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
