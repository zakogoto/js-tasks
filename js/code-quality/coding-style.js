function pow(x,n) //фигурная скобка должна открыватя на строке объявления функции
{
  let result=1; //нет логических пустых строк между логическими блоками и пробелов вокруг =.
  for(let i=0;i<n;i++) {result*=x;} //нет пробелов покруг = т пробелов после точки с запятой. Если планировалось написать короткий вариант кода, фигурные скобки вокруг result лишние
  return result;
}

let x=prompt("x?",''), n=prompt("n?",'') //нет пробелов вокруг = n=prompt("n?",'') лучше перенести на следкющеую строку и поставить в конце точку с запятой
if (n<=0) //фигурная скобка должна открываться тут
{
  alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`); //желательно разделить текст на две строки
}
else // else без переноса на новую строку
{
  alert(pow(x,n)) //пробел после запятой
}