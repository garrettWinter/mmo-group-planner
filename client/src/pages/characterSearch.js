import React from 'react';
import DayMatrix from '../components/dayMatrix'
import TimeMatrix from "../components/timeMatrix"

const CharacterSearch = () => {
    return (
        <main>
            <div>
                <div><span>Server:</span><div>DROP DOWN LIST</div></div>
                <div><span>Name:</span><div>INPUT FIELD (VARCHAR)</div></div>
                <div><span>Level:</span><div>Input Field (INT ONLY, default to max lvl)</div></div>
                <div><span>Resolve:</span><div>Input Field (INT ONLY, will return equal to or greater characters)</div></div>
                <div><span>Role:</span><div>DROP DOWN LIST</div></div>
                <div><span>Class:</span><div>DROP DOWN LIST</div></div>
                <div><span>Day of Week (?):</span><div><DayMatrix/></div></div>
                <div><span>Time of Day:</span><div><TimeMatrix/></div></div>
                <button>Search for Characters</button>
            </div>
            <div>
                <span>Search Results:</span>
                <div>CREATE A COMPOENT FOR THIS!!!</div>
            </div>
        </main>
    )
}


export default CharacterSearch;