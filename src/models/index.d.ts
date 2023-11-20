import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum UserType {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER"
}



type EagerReviewsRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReviewsRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review: string;
  readonly stars?: number | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReviewsRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ReviewsRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly review: string;
  readonly stars?: number | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ReviewsRating = LazyLoading extends LazyLoadingDisabled ? EagerReviewsRating : LazyReviewsRating

export declare const ReviewsRating: (new (init: ModelInit<ReviewsRating>) => ReviewsRating) & {
  copyOf(source: ReviewsRating, mutator: (draft: MutableModel<ReviewsRating>) => MutableModel<ReviewsRating> | void): ReviewsRating;
}

type EagerPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paymentStatus: boolean;
  readonly amount: number;
  readonly paymentIntentId: string;
  readonly orderId: string;
  readonly day?: number | null;
  readonly month?: number | null;
  readonly year?: number | null;
  readonly userID: string;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPayment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Payment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly paymentStatus: boolean;
  readonly amount: number;
  readonly paymentIntentId: string;
  readonly orderId: string;
  readonly day?: number | null;
  readonly month?: number | null;
  readonly year?: number | null;
  readonly userID: string;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Payment = LazyLoading extends LazyLoadingDisabled ? EagerPayment : LazyPayment

export declare const Payment: (new (init: ModelInit<Payment>) => Payment) & {
  copyOf(source: Payment, mutator: (draft: MutableModel<Payment>) => MutableModel<Payment> | void): Payment;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderItems: string;
  readonly Cart?: Cart | null;
  readonly orderDetails?: string | null;
  readonly orderStatus: boolean;
  readonly day?: number | null;
  readonly month?: number | null;
  readonly year?: number | null;
  readonly isDeleted?: boolean | null;
  readonly Payment?: Payment | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCartId?: string | null;
  readonly orderPaymentId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly orderItems: string;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly orderDetails?: string | null;
  readonly orderStatus: boolean;
  readonly day?: number | null;
  readonly month?: number | null;
  readonly year?: number | null;
  readonly isDeleted?: boolean | null;
  readonly Payment: AsyncItem<Payment | undefined>;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderCartId?: string | null;
  readonly orderPaymentId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly productQty: number;
  readonly productPrice: number;
  readonly cartTotal: number;
  readonly isDeleted?: boolean | null;
  readonly User?: User | null;
  readonly Order?: Order | null;
  readonly cartStatus: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartUserId?: string | null;
  readonly cartOrderId?: string | null;
}

type LazyCart = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cart, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly productId: string;
  readonly productQty: number;
  readonly productPrice: number;
  readonly cartTotal: number;
  readonly isDeleted?: boolean | null;
  readonly User: AsyncItem<User | undefined>;
  readonly Order: AsyncItem<Order | undefined>;
  readonly cartStatus: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly cartUserId?: string | null;
  readonly cartOrderId?: string | null;
}

export declare type Cart = LazyLoading extends LazyLoadingDisabled ? EagerCart : LazyCart

export declare const Cart: (new (init: ModelInit<Cart>) => Cart) & {
  copyOf(source: Cart, mutator: (draft: MutableModel<Cart>) => MutableModel<Cart> | void): Cart;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly productImage: string;
  readonly productImageUrls: string[];
  readonly price: number;
  readonly quantity: number;
  readonly inStock: boolean;
  readonly isDeleted?: boolean | null;
  readonly categoryID: string;
  readonly sizes?: (string | null)[] | null;
  readonly colors?: (string | null)[] | null;
  readonly hasSizes: boolean;
  readonly hasColors: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly productImage: string;
  readonly productImageUrls: string[];
  readonly price: number;
  readonly quantity: number;
  readonly inStock: boolean;
  readonly isDeleted?: boolean | null;
  readonly categoryID: string;
  readonly sizes?: (string | null)[] | null;
  readonly colors?: (string | null)[] | null;
  readonly hasSizes: boolean;
  readonly hasColors: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly isParent: boolean;
  readonly parentCategoryId?: string | null;
  readonly isDeleted?: boolean | null;
  readonly categoryImageUrl?: string | null;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly isParent: boolean;
  readonly parentCategoryId?: string | null;
  readonly isDeleted?: boolean | null;
  readonly categoryImageUrl?: string | null;
  readonly Products: AsyncCollection<Product>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly address: string;
  readonly sub: string;
  readonly isActive: boolean;
  readonly phone?: string | null;
  readonly userType?: UserType | keyof typeof UserType | null;
  readonly newsLetter?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly Cart?: Cart | null;
  readonly Orders?: (Order | null)[] | null;
  readonly Payments?: (Payment | null)[] | null;
  readonly ReviewsRating?: ReviewsRating | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
  readonly userReviewsRatingId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly address: string;
  readonly sub: string;
  readonly isActive: boolean;
  readonly phone?: string | null;
  readonly userType?: UserType | keyof typeof UserType | null;
  readonly newsLetter?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly Cart: AsyncItem<Cart | undefined>;
  readonly Orders: AsyncCollection<Order>;
  readonly Payments: AsyncCollection<Payment>;
  readonly ReviewsRating: AsyncItem<ReviewsRating | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userCartId?: string | null;
  readonly userReviewsRatingId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly fontType?: string | null;
  readonly description?: string | null;
  readonly primaryColorDark?: string | null;
  readonly primaryColorLight?: string | null;
  readonly secondaryColorDark?: string | null;
  readonly secondaryColorLight?: string | null;
  readonly currency?: string | null;
  readonly address?: string | null;
  readonly facebookUrl?: string | null;
  readonly twitterUrl?: string | null;
  readonly instagramUrl?: string | null;
  readonly linkedInUrl?: string | null;
  readonly termsAndConditions?: string | null;
  readonly privacyAndPolicy?: string | null;
  readonly partners?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly logoUrl: string;
  readonly fontType?: string | null;
  readonly description?: string | null;
  readonly primaryColorDark?: string | null;
  readonly primaryColorLight?: string | null;
  readonly secondaryColorDark?: string | null;
  readonly secondaryColorLight?: string | null;
  readonly currency?: string | null;
  readonly address?: string | null;
  readonly facebookUrl?: string | null;
  readonly twitterUrl?: string | null;
  readonly instagramUrl?: string | null;
  readonly linkedInUrl?: string | null;
  readonly termsAndConditions?: string | null;
  readonly privacyAndPolicy?: string | null;
  readonly partners?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerEmailNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmailNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject: string;
  readonly body: string;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEmailNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EmailNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject: string;
  readonly body: string;
  readonly isDeleted?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type EmailNotification = LazyLoading extends LazyLoadingDisabled ? EagerEmailNotification : LazyEmailNotification

export declare const EmailNotification: (new (init: ModelInit<EmailNotification>) => EmailNotification) & {
  copyOf(source: EmailNotification, mutator: (draft: MutableModel<EmailNotification>) => MutableModel<EmailNotification> | void): EmailNotification;
}

type EagerAdvert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Advert, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly backgroundImageUrl?: string | null;
  readonly title?: string | null;
  readonly backgroundColor?: string | null;
  readonly bannerUrl?: string | null;
  readonly status: boolean;
  readonly hasBg?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly textColor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdvert = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Advert, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly backgroundImageUrl?: string | null;
  readonly title?: string | null;
  readonly backgroundColor?: string | null;
  readonly bannerUrl?: string | null;
  readonly status: boolean;
  readonly hasBg?: boolean | null;
  readonly isDeleted?: boolean | null;
  readonly textColor?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Advert = LazyLoading extends LazyLoadingDisabled ? EagerAdvert : LazyAdvert

export declare const Advert: (new (init: ModelInit<Advert>) => Advert) & {
  copyOf(source: Advert, mutator: (draft: MutableModel<Advert>) => MutableModel<Advert> | void): Advert;
}