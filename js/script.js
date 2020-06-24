var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
var cur_tab = filename.match(/([a-zA-Z]+).html/)[1];
console.log(cur_tab);
