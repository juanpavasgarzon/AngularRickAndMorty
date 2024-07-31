import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {endpoints, ENDPOINTS_PROVIDER} from "@constants/endpoints.constants";

@NgModule({
  imports: [CommonModule],
  providers: [
    {provide: ENDPOINTS_PROVIDER, useValue: endpoints},
  ]
})
export class ConstantsModule {
}
