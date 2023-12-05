<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $destination = $_POST["destination"];
    $message = $_POST["message"];

    // Сохраняем данные в файл или базу данных, как вам удобнее
    $data = "Name: $name\nEmail: $email\nPhone: $phone\nDestination: $destination\nMessage: $message\n";

    // Указываете путь к файлу, где будет сохраняться информация
    $file_path = "../dop/form.txt";

    // Открываем файл для записи (или создаем, если не существует)
    $file = fopen($file_path, "a");

    // Записываем данные в файл
    fwrite($file, $data);

    // Закрываем файл
    fclose($file);

    exit();
} else {
    // Если форма не отправлена, обработка не требуется
    echo "Form submission error!";
}
?>
