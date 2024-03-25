var firebaseConfig = {
    apiKey: "AIzaSyBXTxMWGI0O1zNiTnQGFemxQ8EDthDHyAY",
    authDomain: "qrgdg-545ed.firebaseapp.com",
    databaseURL: "https://qrgdg-545ed-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "qrgdg-545ed",
    storageBucket: "qrgdg-545ed.appspot.com",
    messagingSenderId: "480354373204",
    appId: "1:480354373204:web:6e296b5075f386aaaba7c1",
    measurementId: "G-1VGHRDN76Z"
};
firebase.initializeApp(firebaseConfig);

var database = firebase.database();
var searchBox = document.getElementById('search-box');
function updateUncheckedCount() {
    var checkboxes = document.querySelectorAll('#data-table input[type="checkbox"]');
    var uncheckedCount = Array.from(checkboxes).filter(checkbox => !checkbox.checked).length;
    document.getElementById('unchecked-count').textContent = 'All: ' + uncheckedCount;
}

// function updateErrorCount() {
//     var rows = document.querySelectorAll('#data-table tr');
//     var errorCount = Array.from(rows).filter(row => row.cells[3].textContent === 'error').length;
//     document.getElementById('error-count').textContent = 'Error: ' + errorCount;
// }

document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById('search-box');
    if (!searchBox) {
        console.log('search-box not found');
        return;
    }

    searchBox.addEventListener('keyup', function(e){
        console.log('keyup event fired');
        var searchText = e.target.value.toLowerCase();
        var rows = document.querySelectorAll('#data-table tr');
        if (!rows.length) {
            console.log('no rows found');
            return;
        }

        var found = false;
        rows.forEach(row => {
            var rowText = Array.from(row.cells).map(cell => cell.textContent.toLowerCase()).join(' ');
            if(rowText.indexOf(searchText) > -1){
                row.style.display = "";
                found = true;
            } else {
                row.style.display = "none";
            }
        });

        if (!found) {
            console.log('no matches found');
        }
    });
});

document.getElementById('submit-button').addEventListener('click', function() {
    var name = document.getElementById('name-input').value;
    var phone = document.getElementById('phone-input').value;
    database.ref('/bwai/').push({
        name: name,
        phone: phone,
        id:'error'
    }).then(function() {
        alert('Data successfully pushed to Firebase!');
        location.reload();
    }).catch(function(error) {
        alert('Failed to push data: ' + error.message);
    });
});
database.ref('/bwai/').once('value').then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
        var childData = childSnapshot.val();
        var table = document.getElementById("data-table");
        var row = table.insertRow(-1);
        var cellCheck = row.insertCell(-1);
        var toggleSwitch = document.createElement("label");
        toggleSwitch.className = "switch";
        
        var input = document.createElement("input");
        input.type = "checkbox";
        input.checked = childData.check;
        input.addEventListener('change', function() {
            database.ref('/bwai/' + childSnapshot.key).update({check: this.checked});
        });
        
        var slider = document.createElement("span");
        slider.className = "slider round";
        
        toggleSwitch.appendChild(input);
        toggleSwitch.appendChild(slider);
        
        cellCheck.appendChild(toggleSwitch);
        var cellName = row.insertCell(-1);
        cellName.innerHTML = childData.name;

        var cellEmail = row.insertCell(-1);
        cellEmail.innerHTML = childData.Email;

        var cellId = row.insertCell(-1);
        cellId.innerHTML = childData.id;


        var cellTime = row.insertCell(-1);
        cellTime.innerHTML = childData.phone;
        var cellTime = row.insertCell(-1);
        cellTime.innerHTML = childData.time;
    });
    updateUncheckedCount();
    // updateErrorCount();

});
document.getElementById('data-table').addEventListener('change', function(e) {
    if(e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') {
        updateUncheckedCount();
    }
});
// document.getElementById('data-table').addEventListener('change', function(e) {
//     if(e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') {
//         updateErrorCount();
//     }
// });

// function updateQrCount() {
//     var rows = document.querySelectorAll('#data-table tr');
//     var totalScanned = rows.length;
//     var errorCount = Array.from(rows).filter(row => row.cells[3].textContent === 'error').length;
//     var qrCount = totalScanned - errorCount;
//     document.getElementById('qr-count').textContent = 'Qr: ' + qrCount;
// }

// call updateQrCount at the end of your 'value' event handler
// updateQrCount();