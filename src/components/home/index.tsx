/**
 * @desc this is the home component that will dispaly all the jobs that are coming from the API.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import React, { useState } from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';

import useGetJoblists from '../../service';
import JobLists from '../../util/job-lists/';
import homeStyle from './styles';

function Home() {
  // search text filed value holder and setter
  const [value, setValue] = useState('');

  // custome hook to get data from server
  const [fetchData, { data, isLoading, isError }] = useGetJoblists(value);

  // component style class
  const classes = homeStyle();

  /**
   * @desc this function will hit the search jobs API. After set the loader on the screen.
   *
   * @parms e       form event after form submission
   */
  function searchJobs(e: React.FormEvent) {
    e.preventDefault();
    if (value) {
      fetchData(`search.query=${value}`);
      setValue('');
    }
  }

  /**
   * @desc this function is used to get next, previous and last page data from the server.
   *
   * @parms pageLink       link for the page
   */
  function nextPage(pageLink: string) {
    let pageQuery = pageLink.split('?')[1];
    fetchData(`${pageQuery}`);
  }

  /**
   * @desc this function will set the text value in every on change key.
   *
   * @parms text      new value for the text field.
   */
  function onchangetext(text: string) {
    setValue(text);
  }

  return (
    <Container maxWidth="xl">
      <Grid>
        <form
          onSubmit={(e) => searchJobs(e)}
          className={classes.searchForm}
          noValidate
          autoComplete="off"
        >
          <TextField
            value={value}
            onChange={(e) => onchangetext(e.target.value)}
            placeholder="Search job"
            fullWidth
            variant="outlined"
          />
        </form>
        <Button
          size="large"
          variant="contained"
          color="primary"
          className={classes.searchButton}
          onClick={(e) => searchJobs(e)}
        >
          search
        </Button>
      </Grid>
      <JobLists
        data={data}
        isLoading={isLoading}
        error={isError}
        nextPage={nextPage}
      />
    </Container>
  );
}

export default Home;
