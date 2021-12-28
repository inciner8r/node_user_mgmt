function add_user_btn(e) {
  alert("data inserted");
}

$("#update_user").submit(function (event) {
  event.preventDefault();
  let tempArray = $(this).serializeArray();
  let data = {};
  $.map(tempArray, function (n, i) {
    data[n["name"]] = n["value"];
  });
  console.log(tempArray);

  let request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done(function (respnse) {
    alert("data updated");
  });
});
