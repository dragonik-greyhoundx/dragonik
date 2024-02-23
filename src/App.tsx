// Dependencies
import { useState, useEffect, ReactNode } from 'react';
// Css
import './app.css';
// Components
import TopBar from './components/TopBar';
import BodyView from './components/BodyView';
import FootBar from './components/FootBar';
// Pages
import Home from './pages/home';

export default function App () {
    // States
    const [onPage, setOnPage] = useState<ReactNode>(null);
    // Effects
    useEffect(() => {
        if (onPage === null) {
            setOnPage( <Home /> );
        }
    }, []);
    // Render
    return (
        <div id="app">
            <TopBar />
            <BodyView children={onPage} />
            <FootBar />
        </div>
    );
};