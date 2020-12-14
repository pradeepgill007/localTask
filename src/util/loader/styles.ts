/**
 * @desc style for the loader component
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { makeStyles, createStyles } from '@material-ui/core/styles';

const loaderStyle = makeStyles(() =>
  createStyles({
    loader: {
      textAlign: 'center',
      marginTop: '30px'
    },
  })
);

export default loaderStyle;
