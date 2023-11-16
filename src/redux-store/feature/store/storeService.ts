import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { Category, Product, Advert, LazyAdvert, Store } from "../../../models";
import { productData } from "@/src/types/types";

const createTheme = async (theme: any) => {
  try {
    const themeResult = await DataStore.save(new Store(theme));
    return { success: true, result: themeResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const createCarousel = async (carousel: any) => {
  try {
    const catrouselResult = await DataStore.save(new Advert(carousel));
    return { success: true, result: catrouselResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const listTheme = async () => {
  try {
    const themes = await DataStore.query(Store, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
    return themes;
  } catch (error) {
    return { success: false, result: error };
  }
};

const listCarousel = async () => {
  try {
    let carousels: any = [];
    //      const res = DataStore.observeQuery(
    //       Advert
    //   //     ,
    //   // ad => ad.and(p => [
    //   //   p.title.ne(""),
    //   //   p.backgroundImageUrl.ne("")
    //   // ])
    // ).subscribe(snapshot => {
    //   snapshot.items.map(item => {
    //     console.log(item)
    //     // carousels.push(item)
    //   })
    //   return snapshot.items
    // });
    // console.log(carousels)
    // console.log(subscription)
    const carouselResult = await DataStore.query(Advert, Predicates.ALL, {
      sort: (s) => s.createdAt(SortDirection.DESCENDING),
    });
    return { success: true, result: carouselResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const updateTheme = async ({ id, carousel }: any) => {
  try {
    const old: any = await DataStore.query(Store, id);
    const updatedTheme = await DataStore.save(
      Store.copyOf(old, (updated) => {
        updated.name = carousel.name;
        updated.mainColor = carousel.mainColor;
        updated.description = carousel.description;
        updated.primaryColor = carousel.primaryColor;
        updated.secondarycolr = carousel.secondarycolr;
        updated.currency = carousel.currency;
        updated.logoUrl = carousel.logoUrl;
        updated.fontType = carousel.fontType;
      }),
    );
    console.log("values : ", updatedTheme);
    return { success: true, result: updatedTheme };
  } catch (error) {
    return { success: false, result: error };
  }
};

const updateStatus = async (advert: any) => {
  console.log("cour id::", advert.id);
  try {
    await DataStore.query(Advert, advert.id).then(async (original: any) => {
      const response = await DataStore.save(
        Advert.copyOf(original, (updated) => {
          updated.status = !advert.status;
        }),
      );

      console.log("original : ", response);
    });
    const bannerResult = await DataStore.query(Advert, Predicates.ALL);
    console.log(bannerResult);
    return { success: true, result: bannerResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const deleteAdvert = async (id: string) => {
  try {
    const catrouselResult = await DataStore.delete(Advert, id);
    return { success: true, result: catrouselResult };
  } catch (error) {
    return { success: false, result: error };
  }
};

const storeService = {
  createCarousel,
  listCarousel,
  deleteAdvert,
  updateStatus,
  createTheme,
  listTheme,
  updateTheme,
};

export default storeService;
