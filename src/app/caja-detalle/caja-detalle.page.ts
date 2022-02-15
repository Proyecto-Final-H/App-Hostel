import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-caja-detalle',
  templateUrl: './caja-detalle.page.html',
  styleUrls: ['./caja-detalle.page.scss'],
})
export class CajaDetallePage{
  id;
 // idPlanilla;
 // datosReclamo;
  idCaja;
  caja: any;
  param: any;
  resultadosArraytemp: any;
  url = environment.production;
  
  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  
  
  public contenidoArray: any = null;
  public resultadosArrayFiltrado = [];
  
  ngOnInit() {
    this.param = this.activatedRoute.snapshot.params;
    if (Object.keys(this.param).length) {
      this.detallarCaja(this.param.id_Caja);
    }
  }


    detallarCaja(id_Caja) {
      const httpOptions = {
        headers: new HttpHeaders({
          Accept: 'application/json;profile=urn:org.apache.isis/v1',
          Authorization: 'Basic c3ZlbjpwYXNz',
        }),
      };
      const URL = this.url+'/restful/objects/simple.Caja/' + id_Caja + '/collections/reclamosAsignados';
      this.http.get(URL, httpOptions).subscribe((cajas: Array<any>) =>  {
        var array = cajas;
        array.pop();
        this.contenidoArray = array;
        this.resultadosArraytemp = this.contenidoArray;
    
        const largoArray = this.resultadosArraytemp.length;
  
        for (var i = 0; i < largoArray; ) {
          if (this.resultadosArraytemp[i].hasOwnProperty('estado')) {
            if (this.resultadosArraytemp[i].estado != 'Cerrado' && this.resultadosArraytemp[i].estado != 'Anulado') {
              this.resultadosArrayFiltrado.push(this.contenidoArray[i]);
            }
          }
          i = i + 1;
        }
        this.resultadosArrayFiltrado.sort(((a, b) => a.nroReclamo - b.nroReclamo));
        this.contenidoArray = this.resultadosArrayFiltrado;
      });
    }


    cargarPlanilla(id) {
      console.log("ingresando a cargarPlanilla " + id);
      this.router.navigate(['/crear-planilla', { idReclamo: id }]);
    }

    obtenerPlanilla(idPlanilla) {
      console.log("ingresando a obtenerPlanilla " + idPlanilla);
      this.router.navigate(['/planilla', { id: idPlanilla }]);
    }
   
  }