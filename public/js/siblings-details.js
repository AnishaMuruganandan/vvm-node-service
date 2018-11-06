var siblingsDetailsJS = (function() {

  let $sibCount;
  let $sibDetails;

  let init = function() {
    $sibCount = $('#sibCount');
    $sibDetails = $('#sibDetails');
  };

  let constructSiblingsData = function() {

    let htmlSnippet = '<div class="row mb-5"><div class="col-md-4"><div class="profileInput"><select name="siblingType" type="number" required class="js-example-basic-single select2me"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Sister">Sister</option><option value="Brother">Brother</option></select><label for="siblingType" class="profileLabel select2ProfileInputBox">Sibling Type</label></div></div>';
    htmlSnippet = htmlSnippet + '<div class="col-md-4"><div class="profileInput"><select name="siblingAge" type="number" required class="js-example-basic-single select2me"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Elder">Elder</option><option value="Younger">Younger</option></select><label for="siblingAge" class="profileLabel select2ProfileInputBox">Sibling Age</label></div></div>';
    htmlSnippet = htmlSnippet + '<div class="col-md-4"><div class="profileInput"><select name="siblingMaritalStatus" type="number" required class="js-example-basic-single select2me"><option value="" selected="selected" disabled="disabled">-- select one --</option><option value="Married">Married</option><option value="Unmarried">Unmarried</option></select><label for="siblingMaritalStatus" class="profileLabel select2ProfileInputBox">Sibling Marital Status</label></div></div></div>';

    return htmlSnippet;
  };

  let construct = function() {

    var siblingsCount;

    $sibCount.change(function(e) {
      siblingsCount = $(this).val();
      console.log(siblingsCount + "sibcount");

      $sibDetails.html('');

      let innerHTML = '';

      for (var iter = 0; iter < siblingsCount; iter++) {
        console.log(iter);
        innerHTML = innerHTML + siblingsDetailsJS.constructSiblingsData();
      }

      $sibDetails.html(innerHTML);

      $('.js-example-basic-single').select2();


    });
  };



  return {
    init: init,
    construct: construct,
    constructSiblingsData: constructSiblingsData
  }
})();

$(function() {

  siblingsDetailsJS.init();
  siblingsDetailsJS.construct();
});
