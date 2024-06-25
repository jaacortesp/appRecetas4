import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  public photo: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  async takePicture() {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
      });

      // Usar webPath para mostrar la nueva imagen en vez de base64 ya que ya está cargada en la memoria
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(capturedPhoto.webPath!);

      // Si deseamos mostrar la imagen inmediatamente, podemos establecerla en el template
      // <img [src]="image" *ngIf="image">
    } catch (error) {
      console.error('Error al tomar la foto', error);
    }
  }

}
