import React, {Component} from 'react';
import './footer.css';
import GithubIcon from './github.svg';
import AndroidIcon from './android.svg';
import LinkedinIcon from './linkedin.svg';
import MailIcon from './mail.svg';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://github.com/simjes" target="_blank"><img className="footer-icon" src={GithubIcon} alt="Github" /></a>
                <a href="https://play.google.com/store/apps/developer?id=Simjes" target="_blank"><img className="footer-icon" src={AndroidIcon} alt="Google Play" /></a>
                <a href="https://no.linkedin.com/in/simjes" target="_blank"><img className="footer-icon" src={LinkedinIcon} alt="Linkedin" /></a>
                <a href="mailto:simjes91@me.com"><img className="footer-icon" src={MailIcon} alt="Mail" /></a>
            </div>
        );
    }
}

export default Footer;