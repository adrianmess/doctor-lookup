class BetterDoctor{
  constructor(){}

  doctorCall(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url =`https://api.betterdoctor.com/2016-03-01/doctors/df9c5372f154ea5c0c0467308c72374f?user_key=22065b1d7a0d09da2af7c21410b2ddad`

       // `https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&query=${medicalCondition}&location=45.539,-122.604,25&user_location=45.539,-122.604&sort=best-match-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

      request.responseType='json';
      request.onload = function(){
        if(this.status === 200){
          console.log(request.response)
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
export {BetterDoctor}
