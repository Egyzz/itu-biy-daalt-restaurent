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
};
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
};
document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    var count1=0;
    var count2=0;
    var boxes = document.getElementsByClassName("box");
    var after = document.getElementsByClassName("after")[0];
    var before = document.getElementsByClassName("before")[0];

    after.addEventListener("click", function() {
        if(count1 < 1){
            boxes[count1].style.display = 'none';
            boxes[count1+3].style.display = 'block';
            count1++; 
        }   
    });
    before.addEventListener("click", function() {
        if(count1 > 0){
            boxes[count1+2].style.display = 'none';
            boxes[count1-1].style.display = 'block';
            count1--;
        }
    });
    var after = document.getElementsByClassName("after")[1];
    var before = document.getElementsByClassName("before")[1];
    after.addEventListener("click", function() {
        if(count2 < 1){
            boxes[count2+4].style.display = 'none';
            boxes[count2+7].style.display = 'block';
            count2++; 
        }   
    });
    before.addEventListener("click", function() {
        if(count2 > 0){
            boxes[count2+6].style.display = 'none';
            boxes[count2+3].style.display = 'block';
            count2--;
        }
    });
});
