import ComputerIcon from '@material-ui/icons/Computer';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import MobileFriendlyIcon from '@material-ui/icons/MobileFriendly';
import { useState } from 'react';
import './works.scss';

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
          id: '1',
          icon: <MobileFriendlyIcon/>,
          title: 'Web design',
          desc:
          "lorem ipsum",
          img:
          'assets/works1.jpg',  
        },
        {
            id: '2',
            icon: <ComputerIcon/>,
            title: 'Mobile app',
            desc:
            "lorem ipsum2",
            img:
            'assets/works2.jpg',  
          },
          {
            id: '3',
            icon: <ImportantDevicesIcon/>,
            title: 'Branding',
            desc:
            "lorem ipsum3",
            img:
            'assets/works3.jpg',  
          }
    ]
    
    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length -1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" style={{ transform: `translateX(-${currentSlide *100}vw)` }}>
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        {d.icon}
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>
                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
            <KeyboardArrowLeftIcon  className="arrow left" onClick={() => handleClick("left")}/>
            <KeyboardArrowRightIcon  className="arrow right" onClick={() => handleClick()}/>
        </div>
    )
}
