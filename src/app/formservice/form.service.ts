import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor(private http: HttpClient) {}
  sendFormData(data) {
    return this.http.post("http://localhost:3000/api", data);
  }
}
