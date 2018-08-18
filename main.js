let comments = [
  {name: 'Самуил', comment: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!', data: "13 октября 2011"},
	{name: 'Лилия Семёновна', comment: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',data: "14 октября 2011"},
	{name: 'Лилия Семёновна', comment: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?', data: "14 октября 2011"},
]; // массив с коментами
let pointExitComments = document.querySelector('.comments-user_reviews'); // точка вывода коментов
let commentTextarea = document.querySelector('.comments-textarea textarea');



// Делаю перебор массива
for (var i = 0; i < comments.length; i++) {
  let data = comments[i];
  printComment(data); // вывод всего добра из массива
}

function printComment(data, lastItem) {
  // Про шаблонизаторы имею понятия
  // делаю шаблон
  let bodyComment = '<span class="user-comment_name">'+
                      data.name +'</span><span class="user-comment_date">' +
                      data.data + '</span><div class="user-comment__text">' +
                      data.comment + '</div>';

  let comment = document.createElement('div');
  comment.className ='comments-user_review';
  comment.innerHTML = bodyComment;
  pointExitComments.appendChild(comment); // печатаю
}

// {event} addComments
let addComments = document.querySelector('.comments-textarea bottom').onclick = function () {
let optionsTime = {year: 'numeric',month: 'long',day: 'numeric',timezone: 'UTC'}; // формирую дату
let valueTextarea = commentTextarea.value.length;
// проверка на пустоту (пробел не пустота =) )
  if (valueTextarea != 0) {
    // формирую новый комент
    let newComment = {name: 'NoName', comment:commentTextarea.value, data: new Date().toLocaleString("ru", optionsTime)}
    comments.push(newComment);
    let lastItem = comments[comments.length - 1];
    printComment(lastItem);
    commentTextarea.value="";
    commentTextarea.style.border = "";
  }
  else {
    commentTextarea.style.border = "1px solid red";
  }
}
// ctrl+Entet submite
  document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode = 17 && e.keyCode == 13) {
      addComments();
    }
  }
