/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./scr/types/amplify";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getReviewsRating =
  /* GraphQL */ `query GetReviewsRating($id: ID!) {
  getReviewsRating(id: $id) {
    id
    review
    stars
    userId
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetReviewsRatingQueryVariables,
    APITypes.GetReviewsRatingQuery
  >;
export const listReviewsRatings = /* GraphQL */ `query ListReviewsRatings(
  $filter: ModelReviewsRatingFilterInput
  $limit: Int
  $nextToken: String
) {
  listReviewsRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListReviewsRatingsQueryVariables,
  APITypes.ListReviewsRatingsQuery
>;
export const syncReviewsRatings = /* GraphQL */ `query SyncReviewsRatings(
  $filter: ModelReviewsRatingFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncReviewsRatings(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncReviewsRatingsQueryVariables,
  APITypes.SyncReviewsRatingsQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
    id
    paymentStatus
    orderId
    userID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      paymentStatus
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const syncPayments = /* GraphQL */ `query SyncPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncPayments(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      paymentStatus
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncPaymentsQueryVariables,
  APITypes.SyncPaymentsQuery
>;
export const paymentsByUserID = /* GraphQL */ `query PaymentsByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  paymentsByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      paymentStatus
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.PaymentsByUserIDQueryVariables,
  APITypes.PaymentsByUserIDQuery
>;
export const getOrder = /* GraphQL */ `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    orderItems
    Cart {
      id
      productId
      productQty
      productPrice
      cartTotal
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
    orderDetails
    orderStatus
    Payment {
      id
      paymentStatus
      orderId
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    userID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    orderPaymentId
    orderCartId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetOrderQueryVariables, APITypes.GetOrderQuery>;
export const listOrders = /* GraphQL */ `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      orderItems
      orderDetails
      orderStatus
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOrdersQueryVariables,
  APITypes.ListOrdersQuery
>;
export const syncOrders = /* GraphQL */ `query SyncOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncOrders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      orderItems
      orderDetails
      orderStatus
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncOrdersQueryVariables,
  APITypes.SyncOrdersQuery
>;
export const ordersByUserID = /* GraphQL */ `query OrdersByUserID(
  $userID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  ordersByUserID(
    userID: $userID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      orderItems
      orderDetails
      orderStatus
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.OrdersByUserIDQueryVariables,
  APITypes.OrdersByUserIDQuery
>;
export const getCart = /* GraphQL */ `query GetCart($id: ID!) {
  getCart(id: $id) {
    id
    productId
    productQty
    productPrice
    cartTotal
    User {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
    Order {
      id
      orderItems
      orderDetails
      orderStatus
      userID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderPaymentId
      orderCartId
      __typename
    }
    cartStatus
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    cartOrderId
    cartUserId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCartQueryVariables, APITypes.GetCartQuery>;
export const listCarts = /* GraphQL */ `query ListCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
) {
  listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      productId
      productQty
      productPrice
      cartTotal
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListCartsQueryVariables, APITypes.ListCartsQuery>;
export const syncCarts = /* GraphQL */ `query SyncCarts(
  $filter: ModelCartFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCarts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      productId
      productQty
      productPrice
      cartTotal
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncCartsQueryVariables, APITypes.SyncCartsQuery>;
export const getProduct = /* GraphQL */ `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    name
    description
    productImage
    productImageUrls
    price
    quantity
    inStock
    categoryID
    sizes
    colors
    hasSizes
    hasColors
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProductQueryVariables,
  APITypes.GetProductQuery
>;
export const listProducts = /* GraphQL */ `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProductsQueryVariables,
  APITypes.ListProductsQuery
>;
export const syncProducts = /* GraphQL */ `query SyncProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncProducts(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncProductsQueryVariables,
  APITypes.SyncProductsQuery
>;
export const productsByCategoryID = /* GraphQL */ `query ProductsByCategoryID(
  $categoryID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  productsByCategoryID(
    categoryID: $categoryID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      categoryID
      sizes
      colors
      hasSizes
      hasColors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ProductsByCategoryIDQueryVariables,
  APITypes.ProductsByCategoryIDQuery
>;
export const getCategory = /* GraphQL */ `query GetCategory($id: ID!) {
  getCategory(id: $id) {
    id
    name
    description
    isParent
    parentCategoryId
    categoryImageUrl
    Products {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoryQueryVariables,
  APITypes.GetCategoryQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      isParent
      parentCategoryId
      categoryImageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const syncCategories = /* GraphQL */ `query SyncCategories(
  $filter: ModelCategoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      isParent
      parentCategoryId
      categoryImageUrl
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCategoriesQueryVariables,
  APITypes.SyncCategoriesQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    firstName
    lastName
    email
    address
    sub
    isActive
    phone
    userType
    Cart {
      id
      productId
      productQty
      productPrice
      cartTotal
      cartStatus
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartOrderId
      cartUserId
      __typename
    }
    Orders {
      nextToken
      startedAt
      __typename
    }
    Payments {
      nextToken
      startedAt
      __typename
    }
    ReviewsRating {
      id
      review
      stars
      userId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    userCartId
    userReviewsRatingId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const syncUsers = /* GraphQL */ `query SyncUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncUsers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      firstName
      lastName
      email
      address
      sub
      isActive
      phone
      userType
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCartId
      userReviewsRatingId
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncUsersQueryVariables, APITypes.SyncUsersQuery>;
export const getStore = /* GraphQL */ `query GetStore($id: ID!) {
  getStore(id: $id) {
    id
    name
    logoUrl
    fontType
    hero
    description
    ownerEmail
    ownerAddress
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStoreQueryVariables, APITypes.GetStoreQuery>;
export const listStores = /* GraphQL */ `query ListStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
) {
  listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      logoUrl
      fontType
      hero
      description
      ownerEmail
      ownerAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStoresQueryVariables,
  APITypes.ListStoresQuery
>;
export const syncStores = /* GraphQL */ `query SyncStores(
  $filter: ModelStoreFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncStores(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      logoUrl
      fontType
      hero
      description
      ownerEmail
      ownerAddress
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncStoresQueryVariables,
  APITypes.SyncStoresQuery
>;
