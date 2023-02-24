import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const Buttons = ({ text, link }) => {
  return (
    <Button component={Link} to={link}>{text}</Button>
  )
}

export default Buttons
