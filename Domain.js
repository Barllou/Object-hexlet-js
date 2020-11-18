// BEGIN (write your solution here)

const getDomainInfo = (strDom) => {
  let scheme = '';
  if (strDom.startsWith('https://')) {
    scheme = 'https';
  } else if (strDom.startsWith('http://')) {
    scheme = 'http';
  } else {
    scheme = 'http';
  }
  const name = strDom.replace(scheme + '://', '');
  const obj = { scheme, name };
  return obj;
};

export default getDomainInfo;
// END

/*Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход имя сайта и возвращает информацию о нем:

import getDomainInfo from './domain.js';

// Если домен передан без указания протокола,
// то по умолчанию берется http
getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

getDomainInfo('https://hexlet.io');
// {
//   scheme: 'https',
//   name: 'hexlet.io',
// }

getDomainInfo('http://google.com');
// {
//   scheme: 'http',
//   name: 'google.com',
// }*/
