import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/landing/Landing';
import Intro from './components/intro/Intro';
import Input from './components/input/Input';
import Public from './components/public/Public';
import Profile from './components/profile/Profile';


export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/intro' component={Intro} />
        <Route path='/input' component={Input} />
        <Route path='/public' component={Public} />
        <Route path='/profile' component={Profile} />

    </Switch>
)