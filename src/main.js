import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BetterDoctor } from './class.js';

$(document).ready(function() {
  $("#buttonSub").click(function(){
    event.preventDefault();
    let doctorApi = new BetterDoctor();
    let doctorSearch = doctorApi.search(Dname, Mcondition);
    // Note: doctorSearch = Promise from class.js
    let Dname = $("#Dname").val();
    let Mcondition = $('#Mcondition').val();
    $('#Dname').val('');
    $('#Mcondition').val('');
    console.log($('#Dname').val());

    doctorSearch.then(function(response){
      let body = JSON.parse(response);
      console.log(body)

    })

  });
});
