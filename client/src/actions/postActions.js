import { FETCH_ALL, CREATE, UPDATE, DELETE, SET_CURRENT_POST } from './types/postTypes';
import * as api from '../api/posts';

//Action Creators redux thunk=async 
export const getPosts = (userId) => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts(userId);

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: UPDATE, payload: data });

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });

    } catch (error) {
        console.log(error);
    }
}

export const setCurrentPost = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchPost(id);
        dispatch({ type: SET_CURRENT_POST, payload: data });
    } catch (error) {
        console.log(error);
    }
}