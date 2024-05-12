import React, { useRef } from "react";
import "./searchbar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "../utils/config";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const locationRef = useRef("");
  const navigate = useNavigate();

  const searchHandler = async (e) => {
    const location = locationRef.current.value;

    if (location === "") {
      return alert("Vui lòng nhập địa điểm muốn đi!");
    }
    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}`
    );
    console.log(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`);
    if (!res.ok) alert("Something went wrong");
    const result = await res.json();
    navigate(`/tours/search?city=${location}`, { state: result.data });
  };

  return (
    <Col lg="12">
      <div className="search_bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form_group form_group-fast">
            <span>
              <i className="ri-map-pin-line"></i>
            </span>
            <div className="search_value">
              <h6>Địa điểm</h6>
              <input
                type="text"
                placeholder="Bạn muốn đi đâu?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <span className="search_icon" type="submit" onClick={searchHandler}>
            <i className="ri-search-line"></i>
          </span>
        </Form>
      </div>
    </Col>
  );
};

export default SearchBar;
