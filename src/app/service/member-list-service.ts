import { Injectable } from "@angular/core";
import { Tables } from "../model/member-list-model";

@Injectable()


export class MemberListService {
  private  tables: Tables[] = [
        {
            imagesrc : './assets/avatar/women.png',
            fullname: 'معصومه حیدری',
            studentid: '9812302458',
            personalid: '0087962410',
            major: 'مهندسی مواد و صنایع',
            section: 'کارشناسی',
            term : '4',
            star: '428'
        },
        {
            imagesrc : './assets/avatar/avatar-370-456322.webp',
            fullname: 'حمیدرضا اکبرزاده',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کارشناسی ارشد',
            term : '2',
            star: '200'
        },
        {
            imagesrc : './assets/avatar/default_avatar.png',
            fullname: 'کاظم محمودی',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        },
        {
            imagesrc : './assets/avatar/avatar-370-456322.webp',
            fullname: 'احمدرضا عابدینی',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        },
        {
            imagesrc : './assets/avatar/images.png',
            fullname: 'قدرت اله میاندویی اصل',
            studentid: '9812306789',
            personalid: '5059325764',
            major: 'مهندسی کامپیوتر',
            section: 'کاردانی',
            term : '1',
            star: '820'
        },
    ]

  getTables(){
    return this.tables.slice()
  }
}


