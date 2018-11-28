// const btnClick = document.querySelector('.btn');
const commentImput = document.querySelector('#comment');
const output = document.querySelector('.card__comments');

//
// btnClick.addEventListener('click', function(event) {
//     document.getElementById('card__comments').innerHTML = commentImput.value;
//     console.log(event);
//
// });

const commentsArr = []

commentImput.addEventListener('keypress', function(e) {
    let key = e.which || e.keyCode;
    if (key === 13) {
      output.innerHTML = commentImput.value;
      const name = prompt('ivesk savo varda');
      // document.getElementById('card__comments').innerHTML = commentsArr;

      const newComment = commentImput.value;

      commentsArr.push(
        {
          author: name,
          commentValue: newComment
        }
      )
    }

    renderComments(commentsArr);

});

const renderComments = function(comments) {
    output.innerHTML = '';
    comments.forEach(function(comment) {
      const listItem = document.createElement(`p`);
      // const vardas = document.createElement(`p`);
      // const vardas = document.createElement(`span`);

      // vardas.textContent = `${comment.author} ${comment.commentValue}`;
      listItem.textContent = `${comment.author}: ${comment.commentValue}`;
      // vardas.innerHTML = `${comment.author} ${comment.commentValue}`;
      // listItem.innerHTML = ` ${comment.commentValue} ${comment.author}`;
      // output.appendChild(vardas);
      output.appendChild(listItem);
      //
      // vardas.style.fontWeight = "900";
    });
    console.log(comment.author);
};



const heartClick1 = document.querySelector('.like-heart');
const count = document.querySelector('.likes-count');
const count1 = document.querySelector('.likes-count-1');

heartClick1.addEventListener('click', function() {
    heartClick1.classList.toggle('like-heart--active');
    count1.classList.toggle('likes-count-1');
    count.classList.toggle('likes-count-1');

  // count.textContent = `1`;
});

// const countUncount = function(e) {
//     if ($(this).html() == "0") {
//         $(this).html('1');
//     }
//     else {
//         $(this).html('0');
//     }
//     return false;
// };
//
// console.log();

const scrollInsta = document.querySelector('.logo-group__title');
const scrollLine = document.querySelector('.vertical-line');
const scrollNav = document.querySelector('.base-container');

window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    scrollInsta.style.opacity = '0';
    scrollLine.style.opacity = '0';
    scrollNav.style.height ='52px';
  } else {
    scrollInsta.style.opacity = '1';
    scrollLine.style.opacity = '1';
    scrollNav.style.height ='72px';
  }
});
