import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RequestService {

    constructor(private http: HttpClient) { }
    apiUrl = 'https://apiapex.herokuapp.com/api/v1/';
    // apiUrl = 'http://localhost:5000/api/v1/';
    varService = '5b6bc077a667af0014b009f7';

    getService() {
        return new Promise(resolve => {
            this.http.get(this.apiUrl + 'servicos/' + this.varService,
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

    getDadoscabecalhoService() {
        var dado = { serviceID: this.varService }
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'cabecalho/service/', JSON.stringify(dado), {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getDadosSobreService() {
        var dado = { serviceID: this.varService }
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'sobre/service/', JSON.stringify(dado), {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getEventosService() {
        var dado = { serviceID: this.varService }
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'evento/service/', JSON.stringify(dado), {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    getProjetosService() {
        var dado = { serviceID: this.varService }
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'projeto/service/', JSON.stringify(dado), {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

}