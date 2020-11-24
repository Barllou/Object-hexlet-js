// BEGIN (write your solution here)

const fn = arr => {
const obj = {};
  for(const [key, value] of arr){
obj[key] = value;
}
  return obj;
}

export default fn;

// END

/*fromPairs.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход массив, состоящий из массивов-пар и возвращает объект, полученный из этих пар.

Примечания
Если при конструировании объекта попадаются совпадающие ключи, то берётся значение из последнего массива-пары:
fromPairs([['cat', 5], ['dog', 6], ['cat', 11]])
// { 'cat': 11, 'dog': 6 }
Примеры
fromPairs([['fred', 30], ['barney', 40]]);
// { 'fred': 30, 'barney': 40 }*/
