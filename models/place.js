export class place {
  constructor(title,imageUri,location,id){
  this.title=title;
  this.imageUri=imageUri;
  this.location={lat:location.lat,lng:location.lng};//{lat:0.2323,lng:3434}
  this.address=location.address;
  this.id=id;
    }
}