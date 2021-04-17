import axios from 'axios';

const url = 'http://localhost:3030/api/trips';

export const fetchTrips = () => axios.get(url);
export const createTrip = (newTrip) => axios.post(url, newTrip);
export const updatedTrip = (id, updatedTrip) => axios.put(`${url}/${id}`, updatedTrip);
export const deleteTrip = (id) => axios.delete(`${url}/${id}`);