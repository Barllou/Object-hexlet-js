// BEGIN (write your solution here)
  const fn = (c1, c2) => {
    for (let key in c1){
      if (c1[key] !== c2[key]) {
        return false;
      }
    }
    return true;
  };

export default fn;
// END

/*Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true если их структура одинаковая и false в обратном случае. Проверка должна проходить по свойствам name, state, website.

import is from './company.js';

const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
is(company1, company2); // false

const company1 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
const company2 = { name: 'Hexlet', state: 'published', website: 'https://hexlet.io' };
is(company1, company2); // true*/
