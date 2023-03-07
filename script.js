
// // Доработать форму, которую делали на занятии:
// // -Реализовать чтение массива с товарами при загрузке страницы. Если соответствующего ключа в localStorage нет мы используем пустой массив с товарами. 

const form = document.querySelector('#product-form');
const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const list = document.querySelector('#product-list');
const body = document.querySelector('body');

//массив с продуктами
const products = [];

// функция для добавления продуктов в массив
function newProduct(name, price){
    products.push({name: name, price: price});
}

// Функция для обновления пунктов в списке
function updateList(){
    list.innerHTML = '';  // очищаем/меняем/обнуляем список
    products.forEach((product) => { // пройтись по массиву
        let item = document.createElement('li'); // создать li присвоить переменную item
        item.innerText = `${product.name} - ${product.price}$`; // item заменить на текст 
        list.append(item); // добавляем 
    });
}

// обработчик отправки формы
form.onsubmit = (e) => {
    e.preventDefault();
    const nameValue = nameInput.value;
    const priceValue = +priceInput.value; // + для преобразования строк в числа
    newProduct(nameValue, priceValue);
    nameInput.value = '';
    priceInput.value = '';
    updateList();
    writeLocalStorage(products); // вызов фукнции 
};

// функция для добавления в local storage
function writeLocalStorage(object){
    let string = JSON.stringify(object);
    localStorage.setItem('product', string);
}

// читаем данные из Local Storage 
readLocarStorage = (key) =>{
    const string = localStorage.getItem(key);
    if(string){
        const object = JSON.parse(string);
        return object;
    }else{
        return null;
    }
}

//Добавляем в body
body.onload = () => {
    list.innerHTML = '';
    let products = readLocarStorage('product');
    products.forEach(product => {
        let item = document.createElement('li');
        item.innerText = `${product.name} - ${product.price}$`;
        list.append(item);
    })

}






