import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { environment } from '../environments/environment';

export class HttpRequestOptions extends BaseRequestOptions {
  merge(options?: RequestOptionsArgs): RequestOptions {
    options.url = environment.BASE_URL + options.url;
    return super.merge(options);
  }
}
