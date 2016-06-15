/**
 * Created by leiyouwho on 6/15/16.
 */

export const ADD_COMPONENT = 'ADD_COMPONENT';

export function addComponent(componentName, props) {
  return {
    type: ADD_COMPONENT,
    componentName,
    props,
  };
}
