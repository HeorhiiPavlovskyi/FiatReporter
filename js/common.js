$(function() {

$(function(){
  $('.filter-close').click(function(){
    $('.filter-search').addClass('d-none');
    $('.results').addClass('d-none');
    $('.latest-news').addClass('d-block');
      });
});


$(function(){
  $('.page-item').click(function(){
    $('.active').addClass('disabled');
      });
});

function headerSticky() {
    if ($(window).scrollTop() > 500) {
      $('.navbar').addClass("fixed-top");
    } else {
      $('.navbar').removeClass("fixed-top");
    }
  };
  
  $(window).scroll(function() {
    headerSticky();
  });
  headerSticky();


// var input = document.getElementById("search");

// input.addEventListener("keypress", function(event) {
//     if (event.key === "Enter") {
//     document.getElementById("btn-search").click();
//   }
// });

 // const button = document.getElementById("btn-search");
 //  button.style.display = "none";


// $('#form').validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 2
//       },
//       email: {
//         required: true,
//         minlength: 6
//       },
//     },
//     messages: {
//       name: {
//         required: "Please provide your full name",
//       },
//       email: {
//         required: "Please provide your email",
//         email: "Please check the email format"
//       },
//     },
//   });


var start = moment("01/01/2023");
var end = moment("11/09/2023");

function cb(start, end) {
    $('#date').html(start.format('ddd, MMMM D') + ' - ' + end.format('ddd, MMMM D'));
}

$('#reportrange').daterangepicker({
    startDate: start,
    endDate: end,
}, cb);

cb(start, end);

 })

