import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./component/FormInput";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = (message, type) => {
    if (type === "Error")
      toast.error(message)
    else if (type === "Success")
      toast.success(message)
  };
  return (
    <div className="font text-center color-body">
      <Container className="p-5">

        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-3 text-center py-2">اسئله واجوبه شائعه</div>
          </Col>
          <Col sm="8">
          <FormInput setNotify={notify}/>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
