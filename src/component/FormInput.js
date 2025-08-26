import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { question } from '../data'

const FormInput = ({ onAdd, setNotify }) => {
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')
    const [idCounter, setIdCounter] = useState(1);

    const addNewItem = () => {
        if (qu === "" || an === "") {
            setNotify("من فضلك اكمل البيانات", "Error");
            return;
        }
        question.push({ id: idCounter, q: qu, a: an });
        setQu('')
        setAn('')
        setIdCounter(idCounter + 1)
        onAdd();
        console.log(question)
    }

    return (
        <Row className="my-2">
            <Col sm="5">
                {/*setQu يأخذ القيمة التي يدخلها المستخدم ثم يتم وضعها في (e.target.value)*/}
                <Form.Control value={qu} onChange={(e) => setQu(e.target.value)} type="text" placeholder="ادخل السوال" />
            </Col>
            <Col sm="5">
                <Form.Control value={an} onChange={(e) => setAn(e.target.value)} type="text" placeholder="ادخل الاجابه" />
            </Col>
            <Col sm="2">
                <button onClick={addNewItem} className="btn-color px-5" type="submit">
                    اضافة
                </button>
            </Col>
        </Row>
    )
}

export default FormInput
