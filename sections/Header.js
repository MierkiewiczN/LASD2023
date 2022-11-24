import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 bg-light mb-5 pt-5'>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
		      <Image src="/Talin.jpg" alt='Talin' fluid />
        </div>
        <div className="col-md-6">
		      <h1 className='h1 text-center anchor font-weight-bold'>LASD@<a className='u' href='https://www.sigapp.org/sac/sac2023/'>SAC'23</a></h1>
          <h2 className='text-center h3 py-3'>Track on <strong>Lean and Agile Software Development</strong></h2>
          <h2 className='text-center h4 pb-3'><small>at the 38th ACM/SIGAPP Symposium On Applied Computing</small></h2>
          <h4 className='text-center h5'>March 27 - April 2, 2023</h4>
          <h4 className='text-center h5'>Tallinn, Estonia</h4>
        </div>
        </div>
    </Container>

  </Jumbotron>
)

export default Header
