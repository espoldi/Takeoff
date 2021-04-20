import axios from 'axios';

const url = '/api/itinerary';

export const fetchItineraryItems = (tripId) => axios.get(url, { params: { tripId } });
export const getItineraryItem = (id) => axios.get(`${url}/${id}`);
export const createItineraryItem = (newItem) => axios.post(url, newItem);
export const updatedItineraryItem = (id, update) => axios.patch(`${url}/${id}`, update);
export const deleteItineraryItem = (id) => axios.delete(`${url}/${id}`);