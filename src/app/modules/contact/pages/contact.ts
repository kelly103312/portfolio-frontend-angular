import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

interface SocialLink {
    label: string;
    url: string;
    icon: string;
    username: string;
}

@Component({
    selector: 'app-contact-page',
    standalone: true,
    imports: [CommonModule, ButtonModule],
    templateUrl: './contact.html',
    styleUrl: './contact.css'
})
export class ContactPage {
    socials: SocialLink[] = [
        {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/kelly-quintana-157380143/',
            icon: 'pi pi-linkedin',
            username: '/in/kelly-quintana'
        },
        {
            label: 'GitHub',
            url: 'https://github.com/kelly103312',
            icon: 'pi pi-github',
            username: '@kelly103312'
        },
        {
            label: 'Email',
            url: 'mailto:kelly.quintana.v@gmail.com',
            icon: 'pi pi-envelope',
            username: 'kelly.quintana.v@gmail.com'
        }
    ];

    open(url: string): void {
        window.open(url, '_blank');
    }
}
