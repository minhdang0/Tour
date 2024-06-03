// thường là 1 custom hook thường được sử dụng để thực hiện các yêu cầu HTTP  vàquản lý trang thái khí tải dữl iệu trên api

import { useState, useEffect } from "react";

const useFetch = (url) => { //Nhận 1 tham số url để api goik lấy giữ liệu 
  const [data, setData] = useState([]);// lưu dữ liệu nhận từ api 
  const [error, setError] = useState(null);// lưu thông báo lỗi 
  const [loading, setLoading] = useState(true);// biến trang thái xem dữ liệu có được tải hay không

  useEffect(() => { //hàm
    const fetchData = async () => {// tìm dữ liệu thừ APi từ hàm async
      setLoading(true);// đặt trạng thái thành true trc khi fetch dữ ;iệu 
      try {
        const res = await fetch(url, { //goi apivới url đã cho
          credentials: "include", //chóp hép gửi cookie vs request
        });
        if (!res.ok) {
          setError("Lỗi kết nối đến csdl!");
        }
        const result = await res.json();// chuyển từ api sang json
        setData(result.data);// lưu dữ liệu
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(true);
      }
    };
    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading,
  };
};

export default useFetch;
