import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../core/interfaces/product.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { APIs } from '../../../core/configs/APIs.config';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-overlay',
  standalone: true,
  imports: [HttpClientModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatSelect, MatOption, FormsModule, ReactiveFormsModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent implements OnInit{
  dialogRef = inject<DialogRef<Product>>(DialogRef<Product>);
  data = inject(DIALOG_DATA);
  categoriesList: string[] = [];
  submitForm: FormGroup = new FormGroup({});

  constructor(private _http: HttpClient, private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getCategoriesList();
    this.initForm();
  }

  initForm() {
    this.submitForm = this._formBuilder.group({
      title: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  getCategoriesList() {
    this._http.get<string[]>(APIs.Products.GetCategoriesList).subscribe((res) => {
      this.categoriesList = [...res];
    });
  }
}
