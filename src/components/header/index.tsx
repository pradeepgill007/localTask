/**
 * @desc this is the header component with logo of the company
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import headerStyle from './styles';

function Header() {

  // component style class
  const classes = headerStyle();

  /**
   * @desc react component return function that will return JSX
   */
  return (
    <div className={classes.wrapper}>
      <Container maxWidth="xl">
          <Link className={classes.logo} to="/">
            Joblocal
          </Link>
      </Container>
    </div>
  );
}

export default Header;
