import React, { useEffect } from 'react';
// Components
import Current from '../components/Current.js';
import Archive from '../components/Archive.js';
// Material UI
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getTrips } from '../actions/tripActions';

export default function Dashboard() {
  const userId = useSelector(state => state.auth.user.id);
  const dispatch = useDispatch();
  const current = useSelector(state => state.trips.currentTrips);
  const archived = useSelector(state => state.trips.archivedTrips);

  useEffect(() => {
    dispatch(getTrips(userId));
  }, []);

  return (
    <Container fixed>
      <Current data={current} />
      <br/>
      <Archive data={archived} />
    </Container>
  );
}
