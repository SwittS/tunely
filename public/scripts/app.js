/* CLIENT-SIDE JS
*
* You may edit this file as you see fit.  Try to separate different components
* into functions and objects as needed.
*
*/
var template;
var $albumsList;
var sampleAlbums = [];
var albumsTemplate;

$(document).ready(function() {

  console.log('app.js loaded!');

 $.ajax({
   method: 'GET',
   url: '/api/albums',
   success: handleSuccess,
   error: handleError
 });
 $('.form-horizontal').on("submit", function(e){
   e.preventDefault();
   console.log($(this).serialize());
   $(this).val('');
 });
});



// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var albumHtml = $('#albums-template').html();
  albumsTemplate = Handlebars.compile(albumHtml);
  var html = albumsTemplate({albums: sampleAlbums});
  $('#albums').prepend(html);
}
function handleSuccess(json) {
  sampleAlbums = json;
  renderAlbum();
}

function handleError(e) {
  console.log('uh oh');
  $('#albums').text('Failed to load albums, is the server working?');
}
