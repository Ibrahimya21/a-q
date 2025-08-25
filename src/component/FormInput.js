import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const FormInput = ({ setNotify }) => {
    // يبيبيبيبي
    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')

    const addNewItem = () => {
        if (qu === "" || an === "") {
            setNotify("من فضلك اكمل البيانات", "Error");
            return;
        }
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
