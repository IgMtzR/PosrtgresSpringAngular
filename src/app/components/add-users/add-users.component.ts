import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/Model/user';
import { UsersServiceService } from 'src/app/service/users-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  user: user={
    userId: 0,
    name: "",
    lastname1: "",
    lastname2: "",
    email: "",
    password: ""
  }
  constructor(private usersService: UsersServiceService,
              private router: Router) { }

  ngOnInit(): void {
  }
  save(){
    this.usersService.post(this.user).subscribe(
      data =>{
        this.router.navigate(['/users'])
      }
    )
  }

}
