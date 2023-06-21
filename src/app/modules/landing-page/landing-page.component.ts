import { Component } from '@angular/core';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  isSelected!: boolean;
  displayArray: any;
  mainArray: any;
  mainArrayData: any;

  // modal
  modalcode: any = ''
  modalques = ''
  modaltime = ''
  modaldiff = ''
  modaltype = ''

  questioncode = ''

  constructor(private service: ServiceService) { }
  loadingData() {
    const jsonvalue = localStorage.getItem('updated')
    if (jsonvalue) {
      this.mainArrayData = JSON.parse(jsonvalue)
      this.displayArray = this.mainArrayData
    }
    else {
      this.service.getData().subscribe((values) => {
        this.mainArrayData = values
        this.displayArray = this.mainArrayData
        localStorage.setItem('updated', JSON.stringify(this.mainArrayData))
      }
      )
    }
  }

  ngOnInit() {
    this.loadingData()
  }

  filterCode() {

    if (this.questioncode != 'all') {

      if (this.isSelected == false) {

        this.displayArray = this.mainArrayData.filter((item: any) => {

          return item.code === this.questioncode;
        });

        this.isSelected = true
      }

      else {
        this.displayArray = this.mainArrayData
        this.displayArray = this.mainArrayData.filter((item: any) => {

          return item.code === this.questioncode;
        });
      }
    }

    else {
      this.displayArray = this.mainArrayData
    }
  }

  loadModal(clickedRow: any) {
    this.modalcode = clickedRow['code']
    // console.log(clickedRow['modalcode']);
    this.modalques = clickedRow['question']
    this.modaltime = clickedRow['timeLimit']
    this.modaldiff = clickedRow['difficulty']
    this.modaltype = clickedRow['questionType']
  }
}
