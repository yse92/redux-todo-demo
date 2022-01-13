/*
    ACTION
*/
export const add = todo => {
  return {
    type: 'ADD',
    payload: todo,
  };
};

export const del = id => {
  return {
    type: 'DEL',
    payload: id,
  };
};

export const edit = todo => {
  return {
    type: 'EDIT',
    payload: todo,
  };
};
