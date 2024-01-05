import { Injectable } from '@angular/core';
import { Value } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor() { }
  getKmbcdiExpressionPercent(expressionScore: number): string {
    const maxExpressionScore = 250
    let expressionPercent: number = 0
    expressionPercent = expressionScore / maxExpressionScore * 100
    return expressionPercent.toString() + "%"
  }
  getKmbcdiGrammarPercent(grammarScore: number): string {
    const maxGrammarScore = 230
    let grammarPercent: number = 0
    grammarPercent = grammarScore / maxGrammarScore * 100
    return grammarPercent.toString() + "%"
  }
}
