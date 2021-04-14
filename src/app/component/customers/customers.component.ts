import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  showDiv: number = 1

  TeamMembers  = [
    {
      profileImage:'/assets/joseph.jpg',
      name:'Joseph Mangino Jr',
      occuption:'President and Owner',
      description: 'Part of a successful family business for his entire career. Experienced in all aspects of the business and has held senior management roles over 20 years.'
    },
    {
      profileImage:'/assets/michael.jpg',
      name:'Michael A. Maiore',
      occuption:'Chief Operating Officer',
      description: 'Over 30 years of experience and success in all areas of Operations, Sales, Customer Service, Administration and Compliance. Held Senior positions in transportation over the last 25 years. Joined Metropolitan as EVP in January 2008.'
    },
    {
      profileImage:'/assets/matthew.jpg',
      name:'Matthew Sullivan',
      occuption:'Executive Vice President',
      description: 'Joined Metropolitan in January 2007 and has spent 20+ years in Transportation, accounting and finance, administration and management.'
    },
    {
      profileImage:'/assets/wayne.jpg',
      name:'Wayne Beaudry',
      occuption:'Vice President of Maintenance ',
      description: 'Over 30 years in management and maintenance experience in large scale trucking environment.'
    },
  ]
  communitys = [
    {
      image:'/assets/wreaths.png',
      name:'Wreaths Across America',
      url:'https://www.wreathsacrossamerica.org/'
    },
    {
      image:'/assets/pa.png',
      name:'PA State Police Program "Camp Cadet"',
      url:'https://www.psp.pa.gov/troop%20directory/Pages/Troop-N.aspx'
    },
    {
      image:'/assets/columbia.png',
      name:'Columbia County Area Home on Aging',
      url:'https://www.agingcare.com/local/columbia-montour-aging-office-inc-bloomsburg-area-agency-on-aging-pa'
    },
    {
      image:'/assets/women.png',
      name:'Women Center Inc.',
      url:'http://thewomenscenterinc.org/'
    }, {
      image:'/assets/truckers.png',
      name:'Truckers against Trafficking',
      url:'https://truckersagainsttrafficking.org/'
    }, {
      image:'/assets/agape.png',
      name:'Agape, Love from Above to Our Community',
      url:'https://www.agapelovefromabove.org/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }
  showDIV(num) {
    this.showDiv = num
  }

}
