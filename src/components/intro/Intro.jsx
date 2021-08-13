import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';
import "./intro.scss";

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60, 
            strings: ['Web Developer', 'Content Creator'], 
        });
    }, []);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/kara.jpg" alt="Me Myself & I" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ioan-Alexandru Caragop</h1>
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownwardIcon className="downArrow"/>
                </a>
            </div>
        </div>
    )
}
