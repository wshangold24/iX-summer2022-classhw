import {
  collection,
  addDoc,
  query,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { Task } from "../models/task.js";

class TaskService {
  constructor() {
    this.collection = "tasks";
  }

  // create
  async createTask(task) {
    const collectionRef = collection(db, this.collection);
    const docRef = await addDoc(collectionRef, {
      name: task.name,
      complete: task.complete,
    });

    task.id = docRef.id;
    return task;
  }

  // read
  async fetchTasks() {
    const q = query(collection(db, this.collection));
    const querySnapshot = await getDocs(q);
    const tasks = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      tasks.push(new Task(doc.id, data.name, data.complete));
    });
    return tasks;
  }

  // update
  async updateTask(task) {
    const docReference = doc(db, this.collection, task.id);
    await updateDoc(docReference, {
      name: task.name,
      complete: task.complete,
    });
    return task;
  }

  // delete
  async deleteTask(taskId) {
    const docReference = doc(db, this.collection, taskId);
    await deleteDoc(docReference);
  }
}

const service = new TaskService();
export default service;
