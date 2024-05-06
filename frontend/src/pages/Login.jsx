import React, { useState, useContext } from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import "../styles/login.css";
// import { onCapslock } from "../js/validate.js";

import LoginImg from "../assets/images/dulichviet.jpeg";
import usericon from "../assets/images/user.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


import { AuthContext } from "../context/AuthContext.js";
import { BASE_URL } from "../utils/config.js";

const Login = () => {
  window.scrollTo({ top: 130, behavior: 'smooth' })
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const [visible, setVisible] = useState(true);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN START' })
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(credentials)
      })
      const result = await res.json()
      if (!res.ok) alert(result.message)

      console.log(result.data);

      dispatch({ type: 'LOGIN_SUCCESS', payload: result.data })
      navigate('/')
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.message })
    }
  };
  const togglePassword = () =>{
    setVisible(!visible)
  };
  

  return (
    <section>
      <div className="full">
        <Container>
          <Row>
            <Col lg="5" className="m-auto">
              <div className="login_container d-fex justify-content-between">
                <div className="login_form">
                  <div className="user">
                    <img src={usericon} alt="" />
                  </div>
                  <h2>Đăng nhập</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="email"
                        onChange={handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                     <div className="input-password">
                     <input
                        type={visible ? "text" : "password"}
                        placeholder="Mật khẩu"
                        required
                        id="password"
                        onChange={handleChange}
                       
                       />
                        <span className="eyeIcon" onClick={togglePassword}>
                        <i class={visible ? "ri-eye-line" : "ri-eye-off-line"} ></i>
                        </span>
                        {/* <p id="capslock-warning" hidden><FontAwesomeIcon  icon={faExclamationTriangle} /> Cap Lock đang bật</p> */}
                      
                     </div>
                    </FormGroup>
                    
                    <Button
                      className="btn secondary__btn auth_btn"
                      type="submit" 
                    >
                      Đăng nhập
                    </Button>
                  </Form>
                  <p>
                    Chưa có tài khoản? <Link to="/register">Tạo mới</Link>
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Login;
