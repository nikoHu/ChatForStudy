import { Component } from '@angular/core';
import { Chat } from '../chat/chat.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [Chat],
  template: `
    <div class="flex h-full flex-col items-center">
      <div class="my-2 font-lato text-2xl font-bold sm:my-5">Welcome.</div>
      <chat class="h-[95%] w-[95%] rounded-lg border shadow-md sm:h-[90%] sm:w-[60%]"></chat>
    </div>
  `,
})
export class Home {}
