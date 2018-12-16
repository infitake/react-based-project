
var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzw4BD0lKGw0SpUgpY6szKf27phPNBIetxvB_11ieicvP-b5Q/exec'
$('#submit-form').on('click', function(e) {
  e.preventDefault();
  alert("form is submitted");
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    alert("form is submitted")
  );
})