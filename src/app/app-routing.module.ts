import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: 'ga-advanced', loadChildren: './ga-advanced/ga-advanced.module#GaAdvancedPageModule' },
  { path: 'za-advanced', loadChildren: './za-advanced/za-advanced.module#ZaAdvancedPageModule' },
  { path: 'da-advanced', loadChildren: './da-advanced/da-advanced.module#DaAdvancedPageModule' },
  { path: 'ba-advanced', loadChildren: './ba-advanced/ba-advanced.module#BaAdvancedPageModule' },
  { path: 'pa-advanced', loadChildren: './pa-advanced/pa-advanced.module#PaAdvancedPageModule' },
  { path: 'kya-advanced', loadChildren: './kya-advanced/kya-advanced.module#KyaAdvancedPageModule' },
  { path: 'gya-advanced', loadChildren: './gya-advanced/gya-advanced.module#GyaAdvancedPageModule' },
  { path: 'sha-advanced', loadChildren: './sha-advanced/sha-advanced.module#ShaAdvancedPageModule' },
  { path: 'ja-advanced', loadChildren: './ja-advanced/ja-advanced.module#JaAdvancedPageModule' },
  { path: 'cha-advanced', loadChildren: './cha-advanced/cha-advanced.module#ChaAdvancedPageModule' },
  { path: 'nya-advanced', loadChildren: './nya-advanced/nya-advanced.module#NyaAdvancedPageModule' },
  { path: 'hya-advanced', loadChildren: './hya-advanced/hya-advanced.module#HyaAdvancedPageModule' },
  { path: 'bya-advanced', loadChildren: './bya-advanced/bya-advanced.module#ByaAdvancedPageModule' },
  { path: 'pya-advanced', loadChildren: './pya-advanced/pya-advanced.module#PyaAdvancedPageModule' },
  { path: 'mya-advanced', loadChildren: './mya-advanced/mya-advanced.module#MyaAdvancedPageModule' },
  { path: 'rya-advanced', loadChildren: './rya-advanced/rya-advanced.module#RyaAdvancedPageModule' },
  { path: 'ga-quiz', loadChildren: './ga-quiz/ga-quiz.module#GaQuizPageModule' },
  { path: 'za-quiz', loadChildren: './za-quiz/za-quiz.module#ZaQuizPageModule' },
  { path: 'da-quiz', loadChildren: './da-quiz/da-quiz.module#DaQuizPageModule' },
  { path: 'ba-quiz', loadChildren: './ba-quiz/ba-quiz.module#BaQuizPageModule' },
  { path: 'pa-quiz', loadChildren: './pa-quiz/pa-quiz.module#PaQuizPageModule' },
  { path: 'kya-quiz', loadChildren: './kya-quiz/kya-quiz.module#KyaQuizPageModule' },
  { path: 'gya-quiz', loadChildren: './gya-quiz/gya-quiz.module#GyaQuizPageModule' },
  { path: 'sha-quiz', loadChildren: './sha-quiz/sha-quiz.module#ShaQuizPageModule' },
  { path: 'ja-quiz', loadChildren: './ja-quiz/ja-quiz.module#JaQuizPageModule' },
  { path: 'cha-quiz', loadChildren: './cha-quiz/cha-quiz.module#ChaQuizPageModule' },
  { path: 'nya-quiz', loadChildren: './nya-quiz/nya-quiz.module#NyaQuizPageModule' },
  { path: 'hya-quiz', loadChildren: './hya-quiz/hya-quiz.module#HyaQuizPageModule' },
  { path: 'bya-quiz', loadChildren: './bya-quiz/bya-quiz.module#ByaQuizPageModule' },
  { path: 'pya-quiz', loadChildren: './pya-quiz/pya-quiz.module#PyaQuizPageModule' },
  { path: 'mya-quiz', loadChildren: './mya-quiz/mya-quiz.module#MyaQuizPageModule' },
  { path: 'rya-quiz', loadChildren: './rya-quiz/rya-quiz.module#RyaQuizPageModule' },
  { path: 'advanced-results', loadChildren: './advanced-results/advanced-results.module#AdvancedResultsPageModule' },
  { path: 'advanced-hiragana-chart', loadChildren: './advanced-hiragana-chart/advanced-hiragana-chart.module#AdvancedHiraganaChartPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
