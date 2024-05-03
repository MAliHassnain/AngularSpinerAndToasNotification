import { Injectable} from '@angular/core'
import { 
  HttpEvent, 
  HttpInterceptor, 
  HttpHandler, 
  HttpRequest
} from '@angular/common/http';

import { Observable, finalize } from 'rxjs';
import { LoadingIndicatorService } from './loading-indicator.service';


@Injectable()
export class LoadingInterceptorService implements HttpInterceptor {
  
  constructor(private loadingIndicatorService: LoadingIndicatorService) {}
  
  intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingIndicatorService.onStarted(req);
    
    return next
      .handle(req)
      .pipe(finalize(() => {
        this.loadingIndicatorService.onFinished(req);
        }
      ));
  }
}