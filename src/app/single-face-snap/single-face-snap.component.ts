import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snap.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap
  buttonText!: string;

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    this.buttonText = "Youhou!";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap() {
    if (this.buttonText === 'Youhou!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "Youhou!");
      this.buttonText = 'Ah ba en fait non';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Ah ba en fait non');
      this.buttonText = 'Youhou!';
    }
  }
}
