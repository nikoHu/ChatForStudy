import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { GlobalStateService } from './services/global-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="flex h-screen w-screen flex-col">
      <div class="navbar h-[5%] border-b bg-black/5">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabindex="0"
            class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow *:text-base *:font-bold"
          >
            <li><a routerLink="/home">主页</a></li>
            <li><a>工作室</a></li>
            <li><a>知识库</a></li>
          </ul>
        </div>
        <a
          class="ml-5 mr-10 cursor-pointer bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text font-lato text-3xl font-extrabold text-transparent antialiased transition-shadow duration-300 hover:from-blue-600 hover:to-blue-400"
        >
          LocalChat
        </a>
        <div class="navbar-start hidden lg:flex">
          <ul class="menu menu-horizontal p-0 *:text-base *:font-bold">
            <li><a routerLink="/home">主页</a></li>
            <li><a>工作室</a></li>
            <li><a>知识库</a></li>
          </ul>
        </div>
      </div>
      <div class="h-[90%]">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'ChatBot';

  isOpen = false;

  constructor(private globalStateService: GlobalStateService) {
    this.globalStateService.isOpen$.subscribe((state: boolean) => {
      this.isOpen = state;
    });
  }

  setIsOpen() {
    this.globalStateService.setIsOpen();
  }
}
