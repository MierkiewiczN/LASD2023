import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Chairs = ({ people }) => (
  <Container className="bg-light section">
    <a className='target' id='chairs'/>
    <h2 className='display-4 anchor'>Track Chairs</h2>
    <PeopleList people={people} />
  </Container>
)

export default Chairs
