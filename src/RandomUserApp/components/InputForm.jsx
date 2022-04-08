import React from 'react'
import { useCountRenders } from '../custom_hooks/useCountRenders';

const InputForm = React.memo(({handleSubmit})=>{
  useCountRenders('InputForm');
  return (
    <form className='form-container' onSubmit={handleSubmit}>
        <input
          className="input"
          name="seed"
          placeholder="Enter random string"
          required
        />
        <button type="submit"><i className="fas fa-search"></i></button>
      </form>  
  )
})
export default InputForm;
