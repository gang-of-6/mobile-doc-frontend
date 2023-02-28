import Buttons from './Buttons';
import { useNavigate } from "react-router-dom";
import URL from './APIURL';

const Index = () => {

  const patientId = '0001';

  const navigate = useNavigate();

  const routeToPatient = async () => {

    const res = await fetch(URL + `session/new/${patientId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json()
    console.log(data)
    if (data.success) {
      sessionStorage.setItem("session_id", data.created_session_id);
      navigate("/patient?session_id=" + data.created_session_id);
    } else {
      alert(data.message);
    }

    
  }
  const routeToDoctor = () => {
    if(sessionStorage.getItem("session_id") === null) {
      alert("No session found");
      return;
    }
    navigate("/doctor?session_id=" + sessionStorage.getItem("session_id"));
  }

  return (
    <header className="App-header">
      <h1>Welcome to Mobile-Doc</h1>
      <div style={{ justifyContent: 'space-between', display: 'flex' }}>
        <Buttons text="Doctor" onClickFunction={routeToDoctor} variant="outlined" />
        &nbsp;&nbsp;&nbsp;
        <Buttons text="Patient" onClickFunction={routeToPatient} variant="outlined" />
      </div>
    </header>
  )
}

export default Index
