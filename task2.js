/**
 * task2.js
 * 
 * В локальной сети есть оборудование (сервер), которое отвечает на запросы по UDP протоколу (udp4).    
 * Напишите модуль, который проверяет, что оборудование есть в сети: 
 *  - по заданному адресу (host, port) отправить текстовое сообщение 'PING' 
 *  - получить от сервера 'PONG'   
 * 
 *  Предложите варианты, как ваш модуль будет вызываться и возвращать результат
 */

const dgram = require('dgram');

// Напишите здесь тело модуля