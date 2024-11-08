import "./FormStyle.css";
import Modal from "./Modal";
import { useState } from "react";



export default function LoanForm(){
    const [errorMessage,setErrorMessage] = useState (null);
    const [showModal,setShowModal] = useState(false);
    const [loanInputs,setLoanInputs] =  useState ({
        name:"",
        phoneNumber:"",
        age:"",
        isEmployee:false,
        SalaryRange:"",
    });


    function handleFormSubmit(event){
        event.preventDefault()

        setErrorMessage(null);
        const {age,phoneNumber } = loanInputs;
        if(age < 18 || age > 100)
        {
            setErrorMessage("the age is not allowed");
        }else if(phoneNumber.length < 10 || phoneNumber.length > 12  ){
            setErrorMessage("phone Number format is  incorrect ");
        }
        setShowModal(true);
    }

    const btnIsDisabled =
    loanInputs.name == "" || 
    loanInputs.age == "" || 
    loanInputs.age == "";

    function handleDivClick()
    {
        if(showModal)
            {
            setShowModal(false)
        }
    }

    return(
        <div onClick={handleDivClick}
        className="flex" 
        style={{flexDirection:"column"}}
        >
        <form id="loan-form" className="flex" style={{flexDirection:'column'}}> 
            <h1>Requesting a Loan:</h1>
            <hr></hr>
            <label>Name</label>
            <input 
            value={loanInputs.name} 
            onChange={(event)=>{
                setLoanInputs({...loanInputs,name:event.target.value})
            }} 
            />


            <label>phoneNumber:</label>
            <input 
            type="number" 
            value={loanInputs.phoneNumber} 
            onChange={(event)=>{
                setLoanInputs({...loanInputs,phoneNumber:event.target.value})
            }} 
            />

            <label>Age:</label>
            <input 
            type="number"  
            value={loanInputs.age} 
            onChange={(event)=>{
                setLoanInputs({...loanInputs,age:event.target.value})
            }} 
            />

            <label style={{marginTop:"30px"}}>Are you A Employee?:</label>
            <input type="checkbox" 
            checked={loanInputs.isEmployee} 
            onChange={(event)=>{
                setLoanInputs({...loanInputs,isEmployee:event.target.checked})
            }}
            />


            <label>Salary:</label>
            <select value={loanInputs.SalaryRange} 
            onChange={(event)=>{
                setLoanInputs({...loanInputs,SalaryRange:event.target.value})
            }} 
            >
                <option>Less Than 500$</option>
                <option>Between 500$ and 2000$</option>
                <option>Above 2000$</option>
            </select>

            <button className={btnIsDisabled ? "disabled" : ""}
            onClick={handleFormSubmit} 
            disabled={btnIsDisabled} 
            id="submit-loan-btn">
                Submit
            </button>
        </form>

        <Modal errorMessage={errorMessage} isVisible={showModal} />
        </div>
    );
}












