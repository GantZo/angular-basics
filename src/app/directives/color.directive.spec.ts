import { ColorDirective } from './color.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

@Component({
  template: `
    <p appColor="yellow">color yellow</p>
    <p appColor>color blue</p>
  `
})
class HostComponent {}

describe('ColorDirective', () => {

  let fixture: ComponentFixture<HostComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColorDirective, HostComponent]
    })
    fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
  })

  it('should create an instance', () => {
    const directive = fixture.componentInstance
    expect(directive).toBeTruthy();
  });

  it('should apply input color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[0]

    expect(de.nativeElement.style.backgroundColor).toBe('yellow')
  })

  it('should apply default color', () => {
    let de = fixture.debugElement.queryAll(By.css('p'))[1]

    let directive = de.injector.get(ColorDirective)

    expect(de.nativeElement.style.backgroundColor).toBe(directive.defaultColor)
  })
});
