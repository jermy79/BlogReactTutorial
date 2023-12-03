import {Link} from 'react-router-dom';
const About = () => {
    return ( 
        <div className="about">
            <h2>About</h2>
            <p>Hello and Welcome to my Website! I made this website mostly to learn the basics of React. After reading
                through the documentation and learning how most of the commands worked I decided to put everything I've
                learned to use. I mostly followed a tutorial for this website so I can learn how to apply the techniques
                I've learned so far. It's a little basic but graphic design isn't my strongest skill right now. It may look
                simple trust me this took a lot of work, like a days worth of programming. So sorry if it's a little underwhelming. I don't know
                if I'll actually post here but who knows. It might make a good portfolio site. Anyways thank you for visiting and
                I hope you enjoy your stay
            </p>
            <p>-Jeremy</p>
            <Link to="/">Back to Homepage</Link>
        </div>
     );
}
 
export default About;