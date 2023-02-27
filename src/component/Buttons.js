import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const Buttons = ({ text, link, variant }) => {
  return (
    <Button variant={variant} component={Link} to={link}>{text}</Button>
  )
}

export default Buttons
