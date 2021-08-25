import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import image from '../asset/me.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김경관',
    small: '(KyungKwan Kim)',
  },
  contact: [
    {
      title: 'rudrhks0826@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-2657-8617',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/bbrokkkim',
      link: 'https://github.com/bbrokkkim',
      icon: faGithub,
    },
  ],
  notice: {
    title: "부재시 문자로 연락 부탁드립니다.",
    icon: faBell,
  },
};

export default profile;
