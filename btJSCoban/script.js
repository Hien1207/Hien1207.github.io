function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#img').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});
function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
 document.getElementById("delete_button"+no).style.display="none";
 document.getElementById("cancel_button"+no).style.display="block";

	
 var name=document.getElementById("name_row"+no);
 var cate=document.getElementById("cate_row"+no);
 var file=document.getElementById("file_row"+no);

 var name_data=name.innerHTML;
 var cate_data=cate.innerHTML;
 var file_data=file.innerHTML;
	
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 cate.innerHTML="<form> <select id='cate_text"+no+"'  style='font-size: 18px; width: 150px;'><option>Category1</option><option>Category2</option><option>Category3</option><option>Category4</option></select></form>";
 file.innerHTML="<div><form><img src="+document.getElementById("img"+no).src+"/><input type='file' id='imgInp"+no+" style='font-size: 15px; width: 100px;' /><img id='img"+no+"' src='#' alt='your image'/></form></div>";
 $("#(imgInp"+no+")").change(function(){
     readURL(this);
 });
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var cate_val=document.getElementById("cate_text"+no).value;
//  var file_val=document.getElementById("img"+no).src;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("cate_row"+no).innerHTML=cate_val;
//  document.getElementById("file_row"+no).innerHTML=file_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
 document.getElementById("delete_button"+no).style.display="block";
 document.getElementById("cancel_button"+no).style.display="none";
}
function cancel_row(no)
{
    var name_val=document.getElementById("name_text"+no).value;
    var cate_val=document.getElementById("cate_text"+no).value;
    // var file_val=document.getElementById("img"+no).src;
   
    document.getElementById("name_row"+no).innerHTML=name_val;
    document.getElementById("cate_row"+no).innerHTML=cate_val;
    // document.getElementById("file_row"+no).innerHTML=file_val;
   
    document.getElementById("edit_button"+no).style.display="block";
    document.getElementById("save_button"+no).style.display="none";
    document.getElementById("delete_button"+no).style.display="block";
    document.getElementById("cancel_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_item=document.getElementById("item").value;
 var new_cate=document.getElementById("cate").value;
 var new_file=document.getElementById("img").src;
	
 var table=document.getElementById("mytable");
 var table_len=(table.rows.length);
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td style='text-align:center;'>"+table_len+"</td><td id='name_row"+table_len+"'>"+new_item+"</td><td id='cate_row"+table_len+"'><form><select style='font-size: 18px; width: 150px;'> <option>"+new_cate+"</option> </select></form></td><td id='file_row"+table_len+"'><img src="+new_file+"></td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button'  id='delete_button"+table_len+"' value='Delete' class='delete' onclick='delete_row("+table_len+")'> <input type='button'  id='cancel_button"+table_len+"' value='Cancel' class='cancel' onclick='cancel_row("+table_len+")'></td></td></tr>";
 resetForm();

}
function resetForm() {
    document.getElementById("item").value = "";
    document.getElementById("cate").value ="No Selected";
    document.getElementById("imgInp").value = "";
    document.getElementById("img").src ="";
    selectedRow = null;
}
