export const objValues = ['1', 'James', 'Ibori', 'Ikoyi', 'Lagos', 'One expensive house like that']

export function pathFinder(obj, query) {
  var result = '';
  for (var key in obj) {
    if (obj[key] === query) {
      result += 'obj.' + key;
    }
    if (typeof obj[key] === "object") {

      result = result.concat(pathFinder(obj[key], query));
    }
  }
  return result;
}


export const findKey = (a, value) => {
  const findKeyInObj = (val) => {
    const result = {};
    for (const key in val) {
      if (typeof val[key] === "object" && !Array.isArray(val[key])) {
        const newObj = findKeyInObj(val[key]);
        for (const newKey in newObj) {
          result[`${key}.${newKey}`] = newObj[newKey];
        }
      } else {
        result[key] = val[key];
      }
    }
    return result;
  };
  const flattenedObject = findKeyInObj(a);
  for (const key in flattenedObject) {
    if (flattenedObject[key] === value) {
      return key;
    }
  }
};

export const formatInputValue = (inputValue) => {
  let newInput = inputValue.toLowerCase();
  const result = newInput.charAt(0).toUpperCase() + newInput.slice(1);
  return result;
};