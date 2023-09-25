import React,{useState} from 'react'
import './entry.style.css'
import { LoginForm } from '../../components/login/loginCompo.js'
import { ResetForm } from '../../components/Reset/resetCompo.js'
export const Entry = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [frmLoad, setfrmLoad]= useState('login')

    const handleOnChange =e=>{
        const{name,value} =e.target;

        switch(name){
            case 'email':
                setemail(value);
                break;
            case 'password':
                setpassword(value);
                break;
        default:
                break;
        }
        //console.log(name,value)
    }
    const handleOnSubmit=e=>{
      e.preventDefault()

      if(!email || !password){
        return alert("Either Email or Password is empty");
      }
      //Todo call api to submit the form
      console.log(email,password)
    };
    const handleOnResetSubmit=e=>{
        e.preventDefault()
  
        if(!email){
          return alert("Either Email or Password is empty");
        }
        //Todo call api to submit the form
        console.log(email,password)
      };

    const formSwitcher = (frmType) =>{
        setfrmLoad(frmType);
    };  
  return (
    <div className="entry-page ">
      
      <div className='form-box'>
        {frmLoad === 'login'&& (<LoginForm handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />)}
        
        {frmLoad === 'reset' &&(<ResetForm handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher={formSwitcher}
        email={email}
        />)}
        
      </div>
    </div>
  )
}


