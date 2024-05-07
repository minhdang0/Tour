import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.webp";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.webp";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Du lịch Hè - Tour Đà Nẵng - Bà Nà - Hội An 2024",
    city: " Đà Nẵng",
    hotel: 'Mường Thanh',
    price: '5.590.000',
    maxGroupSize: 10,
    "address": "3 ngày 2 đêm",
    desc: [
      `Đến sân bay Đà Nẵng, xe và HDV địa phương đón đoàn đi thăm quan Rừng Dừa Bảy Mẫu: được ví như “Miền Tây trong lòng phố Hội”, tại đây du khách sẽ được trải nghiệm ngồi trên những chiếc thuyền thúng đi dọc trên sông và ngắm nhìn cánh rừng dừa xanh mướt. 
      Ăn trưa tại nhà hàng, sau đó, đoàn đi Hội An thăm quan. Tham quan khu phố cổ Hội An - được UNESCO công nhận là di sản văn hoá thế giới vào tháng 12/1999: bảo tàng lịch sử Hội An và miếu Quan Công, hội quán Phước Kiến, nhà cổ Tấn Ký, chùa cầu Nhật Bản.
      Sau đó đoàn về lại Đà Nẵng, nhận phòng khách sạn, nghỉ ngơi.
      Đoàn tập trung đi ăn tối tại nhà hàng. Sau bữa tối, xe đưa đoàn về khách sạn. Tự do khám phá Đà Nẵng về đêm.
      Nghỉ đêm tại khách sạn Mường Thanh tại Đà Nẵng.`,
      `HDV và xe Đón khách tại khách sạn, khởi hành đi công viên Suối Khoáng Núi Thần Tài. Xe điện đưa quý khách đến với khu vực hồ bơi tập trung để thư giãn tại hồ Jacuzzi  hay thả mình tại  Dòng Sông Lười bên trong Động Long Tiên. Trải nghiệm công viên nước thu nhỏ, ngồi tĩnh lặng dưới những cây nấm khổng lồ nhân tạo, hay tận hưởng massage tia. Xe điện tiếp tục đưa du khách tận hưởng hồ Suối Khoáng Nóng, ngâm mình nghỉ ngơi và thưởng thức Trứng Gà được luộc từ dòng khoáng nóng tự nhiên. (chi phí tự túc).
      Trưa: Ăn trưa tại Núi Thần Tài.
      Chiều: Quý khách thưởng thức Tắm Bùn, Tắm Trà, Tắm Sữa, Tắm Rượu Vang, Tắm Onsen… hay thử cảm giác tắm Tiên và cùng với Trà Đạo. (chi phí tự túc). Tiếp tục vui chơi tại công viên nước. Khởi hành về lại khách sạn, tự do tắm biển Mỹ Khê.
      15h00: Trở về chân núi, xe đưa đoàn trở về nghỉ ngơi và tắm biển.
      19h00: Ăn tối tại nhà hàng.Buổi tối quý khách tự do khám phá ẩm thực đường phố Đà Nẵng với Chè Sầu Liên, hoặc những món ngon hải sản bên bờ biển, Nghỉ đêm tại khách sạn 4 sao.`,
      `Sáng: Sau bữa sáng, quý khách tự do nghỉ ngơi/ mua hàng hóa quà lưu niệm về làm quà cho gia đình và người thân. Đoàn trả phòng khách sạn, xe và hướng dẫn đón đoàn đi ăn trưa và thăm quan:
      -Bán Đảo Sơn Trà (Monkey Mountain) quay một vòng quanh Bán Đảo để thưởng ngoạn toàn cảnh phố biển Đà Nẵng trên cao ngoạn toàn cảnh phố biển Đà Nẵng trên cao. Xe đưa quý khách dọc theo triền núi Đông Nam để chiêm ngưỡng vẻ đẹp tuyệt mỹ của biển Đà Nẵng, viếng Linh Ứng Tự - nơi có tượng Phật Bà 65m cao nhất Việt Nam.
      -Thăm quan và chụp ảnh với Cầu Tình Yêu, vường tượng Sông Hàn, Tượng cá chép hóa long, nhà thờ Chính Tòa Đà Nẵng, Công viên Đà Nẵng.
    Xe và HDV đưa đoàn khởi hành ra sân bay Đà Nẵng đáp chuyến bay VN174 (15h50 – 17h15) hoặc VN178 (17h30-18h55) khởi hành về lại Hà Nội.
    Đến Hà Nội, xe đón đoàn về lại trung tâm thành phố, trả khách tại điểm đón. Kết thúc chương trình, chia tay và hẹn gặp lại quý khách.`
    ],
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },

      {
        name: "Alice",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Du lịch Huế Hè 3 ngày bay Vietnam Airlines 2024",
    city: "Huế",
    "address": "3 ngày 2 đêm",
    hotel: 'Mường Thanh',
    price: "5.990.000",
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Tour Du lịch Nha Trang",
    city: "Nha Trang",
    address: "3 ngày 2 đêm",
    hotel: 'Mường Thanh',
    price: '6.690.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 5,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Du lịch Phú Quốc Hè - Vinpearland - Đảo Ngọc",
    city: "Phú Quốc",
    "address": "3 ngày 2 đêm",
    hotel: 'Vinpearl',
    price: '6.290.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Tour Du lịch Quy Nhơn - Đảo Điệp Sơn - Phú Yên",
    city: "Quy Nhơn",
    "address": "3 ngày 2 đêm",
    hotel: 'RAON',
    price: '5.890.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Tour Du lịch Sài Gòn - Vũng Tàu",
    city: "Vũng Tàu",
    address: "4 ngày 3 đêm",
    hotel: 'Mường Thanh',
    price: '8.790.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Du lịch Hà Nôi - Sapa - Bản Cát Cát - Check in Moana từ Hà Nội",
    city: "Paris",
    address: "2 ngày 1 đêm",
    hotel: 'Homestay',
    price: '4.890.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "jhon doe",
        rating: 1.2,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Tour Du lịch Tây Nguyên mùa hoa Cafe - Buôn Mê Thuột - Kontum - Pleiku",
    city: "Pleiku",
    address: "5 ngày 4 đêm",
    hotel: 'Mường Thanh',
    price: '7.990.000',
    maxGroupSize: 8,
    desc: "description",
    reviews: [],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
