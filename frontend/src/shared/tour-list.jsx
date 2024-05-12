import React from "react";
import { Card, Typography, List } from "antd";
import convertISODateToNormal from "../utils/converDate";
import formatPrice from "./../hooks/formatPrice";
import { Link } from "react-router-dom";
const { Title, Text } = Typography; // Thêm Text từ Ant Design

const TourList = (item) => {
  console.log(item);
  return (
    <List.Item>
      <Card className="history-card">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Title level={4}>
              <Link to={`/tours/${item.item.tourId}`}>
                {item.item.tourName}
              </Link>
            </Title>
            <Text>Ngày đặt: {convertISODateToNormal(item.item.createdAt)}</Text>
          </div>
          <div>
            <Text strong>Ngày khởi hành: </Text>
            <Text>{convertISODateToNormal(item.item.bookAt)}</Text>{" "}
            {/* Giả sử ngày khởi hành được lưu trong item.item.startDate */}
          </div>
          <div>
            <Text strong>Số người: </Text>
            <Text>{item.item.guestSize}</Text>{" "}
            {/* Giả sử ngày khởi hành được lưu trong item.item.startDate */}
          </div>
          <div>
            <Text>{formatPrice(item.item.price)}</Text>
            {" vnd"}
            {/* Giả sử giá tour được lưu trong item.item.price */}
          </div>
        </div>
      </Card>
    </List.Item>
  );
};

export default TourList;
