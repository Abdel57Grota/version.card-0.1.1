function initMaterialize() {
  $('form').addClass('materialize');
  $('.form-item').not(':has(input)').each(function() {
    $(this).not('.js-form-type-textarea').find('label').addClass('active');
  });
  $('.form-item').addClass('input-field').find('input').removeAttr('placeholder');
  $('.form-item textarea').addClass('materialize-textarea');
  $('.form-item').each(function() {
    $(this).find('option').eq(0).val('').html('');
    $(this).find('select[multiple]').find('option').eq(0).remove();
  });
  $("select").change();
  M.updateTextFields();
  $('select').formSelect();
}

$(document).ready(function() {
  initMaterialize();
});
$("form .form-control").on("focus", function() {
  $(this)
    .closest(".form-item")
    .addClass("focus")
    .find("label")
    .addClass("active");
});
$("form .form-control").on("focusout", function() {
  $(this)
    .closest(".form-item")
    .removeClass("focus");
  if(!$(this).closest(".form-item").hasClass('hasval')) {
     $(this)
      .closest(".form-item")
      .find("label")
      .removeClass("active");
  }
});
$("form .form-control")
  .on("change", function() {
    if ($(this).val()) {
      $(this)
        .closest(".form-item")
        .addClass("hasval");
    } else {
      $(this)
        .closest(".form-item")
        .removeClass("hasval");
    }
  })
  .change();

$(document).on("change", "select", function(e) {
  if ($(this).val() == "") {
    $(this)
      .val("")
      .closest(".js-form-type-select")
      .find("label")
      .removeClass("active");
  } else {
    $(this)
      .closest(".js-form-type-select")
      .find("label")
      .addClass("active");
  }
});