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

    let bDoctorApi = BetterDoctor();
    let bDoctorData = bDoctorApi.doctorCall(doctorName, medicalCondition);

    // function doctorCall() {
    //   return new Promise(function(resolve, reject) {
    //     let request = new XMLHttpRequest();
    //     let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&query=${medicalCondition}&location=45.539%2C-122.604%2C25&user_location=45.539%2C-122.604&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
    //
    //     request.onload = function() {
    //       if (this.status === 200) {
    //         resolve(request.response);
    //       } else {
    //         reject(Error(request.statusText));
    //       }
    //     }
    //     request.open("GET", url, true);
    //     request.send();
    //   });
    // }


      bDoctorData.then(function(response) {
        let body = JSON.parse(response);
        console.log(body);
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
        let finalSite = showSiteLink(websiteLink);
        $('.showResults').append('<span class=\'clear\'><table><th>' + '<span class=\'names\'>' + firstName + ' ' + lastName + '</span>' + contact + phone + '<br>' + address + '<br>' + 'Accepting new patients: ' + newP + '<br>' + 'Website: ' + finalSite + '<p></th><td>' + picture + '</td></table></span>');
      });
    });

  });
});
