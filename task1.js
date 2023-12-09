/**
 * task1.js
 *
 * Виджет для показа дерева принимает данные в виде массива с вложенными объектами
 * Число уровней вложенности не ограничено
 *
 * Папка представлена узлом с массивом children
 *       {id, title, children:[..]}
 *
 * Элементы массива children - папки или конечные узлы
 *       children:{id, title, children:[{id, title, type},.. {id, title, children:[]}]}
 *
 * Конечный узел (лист) не имеет массива children, но имеет атрибут type
 *       {id, title, type}
 *
 * Напишите функцию processTree, которая должна оставить в дереве только устройства заданного типа
 * Все пустые папки тоже нужно удалить
 * 
 * Можно создать отдельный модуль или разместить решение в этом же файле
 * Для тестирования выполните:
 * node task1
 * 
 * При желании добавьте свои тесты
 */

const util = require('util');
const assert = require('assert');

/**
 * Возвращает дерево, содержащее только узлы с заданными типами
 *    (выполняет удаление неподходящих конечных узлов и пустых папок)
 *
 * @param {Array of Objects} treeArr: {id, title, children:[{id, title, type},.. {id, title, children:[]}]}
 * @param {Array of Strings} selectedTypes: ['type1','type2',...]
 *
 * @return {Array of Objects}
 */
function processTree(treeArr, selectedTypes) {
  // Здесь напишите ваш код
  
}

//--------------------------------------------------------------
// Тестирование

// Входные данные
const tree_data1 = [
  {
    id: 'n1',
    title: 'Вентиляция',
    children: [
      {
        id: 'x1',
        title: 'Шкаф 1',
        children: [
          {
            id: 'set1',
            title: 'Установка 1',
            children: [
              { id: 'temp1', title: 'TEMP1', type: 'TEMP' },
              { id: 'vent1', title: 'VENT1', type: 'VENT' },
              {
                id: 'y11',
                title: 'Щит автоматики 1',
                children: [
                  { id: 'rele1', title: 'RELE1', type: 'RELE' },
                  { id: 'vent11', title: 'VENT11', type: 'VENT' }
                ]
              }
            ]
          },
          { id: 'set2', title: 'Установка 2', children: [] }
        ]
      },
      { id: 'x2', title: 'Шкаф 2', children: [] },
      {
        id: 'x3',
        title: 'Шкаф 3',
        children: [
          {
            id: 'y1',
            title: 'Щит автоматики 3',
            children: [
              { id: 'rele3', title: 'RELE3', type: 'RELE' },
              { id: 'meter3', title: 'METER3', type: 'METER' }
            ]
          }
        ]
      }
    ]
  }
];

// Ожидаемый результат
const expect = [
  {
    id: 'n1',
    title: 'Вентиляция',
    children: [
      {
        id: 'x1',
        title: 'Шкаф 1',
        children: [
          {
            id: 'set1',
            title: 'Установка 1',
            children: [
              { id: 'temp1', title: 'TEMP1', type: 'TEMP' },
              { id: 'vent1', title: 'VENT1', type: 'VENT' },
              { id: 'y11', title: 'Щит автоматики 1', children: [{ id: 'vent11', title: 'VENT11', type: 'VENT' }] }
            ]
          }
        ]
      }
    ]
  }
];

try {
  const result = processTree(tree_data1, ['TEMP', 'VENT']);
  assert.deepEqual(result, expect);
  console.log('OK');
} catch (e) {
  console.log('ERROR: ' + util.inspect(e));
}
