# Rut Chileno

Validacion, implementacion en input, formater en Angular de la Cedula de intentidad Chilena.

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.11.

# Estos son los formatos de RUT compatibles!
 - 184215551
 - 18421555
 - 18.421.555-1
 - 18421555-1

### Instalacion

Dillinger requires [Node.js](https://nodejs.org/) v12+ to run.
Para la instalacion de esta liberia solo debes ejecutar el siguiente comando en tu proyecto.

```sh
$ npm i rut-chileno
```

### Para utilizarlo debes hacerlo de la siguiente manera.

Debes importarlo en tu app.module.ts de la siguiente forma:

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutModule } from 'rut-chileno' // <- aqui debes importarlo 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RutModule // // <- aqui debes importarlo
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```
con esto ya podras utilizarlo la libreria en tu componente html.


### Como usarlo.

En el html de tu componente puedes utilizar el siguiente tag "rut-chile":

```html
<rut-chile [msjError]="El rut ingresado no es válido." [mode]="0" (rut_emiter)="getRut($event)"></rut-chile>
```
La variable "mode" corresponde al formato en que sera utilizado el rut para esto puede devolver los siguiente formatos segun el valor que corresponda.

 - mode = 0 -> 184215551
 - mode = 1 -> 18421555
 - mode = 2 -> 18.421.555-1
 - mode = 3 -> 18421555-1
 - mode = 4 -> devuelve solo el digito verificado

El tag "rut-chile" dispondra de un input con las siguientes caracteristicas:

 - class="input-rut rut" 
 - name="username"
 - id="rut_chileno" 
 - placeholder="Rut"

La variable "rut_emiter" corresponde al rut emitido como string segun lo ingresado, por lo cual puedes puedes definir una funcion "getRut" que pueda recibir este envento.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-rut';

  getRut(rut: string): void {
    console.log(rut);
  }
}

```

#### Tambien se dejaron a disposición una funciones para que lo puedas utilizar como gustes.
Para ello debes importar el "RutService" en tu componente de la siguiente forma:
```ts

import { Component } from '@angular/core';
import { RutService } from 'rut-chileno' // <- importar aqui

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'use-rut';

  constructor(
    private rutService: RutService // <- utilizar aqui
  ) {

  }

  getRut(rut: string): void {
    console.log(rut);

    // Recibe 2 variables el rut como string.
    // "mode" el cual corresponde a la misma definicion anterior
    // - mode = 0 -> 184215551
    // - mode = 1 -> 18421555
    // - mode = 2 -> 18.421.555-1
    // - mode = 3 -> 18421555-1
    // - mode = 4 -> devuelve solo el digito verificado.
    // Retorna lo siguiente : string | boolean
    // PERO actualmente solo retorna: string | boolean
    //
    // En fin: retornara string solo cuando el rut sea valido
    // y sera el rut en el formato indicado segun el mode
    // retornara un boolean cuando el rut no sea valido.

    let out1_rut = this.rutService.getRutChile(0, rut);
    console.log(out1_rut);
    
    // Solo recibe el rut como string 
    // y lo retorna sin los caracteres espciales
    let out2_rut = this.rutService.rutClean(rut);
    console.log(out2_rut);

    // Esta funcion recibe el rut en el formato que sea
    // lo retorna listo con todos los puntos y guiones
    let out3_rut = this.rutService.rutFormat(rut);
    console.log(out3_rut);

    // Esta funcion recibe el rut en el formato que sea
    // y retorna un boolean OJO.
    // true cuando el rut NO es valido
    // false cuando es el rut SI es valdo
    let out4_rut = this.rutService.validaRUT(rut);
    console.log(out4_rut);

    // Tambien hay una variable ahi. no la uso pero esta ahi.
    // vo dale
    let out5_rut = this.rutService.rut_chileno;
    console.log(out5_rut);

  }
}

```
