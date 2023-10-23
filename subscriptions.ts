/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./scr/types/amplify";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateReviewsRating =
  /* GraphQL */ `subscription OnCreateReviewsRating(
  $filter: ModelSubscriptionReviewsRatingFilterInput
) {
  onCreateReviewsRating(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateReviewsRatingSubscriptionVariables,
    APITypes.OnCreateReviewsRatingSubscription
  >;
export const onUpdateReviewsRating =
  /* GraphQL */ `subscription OnUpdateReviewsRating(
  $filter: ModelSubscriptionReviewsRatingFilterInput
) {
  onUpdateReviewsRating(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateReviewsRatingSubscriptionVariables,
    APITypes.OnUpdateReviewsRatingSubscription
  >;
export const onDeleteReviewsRating =
  /* GraphQL */ `subscription OnDeleteReviewsRating(
  $filter: ModelSubscriptionReviewsRatingFilterInput
) {
  onDeleteReviewsRating(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteReviewsRatingSubscriptionVariables,
    APITypes.OnDeleteReviewsRatingSubscription
  >;
export const onCreatePayment =
  /* GraphQL */ `subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onCreatePayment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreatePaymentSubscriptionVariables,
    APITypes.OnCreatePaymentSubscription
  >;
export const onUpdatePayment =
  /* GraphQL */ `subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onUpdatePayment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdatePaymentSubscriptionVariables,
    APITypes.OnUpdatePaymentSubscription
  >;
export const onDeletePayment =
  /* GraphQL */ `subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
  onDeletePayment(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeletePaymentSubscriptionVariables,
    APITypes.OnDeletePaymentSubscription
  >;
export const onCreateOrder =
  /* GraphQL */ `subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onCreateOrder(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateOrderSubscriptionVariables,
    APITypes.OnCreateOrderSubscription
  >;
export const onUpdateOrder =
  /* GraphQL */ `subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
  onUpdateOrder(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateOrderSubscriptionVariables,
    APITypes.OnUpdateOrderSubscription
  >;
export const onDeleteOrder =
  /* GraphQL */ `subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
  onDeleteOrder(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteOrderSubscriptionVariables,
    APITypes.OnDeleteOrderSubscription
  >;
export const onCreateCart =
  /* GraphQL */ `subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
  onCreateCart(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateCartSubscriptionVariables,
    APITypes.OnCreateCartSubscription
  >;
export const onUpdateCart =
  /* GraphQL */ `subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
  onUpdateCart(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateCartSubscriptionVariables,
    APITypes.OnUpdateCartSubscription
  >;
export const onDeleteCart =
  /* GraphQL */ `subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
  onDeleteCart(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteCartSubscriptionVariables,
    APITypes.OnDeleteCartSubscription
  >;
export const onCreateProduct =
  /* GraphQL */ `subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
  onCreateProduct(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateProductSubscriptionVariables,
    APITypes.OnCreateProductSubscription
  >;
export const onUpdateProduct =
  /* GraphQL */ `subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
  onUpdateProduct(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateProductSubscriptionVariables,
    APITypes.OnUpdateProductSubscription
  >;
export const onDeleteProduct =
  /* GraphQL */ `subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
  onDeleteProduct(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteProductSubscriptionVariables,
    APITypes.OnDeleteProductSubscription
  >;
export const onCreateCategory =
  /* GraphQL */ `subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onCreateCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateCategorySubscriptionVariables,
    APITypes.OnCreateCategorySubscription
  >;
export const onUpdateCategory =
  /* GraphQL */ `subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onUpdateCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateCategorySubscriptionVariables,
    APITypes.OnUpdateCategorySubscription
  >;
export const onDeleteCategory =
  /* GraphQL */ `subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
  onDeleteCategory(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteCategorySubscriptionVariables,
    APITypes.OnDeleteCategorySubscription
  >;
export const onCreateUser =
  /* GraphQL */ `subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
  onCreateUser(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateUserSubscriptionVariables,
    APITypes.OnCreateUserSubscription
  >;
export const onUpdateUser =
  /* GraphQL */ `subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
  onUpdateUser(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateUserSubscriptionVariables,
    APITypes.OnUpdateUserSubscription
  >;
export const onDeleteUser =
  /* GraphQL */ `subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
  onDeleteUser(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteUserSubscriptionVariables,
    APITypes.OnDeleteUserSubscription
  >;
export const onCreateStore =
  /* GraphQL */ `subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
  onCreateStore(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateStoreSubscriptionVariables,
    APITypes.OnCreateStoreSubscription
  >;
export const onUpdateStore =
  /* GraphQL */ `subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
  onUpdateStore(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateStoreSubscriptionVariables,
    APITypes.OnUpdateStoreSubscription
  >;
export const onDeleteStore =
  /* GraphQL */ `subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
  onDeleteStore(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteStoreSubscriptionVariables,
    APITypes.OnDeleteStoreSubscription
  >;
