/**
 * @desc this component will display the loading state.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import CircularProgress from '@material-ui/core/CircularProgress';
import loaderStyle from './styles';

function Loading() {
  const classes = loaderStyle();

  return (
    <div className={classes.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loading;
