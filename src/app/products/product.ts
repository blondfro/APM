export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
}

// The section below would be used if I wanted to export out a partticular function.
// export class Product implements IProduct {
//
//   constructor(
//     public productId: number,
//     public productName: string,
//     public productCode: string,
//     public releaseDate: string,
//     public price: number,
//     public description: string,
//     public starRating: number,
//     public imageUrl: string,) {
//
//       }
//
//       calculateDiscount(percent: number): number {
//         return this.price - (this.price * percent / 100);
//       }
// }


/**
 * Created by me on 3/9/2018.
 */
