/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReviewsRating = /* GraphQL */ `
  query GetReviewsRating($id: ID!) {
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
`;
export const listReviewsRatings = /* GraphQL */ `
  query ListReviewsRatings(
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
`;
export const syncReviewsRatings = /* GraphQL */ `
  query SyncReviewsRatings(
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
`;
export const getPayment = /* GraphQL */ `
  query GetPayment($id: ID!) {
    getPayment(id: $id) {
      id
      paymentStatus
      amount
      paymentIntentId
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
`;
export const listPayments = /* GraphQL */ `
  query ListPayments(
    $filter: ModelPaymentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        paymentStatus
        amount
        paymentIntentId
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
`;
export const syncPayments = /* GraphQL */ `
  query SyncPayments(
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
        amount
        paymentIntentId
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
`;
export const paymentsByUserID = /* GraphQL */ `
  query PaymentsByUserID(
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
        amount
        paymentIntentId
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
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
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
        amount
        paymentIntentId
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
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
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
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
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
`;
export const ordersByUserID = /* GraphQL */ `
  query OrdersByUserID(
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
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
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
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
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
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
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
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
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
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
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
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
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
`;
export const productsByCategoryID = /* GraphQL */ `
  query ProductsByCategoryID(
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
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
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
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
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
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
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
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
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
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
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
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
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
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
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
`;
export const listStores = /* GraphQL */ `
  query ListStores(
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
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
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
`;
export const getEmailNotification = /* GraphQL */ `
  query GetEmailNotification($id: ID!) {
    getEmailNotification(id: $id) {
      id
      subject
      body
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listEmailNotifications = /* GraphQL */ `
  query ListEmailNotifications(
    $filter: ModelEmailNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmailNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        subject
        body
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
`;
export const syncEmailNotifications = /* GraphQL */ `
  query SyncEmailNotifications(
    $filter: ModelEmailNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEmailNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        subject
        body
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
`;
