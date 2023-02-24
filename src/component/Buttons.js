import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Buttons = ({ text, link }) => {
  return (
    <Button component={Link} to={link}>{text}</Button>
  )
}

export default Buttons
