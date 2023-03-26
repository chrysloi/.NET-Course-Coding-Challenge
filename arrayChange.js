const arrayChange = (originalArray = [], updatedArray = []) => {
  const newElements = [];
  const removedElements = [];

  if (!Array.isArray(originalArray) || !Array.isArray(updatedArray))
    return "You need to provide an array";

  //   finding removed items
  for (let i = 0; i < originalArray.length; i++) {
    !updatedArray.includes(originalArray[i]) &&
      removedElements.push(originalArray[i]);
  }

  //   finding new items
  for (let i = 0; i < updatedArray.length; i++) {
    !originalArray.includes(updatedArray[i]) &&
      newElements.push(updatedArray[i]);
  }

  return { newElements, removedElements };
};

const originalArray = [1, 2, 3, 4, 5, 6];
const updatedlArray = [1, 3, 4, 5, 7, 8];
const changes = arrayChange(originalArray, updatedlArray);

console.log("New Elements", changes.newElements);
console.log("Removed Elements", changes.removedElements);
