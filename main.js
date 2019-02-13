$(document).ready(function () {

  $('.slick-slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '30px',
          slidesToShow: 3
        }
      }
    ]
  });

  $('#myModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.attr('name');
    var img = button.attr('src');
    var desc = button.attr('desc');
    $(".modal-title").text(title);
    $("#modal-img").attr("src", img);
    $("#modal-desc").text(desc);
  })

  let audio = $(".audio-player");
  audio[0].volume = 0.5;
});