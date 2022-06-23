import {
    collection,
    query,
    getDocs,
    addDoc,
    doc,
    deleteDoc,
  } from 'firebase/firestore';
  
  import { db } from '../firebase/firebase';
  import { Image } from '../models/image';
  
  class ImagesService {
  
    constructor() {
      this.collection = 'images';
    }
  
    async createImage(image) {
      const collectionRef = collection(db, this.collection);
  
      const docRef = await addDoc(collectionRef, image.toJson());
  
      image.id = docRef.id;
      console.log(image);
      return image;
    }
  
    async fetchImages() {
      const collectionRef = collection(db, this.collection);
  
      const querySnapshot = await getDocs(query(collectionRef));
      const images = [];
  
      querySnapshot.forEach(doc => {
        images.push(Image.fromFirebase(doc));
      });
  
      return images;
    }

    async deleteImage(imageId) {
      const docRef = doc(db, this.collection, imageId);
      await deleteDoc(docRef);
    }
  }
  
  const service = new ImagesService();
  export default service;