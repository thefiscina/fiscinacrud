import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RequestService {

    constructor(private http: HttpClient) { }
    getService() {
        return new Promise(resolve => {
            this.http.get('https://apiapex.herokuapp.com/api/v1/servicos/5b6bc077a667af0014b009f7',               
            ).subscribe(data => {
                resolve(data);
            }, err => {
                console.log(err);
                if (err.status == 401) {
                    resolve(err)
                }
            });
        });
    }


}