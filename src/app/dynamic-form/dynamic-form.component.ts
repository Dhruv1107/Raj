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
  formObj;
  param_key = [];
  param_value = [];
  submitted: boolean;
  dataId;
  numParams: number;
  paramName: string;
  constructor(private route: ActivatedRoute) {}
   formGroup = {};
  ngOnInit() {
    
    this.formData=data.dataroot.Functions;
   
    // console.log(this.form);
    this.dataId = +this.route.snapshot.paramMap.get('index');
    // console.log(this.dataId);
    let id = this.dataId;
    this.formObj=this.formData.filter(function(val) {
      // console.log(val);
     
      return val.Id==id;
    });
    console.log(this.formObj[0]);
    for(let i=0;i<this.formObj[0].NumParms;i++){
      let par = `Parm${i+1}_Name`;
     
      // this.param_name.push(
      //   {
      //     [`Parm${i+1}_Name`]:this.formObj[0][par]
      //   });
      this.param_key.push(par);
      this.param_value.push(this.formObj[0][par])

      // console.log(this.param_name);
    }
    console.log(this.param_key);
    console.log(this.param_value);

       this.param_key.forEach(formControl => {
        this.formGroup[formControl] = new FormControl("");
    })
    this.form = new FormGroup(this.formGroup);
    console.log(this.form);
    
  }

  submitForm() {
    this.submitted = true;
    console.log(this.form);
  }

  // public getInputName(inputNumber: number): string {
  //   // console.log(this.formData[this.dataIndex]);
  //   // console.log(inputNumber);
  //   this.paramName=this.formData[this.dataIndex][`Parm${inputNumber+1}_Name`];
  //   return this.paramName;
  // }
  // getInputBoxName(inputNumber:number){
    
  //   this.formData.forEach(formControl => {
  //     for(let i=0;i<formControl.NumParms;i++){
  //       let formName = `Parm${i}_Name`;
  //       this.form.patchValue({
  //         formName:''
  //       });
  //       // this.formGroup[formControl.formName] = new FormControl("");
  //     }
      
  //   });
  //   console.log(`Parm${inputNumber+1}_Name`);
  //   return `Parm${inputNumber+1}_Name`;
  // }
}
