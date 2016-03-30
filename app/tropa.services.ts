import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Tropa} from './tropa';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';
import {Configuration} from './app.constants';
//import * as Rx from "rxjs/Rx"

@Injectable()
export class TropaServices{
	private actionUrl: string;
	private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl + 'nueva_tropa';
	    console.log(this.actionUrl);
	    this.headers = new Headers();
	    this.headers.append('Content-Type', 'application/json');
	    this.headers.append('Accept', 'application/json');
	}
    
    public addTropa = (tropa: Tropa) : Observable < Tropa > => {
    	console.log("voy a enviar esta tropa");
    	console.log(tropa);
        let body = JSON.stringify({ tropa });
        console.log(body);
        let options = new RequestOptions({ headers: this.headers });        
        return this._http.post(this.actionUrl, body, options)
            .map(res => tropa = <Tropa>res.json().data)
            .do(data => console.log('server data:', data))  // debug
            .catch(this.handleError)
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}