### Немного о коде ###
_Данный код позволяет наладить обмен данными между файлами, которые написаны на разных языках программирования. Принцип действия довольно тривиален - в качестве мостика между файлами используется СУБД mongoDB. App.js принимает и записывает данные в БД. Файл python.js отслеживает изменение в БД и инициализирует в словарь записанные данные, при этом, удаляя их из базы._
