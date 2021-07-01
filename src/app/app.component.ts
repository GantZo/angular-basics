import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form!: FormGroup

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('by'),
        city: new FormControl('Минск', Validators.required)
      })
    })
  }


  submit() {
    if (this.form.valid) {
      console.log('Form : ', this.form)
      const formData = {...this.form.value}
      console.log('Form Data: ', formData)
    }
    console.log(this.form.controls)
  }

  setCapital() {
    const cityMap: {[index: string]:any} = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск',
    }
    const cityKey = this.form.get('address')?.get('country')?.value
    const city = cityMap[cityKey]
    this.form.patchValue({address: {city: city}})
    // this.form.patchValue({address: {city}})
  }
}
