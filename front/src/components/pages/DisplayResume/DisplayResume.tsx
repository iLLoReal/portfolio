import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Button, Container } from '@mui/material';
import Card from '@mui/material/Card';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { useNavigate } from 'react-router-dom';
import './DisplayResume.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.worker.js`;

const DisplayResume = () => {
  const over1200 = useMediaQuery('(min-width:1200px)');
  const from600to1199 = useMediaQuery('(min-width:600px) and (max-width: 1199px)');
  const from350to599 = useMediaQuery('(min-width:350px) and (max-width: 599px)')
  const from250to349 = useMediaQuery('(min-width:250px) and (max-width: 349px)')
  const below250 = useMediaQuery('(min-width:800px) and (max-width: 1199px)')

  const navigate = useNavigate();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [resolution, setResolution] = useState([2580, 989]);

  useEffect(() => {
    if (over1200)
      setResolution([2580, 989]);
    else if (from600to1199)
      setResolution([1290, 494]);
    else if (from350to599)
      setResolution([645, 247]);
    else if (from250to349)
      setResolution([322, 123]);
    else if (below250)
      setResolution([161, 61]);
  }, [below250, from250to349, from350to599, from600to1199, over1200]);
  
  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  }
  return (
    <div style={{ backgroundColor: '#009FB7', height: 'auto' }}>
      <Container className='display_resume_container'>
        <KeyboardBackspaceIcon
          fontSize='large'
          sx={{ cursor: 'pointer', color: 'lightblue' }}
          onClick={() => navigate('/')} />
        <Card className='display_resume_card'>
          <Document
            file={'cv-olivier-laffon-2022-2.pdf'}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={console.error}
          >
            <Page
              pageNumber={pageNumber}
              height={resolution[0]}
              width={resolution[1]}
            />
          </Document>
          {
            pageNumber - 1 > 0 &&
            <Button onClick={() => setPageNumber(pageNumber - 1 ? pageNumber - 1 : pageNumber)}>
              {'<'}{pageNumber}/{numPages}
            </Button>
          }
          {
            numPages && pageNumber + 1 <= numPages &&
            <Button variant="text" onClick={() => setPageNumber(pageNumber + 1 <= numPages ? pageNumber + 1 : pageNumber)}>
              {pageNumber}/{numPages}{'>'}
            </Button>
          }
        </Card >
      </Container>
    </div>
  )
}

export default DisplayResume