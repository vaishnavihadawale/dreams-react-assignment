import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grid.css';
export const Grid = () => {
    return (
        <div>
            <Container>
                <Row className='row'>

                    <Col className='column'>1 of 2</Col>
                    <Col className='column'>2 of 2</Col>
                </Row>
                <Row className='row'>
                    <Col className='column'>1 of 3</Col>
                    <Col className='column'>2 of 3</Col>
                    <Col className='column'>3 of 3</Col>
                </Row>
            </Container>
        </div>
    )
}