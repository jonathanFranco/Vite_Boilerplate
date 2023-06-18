import api from "@/services/config";

export class InitRest {
  get(): Promise<any> {
    const url = "/back-end-request";
    return api.get(url);
  }

  getWithQuerys(queryParams: any): Promise<any> {
    const url = "/back-end-request";
    return api.get(url, { params: queryParams });
  }

  post(data: any): Promise<any> {
    const url = "/back-end-request";
    return api.post(url, data);
  }

  put(data: any): Promise<any> {
    const url = "/back-end-request";
    return api.put(url, data);
  }

  patch(data: any): Promise<any> {
    const url = "/back-end-request";
    return api.patch(url, data);
  }
}
