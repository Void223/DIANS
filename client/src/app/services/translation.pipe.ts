import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { Globals } from '../shared/globals';

@Injectable(
  { providedIn: 'root' }
)
export class TranslationService {
  translations: any = JSON.parse(localStorage['translations'])

  translate(value: string) {
    return this.translations[value];
  }
}

@Pipe({
  name: 'translate'
})
export class TranslationPipe implements PipeTransform {

  constructor(private translationService: TranslationService) {}
  transform(value: string): string {
    return this.translationService.translate(value)
  }

}
