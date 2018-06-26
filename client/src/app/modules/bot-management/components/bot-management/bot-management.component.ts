import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SelectivePreloadingStrategy} from "../../../../selective-preloading-strategy";

@Component({
  selector: 'app-bot-management',
  templateUrl: './bot-management.component.html',
  styleUrls: ['./bot-management.component.css']
})
export class BotManagementComponent implements OnInit {
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy
  ) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
  }

}
