import Input from './Input';
import Clock from './Clock';

export default function Header({ name, updateName }) {

  return (
    <div className='header'>
      <div className='header--title' style={{display:(name === '') ? 'none' : 'block'}}>Hello, {name}!</div>
      <div style={{display:(name === '') ? 'block' : 'none'}}>
        <Input 
          updateFunction={updateName}
          labelText={'What is your name?'}
          buttonText={'Update'}
          placeholder={'Name'}
        />
      </div>
      <Clock />
    </div>
  )
}
