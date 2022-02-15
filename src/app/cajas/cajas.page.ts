import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cajas',
  templateUrl: './cajas.page.html',
  styleUrls: ['./cajas.page.scss'],
})
export class CajasPage implements OnInit {
	datosCaja;
	id_Caja;
  resultadosArraytemp: any;
  constructor(private http: HttpClient, private router: Router) {}

  public contenidoArray: any = null;
  public resultadosArrayFiltrado = [];

  ngOnInit() {
    this.listarCajas();
  }
  listarCajas() {
    this.resultadosArrayFiltrado = [];
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json;profile=urn:org.apache.isis/v1',
        Authorization: 'Basic c3ZlbjpwYXNz',
      }),
    };
    // this.url +
    const URL = 'http://localhost:8080/restful/services/simple.CajaMenu/listAll/invoke'
   // 'http://localhost:8080/restful/services/caja/actions/listAll/invoke'
    //  'http://localhost:8080/restful/services/simple.CajaMenu/actions/listAll/invoke';
   //   'http://localhost:8080/restful/services/caja/actions/listAll/invoke';GET /services/simple.CajaMenu/actions/listAll/invoke
   
      this.http.get(URL, httpOptions).subscribe((resultados: Array<any>) => {
      this.contenidoArray = resultados;
      this.resultadosArraytemp = this.contenidoArray;

      this.resultadosArraytemp.pop();

      const largoArray = this.resultadosArraytemp.length;

      // for (var i = 0; i < largoArray; ) {
      //   if (this.resultadosArraytemp[i].hasOwnProperty('estado')) {
      //     if (this.resultadosArraytemp[i].estado == 'Activo') {
      //       this.resultadosArrayFiltrado.push(this.contenidoArray[i]);
      //     }
      //   }
      //   i = i + 1;
      // }

     // this.contenidoArray = this.resultadosArrayFiltrado;
     // this.contenidoArray = array;
    });
  }
  obtieneCaja(idCaja) {
    console.log(idCaja);
    this.router.navigate(['/caja-detalle', { id_Caja: idCaja }]);
  }
}
