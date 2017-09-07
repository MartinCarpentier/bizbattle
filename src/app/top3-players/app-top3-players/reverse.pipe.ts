import {Pipe, PipeTransform} from "@angular/core";
import {Player} from "../../models/Player";

@Pipe({
  name: "reverse"
})
export class ReversePipe implements PipeTransform {
  transform(value: Player[]): any {
    if (value != null) {
      return value.reverse();
    }

    return null;
  }
}
