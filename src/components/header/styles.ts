/**
 * @desc this is the styles of the header component.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { makeStyles, createStyles } from '@material-ui/core/styles';

const headerStyle = makeStyles(() =>
  createStyles({
    wrapper: {
      borderBottom: '2px solid #000',
      paddingTop: '30px',
      paddingBottom: '30px',
      marginBottom: '10px',
    },
    logo: {
      textTransform: 'uppercase',
      fontSize: '2rem',
      lineHeight: '1.5rem',
      textDecoration: 'none',
      color: '#000',
    }
  })
);

export default headerStyle;
