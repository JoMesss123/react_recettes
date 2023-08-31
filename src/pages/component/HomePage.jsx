import {useQuery} from 'react-query';
import FetchState from '../../components/FetchState/FetchState';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CategorieService from '../service/CategorieService';

const cS = new CategorieService()

const HomePage = () => {
  
 const { data: categories, isLoading,isError, error } = useQuery(['categories'], () => cS.fetchCategories());
  

  return (
    <Container fluid className='d-grid min-vh-100'>
			<FetchState isLoading={isLoading} isError={isError} error={error}>
				<Container>
					<Row>
					{categories && categories.map((category) => (
          				
           				 <Col key={category.idCategory}>
           				 <Link to={`/category/${category.strCategory}`}>{category.strCategory}</Link>
          
            			</Col>
						))}
					</Row>
				</Container>
			</FetchState>
		</Container>
	)
}

export default HomePage;