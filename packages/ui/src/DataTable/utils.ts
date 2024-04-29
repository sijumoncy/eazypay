export function moveColumnsDown(columnObj:any, columnId: string) {
  const array = columnObj.map((item) => item.id);
  const index = array.indexOf(columnId);
  if (index < 0 || index === array.length - 2) {
    //not found or next to actions whic can't be moved
    return array;
  }

  const temp = array[index];
  array[index] = array[index + 1];
  array[index + 1] = temp;
  console.log(array);
  return array;
}

export function moveColumnsUp(columnObj:any, columnId: string) {
  const array = columnObj.map((item) => item.id);
  const index = array.indexOf(columnId);
  if (index < 2) {
    //not found or next to checkbox column which can't be moved
    return array;
  }

  const temp = array[index];
  array[index] = array[index - 1];
  array[index - 1] = temp;
  return array;
}
