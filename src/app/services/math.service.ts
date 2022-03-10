import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  public constructor(private logger: LoggerService) { }

  public sum(n1: number, n2: number): number {
    this.logger.log("sum operation called");
    return n1 + n2;
  }

  public subtract(n1: number, n2: number): number {
    this.logger.log("sub operation called");
    return n1 - n2;
  }
}
