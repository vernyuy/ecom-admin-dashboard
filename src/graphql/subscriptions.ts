/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReviewsRating = /* GraphQL */ `
  subscription OnCreateReviewsRating(
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
`;
export const onUpdateReviewsRating = /* GraphQL */ `
  subscription OnUpdateReviewsRating(
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
`;
export const onDeleteReviewsRating = /* GraphQL */ `
  subscription OnDeleteReviewsRating(
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
`;
export const onCreatePayment = /* GraphQL */ `
  subscription OnCreatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onCreatePayment(filter: $filter) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      day
      month
      year
      userID
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePayment = /* GraphQL */ `
  subscription OnUpdatePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onUpdatePayment(filter: $filter) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      day
      month
      year
      userID
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePayment = /* GraphQL */ `
  subscription OnDeletePayment($filter: ModelSubscriptionPaymentFilterInput) {
    onDeletePayment(filter: $filter) {
      id
      paymentStatus
      amount
      paymentIntentId
      orderId
      day
      month
      year
      userID
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
      day
      month
      year
      isDeleted
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        day
        month
        year
        userID
        isDeleted
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
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
      day
      month
      year
      isDeleted
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        day
        month
        year
        userID
        isDeleted
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
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      orderItems
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
      day
      month
      year
      isDeleted
      Payment {
        id
        paymentStatus
        amount
        paymentIntentId
        orderId
        day
        month
        year
        userID
        isDeleted
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
`;
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($filter: ModelSubscriptionCartFilterInput) {
    onCreateCart(filter: $filter) {
      id
      productId
      productQty
      productPrice
      cartTotal
      isDeleted
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
        newsLetter
        isDeleted
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
        day
        month
        year
        isDeleted
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
`;
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($filter: ModelSubscriptionCartFilterInput) {
    onUpdateCart(filter: $filter) {
      id
      productId
      productQty
      productPrice
      cartTotal
      isDeleted
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
        newsLetter
        isDeleted
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
        day
        month
        year
        isDeleted
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
`;
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($filter: ModelSubscriptionCartFilterInput) {
    onDeleteCart(filter: $filter) {
      id
      productId
      productQty
      productPrice
      cartTotal
      isDeleted
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
        newsLetter
        isDeleted
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
        day
        month
        year
        isDeleted
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
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      isDeleted
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
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      isDeleted
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
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
      id
      name
      description
      productImage
      productImageUrls
      price
      quantity
      inStock
      isDeleted
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
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      description
      isParent
      parentCategoryId
      isDeleted
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
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      description
      isParent
      parentCategoryId
      isDeleted
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
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      description
      isParent
      parentCategoryId
      isDeleted
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
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
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
      newsLetter
      isDeleted
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
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
      newsLetter
      isDeleted
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
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
      newsLetter
      isDeleted
      Cart {
        id
        productId
        productQty
        productPrice
        cartTotal
        isDeleted
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
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
      id
      name
      logoUrl
      fontType
      description
      primaryColorDark
      primaryColorLight
      secondaryColorDark
      secondaryColorLight
      currency
      address
      facebookUrl
      twitterUrl
      instagramUrl
      linkedInUrl
      termsAndConditions
      privacyAndPolicy
      partners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
      id
      name
      logoUrl
      fontType
      description
      primaryColorDark
      primaryColorLight
      secondaryColorDark
      secondaryColorLight
      currency
      address
      facebookUrl
      twitterUrl
      instagramUrl
      linkedInUrl
      termsAndConditions
      privacyAndPolicy
      partners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
      id
      name
      logoUrl
      fontType
      description
      primaryColorDark
      primaryColorLight
      secondaryColorDark
      secondaryColorLight
      currency
      address
      facebookUrl
      twitterUrl
      instagramUrl
      linkedInUrl
      termsAndConditions
      privacyAndPolicy
      partners
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateEmailNotification = /* GraphQL */ `
  subscription OnCreateEmailNotification(
    $filter: ModelSubscriptionEmailNotificationFilterInput
  ) {
    onCreateEmailNotification(filter: $filter) {
      id
      subject
      body
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateEmailNotification = /* GraphQL */ `
  subscription OnUpdateEmailNotification(
    $filter: ModelSubscriptionEmailNotificationFilterInput
  ) {
    onUpdateEmailNotification(filter: $filter) {
      id
      subject
      body
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteEmailNotification = /* GraphQL */ `
  subscription OnDeleteEmailNotification(
    $filter: ModelSubscriptionEmailNotificationFilterInput
  ) {
    onDeleteEmailNotification(filter: $filter) {
      id
      subject
      body
      isDeleted
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateAdvert = /* GraphQL */ `
  subscription OnCreateAdvert($filter: ModelSubscriptionAdvertFilterInput) {
    onCreateAdvert(filter: $filter) {
      id
      backgroundImageUrl
      title
      backgroundColor
      bannerUrl
      status
      hasBg
      isDeleted
      textColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateAdvert = /* GraphQL */ `
  subscription OnUpdateAdvert($filter: ModelSubscriptionAdvertFilterInput) {
    onUpdateAdvert(filter: $filter) {
      id
      backgroundImageUrl
      title
      backgroundColor
      bannerUrl
      status
      hasBg
      isDeleted
      textColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteAdvert = /* GraphQL */ `
  subscription OnDeleteAdvert($filter: ModelSubscriptionAdvertFilterInput) {
    onDeleteAdvert(filter: $filter) {
      id
      backgroundImageUrl
      title
      backgroundColor
      bannerUrl
      status
      hasBg
      isDeleted
      textColor
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
