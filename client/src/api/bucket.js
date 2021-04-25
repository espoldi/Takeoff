import axios from 'axios';

const url = '/api/bucketlist';

export const fetchBucketItems = (userId) => axios.get(url, { params: { userId } });
export const getBucketItem = (id) => axios.get(`${url}/${id}`);
export const createBucketItem = (newItem) => axios.post(url, newItem);
export const deleteBucketItem = (id) => axios.delete(`${url}/${id}`);