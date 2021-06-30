import {Injectable} from "@angular/core";
import {LogService} from "./log.service";

@Injectable({
  providedIn: "root"
})
export class AppCounterService {

  counter: number = 0

  constructor(private logService: LogService) {
  }

  increase() {
    this.counter++
    this.logService.log(`Increased to ${this.counter}`)
  }

  decrease() {
    this.counter--
    this.logService.log(`Decreased to ${this.counter}`)
  }

}
