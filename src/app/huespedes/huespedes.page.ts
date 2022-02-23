import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-huespedes',
  templateUrl: './huespedes.page.html',
  styleUrls: ['./huespedes.page.scss'],
})
export class HuespedesPage implements OnInit {
  constructor(private http: HttpClient, private router: Router) {}

  public contenidoArray: any = null;

  ngOnInit() {
    this.listarHuespedes();
  }
  listarHuespedes() {
    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json;profile=urn:org.apache.isis/v1',
        Authorization: 'Basic c3ZlbjpwYXNz',
      }),
    };
    const URL =
      'http://localhost:8080/restful/services/simple.HuespedMenu/actions/listAll/invoke';
    this.http.get(URL, httpOptions).subscribe((resultados: Array<any>) => {
      var array = resultados;
      array.pop();
      this.contenidoArray = array;
    });
  }
  obtieneHuesped(idHuesped) {
    console.log(idHuesped);
    this.router.navigate(['/huesped-detalle', { id_Huespedo: idHuesped }]);
  }
}
