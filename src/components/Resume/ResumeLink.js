import { faFile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResumeLink = () => {
  const resumeLink =
    'https://drive.google.com/file/d/1j-Kq9TXlZQbyiBWwKELUbhlwAZuw6SlE/view?usp=sharing';

  const handleEmailClick = (event) => {
    event.preventDefault();
    window.open(`${resumeLink}`, '_blank');
  };

  return (
    <p>
      You can download my resume here:
      <a href={`${resumeLink}`} onClick={handleEmailClick}>
        <FontAwesomeIcon icon={faFile} />
      </a>
    </p>
  );
};

export default ResumeLink;
