import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { DynamicControl } from "../models";

// Service to get dynamic controls
@Injectable()
export class DynamicControlService {
    private apiUrl: string = '/assets/backend/data/dynamic-control.json';
    constructor(private httpClient: HttpClient) {}
    getDynamicControls(): Observable<DynamicControl[]> {
        return this.httpClient.get<DynamicControl[]>(this.apiUrl);
    }
}