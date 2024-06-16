import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { VideoPlayer } from './component/videoPlayer/VideoPlayer.jsx';
import QuestionFAQ from './component/QuestionFAQ.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "player/:name/:id",
    element: <VideoPlayer />
  },
  {
    path: "FAQs",
    element: <QuestionFAQ />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
