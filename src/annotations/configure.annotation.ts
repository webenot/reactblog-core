import { Container, CONTAINER_CONTEXT } from '../container';

export function configure (target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const originalTarget = Reflect.getMetadata(
    'design:returntype',
    target.constructor.prototype,
    propertyName,
  );
  const value = descriptor.value;
  descriptor.value = function () {
    return this[CONTAINER_CONTEXT].get(originalTarget);
  }
  Container.set(originalTarget, value);
}
