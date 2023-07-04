import React from "react";

export default function Header( {currentPage, handlePageChange} ) {
    console.log("Header has run");
    return (
        <header>
            <p>EQ2 Group Planning Application</p>
            <ul>
                <li>
                    <a
                    href='#CharacterSearch'
                    onClick={() => handlePageChange('CharacterSearch')}
                    >
                    Search Characters
                    </a>
                </li>
                <li>
                <a
                    href='#GroupSearch'
                    onClick={() => handlePageChange('GroupSearch')}
                    >
                    Search Groups
                    </a>
                </li>
                <li>
                <a
                    href='#Page3'
                    onClick={() => handlePageChange('Page3')}
                    >
                    Your Groups **UPDATE PATH**
                    </a>
                </li>
                <li>
                <a
                    href='#Page4'
                    onClick={() => handlePageChange('Page4')}
                    >
                    Create Group **UPDATE PATH**
                    </a>
                </li>
            </ul>
        </header>
    )
}