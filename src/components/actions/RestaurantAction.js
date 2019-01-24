import uuid from 'uuid';
export const addRestaurant = (
    {
      name = '',
      address = '',
      phone = '',
      email = 0
    } = {}
  ) => ({
    type: 'ADD_RESTAURANT',
    restaurant: {
      id: uuid(),
      name,
      address,
      phone,
      email
    }
  });
  
  // REMOVE_RESTAURANT
  export const removeRestaurant = ({ id } = {}) => ({
    type: 'REMOVE_RESTAURANT',
    id
  });
  
  // EDIT_RESTAURANT
  export const editExpense = (id, updates) => ({
    type: 'EDIT_RESTAURANT',
    id,
    updates
  });