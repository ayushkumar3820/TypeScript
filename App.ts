    // const num1=5;
    // function ayush(num1: number,num2: number){
    //     return num1+num2;
    // }

    // console.log(ayush(num1,4)); 


    //function GetTotal(numbers: Array<number>) {
    //      return numbers.reduce((acc, item) => {
    //           return acc + item;
    //     }, 0);
    //   }
        
    //   console.log(GetTotal([3, 2, 1]));



    //const user={
    //      firstName:"Ayush",
    //     LastName:"kumar",
    //    age:34    
    //
    //}   

    //console.log(user);
    //Array
    //object
    //number
    //String 
    //boolean



    //type aligns


     // type User= {
      //    name:string ,
         // Age?:number,
        //  Address? : string,
         // isMarried ?: boolean
         // };



       //   function login (userData:User):User{
       //       return  userData;
  //        }

      //    const user ={name:"Ayush",age:34};
      //    console.log(login(user));


    // interface Transaction {
    //     payerAccountNumber:number;
    //     payeeAccountNumber:number;
    // }

    // interface  BankAccount {
    //     accountNumber:number;
    //     accountHolder:string;
    //     balance:number;
    //     isActive:boolean;
    //     transaction:Transaction[];
    // }


    // const transaction1: Transaction= {
    //     payerAccountNumber:2056,
    //     payeeAccountNumber:9876
    // }

    // const transaction2: Transaction= {
    //     payerAccountNumber:2056,
    //     payeeAccountNumber:9846
    // }


    // const bankAccount:BankAccount={
    //     accountNumber:123,
    //     accountHolder: "John Doe",
    //     balance: 10000,
    //     isActive:true,
    //     transaction: [transaction1]
    // };


    //type ID= number| string;
   // const userid:ID='123';

  // extends

//   interface  Person{
//     name:string;
//     age?:number;
//   }


//   interface  Employee extends Person{
//     department:string;
//     salary:number;
//   }

//   interface   Student extends Person{
//     grade:string;
//     courser:string;
//     college:string;
//   }
  


//   const  Ayush :Employee ={
//     name:"John Doe",
//     age:25,
//     department:"IT",
//     salary:200000
//   }


//   console.log(Ayush);


//   // Merge


//   interface Ayush1 {
//     name:String;
//     email: String;
//   }


//   interface Ayush1{
//     phone: string;
//   }

//   const  Ayush_merged : Ayush1 = {
//     name: "Ayush Kumar",
//     email: "ayushkumarsingh@gmail.com",
//     phone: "+91-8374605809"
//     };

//   console.log("Merged Object" ,Ayush_merged);



//   // Unions

//   type ID=number | string;
//   //Narrowing

//   function printId(id:ID){
//     if (typeof id === 'string'){
//         console.log(id.toUpperCase());
    
//     }
//     else{
//         console.log(id);
//     }
//   }


//   printId("Ayush");