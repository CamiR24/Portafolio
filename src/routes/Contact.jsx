import Navbar       from '../components/Navigation/Navbar';
import Title        from '../components/AboutMe/Title'


export default function Contact() {
  return (
    <div className="AboutMe-page">
        <Navbar />
        <div className="first-slide">
            <Title title={'PRO-YECTOS'} extra={'destacados'} />
        </div>
    </div>
  );
}