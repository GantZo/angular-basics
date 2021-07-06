import {CounterComponent} from "./counter.component";

describe('CounterComponent', () => {

  let component: CounterComponent

  beforeEach(() => {
    component = new CounterComponent()
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

})
