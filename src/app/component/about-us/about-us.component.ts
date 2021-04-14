import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  showDiv: number = 1

  TeamMembers  = [
    {
      profileImage:'/assets/joseph.jpg',
      name:'Eric Djoukeng, MBA',
      occuption:'President and Owner',
      description: 'Managing Partner: With over 15 years in corporate finance, Eric Djoukeng has developed over the years the business acumen to help propel Tac-Tac Transportation to the help of Supply Chain consultancy industry.'
    },
    {
      profileImage:'/assets/michael.jpg',
      name:'Stephane Feumba',
      occuption:'Managing Partner',
      description: 'Over 30 years of experience and success in all areas of Operations, Sales, Customer Service, Administration and Compliance. Held Senior positions in transportation over the last 25 years. Joined Metropolitan as EVP in January 2008.'
    },
    {
      profileImage:'/assets/matthew.jpg',
      name:'Daniel Minoue',
      occuption:'Managing Partner',
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
