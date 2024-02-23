// Dependencies
import { ReactNode, useState } from 'react';
// Css
import './index.css';
// Interfaces
interface BodyViewProps {
    children: ReactNode,
};

export default function BodyView (props: BodyViewProps) {
    // Props
    const { children } = props;
    // States
    const [displayType, setDisplayType] = useState<string>("");
    // Render
    return (
        <div id="bodyview">
            {children}
        </div>
    );
};