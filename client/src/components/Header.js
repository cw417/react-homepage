import Input from './Input';
import Clock from './Clock';

export default function Header({ name, updateName }) {

  return (
    <div className='header'>
      <div className='header--title' style={{display:(name === '') ? 'none' : 'block'}}>Hello, {name}!</div>
      <div style={{display:(name === '') ? 'block' : 'none'}}>
        <div className='font-15'>What is your name?</div>
        <Input 
          updateFunction={updateName}
          buttonText={'Update'}
          placeholder={'Name'}
        />
      </div>
      <Clock />
    </div>
  )
}
