const arr = [1, 1, 2, 2, 3, 3, "teste", "teste"];
const arrUnique = [...new Set(arr)];

console.log('unique', arrUnique);