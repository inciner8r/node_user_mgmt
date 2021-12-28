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

if (window.location.pathname == "/") {
  console.log("exec");
  $ondelete = $(".table tbody td .delete");
  $ondelete.click(function () {
    let id = $(this).attr("data-id");

    let request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };
    if (confirm("Delete?")) {
      $.ajax(request).done(function (respnse) {
        alert("data deleted");
        location.reload();
      });
    }
  });
}
