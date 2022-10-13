import { Container } from '@mui/material';
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import resume from './cv-olivier-laffon-2022-2.jpg'
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './DisplayResume.scss';
import { useNavigate } from 'react-router-dom';

const DisplayResume = () => {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: '#009FB7', height: 'auto' }}>
      <Container className='display_resume_container'>
        <KeyboardBackspaceIcon
          fontSize='large'
          sx={{ cursor: 'pointer', color: 'lightblue' }}
          onClick={() => navigate('/')} />
        <Card className='display_resume_card'>
          <CardMedia
            className='display_resume_card_media'
            image={resume}
          />
        </Card >
        <SubdirectoryArrowRightIcon fontSize='small' sx={{ color: 'lightblue' }} />
        2022
      </Container>
    </div>
  )
}

export default DisplayResume