export class CustomerModel {

  public servicetype: string;
  public name: string;
  public flatno: string;
  public mobile: number;
  public description: string;
  public status: string;



constructor(servicetype: string,
   name: string,
    flatno: string,
    mobile: number,
     description: string,
     status: string
) {
this.servicetype = servicetype;
this.name = name;
this.flatno  = flatno;
this.mobile = mobile;
this.description = description;
this.status = status;
}


}
