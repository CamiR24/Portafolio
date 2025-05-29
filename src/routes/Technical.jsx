import Navbar       from '../components/Navigation/Navbar';
import Title        from '../components/AboutMe/Title'


export default function Technical() {
  return (
    <div className="AboutMe-page">
        <Navbar />
        <div className="first-slide">
            <Title title={'LEN-GUAJES'} extra={'programación'} />
        </div>
    </div>
  );
}