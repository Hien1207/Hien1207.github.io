
show();
load();
function show() {
    let arr;
    let getLocalstore = localStorage.getItem("local");
    if (getLocalstore == null) { arr = [];
    } else {  arr = JSON.parse(getLocalstore);}
    let header = '<tr><th>#</th><th style="width:250px";>Item Name</th><th style="width:250px";>Category</th><th style="width:250px";>image</th><th>Action</th></tr>';
    arr.forEach((element, index) => {
        header += `<tr>
        <td>${index + 1}</td>
        <td><input class="nameitems" type="text" value = "${element.name}"><span class="errname"></span></td>
        <td ><select class= "listselect" disabled ><option value="No selected">No selected</option><option value="Category 1">Category 1</option><option value="Category 2">Category 2</option><option value="Category 3">Category 3</option><option value="Category 4">Category 4</option></select>
            <span class="errcate"></span>
        </td>  
        <td><img class="img" src=${element.src} alt=""><input class="files" type="file" hidden></td>
        <td><input type="button" class="btn-edit" value="Edit" onclick="Edit(${index + 1})"></input><input type="button" class="btn-delete" value="Delete" onclick="Delete(${index})"></input></td>    
    </tr>`
    });
    document.getElementById("table").innerHTML = header;
    for (let i = 0; i < arr.length; i++) {
        document.getElementsByClassName("listselect")[i + 1].value = arr[i].select;
    }
}
function load() {
    let string;
    for (let i = 0; i < document.getElementsByClassName("files").length; i++) {
        document.getElementsByClassName("files")[i].addEventListener("change", () => {
            const filename = document.getElementsByClassName("files")[i].files[0];
            if (filename) {
                const reader = new FileReader();reader.onload = function () {
                const result = reader.result;  string = result;
                document.getElementsByClassName("img")[i].src = string;
                }
                reader.readAsDataURL(filename);
            }
        });
    }
}
function Submit(i) {
    if (validate(i)) {
        document.getElementsByClassName("errname")[i].innerHTML = '';
        document.getElementsByClassName("errcate")[i].innerHTML = '';
        let listArray;
        let data = {};
        data.name = document.getElementsByClassName("nameitems")[i].value;
        data.src = document.getElementsByClassName("img")[i].src;
        data.select = categorys = document.getElementsByClassName("listselect")[i].value;
        let getLocalstore = localStorage.getItem("local");
        if (getLocalstore == null) {listArray = [];}
        else {  listArray = JSON.parse(getLocalstore);}
        if (i == 0) {  listArray.push(data);}
        else { listArray[i - 1] = data;
            document.getElementsByClassName("btn-edit")[i-1].classList.remove("submit");
            document.getElementsByClassName("listselect")[i].style['pointer-events'] = 'none';
            document.getElementsByClassName("nameitems")[i].style['pointer-events'] = 'none';
        }
        localStorage.setItem("local", JSON.stringify(listArray));
        show();
        resetForm();
    }
}
document.getElementsByClassName("submit")[0].addEventListener("click", function() {
    Submit(0);
})
function btn(index) {
    document.getElementsByClassName("files")[index].click();
}
function chkname(value, index) {
    const ktrso = /^[^0-9][a-z0-9_ ]{0,8}$/i;
    if (ktrso.test(value)) { return true; }
    else { document.getElementsByClassName("errname")[index].innerHTML = 'Name is required';
          return false;  }
}

function chkcate(value, index) {
    if (value == 'No selected') {document.getElementsByClassName("errcate")[index].innerHTML = 'Catogory is required';  return false; }
    return true;
}

function validate(index) {

    if (chkname(document.getElementsByClassName("nameitems")[index].value, index) && chkcate(categorys = document.getElementsByClassName("listselect")[index].value, index)) { 
        return true;  }
    else { chkcate(document.getElementsByClassName("listselect")[index].value, index);
        return false; }
}
function resetForm() {
    document.getElementById("nameitem").value = "";
    // document.getElementById("category").value ="No Selected";
    document.getElementById("img1").src ="";
    selectedRow = null;
}
function Edit(index) {
    let btn_edit = document.getElementsByClassName("btn-edit")[index - 1];
    let btn_delete = document.getElementsByClassName("btn-delete")[index - 1];
    
    if (btn_edit.classList.item(0) == "btn-edit" && !btn_edit.classList.item(1)) {
        btn_edit.classList.add("submit");btn_edit.value = "Save";
        btn_delete.classList.add("cancel");btn_delete.value = "Cancel";
        document.getElementsByClassName("nameitems")[index].style['pointer-events'] = 'auto';
        document.getElementsByClassName("listselect")[index].disabled = false;
    }
    else {  Submit(index);
    }
}
function Delete(index) {
    let btn_delete = document.getElementsByClassName("btn-delete")[index];
    if(btn_delete.classList.item(1))
    {
        show();
    }
    else{  
        let getLocalStorageData = localStorage.getItem("local");
        arr = JSON.parse(getLocalStorageData); arr.splice(index, 1);
        localStorage.setItem("local", JSON.stringify(arr));
        show()
    }
}