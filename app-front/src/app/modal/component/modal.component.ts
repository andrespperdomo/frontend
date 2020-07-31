import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Peoples } from '../../people/model/peoples';


@Component({
  selector: 'ngbd-modal-content',
  templateUrl:'../view/modal.component.template.html',
  styleUrls: ['../style/modal.component.css']

})
export class NgbdModalContent {
  @Input() name;
  @Input() people;

  
  

  constructor(public activeModal: NgbActiveModal) {
  }
}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: '../view/modal.component.html'
})
export class NgbdModalComponent {
  parametro:boolean;
  constructor(private modalService: NgbModal) {}
  
  open(parametro) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'World';
      this.parametro=parametro;
    console.log("ejecuto bien  "+this.parametro);
  }
}