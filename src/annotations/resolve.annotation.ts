import { CONTAINER_CONTEXT, Container } from '../container';

export function resolve(target: any, propertyName: string) {

  const original = Reflect.getMetadata('design:type', target.constructor.prototype, propertyName);

  const $resolve = Reflect.getMetadata('resolve', target.constructor) || [];
  $resolve.push([propertyName, original]);

  Reflect.defineMetadata('resolve', $resolve, target.constructor);

  Object.defineProperty(target.constructor.prototype, propertyName, {
    get() {
      if (this.context && this.context instanceof Container) {
        return this.context.get(original);
      }
      return this[CONTAINER_CONTEXT].get(original)
    }
  });
}
