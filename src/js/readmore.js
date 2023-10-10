readMore( $('.products__extenddescription'), 4);

function readMore(jObj, lineNum) {
  if ( isNaN(lineNum) ) {
    lineNum = 4;
  }
  var go = new ReadMore (jObj, lineNum);
}

//class
function ReadMore(_jObj, lineNum) { 
  var READ_MORE_LABEL = 'i want read more';
  var HIDE_LABEL = 'minimize it';

  var jObj = _jObj;
  var textMinHeight = ''+ (parseInt(jObj.children('products__description').css('line-height'),10)*lineNum) +'px';
  var textMaxHeight = ''+jObj.children('products__description').css('height');

  jObj.children('products__description').css('height', ''+ textMaxHeight);
  jObj.children('products__description').css( 'transition', 'height .5s');
  jObj.children('products__description').css('height', ''+ textMinHeight);

  jObj.append ('<button class="read-more">'+READ_MORE_LABEL+'</button>');

  jObj.children('.read-more').click ( function() {
    if (jObj.children('products__description').css('height') === textMinHeight) {
      jObj.children('products__description').css('height', ''+textMaxHeight);
      jObj.children('.read-more').html(HIDE_LABEL).addClass('active');
    } else {
      jObj.children('products__description').css('height', ''+textMinHeight);
      jObj.children('.read-more').html(READ_MORE_LABEL).removeClass('active');
    }
  });

}