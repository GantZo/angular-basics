import {Component, EventEmitter, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  counter = 0
  public form: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      login: ['', Validators.required],
      password: []
    })
  }

  @Output() counterEmitter = new EventEmitter<number>()

  increment() {
    this.counter++
    this.counterEmitter.emit(this.counter)
  }

  decrement() {
    this.counter--
    this.counterEmitter.emit(this.counter)
  }
}
