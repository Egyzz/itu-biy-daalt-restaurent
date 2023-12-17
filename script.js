var bookedAppointments = []; // Үүссэн цагийн хувийг агуулсан массив

function scheduleAppointment() {
    var userNameInput = document.getElementById("userName");
    var phoneInput = document.getElementById("phone");
    var dateInput = document.getElementById("appointmentDate");
    var timeSelect = document.getElementById("appointmentTime");
    var confirmationMessage = document.getElementById("confirmationMessage");

    var selectedDate = dateInput.value;
    var selectedTime = timeSelect.options[timeSelect.selectedIndex].text;
    if (selectedDate === "") {
        confirmationMessage.innerHTML = "Өдрөө сонгоогүй байна.";
    } else {
        if(userNameInput.value === "" && phoneInput.value === ""){
            confirmationMessage.innerHTML = "Өөрийн мэдээллийг бөглөнө үү.";
        }
        else{
            var currentDate = new Date();
            var currentYear = currentDate.getFullYear();
            var currentMonth = currentDate.getMonth() + 1;
            var currentDay = currentDate.getDate();
            var currentDateString = currentYear + "-" + (currentMonth < 10 ? "0" : "") + currentMonth + "-" + (currentDay < 10 ? "0" : "") + currentDay;
            if (selectedDate < currentDateString) {
                confirmationMessage.innerHTML = "Огноо буруу байна.";
            } else {
                var isBooked = checkAppointment(selectedDate, selectedTime);
                if (!isBooked) {
                    confirmationMessage.innerHTML = "Цаг захиалагдлаа! Огноо: " + selectedDate + ", Цаг: " + selectedTime;
                    bookedAppointments.push({ date: selectedDate, time: selectedTime });
                } else {
                    confirmationMessage.innerHTML = "Уучлаарай, энэ цаг нь захиалагдсан байна. Өөр цаг сонгоно уу.";
                }
            }
        }
    }
}

function checkAppointment(date, time) {
    for (var i = 0; i < bookedAppointments.length; i++) {
        if (bookedAppointments[i].date === date && bookedAppointments[i].time === time) {
            return true;
        }
    }
    return false;
}
function addComment() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    var currentDateString = currentYear + "-" + (currentMonth < 10 ? "0" : "") + currentMonth + "-" + (currentDay < 10 ? "0" : "") + currentDay;
    var newCommentInput = document.getElementById("newComment");
    var confirmationMessage = document.getElementById("confirmationMessage");
    var commentContainer = document.getElementById("commentContainer");
    var newComment = newCommentInput.value;
    if (newComment !== "") {
        var newCommentDiv = document.createElement("div");
        newCommentDiv.className = "comment";
        newCommentDiv.textContent = "Guest: " + newComment + " " + currentDateString ;
        commentContainer.appendChild(newCommentDiv);
        newCommentInput.value = "";
    } else {
        confirmationMessage.innerHTML = "Та юм бичээгүй байна";
    }
}