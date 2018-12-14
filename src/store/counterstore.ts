import { observable, action } from "mobx";

export default class CounterStore {
  @observable public counter = 0;

  @action
  increment = () => {
    this.counter = this.counter + 1;
  };

  @action
  decrement = () => {
    this.counter = this.counter - 1;
  };
}
