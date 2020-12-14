/**
 * @desc this is the styles of the home component.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { makeStyles, createStyles } from '@material-ui/core/styles';

const homeStyle = makeStyles(() =>
  createStyles({
    searchForm: {
      display: 'inline-block',
      width: '76%'
    },
    searchButton: {
      marginTop: '31px',
      marginLeft: '1%',
      padding: '14px 5%'
    }
  })
);

export default homeStyle;
