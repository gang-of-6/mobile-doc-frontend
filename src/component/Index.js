import Buttons from './Buttons';

const Index = () => {
  return (
    <header className="App-header">
        <h1>Welcome to Mobile-Doc</h1>
        <div style={{ justifyContent: 'space-between', display: 'flex' }}>
          <Buttons text="Doctor" link="/doctor" variant="outlined" />
          &nbsp;&nbsp;&nbsp;
          <Buttons text="Patient" link="/patient" variant="outlined" />
        </div>
    </header>
  )
}

export default Index
