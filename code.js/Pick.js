// BEGIN (write your solution here)

const pick = (obj, arr) => {
  const result = {};
  const keys = Object.keys(obj);
  for (const key of keys) {
    for (const el of arr) {
      if (key == el) {
        result[key] = obj[key];
      }
    }
  }
  return result;
};

export default pick;

// END

/*Реализуйте и экспортируйте функцию по умолчанию, которая формирует из переданного объекта другой объект, включающий только указанные свойства. Параметры:

Исходный объект
Массив имен свойств
import pick from './objects.js';

const data = {
  user: 'ubuntu',
  cores: 4,
  os: 'linux',
};

pick(data, ['user']); // { user: 'ubuntu' }
pick(data, ['user', 'os']); // { user: 'ubuntu', os: 'linux' }
pick(data, []); // {}
// Если такого свойства нет в исходных данных,
// то оно игнорируется 
pick(data, ['none', 'cores']); // { cores: 4 }*/
