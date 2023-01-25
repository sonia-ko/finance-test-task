import classes from './Footer.module.css';

import FacebookIcon from './Social/FacebookIcon';
import GooglePlusIcon from './Social/GooglePlusIcon';
import InstagramIcon from './Social/InstagramIcon';
import {
  phoneNumber,
  address,
  email,
  facebookLink,
  instagramLink,
  googleLink,
} from '../../static/companyInfo';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.container}`}>
        <div className={classes.aboutBlock}>
          <p className={classes.companyInfo}>{phoneNumber}</p>
          <p className={classes.companyInfo}>{address}</p>
          <p className={classes.companyInfo}>{email}</p>
        </div>
        <div className={classes.socialIconsContainer}>
          <a
            data-testid='fb-link'
            rel='noreferrer'
            target='_blank'
            href={facebookLink}
          >
            <FacebookIcon />
          </a>
          <a
            data-testid='gplus-link'
            rel='noreferrer'
            target='_blank'
            href={googleLink}
          >
            <GooglePlusIcon />
          </a>
          <a
            data-testid='instagram-link'
            rel='noreferrer'
            target='_blank'
            href={instagramLink}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
