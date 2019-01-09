

document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page0') {
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#myNavigator').pushPage('ixpress.newuser.html');
    };
  } else if (page.id === 'newuser') {
    page.querySelector('ons-button').onclick = function() {
    	document.querySelector('#myNavigator').pushPage('ixpress.userlogin.html');
    }
  
}
});