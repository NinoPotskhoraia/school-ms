import {CRUD} from './crud.mjs';

const teacherName  = document.getElementById('name');
const birthDay = document.getElementById('birthday');
const teaching = document.getElementById('teaching');
const years = document.getElementById('years');
const teachersTable = document.querySelector('.teachersTable');
const teacherId = document.getElementById('teacherId');
const findTeacher = document.getElementById('findTeacher');
const foundTeacher = document.getElementById('foundTeacher');
const teacherForm = document.querySelector('.teacher-form');

class Teachers extends CRUD{
    
  populateTable(data){
            
    function addCell(tr, text) {
        var td = tr.insertCell();
        td.textContent = text;
        return td;
    }
  

    var row = teachersTable.insertRow();
    addCell(row, data.id);
    addCell(row, data.name);
    addCell(row, data.birth);
    addCell(row, data.teachingSubject);
    addCell(row, data.experience);
    const del = document.createElement('button');
    del.innerHTML = '<i class="fa-solid fa-trash"></i>';
    row.appendChild(del);
    del.addEventListener('click',()=>{
      teacher.deleteData(data.id)
      row.remove();
    })

  }




}


const teacher = new Teachers();



teacherForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let data = {id:teacher.counter++, name:teacherName.value, birth:birthDay.value, teachingSubject:teaching.value, experience:years.value };
  if(teacherName.value && teaching.value){
    teacher.postData(data );
    teacher.populateTable(data);
    teacherName.value = "";
    birthDay.value = "";
    teaching.value = "";
    years.value = "";
    

}
   
})

 
findTeacher.addEventListener('click', ()=>{
  let data = teacher.findOne(teacherId.value);
  foundTeacher.innerHTML = `Name: ${data.name}, Date of Birth: ${data.birth}, Subject: ${data.teachingSubject}, Experience: ${data.experience}`;
  teacherId.value = "";
});



