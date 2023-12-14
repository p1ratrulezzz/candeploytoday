function canDeployToday() {
    var today = new Date();
    var currentYear = today.getFullYear();

    // Проверяем, является ли сегодня пятницей
    if (today.getDay() === 5) {
        return false;
    }

    // Проверяем, является ли сегодня выходным днем (суббота или воскресенье)
    if (today.getDay() === 0 || today.getDay() === 6) {
        return false;
    }

    // Проверяем, является ли сегодня датой после 21 декабря любого года
    var december21 = new Date(currentYear, 11, 21);
    if (today >= december21) {
        return false;
    }

    return true;
}

// Функция для установки изображения и текста на странице
function setDisplay(canDeploy) {
    var image = document.getElementById("image");
    var text = document.getElementById("text");

    if (canDeploy) {
        image.src = "deploy-yes.jpg";
        text.innerText = "Да, можно деплоить сегодня!";
    } else {
        image.src = "deploy-no.jpg";
        text.innerText = "Нельзя деплоить сегодня.";
    }
}

// Проверяем, можно ли деплоить сегодня и устанавливаем соответствующий контент на странице
var canDeploy = canDeployToday();
setDisplay(canDeploy);
