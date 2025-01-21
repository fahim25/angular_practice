import { Component, ElementRef, model, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  title = 'angular_practice';

  @ViewChild('exampleModal') model: ElementRef | undefined;

  studentObj: Student = new Student ();
  studentList: Student[] = [];

  ngOnInit(): void {
    const localData = localStorage.getItem('angular_practice');

    if(localData != null)
    {
      this.studentList = JSON.parse(localData);
    }
  }

  openModal(){

    this.studentObj = new   Student();

      const model = document.getElementById("exampleModal");

      console.log(model);
      if(model != null)
      {
        model.style.display = "block";
      }
  }

  closeModal()
  {
    if (this.model != null) {
      this.model.nativeElement.style.display = 'none';
    }
  }

  saveStudent(){
    const isAvilable = localStorage.getItem("angular_practice");

    if(isAvilable)
    {
      const oldArr = JSON.parse(isAvilable);
      oldArr.push(this.studentObj);

      this.studentList = oldArr;

      localStorage.setItem('angular_practice', JSON.stringify(oldArr));
    }
    else
    {
      const newArr = [];
      newArr.push(this.studentObj);

      this.studentList = newArr;

      localStorage.setItem('angular_practice', JSON.stringify(newArr));
    }
    this.closeModal();
  }

}

export class Student {
  id: number;
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor() {
    this.id = 0;
    this.address = '';
    this.city = '';
    this.email = '';
    this.mobileNo = '';
    this.name = '';
    this.state = '';
    this.pincode = '';
  }

}
