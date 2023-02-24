import Buttons from './Buttons';

const Header = () => {
  return (
    <header className="App-header">
        <h1>Welcome to Mobile-Doc</h1>
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <Buttons text="Doctor" />
          &nbsp;&nbsp;&nbsp;
          <Buttons text="Patient" link="/patient" />
        </div>
    </header>
  )
}

export default Header
