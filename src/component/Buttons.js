import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const Buttons = ({ text, link }) => {
  return (
    <Button variant='outlined' component={Link} to={link}>{text}</Button>
  )
}

export default Buttons
