$(document).ready(function() {
  $("form.insurance").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var haircolor = $("select#haircolor").val();
    var genre = $("select#genre").val();



    if (age && gender && haircolor && genre) {
        if((age >= 0 && age <= 21)  || gender === "male" || (haircolor === "brunette" || "blonde") || (genre === "action" || "romance")){
        alert("You're match is Mr. Nguyen.");
        }
        else if((age >= 22 && age <= 41)  || gender === "male" || (haircolor === "blonde" || "red") || (genre === "action" || "romance")){
        alert("You're match is Mr. Wise.");
        }
        else if((age >= 42 && age <= 61)  || gender === "female" || (haircolor === "red" || "brunette") || (genre === "romance" || "comedy")){
        alert("You're match is Mrs. Moody.");
        }
        else if((age >= 62 && age <= 81)  || gender === "male" || (haircolor === "brunette" || "blonde") || (genre === "action" || "comedy")){
        alert("You're match is Mr. Fritz.");
        }
    }
    else {
        if (!age) {
          $("#missing").show();
        }
        if (!gender) {
          $("#missing-gender").show();
        }
        if (!haircolor) {
          $("#missing-color").show();
        }
        if (!genre) {
          $("#missing-genre").show();
        }
    }

    event.preventDefault();
  });
});
