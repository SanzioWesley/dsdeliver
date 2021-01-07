import './styles.css'
import { ReactComponent as YouTubeIcon } from './youtube.svg'
import { ReactComponent as LinkedinIcon } from './linkedin.svg'
import { ReactComponent as InstagranIcon } from './instagran.svg'


function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UC8oHdimChl1vg4GPEzSNYXA/videos" target="new">
                    <YouTubeIcon />
                </a>

                <a href="https://www.linkedin.com/in/sanzio-wesley/" target="new">
                    <LinkedinIcon />
                </a>

                <a href="https://www.instagram.com/sanziow/" target="new">
                    <InstagranIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;