//alert('Hello');
// var - старе не використвоюєм
// let - звичайна змінна
// const - стала змінна

//Primitive data types:
//number - числа: цілі,дробові
//String
//boolean - true , false
//null - пусто
//undefined - не визначено
//Object - обєкт
//Symbol - унікальний незмінний ідентифікатор

let bestGreetings = ('Hello');
alert(bestGreetings);
bestGreetings = ('JavaScript');
alert(bestGreetings);

const age = Number(prompt('Enter your age'));
alert('Your age is: '+ age);

const nextAge = addOne(age);
alert('Next year you will be: '+nextAge);

// > < >= <= != !== == === (||-або)(&&-і) 
if(age>=18){
 alert('you adult');
}else{
  alert('under age');  
}

function addOne(num){
    const incremented = num + 1;
    return incremented;
}
