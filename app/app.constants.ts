import { Injectable } from 'angular2/core';
 
@Injectable()
export class Configuration {
    public Server: string = "http://localhost:8080/";
    public ApiUrl: string = "frigorifico/rest/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}