// API url: list all news
let newsListAll = 'https://eaaa.reindex.net/EAAA/main/Api.php?Focus=rsshitlist&qe=UX&pagesize=25&page=1&format=rss';

$(document).ready(function() {

  // GET AJAX the Jquery way
  $.ajax({
    type: "GET",
    url: newsListAll,
    cache: false,
    dataType: "xml",
    success: function(xml) {

      console.log(xml); // viser XML-strukturen i console-inspect-tool.

      $(xml).find('item').each(function() {

        // titel
        let titel = $(this).find('title').text();
        let beskrivelse = $(this).find('description').text();
        let billede = $(this).find('enclosure').attr("url"); // src til billedet
        let permalink = $(this).find('guid').text(); // returnerer streng med mellemrum
        permalink = permalink.replace(/\s/g, ''); // fjerner mellemrum m. regexp
        //console.log('perm: ' + permalink);

        // tilføjer (append) html med data fra xml til #indhold
        $('#indhold').append('<div class="bog">' +
          '<h3>' + titel + '</h3>' +
          '<a href="' + permalink + '"><img class="enForside" src="' + billede + '" alt="billede af bogen" width="100px"></a>' +
          '<p>' + beskrivelse + '</p>' +
          
          '</div>'
        );
      })
    }
  }); // ajax slut

}); // document ready function slut
