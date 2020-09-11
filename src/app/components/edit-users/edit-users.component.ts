import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from 'src/app/service/users-service.service';
import { user } from 'src/app/Model/user';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {

  idUser = null
  user : user={
    userId: 0,
    name: "",
    lastname1: "",
    lastname2: "",
    email: "",
    password: ""
  };

  constructor(private route: ActivatedRoute,
              private usersService: UsersServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.usersService.get(this.idUser).subscribe(
      data=>{
        this.user = data
      }
    )
  }
  save(){
    this.usersService.update(this.idUser, this.user).subscribe(
      data =>{
        this.user= data
        this.router.navigate(['/users'])
      }
    )
  }

}
