import {Injectable} from 'angular2/core';
import {Http, Response, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';
import {Especie}from './modelo/especie';
import {Configuration} from './app.constants';

@Injectable()
export class EspecieServices{
	private actionUrl: string;
    private headers: Headers;
    
	constructor(private _http: Http, private _configuration: Configuration) {
		this.actionUrl = _configuration.ServerWithApiUrl + 'especies';
	    console.log(this.actionUrl);
	}
	
	public getEspecies(): Observable<Especie[]>{
        
        return this._http.get(this.actionUrl)
        				 .map(res =><Especie[]>res.json())
        				 .do(data => console.log('server data:', data))  // debug
        				 .catch(this.handleError)
	}
    
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error("estoy logueando un error?");
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
		
}