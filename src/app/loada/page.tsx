"use client"
import categoryService from '@/src/redux-store/feature/category/categoryService';
import { promises as fs } from 'fs';
import { categories, subCat, products } from './category';
import productService from '@/src/redux-store/feature/products/productService';

export default async function Page() {

  const loadProducts = () => {
    products.map(async cat => {
      const test = await productService.createProduct(cat);
      console.log(test);
      return test;
    });
  }
    // const createCategory = async() => {
    //     await categoryService.createProduct(values)
    // }

  return (
    <div>
      {/* <h1>{data.title}</h1>
      
      <p>{data.content}</p> */}
          <div className='my-5'><button className='px-4 py-2 rounded-lg border border-red-500' onClick={loadProducts}>Load Data</button></div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam culpa dolorem expedita odit voluptate repudiandae corporis, recusandae tenetur sed alias, ex voluptatibus molestiae ipsam iste quas sapiente atque. Incidunt hic sit delectus odio id saepe eum non adipisci maiores! Assumenda voluptas sint praesentium dolor nisi quis eum saepe fugiat necessitatibus!
    </div>
  );
}



//   {
//     "subcategories": [
//         {
//           "name": "Laptops",
//           "image_link": "https://example.com/categories/laptops.jpg"
//         },
//         {
//           "name": "Smartphones",
//           "image_link": "https://example.com/categories/smartphones.jpg"
//         },
//         {
//           "name": "Televisions",
//           "image_link": "https://example.com/categories/televisions.jpg"
//         },
//         {
//           "name": "Kitchen Appliances",
//           "image_link": "https://example.com/categories/kitchen-appliances.jpg"
//         },
//         {
//           "name": "Home Decor",
//           "image_link": "https://example.com/categories/home-decor.jpg"
//         },
//         {
//           "name": "Garden & Outdoor",
//           "image_link": "https://example.com/categories/garden-and-outdoor.jpg"
//         },
//         {
//           "name": "Men's Clothing",
//           "image_link": "https://example.com/categories/mens-clothing.jpg"
//         },
//         {
//           "name": "Women's Clothing",
//           "image_link": "https://example.com/categories/womens-clothing.jpg"
//         },
//         {
//           "name": "Kids' Clothing",
//           "image_link": "https://example.com/categories/kids-clothing.jpg"
//         }
//       ]
//   }



//   {
//   "products": [
//     {
//       "name": "MacBook Air M2",
//       "price": 999.99,
//       "category_id": 2,
//       "image_link": "https://example.com/products/macbook-air-m2.jpg",
//       "description": "The MacBook Air M2 is the latest and greatest ultra-thin laptop from Apple. It features a new M2 chip that is up to 40% faster than the previous generation, as well as a longer battery life of up to 18 hours. The MacBook Air M2 also has a new 13.6-inch Liquid Retina display with a wider color gamut and a higher resolution."
//     },
//     {
//       "name": "iPhone 14 Pro Max",
//       "price": 1099.99,
//       "category_id": 3,
//       "image_links": [
//         "https://example.com/products/iphone-14-pro-max-front.jpg",
//         "https://example.com/products/iphone-14-pro-max-back.jpg",
//         "https://example.com/products/iphone-14-pro-max-side.jpg"
//       ],
//       "description":"The iPhone 14 Pro Max is Apple's most powerful and feature-rich smartphone. It features a new A16 Bionic chip that is up to 40% faster than the previous generation, as well as a new 48-megapixel main camera system with a Night mode that is twice as good in low light. The iPhone 14 Pro Max also has a new all-screen design with a smaller notch and a longer battery life."
//     },
//     {
//       "name": "Samsung QN90B Neo QLED 4K TV",
//       "price": 2999.99,
//       "category_id": 4,
//       "image_link": "https://example.com/products/samsung-qn90b-neo-qled-4k-tv.jpg",
//       "description":"The Samsung QN90B Neo QLED 4K TV is one of the best TVs on the market. It features a new Neo QLED display that is brighter and more efficient than traditional QLED displays. The Samsung QN90B Neo QLED 4K TV also has a new Neural Quantum Processor 4K that uses deep learning to improve picture quality and sound quality."
//     },
//     {
//       "name": "Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker",
//       "price": 99.99,
//       "category_id": 6,
//       "image_link": "https://example.com/products/instant-pot-duo-plus-9-in-1-electric-pressure-cooker.jpg",
//       "description": "The Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker is a multi-cooker that can be used to cook a variety of meals, including rice, beans, meat, vegetables, and more. It features 15 different smart programs that can be used to cook meals with the touch of a button. The Instant Pot Duo Plus 9-in-1 Electric Pressure Cooker also has a built-in timer and a delay start function."
//     }
//   ]
// }