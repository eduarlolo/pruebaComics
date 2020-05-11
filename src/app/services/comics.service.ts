import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ComicsService {
  constructor(private http: HttpClient) {}

  public consumirComic(idComic: String) {
    return this.http.get("/" + idComic + "/info.0.json");
  }
}
