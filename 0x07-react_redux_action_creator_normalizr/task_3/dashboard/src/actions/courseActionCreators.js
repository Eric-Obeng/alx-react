import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

const selectCourse = () => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

export { selectCourse, unSelectCourse };
