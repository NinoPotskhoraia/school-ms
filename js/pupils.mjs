import {CRUD} from './crud.mjs';

const pupilName  = document.getElementById('name');
const birthday = document.getElementById('birth');
const pupilGender = document.getElementById('gender');
const pupilsTable = document.querySelector('.pupilsTable');
const pupilId = document.getElementById('pupilId');
const findPupil = document.getElementById('findPupil');
const foundPupil = document.getElementById('foundPupil');
const pupilForm = document.querySelector('.pupil-form');

class Pupils extends CRUD{

  populateTable(data){
     
    
    // helper function        
    function addCell(tr, text) {
        var td = tr.insertCell();
        td.textContent = text;
        return td;
    }
  
    // insert data
  
        var row = pupilsTable.insertRow();
        addCell(row, data.id);
        addCell(row, data.name);
        addCell(row, data.birth);
        addCell(row, data.gender);
        const del = document.createElement('button');
        del.innerHTML = '<i class="fa-solid fa-trash"></i>';
        row.appendChild(del);
        del.addEventListener('click',()=>{
          pupil.deleteData(data.id)
          row.remove();
        })
  
  };



}



const pupil = new Pupils();


  
  pupilForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    let data = {id:pupil.counter++, name:pupilName.value, birth:birthday.value, gender: pupilGender.value}
    if(pupilName.value && birthday.value){
      pupil.postData(data );
      pupil.populateTable(data);
      pupilName.value = "";
      birthday.value = "";
      pupilGender.value = "";
      

  }})
  

  
  findPupil.addEventListener('click', ()=>{
   let data = pupil.findOne(pupilId.value);
    foundPupil.innerHTML = `Name: ${data.name}, Date of Birth: ${data.birth}, Gender: ${data.gender}` 
    pupilId.value = "";
   
  });
  
  
  
  
  
  





