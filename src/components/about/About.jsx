
import { useState } from 'react';
import './about.scss';

export default function About() {
    const [long, setLong] = useState(false);
    const [more, setMore] = useState(false); 

    const handleClick = () => {
        setLong(!long); 
        setMore(!more);
    }

    return (
        <div className="about" id="about">
            <h1 className="">My story</h1>
            <div className="bar"></div>
            <div className="container">
                <div className="imgContainer">
                    <img src="assets/about.jpg" alt="" />
                </div>
                <div className="textContainer">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eius natus ratione eaque animi qui possimus! Reprehenderit reiciendis minima sit doloribus veritatis deserunt, 
                    recusandae magnam suscipit quos similique nam qui explicabo corrupti, cupiditate beatae numquam neque, dolorem quasi? 
                    <span className={"long " + (long && "active")} style={{ transition: 'all 2s ease' }}>Fugiat quod dignissimos accusamus delectus alias nostrum velit quia, saepe voluptatibus blanditiis quasi.</span></p>
                    <span className="button" onClick={handleClick}>{more ? 'Show less' : 'Show more'}  </span>
                </div>
            </div>
        </div>
    )
}
