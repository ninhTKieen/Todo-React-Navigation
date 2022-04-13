import {axiosMethod, axiosRequest} from '@myapp/utils/api.utils';
import {TODO_API_URL} from '@env';

class Api {
  apiEndPoint: string;

  constructor() {
    this.apiEndPoint = TODO_API_URL;
  }

  getApi() {
    return axiosRequest({url: this.apiEndPoint, method: axiosMethod.GET});
  }

  addNewTask(title: string, description: string) {
    return axiosRequest({
      url: this.apiEndPoint,
      data: {title, description, isDone: false},
      method: axiosMethod.POST,
    });
  }

  deleteTaskApi(id: string) {
    return axiosRequest({
      url: `${this.apiEndPoint}/${id}`,
      method: axiosMethod.DELETE,
    });
  }

  completeTask(id: string, isDone: boolean) {
    return axiosRequest({
      url: `${this.apiEndPoint}/${id}`,
      data: {
        isDone: !isDone,
      },
      method: axiosMethod.PUT,
    });
  }

  editTask(id: string, title: string, description: string) {
    return axiosRequest({
      url: `${this.apiEndPoint}/${id}`,
      data: {
        title,
        description,
      },
      method: axiosMethod.PUT,
    });
  }
}

export default new Api();
