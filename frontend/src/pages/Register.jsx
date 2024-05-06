import React, { useState,useContext } from "react";

import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link,useNavigate  } from "react-router-dom";
import "../styles/login.css";
import { checkUser, checkEmail, checkPass } from "../js/validate.js";
import { AuthContext } from "../context/AuthContext.js";
import { BASE_URL } from "../utils/config.js";



// import registerImg from "../assets/images/register.png";
import usericon from "../assets/images/user.png";

const Reagister = () => {
  window.scrollTo({ top: 130, behavior: 'smooth' })
  const [credentials, setCredentials] = useState({
    userNname: undefined,
    email: undefined,
    password: undefined,
  });

  const {dispatch} = useContext(AuthContext)
  const navigate = useNavigate()

  const [visible, setVisible] = useState(false);
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch(`${BASE_URL}/auth/register`,{
        method:'post',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(credentials)
      })
      const result = await res.json()
      if(!res.oke) alert(result.message)
      dispatch({type:"REGISTER_SUCCESS"})
      navigate('/login')
    } catch(err){
      alert(err.message)
    }
  };
  const togglePassword = () =>{
    setVisible(!visible)
  }


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
                  <h2>Đăng kí</h2>

                  <Form onSubmit={handleClick}>
                    <FormGroup>
                      <input
                        type="text"
                        placeholder="Tên đăng nhập"
                        required
                        id="username"
                        onChange={handleChange}
                        onMouseOut={() => checkUser()}
                      />
                       <span id="announceUser" class="text-danger"></span>
                    </FormGroup>
                    <FormGroup>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        id="email"
                        onChange={handleChange}
                        onMouseOut={() => checkEmail()}
                      />
                      <span id="announceEmail" class="text-danger"></span>

                    </FormGroup>
                    <FormGroup>
                      <div className="input-password">
                        <input
                            value={credentials.password}
                            type={visible ? "text" : "password"}
                            placeholder="Password"
                            required
                            id="password"
                            className="password"
                            onChange={handleChange}
                            onMouseOut={() => checkPass()}
                          />
                      
                        <span className="eyeIcon" onClick={togglePassword}>
                          <i class={visible ? "ri-eye-line" : "ri-eye-off-line"} ></i>
                         </span>
                      </div>
                        <span id="announcePass" class="text-danger"></span>   
                  
                    </FormGroup>
                    <Button
                      className="btn secondary__btn auth_btn"
                      type="submit"
                    >
                      Đăng ký
                    </Button>
                  </Form>
                  <p>
                    Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
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

export default Reagister;
