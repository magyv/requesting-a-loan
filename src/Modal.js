import "./FormStyle.css";

export default function Modal({ isVisible , errorMessage=  null }){
    if(isVisible)
    {
        return(
        <div id="Modal">
            <div id="Modal-content">
                <h1 style={{color:errorMessage ? "red" : "green"}}>
                    {errorMessage != null 
                    ? errorMessage :
                     "The Form Has Been Submitted Successfully"}
                    </h1>
            </div>
        </div>
    );
    }else{
        return (<></>);
    }

  
}