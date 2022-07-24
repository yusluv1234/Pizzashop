import { UilFacebook, UilGithub, UilInstagram } from "@iconscout/react-unicons";

const Footer = () => {
  return (
    <div className={css.container}>
      <span>ALL RIGHT RESERVED</span>
      <div className={css.social}>
        <UilFacebook />
        <UilGithub />
        <UilInstagram />
      </div>
    </div>
  );
};

export default Footer;
