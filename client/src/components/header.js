import React from "react";

export default function Header( {currentPage, handlePageChange} ) {
    console.log("Header has run");
    return (
        <header>
            <p>EQ2 Group Planning Application</p>
            <ul>
                <li>
                    <a
                    href='#Page1'
                    onClick={() => handlePageChange('Page1')}
                    >
                    Search Characters
                    </a>
                </li>
                <li>
                <a
                    href='#Page2'
                    onClick={() => handlePageChange('Page2')}
                    >
                    Search Groups
                    </a>
                </li>
                <li>
                <a
                    href='#Page3'
                    onClick={() => handlePageChange('Page3')}
                    >
                    Your Groups
                    </a>
                </li>
                <li>
                <a
                    href='#Page4'
                    onClick={() => handlePageChange('Page4')}
                    >
                    Create Group
                    </a>
                </li>
            </ul>
        </header>
    )
}