/**
 * @desc this is the styles of the job list component.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { makeStyles, createStyles } from '@material-ui/core/styles';

const jobListStyle = makeStyles(() =>
  createStyles({
    jobWrapper: {
      borderBottom: '1px solid #bdbdbd',
      marginTop: '5px',
      marginBottom: '5px'
    },
    title: {
      color: '#2196f3'
    },
    errorText: {
      color: '#b71c1c'
    },
    noJobFoundText: {
      textAlign: 'center',
      marginTop: '30px',
      color: '#2196f3',
      fontSize: '2rem',
      lineHeight: '1.5rem',
      textTransform: 'uppercase'
    },
    nextPrevButtonWrapper: {
      marginTop: '30px',
      marginBottom: '30px'
    }
  })
);

export default jobListStyle;
