import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand  } from '../entity/Entities';
import { Service } from './service';
import { BRAND_SERVICE, OBSERVABLE_ERROR_HANDLER } from '../constants/ServiceConstants';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService implements Service {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Brand[]>  {
    return this.http.get<Brand[]>(BRAND_SERVICE)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  getById(id: number): Observable<Brand> {
    return this.http.get<Brand>(BRAND_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER));
  }

  insert(brand:Brand): void {
    this.http.post<Brand>(BRAND_SERVICE, brand)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  update(brand:Brand): void {
    this.http.put<Brand>(BRAND_SERVICE + brand.id, brand)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }

  delete(id:number): void {
    this.http.delete<Brand>(BRAND_SERVICE + id)
    .pipe(catchError(OBSERVABLE_ERROR_HANDLER))
    .subscribe();
  }
}
