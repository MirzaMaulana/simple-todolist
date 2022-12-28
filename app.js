// ambil input

const inputVal = document.getElementById("add");
const addTaskBtn = document.getElementById("submit");
addTaskBtn.addEventListener("click", function () {
  if (inputVal.value.trim() != 0) {
    let localItems = JSON.parse(localStorage.getItem("localItem"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(inputVal.value);
    localStorage.setItem("localItem", JSON.stringify(taskList));
  }

  showItem();
});

function showItem() {
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  if (localItems === null) {
    taskList = [];
  } else {
    taskList = localItems;
  }

  let html = "";
  let itemShow = document.getElementById("list-item");
  taskList.forEach((data, index) => {
    html += `<li
                class="list-group-item align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2" id="tasks">
                <a onclick="deleteItem(${index})" data-mdb-toggle="tooltip" class="float-end" title="Remove item">
                  <i class="bi bi-x-lg text-danger fs-4"></i>
                </a>
                <div class="d-flex align-items-center">
                  <input class="form-check-input me-2" id="clear" type="checkbox" value="" aria-label="..." />
                  <h3 class="item fs-5 mt-2">${data}</h3>
                </div>   
              </li>
    `;
    itemShow.innerHTML = html;
  });
}
showItem();

// hapus todo
function deleteItem(index) {
  //   ambil data dari localstroge
  let localItems = JSON.parse(localStorage.getItem("localItem"));
  taskList.splice(index, 1);
  localStorage.setItem("localItem", JSON.stringify(taskList));
  showItem();
}

// mencoret ketika sudah selesai
let clear = document.getElementById("clear");
let item = document.querySelector(".item");
clear.addEventListener("focus", () => {
  item.style.textDecoration = "line-through";
});
