import { BaseService } from './BaseService';
import { ReservationPlace } from '../models/ReservationPlace';
import { ReservationPeriod } from '../models/ReservationPeriod';
import { RetryHelper } from '../utils/RetryHelper';

export class ReservationPlaceService extends BaseService<ReservationPlace>{

  constructor(){
    super('ReservationPlaces');
  }

  public getAvailablePeriods(callback:(result:Array<ReservationPeriod>)=>void, placeId:string, date: string) {
    wx.showLoading({
      title: "loading..."
    });
    let url = `${this.apiBaseUrl}/api/reservationPlaces/${placeId}/periods?dt=${date}`;
    wx.request({
      url: url,
      success: (response) => {
        wx.hideLoading();
        let result = <Array<ReservationPeriod>>response.data;
        callback(result);
      }
    });
  }

}
