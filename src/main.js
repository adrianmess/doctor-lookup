import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { BetterDoctor } from './class.js';

$(document).ready(function() {
  $("#buttonSub").click(function(){
    let Dname = $("#Dname").val();
    $('#Dname').val('');
    console.log($('#Dname').val());
  });
});
