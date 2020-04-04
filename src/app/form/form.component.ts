import { Component, OnInit } from "@angular/core";
import { FormService } from "../formservice/form.service";
@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
})
export class FormComponent implements OnInit {
  selectedairlines = [
    {
      name: "Indigo",
      isselected: false,
    },
    {
      name: "SpiceJet",
      isselected: false,
    },
  ];

  thedata: any = {
    AdultCount: "",
    ChildCount: "",
    InfantCount: "",
    JourneyType: "",
    PreferredAirlines: [],
    CabinClass: "",
    Segments: [
      {
        Origin: "",
        Destination: "",
        DepartureDate: "",
      },
    ],
  };
  constructor(private _service: FormService) {}

  ngOnInit() {}
  submit() {
    for (var i = 0; i < this.selectedairlines.length; i++) {
      if (this.selectedairlines[i].isselected) {
        this.thedata.PreferredAirlines.push(this.selectedairlines[i].name);
      }
    }
    this._service.sendFormData(this.thedata).subscribe(
      (res) => console.log("Sucess", res),
      (error) => console.log("Error:", error)
    );
    this.thedata.PreferredAirlines = [];
  }
}
