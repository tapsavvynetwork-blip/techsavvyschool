import axios from 'axios';

const API = axios.create({ baseURL: '/api' });

export const fetchCourses = () => API.get('/courses');
export const fetchTestimonials = () => API.get('/testimonials');
export const fetchFAQs = () => API.get('/faq');
export const submitEnrollment = (data) => API.post('/enrollments', data);

export default API;
