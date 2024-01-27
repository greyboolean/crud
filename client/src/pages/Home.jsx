import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  return (
    <div>
      <h1>CRUD</h1>
      <Link to="/items">
        <Button text="Items" />
      </Link>
    </div>
  );
};

export default Home;
