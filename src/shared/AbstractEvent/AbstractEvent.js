/**
 * All events fired by draggable inherit this class. You can call `cancel()` to
 * cancel a specific event or you can check if an event has been canceled by
 * calling `canceled()`.
 * @abstract
 * @class
 */
export default class AbstractEvent {
  static type = 'event';
  static cancelable = false;

  constructor(data) {
    this._canceled = false;
    this.data = data;
  }

  /**
   * Read-only type
   * @abstract
   * @return {String}
   */
  get type() {
    return this.constructor.type;
  }

  /**
   * Read-only cancelable
   * @abstract
   * @return {Boolean}
   */
  get cancelable() {
    return this.constructor.cancelable;
  }

  /**
   * Cancels the event instance
   * @abstract
   */
  cancel() {
    if (!this.cancelable) {
      throw new Error('This event is not cancelable');
    }
    this._canceled = true;
  }

  /**
   * Check if event has been canceled
   * @abstract
   * @return {Boolean}
   */
  canceled() {
    return Boolean(this._canceled);
  }
}
