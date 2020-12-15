import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { ValueTransformer } from "@angular/compiler/src/util";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace);
    }
}