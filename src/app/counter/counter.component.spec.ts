import {CounterComponent} from "./counter.component";
import {FormBuilder} from "@angular/forms";

describe('CounterComponent', () => {

  let component: CounterComponent

  beforeEach(() => {
    component = new CounterComponent(new FormBuilder())
  })

  it('should increment counter by 1', () => {
    const value = component.counter
    component.increment()
    expect(component.counter).toBe(value + 1)
  })

  it('should decrement counter by 1', () => {
    const value = component.counter
    component.decrement()
    expect(component.counter).toBe(value - 1)
  })

  it('should emit incremented value', () => {
    let result = component.counter
    component.counterEmitter.subscribe((v: number) => result = v)

    component.increment()
    expect(result).toBe(1)
  })

  it('should create form with two controls', () => {
    expect(component.form.contains('login')).toBeTruthy()
    expect(component.form.contains('password')).toBeTruthy()
  })

  it('should mark login as invalid if empty value', () => {
    const control = component.form.controls['login']
    control.setValue('')
    expect(control.valid).toBeFalsy()
  })

})
