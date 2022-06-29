import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EnglishComponent } from "src/app/english/english.component";
import { MetricComponent } from "src/app/metric/metric.component";

const routes: Routes = [
    {path: 'english', component: EnglishComponent},
    {path: 'metric', component: MetricComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
export const routingComponents = [EnglishComponent, MetricComponent];