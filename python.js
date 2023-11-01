// Данный код впоследствии будет на python

const { MongoClient } = require("mongodb");
require("dotenv").config();

const monitorMongoDB = async () => {
  try {
    // Подключение клиента
    const client = new MongoClient(process.env.TOKENBD);

    await client.connect();

    console.log("Мониторинг запущен...");

    const db = client.db("myData");
    const collection = db.collection("datas");

    // Прослушивание коллекции на изменения
    const changeStream = collection.watch();

    changeStream.on("change", (change) => {
      if (change.fullDocument?.title) {
        const temp = JSON.parse(JSON.stringify(change.fullDocument.title));

        console.log("Добавлен заголовок: " + temp);
        collection.deleteOne({ _id: change.fullDocument._id });
      } else {
        console.log("Данные удалены");
      }
    });
  } catch (err) {
    console.error(err);
  }
};

monitorMongoDB();
