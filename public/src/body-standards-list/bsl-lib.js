import React from 'react';
import { compareValueKeys } from './bsl-constants';
import { COMMON_CLASSES } from 'common/';

export const compareFunction = ( textValue, obj ) =>{
  let reg;
  try {
    reg = new RegExp( textValue, 'i' );
  } catch (error) {
    return [];
  }
  return (reg.test(obj[compareValueKeys.id]) || reg.test(obj[compareValueKeys.name]) ) ? true : false;
};

export const childConstructor = ( values, index, callback ) => {
  return (
    <tr key={index} onClick={callback} className={createClassName( COMMON_CLASSES.arrayChildElement, values.selected ? COMMON_CLASSES.arraySelected : undefined)}>
      <td>{values.id + ' - ' + values.name}</td>
    </tr>
  );
};