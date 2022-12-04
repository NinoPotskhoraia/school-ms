
import {CRUD} from './crud.mjs';


const subject = document.getElementById('subject');
const lessonNum = document.getElementById('num');
const findSubj = document.getElementById('findSubject');
const foundSubject = document.getElementById('foundSubject');
const subjectId = document.getElementById('subjectId');
const lmsTable = document.querySelector('.lmsTable');
const subjForm = document.querySelector('.subject-form');
// const submitSubj = document.getElementById('submitSubj');
// const updBtn = document.getElementById('updateSubj');

export class LMS extends CRUD{
  
  constructor(){
    super();
    
  }
  populateTable(data){

    
           
    function addCell(tr, text) {
        var td = tr.insertCell();
        td.textContent = text;
        
        return td;
    }
  
    
        var row = lmsTable.insertRow();
        addCell(row, data.id);
        addCell(row, data.subject);
        addCell(row, data.num);
        const del = document.createElement('button');
        del.innerHTML = '<i class="fa-solid fa-trash"></i>';
        row.appendChild(del);
        del.addEventListener('click',()=>{
          lms.deleteData(data.id);
          row.remove();
        })

      //   const upd = document.createElement('button');
      //   upd.innerHTML = '<i class="fa-solid fa-file-pen"></i>';
      //  row.appendChild(upd);
      //  upd.addEventListener('click',()=>{
      //    lms.deleteData(data.id);
      //    row.remove();
      //    subject.value = data.subject;
      //    lessonNum.value = data.num;
      //   submitSubj.classList.add('hide');
      //   updBtn.classList.remove('hide');
      
       
      //  })


    console.log('called');
  }

 
}

const lms = new LMS();




subjForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  let data = {id:lms.counter++, subject:subject.value, num: lessonNum.value};
   if(subject.value && lessonNum.value){
    
   lms.postData(data);};



  lms.populateTable(data);
  subject.value = "";
  lessonNum.value = "";
 

})

findSubj.addEventListener('click', ()=>{
  let data =   lms.findOne(subjectId.value);
  foundSubject.innerHTML = `Subject: ${data.subject}, Number of Lessons: ${data.num}`;
  subjectId.value = "";
})

// updBtn.addEventListener('click', ()=>{
//   let updated = {subject:subject.value, num: lessonNum.value}
//   lms.updateData(data.id, updated);
//   lms.populateTable({id:data.id, subject:subject.value, num: lessonNum.value});
// })

 // updateTable(data){
  //   lmsTable.innerHTML = "";
  //   function addCell(tr, text) {
  //     var td = tr.insertCell();
  //     td.textContent = text;
      
  //     return td;
  // }
  // data.forEach(item => {
  //   var row = lmsTable.insertRow();
  //   addCell(row, item.id);
  //   addCell(row, item.subject);
  //   addCell(row, item.num);
  //   const del = document.createElement('button');
  //   del.innerHTML = '<i class="fa-solid fa-trash"></i>';
  //   row.appendChild(del);
  //   del.addEventListener('click',()=>{
  //     lms.deleteData(data.id);
  //     row.remove();
  //   })

   
  // });
  // }






