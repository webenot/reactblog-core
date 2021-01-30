import { ClassType } from '../class.type';
import { Container } from '../container';

export function Injectable(target: ClassType | any) {
  Container.add(target);
}
