import { getContacts } from './apiRequests';

export const fetchAllContacts = async () => {
  try {
    const response = await getContacts();
    if (response.data) return response.data.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
