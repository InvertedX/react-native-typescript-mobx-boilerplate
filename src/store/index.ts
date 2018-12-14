import CounterStore from "./counterstore";

class StoreRoot {
  public counterStore = new CounterStore();
}

export default new StoreRoot();
