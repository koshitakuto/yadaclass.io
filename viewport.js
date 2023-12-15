var ua = window.navigator.userAgent.toLowerCase();
var getDevice = (function(){
    if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
        document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">');
    }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
        document.write('<meta name="viewport" content="width=1180, user-scalable=yes, maximum-scale=2.0">');
    }else if(ua.indexOf('ipad') > -1 || ua.indexOf('macintosh') > -1 && 'ontouchend'){
        document.write('<meta name="viewport" content="width=1180, user-scalable=yes, maximum-scale=2.0">');
    }else{
    document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">');
  }
});
