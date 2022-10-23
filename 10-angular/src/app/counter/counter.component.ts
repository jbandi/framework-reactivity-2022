import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <h2>Display of Counter</h2>
      <h1>{{ count }}</h1>
      <h1>{{ name }}</h1>
      <button (click)="increment()">Increment</button>
    </div>
  `,
  styles: [],
})
export class CounterComponent {
  state = { count: 0, name: 'Jonas' };

  get name() {
    console.log('get name');
    return this.state.name;
  }

  get count() {
    console.log('get count');
    return this.state.count;
  }

  increment() {
    this.state.count++;
  }
}
