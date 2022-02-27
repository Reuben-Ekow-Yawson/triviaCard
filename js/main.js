$(document).ready(() =>{
    const $hintBox = $('.hint-box');
    const $hint = $('.hint');
    const $wrongAnswer1 = $('.wrong-answer-one');
    const $wrongAnswer2 = $('.wrong-answer-two');
    const $wrongAnswer3 = $('.wrong-answer-three');
    const $correctAnswer = $('.correct-answer');
    $hintBox.on('click', () =>{
      $hint.slideToggle(700);
    })
    $wrongAnswer1.on('click',() => {
      $('.wrong-text-one').fadeOut('slow');
      $('.frown').show();
    })
     $wrongAnswer2.on('click',() => {
      $('.wrong-text-two').fadeOut('slow');
      $('.frown').show();
    })
     $wrongAnswer3.on('click',() => {
      $('.wrong-text-three').fadeOut('slow');
      $('.frown').show();
    })
    $correctAnswer.on('click', () => {
      $('.frown').hide();
      $('.smiley').show();
      $('.wrong-text-one').fadeOut('slow');
      $('.wrong-text-two').fadeOut('slow');
      $('.wrong-text-three').fadeOut('slow');
    })
  });