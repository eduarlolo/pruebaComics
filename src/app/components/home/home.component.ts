import { Component, OnInit } from "@angular/core";
import { ComicsService } from "src/app/services/comics.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
const TELEFONO_REGEXT = /^\d*$/;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  form: FormGroup;
  public starts = 0;
  public datos: any = [];
  constructor(private servicioComis: ComicsService, private fb: FormBuilder) {
    this.servicioComis.consumirComic("614").subscribe((resp) => {
      this.datos = resp;
      console.log(this.datos);
    });
  }

  ngOnInit() {
    this.crearForm();
  }
  crearForm() {
    this.form = this.fb.group({
      idComic: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern(TELEFONO_REGEXT),
        ]),
      ],
    });
  }
  buscar() {
    var id = this.form.get("idComic").value;
    console.log(id);
    this.servicioComis.consumirComic(id).subscribe((resp) => {
      this.datos = resp;
      console.log(this.datos);
    });
  }
}
