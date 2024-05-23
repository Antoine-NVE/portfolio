import { Component, OnInit } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-project',
    standalone: true,
    imports: [CommonModule, RouterLink],
    templateUrl: './project.component.html',
    styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
    public project!: Project;

    constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) {}

    ngOnInit(): void {
        const slug: string = this.route.snapshot.paramMap.get('slug')!;

        this.projectService.getProjects().subscribe((projects: Project[]) => {
            this.project = projects.find((project) => project.slug === slug)!;

            if (this.project === undefined) {
                this.router.navigate(['']);
            }
        });
    }
}
