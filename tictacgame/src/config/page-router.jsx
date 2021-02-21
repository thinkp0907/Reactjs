import React from 'react';
import { Redirect } from 'react-router';

import Home from '../pages/home.jsx';
import Comment from '../pages/comment.jsx';
import About from './../pages/about.jsx';
import Contact from './../pages/contact.jsx';
import Form from './../pages/form.jsx';
import State from './../pages/state.jsx';
import Composition from './../pages/composition.jsx';
import Mockup from './../pages/mockup.jsx';
import Mockup_2 from './../pages/mockup_2.jsx';

const routes = [
  {
    path: '/',
    exact: true,
    component: () => <Redirect to="/home " />,
  },
  {
    path: '/home',
    component: () => <Home />,
  },
  {
    path: '/comment',
    component: () => <Comment />,
  },
  {
    path: '/test',
    component: () => <Form />,
  },
  {
    path: '/about',
    component: () => <About />,
  },
  {
    path: '/mockup',
    component: () => <Mockup />,
  },
  {
    path: '/mockup_2',
    component: () => <Mockup_2 />,
  },
  {
    path: '/state',
    component: () => <State />,
  },
  {
    path: '/composition',
    component: () => <Composition />,
  },
  {
    path: '/contact',
    component: () => <Contact />,
  },
];

export default routes;
