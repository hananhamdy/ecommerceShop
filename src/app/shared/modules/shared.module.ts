import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


const modules = [
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...modules,
    CommonModule
  ],
  exports: [
    ...modules,
  ],
  providers: [
    DatePipe,
  ],
})
export class SharedModule {}
