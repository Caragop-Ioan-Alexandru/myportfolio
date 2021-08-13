import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import YouTubeIcon from '@material-ui/icons/YouTube';
import './testimonials.scss';

export default function testimonials() {
    const data = [
        {
            id: 1,
            name: 'Vlad Patrascu',
            title: 'Senior React Developer',
            img: 'assets/person1.jpg',
            icon: <YouTubeIcon className="right"/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita doloribus, esse perspiciatis voluptatibus et velit'
        },
        {
            id: 2,
            name: 'Justin',
            title: 'Senior Angular Developer',
            img: 'assets/person1.jpg',
            icon: <YouTubeIcon className="right"/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita doloribus, esse perspiciatis voluptatibus et velit',
            featured: true
        },
        {
            id: 1,
            name: 'Vlad Dinescu',
            title: 'Senior QA',
            img: 'assets/person1.jpg',
            icon: <YouTubeIcon className="right"/>,
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita doloribus, esse perspiciatis voluptatibus et velit'
        }
    ]
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
            {data.map((d => 
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <ArrowRightAltIcon className="left"/>
                        <img className="user" src={d.img} alt="" />
                        {d.icon}
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                    <h3>
                        {d.name}
                    </h3>
                    <h4>{d.title}</h4>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}
