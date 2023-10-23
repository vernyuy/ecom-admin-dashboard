
import { Category, Product } from "../models";
import { Amplify, DataStore, Auth, withSSRContext } from 'aws-amplify';
import awsExports from '@/src/aws-exports';

Amplify.configure({ ...awsExports, ssr: true });

export async function getServerSideProps({ req }: any) {
  const SSR = withSSRContext({ req });
  
  try {
    const user = SSR.Auth.currentAuthenticatedUser()
    return user;
  } catch (err) {
    console.log(err);
  }
}

export const getPieChartData = async () => {
    const categories = await DataStore.query(Category)
    const products = await DataStore.query(Product)
    const pieLable: string[] = []
    const prodCount: number[] = []
    const pieData = []

    categories?.map(async (cat)=>{
        pieLable.push(cat.name)
        await DataStore.query(Product, p=>p.categoryID.eq(cat.id)).then(data=>{
            console.log(prodCount )
            prodCount.push(data.length)

        });
        // return prodCount
        // console.log(prodCount )
    })


    for(let c in pieLable)
    // console.log(prodCount )
    // pieData.push(pieLable, prodCount)
    return [pieLable, prodCount]
  };

  export const currentAthenticatedUser = ()=>{
  try {
    const user = Auth.currentAuthenticatedUser()
    return user
  }catch(err){
    console.log("Error",err)
  }
  }