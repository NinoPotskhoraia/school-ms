export class CRUD {
  arr;
  counter;
    constructor(){
        this.arr = [];
        this.counter = 0;
    };

    postData(data = {}) {
      
      this.arr.push(data);
      console.log(this.arr);
      }
    
    getData(){
      // const response = await fetch(url);
      // if(response.status !== 200){
      //   throw new Error('could not fetch data');
      // }
    
      // const data = await response.json();
      return this.arr;
    }

    findOne(id=0){
      const res = this.arr.filter(item=>item.id == id);
      return res[0];
    }
    
    updateData(id, data={}) {
     
    const target = (item)=>item.id === id;
     let index = this.arr.findIndex(target);
    //  this.arr = this.arr.slice(index-1, index);

    // this.arr =   this.arr.map(item=>{
    //     if(item.id === id){
    //       item = {...data};
    //     }
    //   });
    this.arr[index] = {...data};
    console.log(this.arr);
      return this.arr;
    }
    
    deleteData(id){
  
    const target = (item)=>item.id === id;
     let index = this.arr.findIndex(target);
     this.arr = this.arr.slice(index-1, index);
     console.log(this.arr);
     return this.arr;
    }
    
   
}

