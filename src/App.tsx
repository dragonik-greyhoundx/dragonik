// Dependencies
import { useState } from 'react';
// Css
import './app.css';
// Components
import TopBar from './components/TopBar';
import BodyView from './components/BodyView';
import FootBar from './components/FootBar';

export default function App () {
    // States
    const [onPage, setOnPage] = useState<string>("");
    // Render
    return (
        <div id="app">
            <TopBar />
            <BodyView />
            <FootBar />
        </div>
    );
};