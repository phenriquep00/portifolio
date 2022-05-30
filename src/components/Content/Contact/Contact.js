import github from './git.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import instagram from './instagram.png';
import { SocialButtons } from './SocialButtons';

export function Contact() {
    return (
        <div className="flex flex-row gap-40 mb-6">
            <SocialButtons image={github} link="https://github.com/phenriquep00"/>
            <SocialButtons image={linkedin} link="https://www.linkedin.com/in/pedro-lima-255a33223/"/>
            <SocialButtons image={twitter} link="https://twitter.com/Pedro32977686"/>
            <SocialButtons image={instagram} link="https://www.instagram.com/im.pedrooo/"/>
        </div>
    )
}