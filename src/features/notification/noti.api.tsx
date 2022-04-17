import {axiosRequest} from '@myapp/utils/api.utils';
import {INotiGeneralData, NOTIFICATION_TYPE} from '@myapp/models/noti.model';
import {API_END_POINT} from '@env';

class NotificationAPI {
  async getApartmentlNotiApi(): Promise<INotiGeneralData[]> {
    const url = `${API_END_POINT}/api/services/app/UserCityNotification/GetAllNotificationUserTenant`;
    const response = await axiosRequest({
      url,
      params: {
        type: NOTIFICATION_TYPE.APARTMENT,
      },
    });

    return response.result.data;
  }

  async getGeneralNotiApi(): Promise<INotiGeneralData[]> {
    const url = `${API_END_POINT}/api/services/app/UserCityNotification/GetAllNotificationUserTenant`;
    const response = await axiosRequest({
      url,
      params: {
        type: NOTIFICATION_TYPE.GENERAL,
      },
    });

    return response.result.data;
  }
}

export default new NotificationAPI();
