import axios from 'axios';

const url = '/api/trips';

export const fetchTrips = (userId) => axios.get(url, { params: { userId } });
export const getTrip = (id) => axios.get(`${url}/${id}`);
export const createTrip = (newTrip) => axios.post(url, newTrip);
export const updatedTrip = (id, update) => axios.patch(`${url}/${id}`, update);
export const deleteTrip = (id) => axios.delete(`${url}/${id}`);