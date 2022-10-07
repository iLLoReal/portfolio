import { Container } from '@mui/material';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import resume from './cv-olivier-laffon-2022.jpg'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './DisplayResume.scss';
import { useNavigate } from 'react-router-dom';

const DisplayResume = () => {
  const navigate = useNavigate();
  return (
    <Container className='display_resume_container'>
      <KeyboardBackspaceIcon
        fontSize='large'
        sx={{ cursor: 'pointer', color: 'lightblue' }}
        onClick={() => navigate('/')} />
      <Card className='display_resume_card'>
        <CardMedia
          className='display_resume_card_media'
          image={resume} />
      </Card >
      <SubdirectoryArrowRightIcon fontSize='small' /> 2022
    </Container>
  )
}

export default DisplayResume