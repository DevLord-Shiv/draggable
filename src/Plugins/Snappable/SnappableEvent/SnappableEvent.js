import AbstractEvent from 'shared/AbstractEvent';

export class SnapEvent extends AbstractEvent {
  get dragEvent() {
    return this.data.dragEvent;
  }
}

export class SnapInEvent extends SnapEvent {
  static type = 'snap:in';
  static cancelable = true;
}

export class SnapOutEvent extends SnapEvent {
  static type = 'snap:out';
  static cancelable = true;
}
