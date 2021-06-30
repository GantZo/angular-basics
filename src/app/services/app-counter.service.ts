export class AppCounterService {

  counter: number = 0

  increase() {
    this.counter++
  }

  decrease() {
    this.counter--
  }

}
