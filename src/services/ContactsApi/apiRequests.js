import contacts from './base';

export const getContacts = async () => {
  try {
    const response = await contacts.get('');
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getContact = async id => {
  try {
    const response = await contacts.get(id);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const postContact = async data => {
  try {
    const response = await contacts.post('', data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const patchContact = async ({ id, data }) => {
  try {
    const response = await contacts.patch(id, data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async id => {
  try {
    const response = await contacts.delete(id);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
