export class Car {
  constructor(model, scene, camera, controls) {
    this.model = model;
    this.scene = scene;
    this.camera = camera;
    this.controls = controls;
  }
  init() {
    // 将汽车模型加载到场景中
    this.scene.add(this.model);
  }
}

// const car = new Car(model, scene, camera, controls);
