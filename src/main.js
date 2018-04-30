import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#buttonSub').click(function() {
    let Dname = $("#Dname").val();
    let Mcondition = $('#Mcondition').val();
    $('#Dname').val('');
    $('#Mcondition').val('');
    console.log(Dname);
    console.log(Mcondition);


    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${Dname}&query=${Mcondition}&location=45.539%2C-122.604%2C25&user_location=45.539%2C-122.604&sort=best-match-asc&skip=0&limit=10&user_key=22065b1d7a0d09da2af7c21410b2ddad`).then(function(response) {

      $.each(response.data, function(i, data){
        var firstName = data.profile.first_name;
        var lastName = data.profile.last_name;
        var contact = ('<br>' + 'Contact Info: ' + '<br>' + 'Phone: ');
        var phone = data.practices[0].phones[0].number;
        let city = data.practices[0].visit_address.city;
        let state = data.practices[0].visit_address.state;
        let street = data.practices[0].visit_address.street;
        let zip = data.practices[0].visit_address.zip;
        let address = (street + '<br>' + city + ', ' + state + ', ' + zip);
        let siteUnd = data.practices[0].website;
        let website = function (siteUnd) {
          let missing = siteUnd;
          if (typeof missing === "undefined") {
            return "No website listed"
          } else {
            return missing;
          }
        };
        let finalSite = website(siteUnd);
        $('.showResults').append(firstName + ' ' + lastName + contact + phone + '<br>' + address + '<br>' + 'Website: ' + finalSite + '<p>');
      });

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
