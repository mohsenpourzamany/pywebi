import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
const ProfileList = () => {
  return (
    <>
      <div className="container-profile">
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          <span>Our Services</span> <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        {/* <div className="section-title position-relative pb-3 mb-5 text-align-center"></div> */}
        <div className="border-profil1"></div>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          <span>Our Services</span> <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        <Button variant="primary" className="btn-profile">
          <AccountBalanceIcon className="icon-profile" />
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
          <p>In Site</p>
        </Button>
        {/* <div className="section-title position-relative pb-3 mb-5 text-align-center"></div> */}
        <div className="border-profil"></div>
        <Button variant="primary" className="btn-profile-not">
          <NotificationAddIcon fontSize="large" className="icon-profile" />
          Notification <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
      </div>
    </>
  );
};

export default ProfileList;
