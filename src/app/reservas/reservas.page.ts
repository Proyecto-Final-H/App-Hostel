import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  datosReserva;
  id_Reserva;
  constructor(private http: HttpClient, private router: Router) {}

  public contenidoArray: any = null;
  public contenidoArrayHuesped: any = null;
  public contenidoArrayHabitacion: any = null;
  //url = environment.urlServidor;

  ngOnInit() {
    this.listarReservas();
  }
  listarReservas() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json;profile=urn:org.apache.isis/v1',
        Authorization: 'Basic c3ZlbjpwYXNz',
      }),
    };
    const URL =
    'http://localhost:8080/restful/services/simple.SimpleReservaMenu/actions/listAll/invoke';
   //   'http://localhost:8080/restful/services/simple.SimpleReservaMenu/actions/listAll/invoke';
    this.http.get(URL, httpOptions).subscribe((resultados: Array<any>) => {
      var array = resultados;
      array.pop();
      this.contenidoArray = array;
    });
  }
  obtieneReserva(idReserva) {
    console.log(idReserva);
    this.router.navigate(['/reserva-detalle', { id_Reserva: idReserva }]);
  }
}
