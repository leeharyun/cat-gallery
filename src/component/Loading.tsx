import React from 'react';
import ReactLoading from 'react-loading';

interface LoadingPops {
    type: "blank" | "balls" | "bars" | "bubbles" | "cubes" | "cylon" | "spin" | "spinningBubbles" | "spokes";
    color?: string;
};

const DEFAULT_COLOR = "dodgerblue";

const Loading = ({type, color}: LoadingPops) => {
    return (
        <div className="loading-container">
            <ReactLoading 
                type={type} 
                color={color || DEFAULT_COLOR} 
                className={"loading-container__loading"} />
        </div>
    );
};  

export default Loading;