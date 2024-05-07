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
    desc: "description",
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
    price: '8.790.000đ',
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
