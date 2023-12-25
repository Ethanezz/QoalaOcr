import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" bg="primary" variant="dark" className="navbar">
      <Container className='c1'>
        <Navbar.Brand className="text-center" style={{ color: '#fff', fontFamily: 'cursive', fontSize: '2rem' }}>
          OCR Project by Saransh Sahu
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
