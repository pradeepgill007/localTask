/**
 * @desc this component will display all the jobs list.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import React from 'react';
import { Grid, Button } from '@material-ui/core';
import Loading from '../loader/';
import jobListStyle from './styles';
import { JobList } from './types';

function JobLists(props: JobList) {
  // props for the components
  const { data, isLoading, error, nextPage } = props;

  const classes = jobListStyle();

  // show loader is loading state is true
  if (isLoading) {
    return <Loading />;
  }

  // display error if error from API
  if (error) {
    return <div className={classes.errorText}>Something went wrong</div>;
  }

  // display no job found if no response return from API
  if (!data || !data.data.included) {
    return <div className={classes.noJobFoundText}>No job found</div>;
  }

  // display job list received from API
  return (
    <React.Fragment>
      {data.data.included.map((job: any, index: number) => {
        return (
          <div className={classes.jobWrapper} key={index}>
            <h1 className={classes.title}>{job.attributes.title}</h1>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item xs={6}>
                {job.attributes.company.name}
              </Grid>
              <Grid item xs={6}>
                <img
                  src={job.attributes.company.logo}
                  alt={job.attributes.company.name}
                />
              </Grid>
            </Grid>
            <p>{job.attributes.location.city}</p>
            {job.attributes.responsibilities ? (
              <p>
                <strong>Responsibilities:</strong>{' '}
                {job.attributes.responsibilities}
              </p>
            ) : (
              ''
            )}
            {job.attributes.requirements ? (
              <p>
                <strong>Requirements:</strong> {job.attributes.requirements}
              </p>
            ) : (
              ''
            )}
          </div>
        );
      })}
      <Grid container spacing={1} className={classes.nextPrevButtonWrapper}>
        <Grid container item xs={6}>
          {data?.data.links.prev ? (
            <Button
              size="large"
              variant="contained"
              color="primary"
              onClick={() => nextPage(data?.data.links.prev)}
            >
              Previous
            </Button>
          ) : (
            ''
          )}
        </Grid>
        <Grid container item xs={6} justify="flex-end">
          <Button
            size="large"
            variant="contained"
            color="primary"
            onClick={() => nextPage(data?.data.links.next)}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

// react memo is used here because to avoid unnecessary redering of the component
// while filling search filed in Home component to increase performance.
export default React.memo(JobLists);
