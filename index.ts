function loadCars() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'index.json', false);
    if (xhr.status != 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        console.log("Ошибка загрузки данных: " + xhr.status + ' ' + xhr.statusText);
    }
    else {
        alert("Данные загружены, чтобы проверить их откройте консоль!");
        console.log(xhr.responseText);
    }

    xhr.onerror = function () {
        console.error("Ошибка соединения с сервером");
        alert("Ошибка соединения!");
    };

    xhr.send();
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("loadButton");
    if (button) {
        button.addEventListener("click", loadCars);
    }
});