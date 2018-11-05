var siblingsDetailsJS = (function() {

let $sibCount;

let init = function(){
$sibCount = $('#sibCount');
};

let construct = function(){
    var siblingsCount = $sibCount.val();

  $('#sibCount').on('select2:select', function (e) {
console.log(siblingsCount+"sibcount");
  });
};

return{
  init:init,
  construct:construct
}
})();
