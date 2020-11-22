// BEGIN (write your solution here)

const fill = (obj1, replace, obj2) => {
  if (replace.length === 0) {
    return Object.assign(obj1, obj2);
  }
  for (const el of replace) {
    obj1[el] = obj2[el];
  }
  return obj1;
};

export default fill;

// END

//Version 2===================

// BEGIN (write your solution here)

const fill = (obj1, replace, obj2) => {
    const repl = replace.length <= 0 ? obj2 : _.pick(obj2, replace);
    return Object.assign(obj1, repl);
};

export default fill;

// END

/*objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая заполняет объект данными из другого объекта по разрешенному списку ключей. Параметры:

Исходный объект
Список ключей которые нужно заменить
Данные, которые нужно сливать в исходный объект
В случае, когда список ключей пустой, нужно сливать все данные полностью.

import fill from '../objects.js';

const company = {
  name: null,
  state: 'moderating',
};

const data = {
  name: 'Hexlet',
  state: 'published',
};

// Вызовы ниже нужно рассматривать как независимые

fill(company, ['name'], data);
// {
//   name: 'Hexlet',
//   state: 'moderating',
// }

fill(company, [], data);
// {
//   name: 'Hexlet',
//   state: 'published',
// }*/
