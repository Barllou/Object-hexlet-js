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

/*Реализуйте и экспортируйте по умолчанию функцию, которая сравнивает объекты по совпадению данных, а не по ссылкам. Эта функция принимает на вход две компании и возвращает true если их структура одинаковая и false в обратном случае. Проверка должна проходить по свойствам name, state, website.*/
