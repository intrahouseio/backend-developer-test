# Тестовое задание бэкенд разработчика

## Описание
Тестовое задание состоит из трех тестов, не связанных между собой.  
Для выполнения тестов вам потребуется установить [NodeJS](https://nodejs.org/en) и [Git](https://git-scm.com/).  

Перед выполнением тестов выполните [форк](https://docs.github.com/ru/get-started/quickstart/fork-a-repo) репозитория.  
Последующие действия необходимо выполнять в [форке](https://docs.github.com/ru/get-started/quickstart/fork-a-repo), придерживаясь общей концепции при работе с [git](https://git-scm.com/) репозиториями.      

Далее дается краткая постановка задачи для каждого теста. 
Каждый тест находится в отдельном файле, где есть более подробное описание. 
В этих файлах разместите ваш код и комментарии своего решения (при необходимости)

### test1
Имеется виджет дерева, принимающий данные в заданном формате, и уже готовый массив данных.   
Напишите функцию, которая удаляет некоторые узлы в соответствии с заданными требованиями и возвращает преобразованный массив.        

### test2
В локальной сети есть оборудование (сервер), которое отвечает на запросы по UDP протоколу.    
Напишите модуль, который проверяет, что оборудование есть в сети.   
Предложите варианты, как ваш модуль будет вызываться и возвращать результат

### test3
Спроектируйте таблицу для БД PostgeSQL для хранения данных, получаемых с датчиков  
Датчики могут передавать сигналы:
 - дискретные (1-сработка, 0 - нейтральное состояние)
 - аналоговые (целые или вещественные числа)

Напишите функции, которые формируют SQL запросы:
 - для создания этой таблицы

 - для получения данных в рамках заданного интервала 
  - количество сработок заданного дискретного датчика за каждый час 
  - среднее значение показаний заданного аналогового датчика за каждые сутки 
 
 
