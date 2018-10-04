import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class RequestService {

    constructor(private http: HttpClient) { }
    apiUrl = 'https://apiapex.herokuapp.com/api/v1/';
    InstagramUrl = 'https://api.instagram.com/v1/users/';
    tokenInstagram =  'seu token de acesso' ;  // saiba como obtê-lo abaixo 
    useridInstagram =  '0ac161b808184ad59799c12a3250b8e6' ; // User ID - obtenha na fonte HTML do seu perfil do Instagram ou veja o próximo exemplo :) 
    num_photos =  4 ;  // quantas fotos você deseja obter
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

    getGaleriaService() {
        var dado = { serviceID: this.varService }
        return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + 'galeria/service/', JSON.stringify(dado), {
                headers: new HttpHeaders().set("Content-Type", "application/json")
            })
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
        });
    }

    //instagram
    getInstagram() {
        return new Promise(resolve => {
            this.http.get(this.InstagramUrl + this.useridInstagram  +'/media/recent',
            {
                headers: new HttpHeaders().set("access_token", "application/json")
            }
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