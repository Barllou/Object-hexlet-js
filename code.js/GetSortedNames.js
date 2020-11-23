// BEGIN (write your solution here)

const getSortedNames = (user) => {
  const result = [];
  for (const el of user) {
    const { name } = el;
    result.push(name);
  }
  return result.sort();
};

export default getSortedNames;

// END


//Version.2================

// BEGIN (write your solution here)

const getSortedNames = (user) => {
  let result = [];
  for (const { name } of user) {
    result.push(name);
  }
  return result.sort();
};

export default getSortedNames;

// END

/*objects.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход список пользователей, извлекает их имена, сортирует в алфавитном порядке и возвращает отсортированный список имен.

const users = [
  { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
  { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
  { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
  { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
];

getSortedNames(users); // ['Bronn', 'Eiegon', 'Reigar', 'Sansa']
Попробуйте использовать деструктуризацию для извлечения имени прямо в цикле.*/
