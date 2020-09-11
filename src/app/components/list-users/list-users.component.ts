import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from 'src/app/service/users-service.service';
import { user } from 'src/app/Model/user';
import { data } from 'jquery';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private usersService: UsersServiceService,
              private router: Router) { }

  users: user[]=[]
  dtTrigger: Subject<any> = new Subject();


  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.usersService.getAll().subscribe(
      data=>{
        this.users = data
        this.dtTrigger.next()
      }
    )
  }
  deleteUser(id: number){
    this.usersService.delete(id).subscribe(
      data=>{
       
          $('#tusers').DataTable().destroy()
          this.getUsers()
        
      }
    )
  }


}
