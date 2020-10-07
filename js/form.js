function formAction() {
  const forms = document.querySelectorAll("form");
  const inputFile = document.querySelectorAll(".form__file");
  inputFile.forEach(function (el) {
    let addedFile = document.querySelector(".added-files");

    // Событие выбора файла(ов)
    el.addEventListener("change", () => {
      // создаём массив файлов
      addedFile.textContent = "";
      let fileList = [];
      for (let i = 0; i < el.files.length; i++) {
        fileList.push(el.files[i]);
      }
      // вызов функции для каждого файла
      fileList.forEach((file) => {
        fileName = `
        <div class='added-file'> 
        <div class='square'></div>
        <span class="file-name">${file.name}</span>
        </div>`;
        addedFile.insertAdjacentHTML("afterbegin", fileName);
      });
    });
  });
  //   // Отправка формы на сервер
  const postData = async (url, fData) => {
    // имеет асинхронные операции
    // начало отправки
    // здесь можно оповестить пользователя о начале отправки
    // ждём ответ, только тогда наш код пойдёт дальше
    let fetchResponse = await fetch(url, {
      method: "POST",
      body: fData,
    });

    // ждём окончания операции
    return await fetchResponse.text();
  };

  if (forms) {
    forms.forEach((el) => {
      el.addEventListener("submit", function (e) {
        e.preventDefault();

        // создание объекта FormData
        let fData = new FormData(el);

        // Добавление всех input, кроме type="file"
        // el.querySelectorAll('input:not([type="file"])').forEach((input) => {
        //   fData.append(input.name, input.value);
        // });

        // Добавление файлов input type file
        // let file = el.querySelector(".form__file");
        // for (let i = 0; i < file.files.length; i++) {
        //   fData.append("files[]", file.files[i]); // добавляем файлы в объект FormData()
        // }

        // Отправка на сервер
        postData("./mail.php", fData)
          .then((fetchResponse) => {
            console.log("Данные успешно отправлены!");
            successModal();
            console.log(fetchResponse);
          })
          .catch(function (error) {
            console.log("Ошибка!");
            console.log(error);
          });
      });
    });
  }
}

function successModal() {
  const modal = document.querySelector(".modal");
  const closeBtn = document.querySelector(".close-success");
  modal.style.visibility = "visible";
  modal.style.opacity = "0.9";
  setTimeout(() => {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  }, 5000);
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeBtn.click();
    }
  });
}
formAction();
