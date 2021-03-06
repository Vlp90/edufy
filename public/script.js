$(document).ready(function () {
  let burger = document.getElementById("burger-menu");
  let menuToggle = document.getElementById("burger-container");
  burger.onclick = () => {
    menuToggle.classList.toggle("toggle-menu");
    // burger.classList.remove("fa-bars")
    // burger.classList.add("fa-times")

    if (burger.classList.contains("fa-bars")) {
      burger.classList.remove("fa-bars");
      burger.classList.add("fa-times");
    } else if (burger.classList.contains("fa-times")) {
      burger.classList.remove("fa-times");
      burger.classList.add("fa-bars");
    }
    // burger.onclick = () => {
    //   menuToggle.classList.toggle("toggle-menu");
    //   burger.classList.remove("fa-times")
    // burger.classList.add("fa-bars")
  };
});

$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#from")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#to")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 3,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
  $(".inputfile").each(function () {
    var $input = $(this),
      $label = $input.next("label"),
      labelVal = $label.html();

    $input.on("change", function (e) {
      var fileName = "";

      if (this.files && this.files.length > 1)
        fileName = (this.getAttribute("data-multiple-caption") || "").replace(
          "{count}",
          this.files.length
        );
      else if (e.target.value) fileName = e.target.value.split("\\").pop();

      if (fileName) $label.find("span").html(fileName);
      else $label.html(labelVal);
    });

    // Firefox bug fix
    $input
      .on("focus", function () {
        $input.addClass("has-focus");
      })
      .on("blur", function () {
        $input.removeClass("has-focus");
      });
  });
});
