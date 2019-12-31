import data from "../data";
import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms"; 
import { config } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  formData:any={};
  form;
  
  submitted: boolean;
  dataIndex: number;
  numParams: number;
  paramName: string;
  constructor(private route: ActivatedRoute) {}
   formGroup = {};
  ngOnInit() {
    this.form = new FormGroup(this.formGroup);
    this.formData=data.dataroot.Functions;
   
    console.log(this.form);
    this.dataIndex = +this.route.snapshot.paramMap.get('index');
    this.numParams=this.formData[this.dataIndex].NumParms
    // this.form.reset();
    
  }

  submitForm() {
    this.submitted = true;
    console.log(this.form);
  }

  public getInputName(inputNumber: number): string {
    // console.log(this.formData[this.dataIndex]);
    // console.log(inputNumber);
    this.paramName=this.formData[this.dataIndex][`Parm${inputNumber+1}_Name`];
    return this.paramName;
  }
  getInputBoxName(inputNumber:number){
    
    this.formData.forEach(formControl => {
      for(let i=0;i<formControl.NumParms;i++){
        let formName = `Parm${i}_Name`;
        this.form.patchValue({
          formName:''
        });
        // this.formGroup[formControl.formName] = new FormControl("");
      }
      
    });
    console.log(`Parm${inputNumber+1}_Name`);
    return `Parm${inputNumber+1}_Name`;
  }
}
