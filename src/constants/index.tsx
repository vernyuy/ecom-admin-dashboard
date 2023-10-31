export const productAttributes = [
  "IMAGE",
  "NAME",
  "DESCRIPTION",
  "CATEGORY",
  "PRICE",
  "QUANTITY",
  "STATUS",
  "Date",
];
export const categoryAttributes = ["Image", "Name", "Description", "Is parent"];

export const userAttributes = [
  "FIRST NAME",
  "LAST NAME",
  "EMAIL",
  "PHONE",
  "COUNTRY",
  "REGION",
  "CITY",
  "ZIP CODE",
  "ADDRESS LINE",
  "STATUS",
];

export const sidebarLinks = [
  {
    title: "Dashboard",
    url: "/",
    icon: "/ZondiconsChartPie.svg",
  },
  {
    title: "Products",
    url: "/products",
    icon: "/MdiTableLarge.svg",
  },
  {
    title: "Socials",
    url: "#",
    icon: "/ZondiconsChartPie.svg",
  },
];

export const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: false,
    address: {
      country: "Cameroon",
      region: "Center",
      city: "Yaounde",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: true,
    address: {
      country: "Cameroon",
      region: "South West",
      city: "Limbe",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: false,
    address: {
      country: "Cameroon",
      region: "South West",
      city: "Buea",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: true,
    address: {
      country: "Cameroon",
      region: "Litoral",
      city: "Douala",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
  {
    id: 5,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: false,
    address: {
      country: "Cameroon",
      region: "Litoral",
      city: "Douala",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
  {
    id: 6,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@email.com",
    phone: "+237 650 863 381",
    isActive: true,
    address: {
      country: "Cameroon",
      region: "Litoral",
      city: "Douala",
      zipcode: 12345,
      addressLine1: "Tarred Malingo, Molyko Buea",
      addressLine2: "",
    },
  },
];

export const orderAttributes = [
  "ORDER ID",
  "USER ID",
  "ORDER DATE",
  "ORDER STATUS"
];

export const paymentAttributes = [
  "PAYMENT ID",
  "USER ID",
  "AMOUNT",
  "PAYMENT DATE",
  "PAYMENT INTENT ID",
  "PAYMENT STATUS"
];
