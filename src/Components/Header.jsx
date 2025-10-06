import React from 'react';
export default function Header() {
    return (
        <header>
            <h1>Welcome to the Event Management System</h1>
            <nav>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Schedule">Schedule</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><a href="#About">About</a></li>
                </ul>
            </nav>
        </header>
    );
}