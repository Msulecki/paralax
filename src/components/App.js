import React from 'react';
import InnerComponent from './InnerComponent'
import { Paralax, ParalaxList } from './Paralax'
import { BrowserRouter as Router, NavLink, Route, Redirect } from 'react-router-dom'

import '../styles/App.scss';

function App() {
    return (
        <Router>
            <nav className="app__nav">
                <NavLink to='power-1'>Power = 1</NavLink>
                <NavLink to='power-5'>Power = 5</NavLink>
                <NavLink to='reversed'>Reversed</NavLink>
                <NavLink to='center'>Absolute center</NavLink>
                <NavLink to='static'>Static</NavLink>
            </nav>
            <Route path='/'><Redirect to='/power-1' /></Route>
            <Route path='/power-1'>
                <ParalaxList>
                    <div className='app'>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <Paralax power={1}><InnerComponent /></Paralax>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                    </div>
                </ParalaxList>
            </Route>
            <Route path='/power-5'>
                <ParalaxList>
                    <div className='app'>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <Paralax power={5}><InnerComponent /></Paralax>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                    </div>
                </ParalaxList>
            </Route>
            <Route path='/reversed'>
                <ParalaxList>
                    <div className='app'>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <Paralax power={1} reverse><InnerComponent /></Paralax>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                    </div>
                </ParalaxList>
            </Route>
            <Route path='/center'>
                <ParalaxList>
                    <div className='app'>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <Paralax power={1} centered><InnerComponent /></Paralax>
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                        <InnerComponent />
                    </div>
                </ParalaxList>
            </Route>
            <Route path='/static'>
                <div className='app'>
                    <InnerComponent />
                    <InnerComponent />
                    <InnerComponent />
                    <InnerComponent />
                    <Paralax power={1} ><InnerComponent /></Paralax>
                    <InnerComponent />
                    <InnerComponent />
                    <InnerComponent />
                    <InnerComponent />
                </div>
            </Route>
        </Router>
    );
}
export default App;