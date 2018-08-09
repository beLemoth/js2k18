/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
    for (let idx = 0; idx < array.length; idx++) {
        fn(array[idx], idx, array);
    }
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
    let newArray = [];

    for (let idx = 0; idx < array.length; idx++) {
        newArray.push(fn(array[idx], idx, array));
    }

    return newArray;
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
    let startIdx = 0,
        prevValue = initial || array[0],
        result = 0;

    if (!initial) {
        startIdx = 1;
    }

    for (let idx = startIdx; idx < array.length; idx++) {
        result = fn(prevValue, array[idx], idx, array);
        prevValue = result;
    }

    return result;

}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
    delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
    return Object.keys(obj);
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
    let props = Object.keys(obj);

    let upperProps = props.map(function(prop){
        return prop.toUpperCase();
    });

    return upperProps;
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
    let startIdx = from || 0,
        endIdx = to,
        outArray = [];

    if (!endIdx) {
        if (endIdx !== 0) endIdx = array.length;
    }

    if (startIdx < 0) {
        if (-startIdx > array.length) startIdx = 0;
        else startIdx = array.length + startIdx;
    }
    if (endIdx < 0) {
        if (-endIdx > array.length) endIdx = 0;
        else endIdx = array.length + endIdx;
    }

    if (startIdx > array.length) startIdx = array.length;
    if (endIdx > array.length) endIdx = array.length;

    for (let idx = startIdx; idx < endIdx; idx++) {
        outArray.push(array[idx]);
    }

    return outArray;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
    return new Proxy (obj, {
        set(obj, prop, value) {
            obj[prop] = value*value;

            return true;
        }
    })
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
