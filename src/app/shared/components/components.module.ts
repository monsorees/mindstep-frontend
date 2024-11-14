import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, InputComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, InputComponent, ButtonComponent],
})
export class ComponentsModule {}
