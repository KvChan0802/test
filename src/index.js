import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {Link, RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './page/About';
import Infomation from './page/Infomation';
import Contact from './page/Contact';
import Layout from './page/Layout';

const router = createBrowserRouter([
	{
		path:'/',
		element:<Layout/>,
		children:[
			{
				path:'info',
				element:<Infomation/>
			},
			{
				index:true,path:'about',
				element:<About/>
			},
			{
				path:'contact',
				element:<Contact/>
			},
			{
				path:'*',
				element:<>404</>
			}
		]
	}
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);



reportWebVitals();
