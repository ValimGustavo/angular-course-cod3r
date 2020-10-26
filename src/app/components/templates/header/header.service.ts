import { HeaderData } from "./header-data.interface";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor() {}

  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Inicio",
    icon: "home",
    routeUrl: "/"
  });


  get headerData():HeaderData{
    return this._headerData.value
  }

  set headerData(headerData:HeaderData){
    this._headerData.next(headerData)
  }
}


