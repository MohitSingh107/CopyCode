import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CopyCodeDirective } from "./copy-code.directive";

@NgModule({
    declarations: [AppComponent, CopyCodeDirective],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}