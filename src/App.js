import { Col, Container, Row } from "react-bootstrap";
import FormInput from "./component/FormInput";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { question } from "./data";
import { useState } from "react";
import QAList from "./component/QAList";

function App() {
  const [data, setData] = useState(question)
  //JSON.stringify لازم نحولها إلى نص باستخدام 
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question])
    notify("تم الاضافة بنجاح", "Success")
  }

  //to delete all data items
  const deleteAllItems = () => {
    localStorage.removeItem("items")
    question.splice(0, question.length);
    setData([])
    notify("تم حذف الكل بنجاح", "Success")
  }
  //to delete one item from array
  const deleteOneItem = (items) => {
    if (items.length !== 0) {
      localStorage.setItem("items", JSON.stringify([...items]));
      setData([...items])
      notify("تم حذف السوال بنجاح", "Success")
    } else {
      deleteAllItems();
    }
  }

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
            <FormInput onAdd={addItem} setNotify={notify} />
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {
              localStorage.getItem("items") != null ? (<button onClick={deleteAllItems} className="btn-color w-100 my-3">مسح الكل</button>) : null
            }
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
