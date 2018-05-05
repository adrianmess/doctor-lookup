import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BetterDoctor } from './class.js';

$(document).ready(function() {
  $('#buttonSub').click(function() {
    $('.clear').remove();

    let doctorName = $("#doctorName").val();
    let medicalCondition = $('#medicalCondition').val();
    $('#doctorName').val('');
    $('#medicalCondition').val('');

    let bDoctorApi = new BetterDoctor();
    let bDoctorData = bDoctorApi.doctorCall(doctorName, medicalCondition);

    bDoctorData.then(function(response) {
      let body = JSON.parse(response);
      let bodyData = body.data;
      // console.log(body.data);
      let nothingReturned = ("No results found.");

        if ( bodyData.length < 1) {
         // (bodyData === undefined || bodyData.length > 0) {
          $('.card-text').append(nothingReturned);
          $('#doctorInfo').show();
        } else {
          $.each(body.data, function(i, data){
            let firstName = data.profile.first_name;
            let lastName = data.profile.last_name;
            let picture = ('<img src=\'' + data.profile.image_url +'\'>');
            let contact = ('<br>' + 'Contact Info: ' + '<br>' + 'Phone: ');
            let phone = data.practices[0].phones[0].number;
            let city = data.practices[0].visit_address.city;
            let state = data.practices[0].visit_address.state;
            let street = data.practices[0].visit_address.street;
            let zip = data.practices[0].visit_address.zip;
            let address = (street + '<br>' + city + ', ' + state + ', ' + zip);
            let newP = data.practices[0].accepts_new_patients;
            let websiteLink = data.practices[0].website;
            let showSiteLink = function (websiteLink) {
              let siteLink = websiteLink;
              if (typeof siteLink === "undefined") {
                return "No website listed"
              } else {
                return siteLink;
              }
            };
            let finalSiteLink = showSiteLink(websiteLink);

            $('.card-text').append('<span class=\'clear\'><table><th>' + '<span class=\'names\'>' + firstName + ' ' + lastName + '</span>' + contact + phone + '<br>' + address + '<br>' + 'Accepting new patients: ' + newP + '<br>' + 'Website: ' + finalSiteLink + '<p></th><td>' + picture + '</td></table></span>');
            $('#doctorInfo').show();
            });
          }
        });

        // publishContent();

        // console.log(publishContent);
  });
});
