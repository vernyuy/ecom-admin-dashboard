// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "ADMIN": "ADMIN",
  "CUSTOMER": "CUSTOMER"
};

const { ReviewsRating, Payment, Order, Cart, Product, Category, User, Store } = initSchema(schema);

export {
  ReviewsRating,
  Payment,
  Order,
  Cart,
  Product,
  Category,
  User,
  Store,
  UserType
};