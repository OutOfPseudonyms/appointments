$(document).ready(function() {
  $("#formOne").submit(function() {
    const nameInput = $("input#name").val();
    const descriptionInput = $("input#description").val();
    const dateInput = $("input#date").val();
    const startTime = $("input#startTime").val();
    const endTime = $("input#endTime").val();

    $(".name").text(nameInput);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".startTime").text(startTime);
    $(".endTime").text(endTime);
    
    $("#confirmation").show();

    $('#name').val('');
    $('#description').val('');
    $('#date').val('');
    $('#startTime').val('');
    $('#endTime').val('');

    event.preventDefault();
  })
})