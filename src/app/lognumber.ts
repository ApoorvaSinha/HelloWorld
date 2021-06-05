import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name:'convertlog'})
export class Lognumber implements PipeTransform{
    transform(value: any, ...args: any[]) {
        return Math.log(value);
        throw new Error("Method not implemented.");
    }
}
