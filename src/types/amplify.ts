/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateReviewsRatingInput = {
  id?: string | null,
  review: string,
  stars?: number | null,
  userId?: string | null,
  _version?: number | null,
};

export type ModelReviewsRatingConditionInput = {
  review?: ModelStringInput | null,
  stars?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelReviewsRatingConditionInput | null > | null,
  or?: Array< ModelReviewsRatingConditionInput | null > | null,
  not?: ModelReviewsRatingConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ReviewsRating = {
  __typename: "ReviewsRating",
  id: string,
  review: string,
  stars?: number | null,
  userId?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReviewsRatingInput = {
  id: string,
  review?: string | null,
  stars?: number | null,
  userId?: string | null,
  _version?: number | null,
};

export type DeleteReviewsRatingInput = {
  id: string,
  _version?: number | null,
};

export type CreatePaymentInput = {
  id?: string | null,
  paymentStatus: boolean,
  amount: number,
  paymentIntentId: string,
  orderId: string,
  userID: string,
  _version?: number | null,
};

export type ModelPaymentConditionInput = {
  paymentStatus?: ModelBooleanInput | null,
  amount?: ModelIntInput | null,
  paymentIntentId?: ModelStringInput | null,
  orderId?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  not?: ModelPaymentConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Payment = {
  __typename: "Payment",
  id: string,
  paymentStatus: boolean,
  amount: number,
  paymentIntentId: string,
  orderId: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdatePaymentInput = {
  id: string,
  paymentStatus?: boolean | null,
  amount?: number | null,
  paymentIntentId?: string | null,
  orderId?: string | null,
  userID?: string | null,
  _version?: number | null,
};

export type DeletePaymentInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrderInput = {
  id?: string | null,
  orderItems: string,
  orderDetails?: string | null,
  orderStatus: boolean,
  userID: string,
  _version?: number | null,
  orderPaymentId?: string | null,
  orderCartId?: string | null,
};

export type ModelOrderConditionInput = {
  orderItems?: ModelStringInput | null,
  orderDetails?: ModelStringInput | null,
  orderStatus?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  orderPaymentId?: ModelIDInput | null,
  orderCartId?: ModelIDInput | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  orderItems: string,
  Cart?: Cart | null,
  orderDetails?: string | null,
  orderStatus: boolean,
  Payment?: Payment | null,
  userID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  orderPaymentId?: string | null,
  orderCartId?: string | null,
};

export type Cart = {
  __typename: "Cart",
  id: string,
  productId: string,
  productQty: number,
  productPrice: number,
  cartTotal: number,
  User?: User | null,
  Order?: Order | null,
  cartStatus: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  cartOrderId?: string | null,
  cartUserId?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  sub: string,
  isActive: boolean,
  phone?: string | null,
  userType?: UserType | null,
  Cart?: Cart | null,
  Orders?: ModelOrderConnection | null,
  Payments?: ModelPaymentConnection | null,
  ReviewsRating?: ReviewsRating | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userCartId?: string | null,
  userReviewsRatingId?: string | null,
};

export enum UserType {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}


export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items:  Array<Order | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateOrderInput = {
  id: string,
  orderItems?: string | null,
  orderDetails?: string | null,
  orderStatus?: boolean | null,
  userID?: string | null,
  _version?: number | null,
  orderPaymentId?: string | null,
  orderCartId?: string | null,
};

export type DeleteOrderInput = {
  id: string,
  _version?: number | null,
};

export type CreateCartInput = {
  id?: string | null,
  productId: string,
  productQty: number,
  productPrice: number,
  cartTotal: number,
  cartStatus: boolean,
  _version?: number | null,
  cartOrderId?: string | null,
  cartUserId?: string | null,
};

export type ModelCartConditionInput = {
  productId?: ModelStringInput | null,
  productQty?: ModelIntInput | null,
  productPrice?: ModelIntInput | null,
  cartTotal?: ModelIntInput | null,
  cartStatus?: ModelBooleanInput | null,
  and?: Array< ModelCartConditionInput | null > | null,
  or?: Array< ModelCartConditionInput | null > | null,
  not?: ModelCartConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  cartOrderId?: ModelIDInput | null,
  cartUserId?: ModelIDInput | null,
};

export type UpdateCartInput = {
  id: string,
  productId?: string | null,
  productQty?: number | null,
  productPrice?: number | null,
  cartTotal?: number | null,
  cartStatus?: boolean | null,
  _version?: number | null,
  cartOrderId?: string | null,
  cartUserId?: string | null,
};

export type DeleteCartInput = {
  id: string,
  _version?: number | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  description: string,
  productImage: string,
  productImageUrls: Array< string >,
  price: number,
  quantity: number,
  inStock: boolean,
  categoryID: string,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  hasSizes: boolean,
  hasColors: boolean,
  _version?: number | null,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  productImage?: ModelStringInput | null,
  productImageUrls?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  inStock?: ModelBooleanInput | null,
  categoryID?: ModelIDInput | null,
  sizes?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  hasSizes?: ModelBooleanInput | null,
  hasColors?: ModelBooleanInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Product = {
  __typename: "Product",
  id: string,
  name: string,
  description: string,
  productImage: string,
  productImageUrls: Array< string >,
  price: number,
  quantity: number,
  inStock: boolean,
  categoryID: string,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  hasSizes: boolean,
  hasColors: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  productImage?: string | null,
  productImageUrls?: Array< string > | null,
  price?: number | null,
  quantity?: number | null,
  inStock?: boolean | null,
  categoryID?: string | null,
  sizes?: Array< string | null > | null,
  colors?: Array< string | null > | null,
  hasSizes?: boolean | null,
  hasColors?: boolean | null,
  _version?: number | null,
};

export type DeleteProductInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  description: string,
  isParent: boolean,
  parentCategoryId?: string | null,
  categoryImageUrl?: string | null,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isParent?: ModelBooleanInput | null,
  parentCategoryId?: ModelStringInput | null,
  categoryImageUrl?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  name: string,
  description: string,
  isParent: boolean,
  parentCategoryId?: string | null,
  categoryImageUrl?: string | null,
  Products?: ModelProductConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelProductConnection = {
  __typename: "ModelProductConnection",
  items:  Array<Product | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  isParent?: boolean | null,
  parentCategoryId?: string | null,
  categoryImageUrl?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  email: string,
  address: string,
  sub: string,
  isActive: boolean,
  phone?: string | null,
  userType?: UserType | null,
  _version?: number | null,
  userCartId?: string | null,
  userReviewsRatingId?: string | null,
};

export type ModelUserConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  userType?: ModelUserTypeInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  userCartId?: ModelIDInput | null,
  userReviewsRatingId?: ModelIDInput | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type UpdateUserInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  email?: string | null,
  address?: string | null,
  sub?: string | null,
  isActive?: boolean | null,
  phone?: string | null,
  userType?: UserType | null,
  _version?: number | null,
  userCartId?: string | null,
  userReviewsRatingId?: string | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreInput = {
  id?: string | null,
  name: string,
  logoUrl: string,
  fontType?: string | null,
  hero?: Array< string > | null,
  description?: string | null,
  ownerEmail?: string | null,
  ownerAddress?: string | null,
  _version?: number | null,
};

export type ModelStoreConditionInput = {
  name?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  fontType?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  description?: ModelStringInput | null,
  ownerEmail?: ModelStringInput | null,
  ownerAddress?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Store = {
  __typename: "Store",
  id: string,
  name: string,
  logoUrl: string,
  fontType?: string | null,
  hero?: Array< string > | null,
  description?: string | null,
  ownerEmail?: string | null,
  ownerAddress?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateStoreInput = {
  id: string,
  name?: string | null,
  logoUrl?: string | null,
  fontType?: string | null,
  hero?: Array< string > | null,
  description?: string | null,
  ownerEmail?: string | null,
  ownerAddress?: string | null,
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateEmailNotificationInput = {
  id?: string | null,
  subject: string,
  body: string,
  _version?: number | null,
};

export type ModelEmailNotificationConditionInput = {
  subject?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelEmailNotificationConditionInput | null > | null,
  or?: Array< ModelEmailNotificationConditionInput | null > | null,
  not?: ModelEmailNotificationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type EmailNotification = {
  __typename: "EmailNotification",
  id: string,
  subject: string,
  body: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEmailNotificationInput = {
  id: string,
  subject?: string | null,
  body?: string | null,
  _version?: number | null,
};

export type DeleteEmailNotificationInput = {
  id: string,
  _version?: number | null,
};

export type ModelReviewsRatingFilterInput = {
  id?: ModelIDInput | null,
  review?: ModelStringInput | null,
  stars?: ModelIntInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelReviewsRatingFilterInput | null > | null,
  or?: Array< ModelReviewsRatingFilterInput | null > | null,
  not?: ModelReviewsRatingFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelReviewsRatingConnection = {
  __typename: "ModelReviewsRatingConnection",
  items:  Array<ReviewsRating | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelPaymentFilterInput = {
  id?: ModelIDInput | null,
  paymentStatus?: ModelBooleanInput | null,
  amount?: ModelIntInput | null,
  paymentIntentId?: ModelStringInput | null,
  orderId?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  not?: ModelPaymentFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  orderItems?: ModelStringInput | null,
  orderDetails?: ModelStringInput | null,
  orderStatus?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  orderPaymentId?: ModelIDInput | null,
  orderCartId?: ModelIDInput | null,
};

export type ModelCartFilterInput = {
  id?: ModelIDInput | null,
  productId?: ModelStringInput | null,
  productQty?: ModelIntInput | null,
  productPrice?: ModelIntInput | null,
  cartTotal?: ModelIntInput | null,
  cartStatus?: ModelBooleanInput | null,
  and?: Array< ModelCartFilterInput | null > | null,
  or?: Array< ModelCartFilterInput | null > | null,
  not?: ModelCartFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  cartOrderId?: ModelIDInput | null,
  cartUserId?: ModelIDInput | null,
};

export type ModelCartConnection = {
  __typename: "ModelCartConnection",
  items:  Array<Cart | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  productImage?: ModelStringInput | null,
  productImageUrls?: ModelStringInput | null,
  price?: ModelIntInput | null,
  quantity?: ModelIntInput | null,
  inStock?: ModelBooleanInput | null,
  categoryID?: ModelIDInput | null,
  sizes?: ModelStringInput | null,
  colors?: ModelStringInput | null,
  hasSizes?: ModelBooleanInput | null,
  hasColors?: ModelBooleanInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  isParent?: ModelBooleanInput | null,
  parentCategoryId?: ModelStringInput | null,
  categoryImageUrl?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  email?: ModelStringInput | null,
  address?: ModelStringInput | null,
  sub?: ModelStringInput | null,
  isActive?: ModelBooleanInput | null,
  phone?: ModelStringInput | null,
  userType?: ModelUserTypeInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
  userCartId?: ModelIDInput | null,
  userReviewsRatingId?: ModelIDInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logoUrl?: ModelStringInput | null,
  fontType?: ModelStringInput | null,
  hero?: ModelStringInput | null,
  description?: ModelStringInput | null,
  ownerEmail?: ModelStringInput | null,
  ownerAddress?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelEmailNotificationFilterInput = {
  id?: ModelIDInput | null,
  subject?: ModelStringInput | null,
  body?: ModelStringInput | null,
  and?: Array< ModelEmailNotificationFilterInput | null > | null,
  or?: Array< ModelEmailNotificationFilterInput | null > | null,
  not?: ModelEmailNotificationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEmailNotificationConnection = {
  __typename: "ModelEmailNotificationConnection",
  items:  Array<EmailNotification | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionReviewsRatingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  review?: ModelSubscriptionStringInput | null,
  stars?: ModelSubscriptionIntInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionReviewsRatingFilterInput | null > | null,
  or?: Array< ModelSubscriptionReviewsRatingFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  paymentStatus?: ModelSubscriptionBooleanInput | null,
  amount?: ModelSubscriptionIntInput | null,
  paymentIntentId?: ModelSubscriptionStringInput | null,
  orderId?: ModelSubscriptionStringInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionOrderFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  orderItems?: ModelSubscriptionStringInput | null,
  orderDetails?: ModelSubscriptionStringInput | null,
  orderStatus?: ModelSubscriptionBooleanInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrderFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCartFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  productId?: ModelSubscriptionStringInput | null,
  productQty?: ModelSubscriptionIntInput | null,
  productPrice?: ModelSubscriptionIntInput | null,
  cartTotal?: ModelSubscriptionIntInput | null,
  cartStatus?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCartFilterInput | null > | null,
  or?: Array< ModelSubscriptionCartFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionProductFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  productImage?: ModelSubscriptionStringInput | null,
  productImageUrls?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionIntInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  inStock?: ModelSubscriptionBooleanInput | null,
  categoryID?: ModelSubscriptionIDInput | null,
  sizes?: ModelSubscriptionStringInput | null,
  colors?: ModelSubscriptionStringInput | null,
  hasSizes?: ModelSubscriptionBooleanInput | null,
  hasColors?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionProductFilterInput | null > | null,
  or?: Array< ModelSubscriptionProductFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  isParent?: ModelSubscriptionBooleanInput | null,
  parentCategoryId?: ModelSubscriptionStringInput | null,
  categoryImageUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  address?: ModelSubscriptionStringInput | null,
  sub?: ModelSubscriptionStringInput | null,
  isActive?: ModelSubscriptionBooleanInput | null,
  phone?: ModelSubscriptionStringInput | null,
  userType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  logoUrl?: ModelSubscriptionStringInput | null,
  fontType?: ModelSubscriptionStringInput | null,
  hero?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  ownerEmail?: ModelSubscriptionStringInput | null,
  ownerAddress?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEmailNotificationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  subject?: ModelSubscriptionStringInput | null,
  body?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmailNotificationFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmailNotificationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateReviewsRatingMutationVariables = {
  input: CreateReviewsRatingInput,
  condition?: ModelReviewsRatingConditionInput | null,
};

export type CreateReviewsRatingMutation = {
  createReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateReviewsRatingMutationVariables = {
  input: UpdateReviewsRatingInput,
  condition?: ModelReviewsRatingConditionInput | null,
};

export type UpdateReviewsRatingMutation = {
  updateReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteReviewsRatingMutationVariables = {
  input: DeleteReviewsRatingInput,
  condition?: ModelReviewsRatingConditionInput | null,
};

export type DeleteReviewsRatingMutation = {
  deleteReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreatePaymentMutationVariables = {
  input: CreatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  input: UpdatePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeletePaymentMutationVariables = {
  input: DeletePaymentInput,
  condition?: ModelPaymentConditionInput | null,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type CreateCartMutationVariables = {
  input: CreateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type CreateCartMutation = {
  createCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type UpdateCartMutationVariables = {
  input: UpdateCartInput,
  condition?: ModelCartConditionInput | null,
};

export type UpdateCartMutation = {
  updateCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type DeleteCartMutationVariables = {
  input: DeleteCartInput,
  condition?: ModelCartConditionInput | null,
};

export type DeleteCartMutation = {
  deleteCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateEmailNotificationMutationVariables = {
  input: CreateEmailNotificationInput,
  condition?: ModelEmailNotificationConditionInput | null,
};

export type CreateEmailNotificationMutation = {
  createEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEmailNotificationMutationVariables = {
  input: UpdateEmailNotificationInput,
  condition?: ModelEmailNotificationConditionInput | null,
};

export type UpdateEmailNotificationMutation = {
  updateEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEmailNotificationMutationVariables = {
  input: DeleteEmailNotificationInput,
  condition?: ModelEmailNotificationConditionInput | null,
};

export type DeleteEmailNotificationMutation = {
  deleteEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetReviewsRatingQueryVariables = {
  id: string,
};

export type GetReviewsRatingQuery = {
  getReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListReviewsRatingsQueryVariables = {
  filter?: ModelReviewsRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReviewsRatingsQuery = {
  listReviewsRatings?:  {
    __typename: "ModelReviewsRatingConnection",
    items:  Array< {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncReviewsRatingsQueryVariables = {
  filter?: ModelReviewsRatingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReviewsRatingsQuery = {
  syncReviewsRatings?:  {
    __typename: "ModelReviewsRatingConnection",
    items:  Array< {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPaymentsQuery = {
  syncPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type PaymentsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PaymentsByUserIDQuery = {
  paymentsByUserID?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OrdersByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserIDQuery = {
  ordersByUserID?:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCartQueryVariables = {
  id: string,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type ListCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCartsQuery = {
  listCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCartsQueryVariables = {
  filter?: ModelCartFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCartsQuery = {
  syncCarts?:  {
    __typename: "ModelCartConnection",
    items:  Array< {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      productImage: string,
      productImageUrls: Array< string >,
      price: number,
      quantity: number,
      inStock: boolean,
      categoryID: string,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      hasSizes: boolean,
      hasColors: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProductsQuery = {
  syncProducts?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      productImage: string,
      productImageUrls: Array< string >,
      price: number,
      quantity: number,
      inStock: boolean,
      categoryID: string,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      hasSizes: boolean,
      hasColors: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type ProductsByCategoryIDQueryVariables = {
  categoryID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProductsByCategoryIDQuery = {
  productsByCategoryID?:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      description: string,
      productImage: string,
      productImageUrls: Array< string >,
      price: number,
      quantity: number,
      inStock: boolean,
      categoryID: string,
      sizes?: Array< string | null > | null,
      colors?: Array< string | null > | null,
      hasSizes: boolean,
      hasColors: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      isParent: boolean,
      parentCategoryId?: string | null,
      categoryImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      description: string,
      isParent: boolean,
      parentCategoryId?: string | null,
      categoryImageUrl?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      logoUrl: string,
      fontType?: string | null,
      hero?: Array< string > | null,
      description?: string | null,
      ownerEmail?: string | null,
      ownerAddress?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoresQuery = {
  syncStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      name: string,
      logoUrl: string,
      fontType?: string | null,
      hero?: Array< string > | null,
      description?: string | null,
      ownerEmail?: string | null,
      ownerAddress?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetEmailNotificationQueryVariables = {
  id: string,
};

export type GetEmailNotificationQuery = {
  getEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEmailNotificationsQueryVariables = {
  filter?: ModelEmailNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmailNotificationsQuery = {
  listEmailNotifications?:  {
    __typename: "ModelEmailNotificationConnection",
    items:  Array< {
      __typename: "EmailNotification",
      id: string,
      subject: string,
      body: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncEmailNotificationsQueryVariables = {
  filter?: ModelEmailNotificationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEmailNotificationsQuery = {
  syncEmailNotifications?:  {
    __typename: "ModelEmailNotificationConnection",
    items:  Array< {
      __typename: "EmailNotification",
      id: string,
      subject: string,
      body: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateReviewsRatingSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsRatingFilterInput | null,
};

export type OnCreateReviewsRatingSubscription = {
  onCreateReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateReviewsRatingSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsRatingFilterInput | null,
};

export type OnUpdateReviewsRatingSubscription = {
  onUpdateReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteReviewsRatingSubscriptionVariables = {
  filter?: ModelSubscriptionReviewsRatingFilterInput | null,
};

export type OnDeleteReviewsRatingSubscription = {
  onDeleteReviewsRating?:  {
    __typename: "ReviewsRating",
    id: string,
    review: string,
    stars?: number | null,
    userId?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    id: string,
    paymentStatus: boolean,
    amount: number,
    paymentIntentId: string,
    orderId: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type OnUpdateOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type OnDeleteOrderSubscriptionVariables = {
  filter?: ModelSubscriptionOrderFilterInput | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    orderItems: string,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    orderDetails?: string | null,
    orderStatus: boolean,
    Payment?:  {
      __typename: "Payment",
      id: string,
      paymentStatus: boolean,
      amount: number,
      paymentIntentId: string,
      orderId: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    userID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    orderPaymentId?: string | null,
    orderCartId?: string | null,
  } | null,
};

export type OnCreateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnCreateCartSubscription = {
  onCreateCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type OnUpdateCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnUpdateCartSubscription = {
  onUpdateCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type OnDeleteCartSubscriptionVariables = {
  filter?: ModelSubscriptionCartFilterInput | null,
};

export type OnDeleteCartSubscription = {
  onDeleteCart?:  {
    __typename: "Cart",
    id: string,
    productId: string,
    productQty: number,
    productPrice: number,
    cartTotal: number,
    User?:  {
      __typename: "User",
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      address: string,
      sub: string,
      isActive: boolean,
      phone?: string | null,
      userType?: UserType | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userCartId?: string | null,
      userReviewsRatingId?: string | null,
    } | null,
    Order?:  {
      __typename: "Order",
      id: string,
      orderItems: string,
      orderDetails?: string | null,
      orderStatus: boolean,
      userID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      orderPaymentId?: string | null,
      orderCartId?: string | null,
    } | null,
    cartStatus: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    cartOrderId?: string | null,
    cartUserId?: string | null,
  } | null,
};

export type OnCreateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteProductSubscriptionVariables = {
  filter?: ModelSubscriptionProductFilterInput | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct?:  {
    __typename: "Product",
    id: string,
    name: string,
    description: string,
    productImage: string,
    productImageUrls: Array< string >,
    price: number,
    quantity: number,
    inStock: boolean,
    categoryID: string,
    sizes?: Array< string | null > | null,
    colors?: Array< string | null > | null,
    hasSizes: boolean,
    hasColors: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    name: string,
    description: string,
    isParent: boolean,
    parentCategoryId?: string | null,
    categoryImageUrl?: string | null,
    Products?:  {
      __typename: "ModelProductConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    address: string,
    sub: string,
    isActive: boolean,
    phone?: string | null,
    userType?: UserType | null,
    Cart?:  {
      __typename: "Cart",
      id: string,
      productId: string,
      productQty: number,
      productPrice: number,
      cartTotal: number,
      cartStatus: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      cartOrderId?: string | null,
      cartUserId?: string | null,
    } | null,
    Orders?:  {
      __typename: "ModelOrderConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    ReviewsRating?:  {
      __typename: "ReviewsRating",
      id: string,
      review: string,
      stars?: number | null,
      userId?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userCartId?: string | null,
    userReviewsRatingId?: string | null,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    name: string,
    logoUrl: string,
    fontType?: string | null,
    hero?: Array< string > | null,
    description?: string | null,
    ownerEmail?: string | null,
    ownerAddress?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateEmailNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionEmailNotificationFilterInput | null,
};

export type OnCreateEmailNotificationSubscription = {
  onCreateEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEmailNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionEmailNotificationFilterInput | null,
};

export type OnUpdateEmailNotificationSubscription = {
  onUpdateEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEmailNotificationSubscriptionVariables = {
  filter?: ModelSubscriptionEmailNotificationFilterInput | null,
};

export type OnDeleteEmailNotificationSubscription = {
  onDeleteEmailNotification?:  {
    __typename: "EmailNotification",
    id: string,
    subject: string,
    body: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
