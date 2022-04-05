import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const apUrl = 'http://localhost:3000/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
      return this.http.get(apUrl);
  }

  getPost(id: undefined | string){
    return this.http.get(`${apUrl}/${id}`);
  }

  deletePost(id: number | string) {
    return this.http.delete(`${apUrl}/${id}`);
  }

  createPost(obj: any) {
    return this.http.post(apUrl, obj);
  }

  updatePost(id: number|string, obj: any) {
    return this.http.put(`${apUrl}/${id}`, obj);
  }
}
