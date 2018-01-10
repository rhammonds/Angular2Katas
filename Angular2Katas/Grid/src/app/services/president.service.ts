import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { President } from '../president';
// https://github.com/Vintharas/angular2-step-by-step-06-consuming-real-data-with-http/blob/master/src/app/people.service.ts

@Injectable()
export class PresidentService {
  private baseUrl = 'https://www.govtrack.us/api/v2';
  private getAllUrl = `${this.baseUrl}/role?role_type=president&format=json` +
     `&fields=person__firstname,person__middlename,person__lastname,startdate,enddate,party,person__birthday,person__link&sort=startdate`;

constructor(private http: Http) {}

  getAll(): Observable<President[]> {
      console.log('Calling Service getAll');
    let presidents$ = this.http
       .get(this.getAllUrl)
       .catch(handleError)
       .map((res) => res.json().objects.map(toPresident));
      return presidents$;
  }
}

function toPresident(r: any): President {
    let id = extractId(r.person.link);
    let president = <President> ( {
        id: r.person.link,
        firstName: r.person.firstname,
        lastName: r.person.lastname,
        startDate: r.startdate,
        endDate: r.enddate,
        party: r.party,
        birthday: r.person.birthday,
        link: 'https://www.govtrack.us/api/v2/person/' + id,
  });
  return president;
}

function extractId(url: any): number {
    const matches = url.match(/\d+$/);
    if (matches) {
        return matches[0];
    }
    return 0;
}

function handleError (error: any) {
    // log error
    // could be something more sofisticated
    let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
    console.error(errorMsg);
    // throw an application level error
    return Observable.throw(errorMsg);
  }