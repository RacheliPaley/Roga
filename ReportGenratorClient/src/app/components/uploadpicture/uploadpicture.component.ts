import { Component } from '@angular/core';

@Component({
  selector: 'app-uploadpicture',
  templateUrl: './uploadpicture.component.html',
  styleUrls: ['./uploadpicture.component.css']
})
export class UploadpictureComponent {
  isEdit: boolean = false
  width: Number = 120
  height: Number = 160
  px: string = this.width + "px"

  // file: any = ""; // Variable to store file
  pdfSrc: string = "";

  constructor() {
  }

  imageSrc: string;


onFileSelected() {
  let $img: any = document.querySelector('#file');


  if (typeof (FileReader) !== 'undefined') {
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };

    reader.readAsDataURL($img.files[0]);
  }
}

  // On file Select
  // onSelectFile() {
  //   debugger
  //   const formData = new FormData();
  //   formData.append("image", this.file);
  //   console.log(formData, this.file)
  // }

  
}
