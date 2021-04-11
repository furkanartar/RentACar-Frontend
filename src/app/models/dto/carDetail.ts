import {CarImage} from '../entity/carImage';

export interface CarDetail {
  carId:number;
  brandId:number;
  colorId:number;
  modelYear:number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  description:string;
  carImages:CarImage[];
}
