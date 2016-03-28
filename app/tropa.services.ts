import {Headers, RequestOptions} from 'angular2/http';

class export TropaService{
	addTropa (tropa: Tropa) : Observable<Tropa>  {

	    let body = JSON.stringify({ tropa });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });
	
	    return this.http.post('http://localhost:8080/frigorifico/rest/nueva_tropa', body, options)
	                    .map(res =>  <Tropa> res.json().data)
	                    .catch(this.handleError)
	  }
  
	 private handleError (error: Response) {
	    // in a real world app, we may send the error to some remote logging infrastructure
	    // instead of just logging it to the console
	    console.error(error);
	    return Observable.throw(error.json().error || 'Server error');
	  }
}