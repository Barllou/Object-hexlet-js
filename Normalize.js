// BEGIN (write your solution here)
const normalize = lesson => {
  lesson.name = _.capitalize(lesson.name);
  lesson.description = lesson.description.toLowerCase();
}

export default normalize;
// END

/*lesson.js
Реализуйте и экспортируйте по умолчанию функцию, которая "нормализует" данные переданного урока. То есть приводит их к определенному виду.

На вход этой функции подается объект описывающий собой урок курса. В уроке содержатся два поля: имя и описание.

const lesson = {
  name: 'Деструктуризация',
  description: 'как удивить колек',
};*/
