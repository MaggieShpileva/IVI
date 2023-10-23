// pages/api/addNewObject.js
import fs from "fs/promises";

export default async (req, res) => {
  console.log("req", req);
  if (req.method === "POST") {
    try {
      // Операции с файлами на сервере
      // Пример: чтение и запись файла
      const data = await fs.readFile("@/data/users.json", "utf-8");
      const jsonData = JSON.parse(data);
      console.log(data);
      // Создание нового объекта
      const newObject = {
        id: "4",
        email: "newuser@example.com",
        name: "New User",
        password: "67890",
        role: "guest",
      };

      jsonData.push(newObject);

      // Запись обновленных данных обратно в файл
      await fs.writeFile(
        "path_to_your_file.json",
        JSON.stringify(jsonData, null, 2),
        "utf-8"
      );

      res
        .status(200)
        .json({ message: "Новый объект успешно добавлен в файл JSON." });
    } catch (error) {
      console.error("Ошибка:", error);
      res.status(500).json({
        error: "Произошла ошибка при добавлении объекта в файл JSON.",
      });
    }
  } else {
    res
      .status(405)
      .json({ error: "Метод не разрешен. Используйте POST запрос." });
  }
};
