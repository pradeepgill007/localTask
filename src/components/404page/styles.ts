/**
 * @desc style for the 404 page component
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { makeStyles, createStyles } from '@material-ui/core/styles';

const page404Style = makeStyles(() =>
  createStyles({
    text404: {
      textAlign: 'center',
      fontSize: '3rem',
    },
    backToHome: {
      color: '#A9A9A9',
    },
  })
);

export default page404Style;
