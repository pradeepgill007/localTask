/**
 * @desc this is page 404 component. This component will display when no route is found.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */
import { Link } from 'react-router-dom';
import page404Style from './styles';

function PageNotFound() {
  const classes = page404Style();
  return (
    <div className={classes.text404}>
      Page Not Found. <br />
      <Link to="/" className={classes.backToHome}>
        Home
      </Link>
    </div>
  );
}

export default PageNotFound;
