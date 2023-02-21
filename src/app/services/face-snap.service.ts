import { Injectable } from '@angular/core';
import { FaceSnap } from 'src/app/models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'IronMan',
            description: 'Mon meilleur ami depuis tout petit !',
            imageUrl: "https://www.pause-canap.com/media/wysiwyg/Iron-Man-marvel.jpg",
            createdDate: new Date(),
            snaps: 600,
            location: "Nantes"
        },
        {
            id: 2,
            title: 'Hulk',
            description: 'Mon pote relou !',
            imageUrl: "https://www.pause-canap.com/media/wysiwyg/hulk-marvel.jpg",
            createdDate: new Date(),
            snaps: 0,
            location: "Proxima 3"
        },
        {
            id: 3,
            title: 'Gamora',
            description: 'Ma meuf',
            imageUrl: "https://geekalition.com/wp-content/uploads/2022/12/Gamora-Gardiens-de-la-Galaxie-Vol.-3-1024x576.webp",
            createdDate: new Date(),
            snaps: 0,
        }
    ]

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'Youhou!' | 'Ah ba en fait non'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'Youhou!' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}