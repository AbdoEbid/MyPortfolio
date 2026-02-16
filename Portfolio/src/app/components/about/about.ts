import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
interface PersonalInfo {
  label: string;
  value: string;
  icon: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.css'],
  imports:[CommonModule]
})
export class AboutComponent implements OnInit {
  emailUrl: string = 'https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmanebid19@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Abdelrahman,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A';
  personalInfo: PersonalInfo[] = [
    {
      label: 'Name',
      value: 'Abdelrahman Obeid',
      icon: 'fas fa-user'
    },
    {
      label: 'Location',
      value: 'Jeddah, Saudi Arabia',
      icon: 'fas fa-map-marker-alt'
    },
    {
      label: 'Email',
      value: 'abdelrahmanebid19@gmail.com',
      icon: 'fas fa-envelope'
    },
    {
      label: 'Phone',
      value: '+966 54 967 6525',
      icon: 'fas fa-phone'
    },
    {
      label: 'Languages',
      value: 'Arabic (Native), English (Proficient)',
      icon: 'fas fa-language'
    },
    {
      label: 'Military Status',
      value: 'Completed (2024)',
      icon: 'fas fa-shield-alt'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'ITI Graduate',
      description: '4-month intensive Full Stack .NET development program',
      icon: 'fas fa-graduation-cap',
      color: '#3498db'
    },
    {
      title: 'Team Leader',
      description: 'Led 5-member team for Quran recitation using Ai graduation project',
      icon: 'fas fa-users',
      color: '#e74c3c'
    },
    {
      title: 'Excellence Award',
      description: 'Achieved excellent grade in graduation project',
      icon: 'fas fa-trophy',
      color: '#f39c12'
    },
    {
      title: 'FrontEnd Certified',
      description: 'Completed web FrontEnd Fundamentals training at NTI',
      icon: 'fas fa-wifi',
      color: '#9b59b6'
    }
  ];

  interests: string[] = [
    'Web Development',
    'n8n workflow',
    'Problem Solving',
    'Team Collaboration',
    'Continuous Learning'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  downloadCV(): void {
    // You can implement CV download logic here
    console.log('Download CV clicked');
    window.open('https://drive.google.com/file/d/1uVk0YjVpI9S98LmsoRk7jtCAO38GNnDS/view?usp=sharing', '_blank');
    // Example: window.open('/assets/Abdelrahman_CV.pdf', '_blank');
  }

  openEmail(): void {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=abdelrahmanebid19@gmail.com&su=Contact%20from%20Portfolio&body=Hi%20Abdelrahman,%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0A', '_blank');
  }

  openLinkedIn(): void {
    window.open('https://www.linkedin.com/in/abdelrahman-ebid19/', '_blank');
  }
}

