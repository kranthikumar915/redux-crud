import {toast} from 'react-toastify'
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createContact } from '../Actions/ContactAction'

function Create() {

  const [contact,setContact] = useState({
       first:'',
       last:'',
       mobile:'',
       email:'',
       address:''
  })
  const dispatcher = useDispatch()
  const navigate = useNavigate()

  const readValue = (e)=>{
    const{name,value} = e.target;
    setContact({ ...contact,[name]:value})
    }


    const submitHandler = async(e)=>{
      e.preventDefault();

      try{
        console.log('new contact=',contact)
        
        dispatcher(createContact(contact))
         .unWrap()
         .then(res =>{
          toast.success('new contact added successfully')
          navigate('/')
         })
         .catch(err => toast.error(err.message))

      }catch(err){
         toast.error(err.message)
      }

    }


  return (
    <div className='container'>
      <div className='row'>
        <div className="col-md-12 text-center">
          <h3 className="display text-primary">Create new contact</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 offset-md">
          <div className="card-body">
            <form autoComplete='off' onSubmit={submitHandler}>
              <div className="form-group mt-2">
                <label htmlFor='first'>firstName</label>
                <input type='text' name='first' value={contact.first} onChange={readValue} id='first' className='form-control' required placeholder='first name '/>
              </div>
              <div className="form-group mt-2">
                <label htmlFor='last'>lastName</label>
                <input type='text' name='last' id='last' value={contact.last} onChange={readValue} className='form-control' required placeholder='last name'/>
              </div>
              <div className='form-group mt-2'>
                <label htmlFor='image'>profile image</label>
                <input type='url' name='image' id='image' value={contact.image} onChange={readValue} className='form-control' placeholder='https://xyz.com/imag1.jpg' required />
              </div>
              <div className="form-group mt-2">
                <label htmlFor='mobile'>mobile</label>
                <input type='number' name='mobile' id='mobile' value={contact.mobile} onChange={readValue} className='form-control' required placeholder='99XXX 00XX'/>
              </div>
              <div className="form-group mt-2">
                <label htmlFor='email'>email</label>
                <input type='email' name='email' id='email' value={contact.email} onChange={readValue} className='form-control' required placeholder='name@domain.com'/>
              </div>
              <div className="form-group mt-2">
                <label htmlFor='address'>Address</label>
                <textarea name='address' id='address' value={contact.address} onChange={readValue} cols='30' rows='6' className='form-control' required placeholder='address here'>
                </textarea>
              </div>
              <div className="form-group mt-2">
                 <input type="submit" value="Add New Contact" className="btn btn-outline-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create