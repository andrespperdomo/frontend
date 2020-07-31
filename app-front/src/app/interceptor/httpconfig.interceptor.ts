import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpResponse,HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { map,catchError,finalize  } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';


@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public spinner:LoaderService) { 
   
   }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();
        return next.handle(req).pipe(
            finalize(() => this.spinner.hide())
        );
    }
}