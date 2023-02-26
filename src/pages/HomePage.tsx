import {FC, useState} from 'react';
import HomeWork2302 from '../Components/HomeWork2302/HomeWork2302';
import teacther from '../images/teacher.png'

interface HomePageProps {
    
}
type typeusersState = {
    id:number,
    name:string,
    profession:string,
    website:string,
    abouttext:string,
    interesttext:string,
    image:string,
}

const HomePage:FC<HomePageProps> = () => {
    const [users, setUsers] = useState<typeusersState[]>([
        {id:1,name:"Laura Smith",profession:"Frontend Developer",website:"laurasmith.website", abouttext:"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.", interesttext:"Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.", image:teacther},
        {id:2,name:"Laura Smith",profession:"Frontend Developer",website:"laurasmith.website", abouttext:"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.", interesttext:"Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.", image:teacther},
        {id:3,name:"Laura Smith",profession:"Frontend Developer",website:"laurasmith.website", abouttext:"I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.", interesttext:"Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.", image:teacther},
    ]);
    

    
    return (
        <div>
            <HomeWork2302 users={users} />
        </div>
    );
};

export default HomePage;